import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { amount, model, condition, referralCode } = await req.json();

    if (!amount || !model) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const YOCO_SECRET_KEY = Deno.env.get('YOCO_SECRET_KEY');
    if (!YOCO_SECRET_KEY) {
      return new Response(JSON.stringify({ error: 'Yoco not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Get the user from auth header
    const authHeader = req.headers.get('authorization');
    let userId: string | null = null;

    if (authHeader) {
      const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
      const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY')!;
      const supabase = createClient(supabaseUrl, supabaseKey, {
        global: { headers: { Authorization: authHeader } },
      });
      const { data: { user } } = await supabase.auth.getUser();
      userId = user?.id || null;

      // If there's a referral code and a logged-in user, create the referral record
      if (referralCode && userId) {
        const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
        const adminClient = createClient(supabaseUrl, serviceKey);

        // Look up the referral code
        const { data: refCode } = await adminClient
          .from('referral_codes')
          .select('id, user_id')
          .eq('code', referralCode)
          .maybeSingle();

        // Don't allow self-referral
        if (refCode && refCode.user_id !== userId) {
          const eligibleAt = new Date();
          eligibleAt.setDate(eligibleAt.getDate() + 7);

          await adminClient.from('referrals').insert({
            referrer_id: refCode.id,
            referred_user_id: userId,
            commission_amount: 500,
            status: 'pending',
            eligible_at: eligibleAt.toISOString(),
          });
        }
      }
    }

    const origin = req.headers.get('origin') || 'https://skiphones.lovable.app';

    const response = await fetch('https://payments.yoco.com/api/checkouts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${YOCO_SECRET_KEY}`,
      },
      body: JSON.stringify({
        amount: amount * 100,
        currency: 'ZAR',
        successUrl: `${origin}?payment=success`,
        cancelUrl: `${origin}?payment=cancelled`,
        failureUrl: `${origin}?payment=failed`,
        metadata: {
          model,
          condition,
          referralCode: referralCode || null,
          userId: userId || null,
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Yoco error:', data);
      return new Response(JSON.stringify({ error: 'Payment creation failed', details: data }), {
        status: response.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ redirectUrl: data.redirectUrl, id: data.id }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
