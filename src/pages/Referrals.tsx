import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Copy, Share2, Loader2, CheckCircle, Clock, Banknote } from "lucide-react";

interface Referral {
  id: string;
  commission_amount: number;
  status: string;
  eligible_at: string | null;
  created_at: string;
}

const Referrals = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (!user) return;

    const fetchOrCreateCode = async () => {
      // Try to get existing code
      const { data: existing } = await supabase
        .from("referral_codes")
        .select("code, id")
        .eq("user_id", user.id)
        .maybeSingle();

      if (existing) {
        setReferralCode(existing.code);
        // Fetch referrals
        const { data: refs } = await supabase
          .from("referrals")
          .select("id, commission_amount, status, eligible_at, created_at")
          .eq("referrer_id", existing.id)
          .order("created_at", { ascending: false });
        setReferrals(refs || []);
      } else {
        // Generate a unique code
        const code = user.id.slice(0, 8).toUpperCase();
        const { error } = await supabase
          .from("referral_codes")
          .insert({ user_id: user.id, code });
        if (!error) {
          setReferralCode(code);
        }
      }
      setLoading(false);
    };

    fetchOrCreateCode();
  }, [user]);

  const referralLink = referralCode
    ? `${window.location.origin}?ref=${referralCode}`
    : "";

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink);
    toast.success("Referral link copied!");
  };

  const shareLink = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "SK Iphones",
        text: "Check out SK Iphones for the best iPhone deals! Use my referral link:",
        url: referralLink,
      });
    } else {
      copyLink();
    }
  };

  const totalEarned = referrals
    .filter((r) => r.status === "paid")
    .reduce((sum, r) => sum + r.commission_amount, 0);

  const totalPending = referrals
    .filter((r) => r.status === "pending" || r.status === "eligible")
    .reduce((sum, r) => sum + r.commission_amount, 0);

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <h1 className="text-2xl md:text-3xl font-black text-foreground mb-2">
          Refer & Earn
        </h1>
        <p className="text-muted-foreground mb-6">
          Share your referral link and earn <span className="text-primary font-bold">R500</span> for every person who buys through it. Commission is payable 1 week after the buyer receives their order — contact us on WhatsApp to claim.
        </p>

        {/* Referral Link Card */}
        <div className="bg-card border border-border rounded-xl p-5 mb-6">
          <p className="text-sm font-medium text-muted-foreground mb-2">Your Referral Link</p>
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-secondary rounded-lg px-3 py-2.5 text-sm font-mono text-foreground truncate border border-border">
              {referralLink}
            </div>
            <Button size="sm" variant="outline" onClick={copyLink}>
              <Copy className="h-4 w-4" />
            </Button>
            <Button size="sm" onClick={shareLink} className="bg-[#0060E0] hover:bg-[#004BB5] text-white">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <Banknote className="h-5 w-5 mx-auto mb-1 text-green-500" />
            <p className="text-2xl font-black text-foreground">R{totalEarned.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">Total Earned</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <Clock className="h-5 w-5 mx-auto mb-1 text-primary" />
            <p className="text-2xl font-black text-foreground">R{totalPending.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">Pending</p>
          </div>
        </div>

        {/* Referral History */}
        <h2 className="text-lg font-bold text-foreground mb-3">Referral History</h2>
        {referrals.length === 0 ? (
          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <Share2 className="h-10 w-10 mx-auto mb-3 text-muted-foreground/40" />
            <p className="text-muted-foreground">No referrals yet. Share your link to start earning!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {referrals.map((ref) => (
              <div key={ref.id} className="bg-card border border-border rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">
                    R{ref.commission_amount} Commission
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(ref.created_at).toLocaleDateString()}
                  </p>
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                  ref.status === "paid"
                    ? "bg-green-500/10 text-green-500"
                    : ref.status === "eligible"
                    ? "bg-primary/10 text-primary"
                    : "bg-yellow-500/10 text-yellow-500"
                }`}>
                  {ref.status === "paid" ? (
                    <><CheckCircle className="h-3 w-3 inline mr-1" />Paid</>
                  ) : ref.status === "eligible" ? (
                    "Ready to Claim"
                  ) : (
                    <><Clock className="h-3 w-3 inline mr-1" />Pending</>
                  )}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* How it works */}
        <div className="mt-8 bg-card border border-border rounded-xl p-5">
          <h3 className="font-bold text-foreground mb-3">How It Works</h3>
          <ol className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="bg-primary/10 text-primary font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-xs">1</span>
              Share your unique referral link with friends
            </li>
            <li className="flex gap-2">
              <span className="bg-primary/10 text-primary font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-xs">2</span>
              They sign up and buy an iPhone through your link
            </li>
            <li className="flex gap-2">
              <span className="bg-primary/10 text-primary font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-xs">3</span>
              After 1 week of delivery, your R500 commission is ready
            </li>
            <li className="flex gap-2">
              <span className="bg-primary/10 text-primary font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-xs">4</span>
              Contact us on WhatsApp to claim your payout
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Referrals;
