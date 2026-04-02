
-- Referral codes table
CREATE TABLE public.referral_codes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  code TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.referral_codes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own referral code"
ON public.referral_codes FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own referral code"
ON public.referral_codes FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Referrals tracking table
CREATE TABLE public.referrals (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  referrer_id UUID NOT NULL REFERENCES public.referral_codes(id) ON DELETE CASCADE,
  referred_user_id UUID NOT NULL,
  order_id UUID REFERENCES public.orders(id),
  commission_amount INTEGER NOT NULL DEFAULT 500,
  status TEXT NOT NULL DEFAULT 'pending',
  eligible_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.referrals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Referrers can view their own referrals"
ON public.referrals FOR SELECT
TO authenticated
USING (referrer_id IN (
  SELECT id FROM public.referral_codes WHERE user_id = auth.uid()
));

CREATE POLICY "System can insert referrals"
ON public.referrals FOR INSERT
TO authenticated
WITH CHECK (true);

-- Trigger for updated_at
CREATE TRIGGER update_referrals_updated_at
BEFORE UPDATE ON public.referrals
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
