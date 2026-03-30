import { Button } from "@/components/ui/button";
import { CreditCard, Loader2 } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface ProductCardProps {
  model: string;
  price: number;
  condition: "brand-new" | "pre-owned";
  image?: string;
}

const ProductCard = ({ model, price, condition, image }: ProductCardProps) => {
  const [loading, setLoading] = useState(false);

  const handleOrder = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('create-yoco-checkout', {
        body: { amount: price, model, condition },
      });

      if (error) throw error;
      if (data?.redirectUrl) {
        window.location.href = data.redirectUrl;
      } else {
        throw new Error('No redirect URL received');
      }
    } catch (err: any) {
      console.error('Payment error:', err);
      toast.error('Could not start payment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card-shine bg-gradient-card border border-border/60 hover:border-primary/40 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-hover w-full h-full flex flex-col group">
      {image ? (
        <div className="w-full h-60 overflow-hidden rounded-t-xl bg-white flex items-center justify-center">
          <img
            src={image}
            alt={model}
            className="max-h-full max-w-full object-contain"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="w-full h-60 bg-slate-900 rounded-t-xl flex items-center justify-center text-sm text-slate-400">
          Image coming soon
        </div>
      )}
      <div className="p-4 md:p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <span className={`text-[10px] md:text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-md ${
            condition === "brand-new" 
              ? "bg-primary/10 text-primary border border-primary/20" 
              : "bg-secondary text-muted-foreground border border-border"
          }`}>
            {condition === "brand-new" ? "✦ New" : "Pre-Owned"}
          </span>
        </div>
        
        <h3 className="text-base md:text-lg font-bold text-foreground mb-1 font-sans leading-snug">
          {model}
        </h3>
        
        <div className="mt-auto pt-3 space-y-3 border-t border-border/40">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl md:text-3xl font-black text-gradient-gold">
              R{price.toLocaleString()}
            </span>
          </div>
          
          <Button 
            onClick={handleOrder}
            disabled={loading}
            className="bg-[#0060E0] hover:bg-[#004BB5] text-white rounded-lg transition-all duration-300 w-full font-semibold text-xs md:text-sm shadow-md hover:shadow-lg group-hover:shadow-[#0060E0]/20"
          >
            {loading ? (
              <Loader2 className="h-3.5 w-3.5 mr-1 animate-spin" />
            ) : (
              <CreditCard className="h-3.5 w-3.5 mr-1 md:mr-2 shrink-0" />
            )}
            <span className="hidden md:inline">{loading ? 'Processing...' : 'Pay Now'}</span>
            <span className="md:hidden">{loading ? '...' : 'Pay'}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;