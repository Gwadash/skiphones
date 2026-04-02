import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Package, Loader2 } from "lucide-react";
import Header from "@/components/Header";
import type { Tables } from "@/integrations/supabase/types";

type Order = Tables<"orders">;

const MyOrders = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      navigate("/auth");
      return;
    }

    const fetchOrders = async () => {
      // First get customer record
      const { data: customer } = await supabase
        .from("customers")
        .select("id")
        .eq("auth_uid", user.id)
        .maybeSingle();

      if (customer) {
        const { data } = await supabase
          .from("orders")
          .select("*")
          .eq("customer_id", customer.id)
          .order("created_at", { ascending: false });
        setOrders(data || []);
      }
      setLoading(false);
    };

    fetchOrders();
  }, [user, authLoading, navigate]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid": return "bg-green-500/10 text-green-500 border-green-500/20";
      case "pending": return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "failed": return "bg-red-500/10 text-red-500 border-red-500/20";
      default: return "bg-muted text-muted-foreground border-border";
    }
  };

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
        <div className="flex items-center gap-3 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-black text-foreground">My Orders</h1>
        </div>

        {orders.length === 0 ? (
          <div className="text-center py-16">
            <Package className="h-16 w-16 mx-auto text-muted-foreground/40 mb-4" />
            <h2 className="text-lg font-semibold text-foreground mb-1">No orders yet</h2>
            <p className="text-muted-foreground text-sm mb-6">Your orders will appear here after you make a purchase.</p>
            <Button onClick={() => navigate("/")} className="bg-[#0060E0] hover:bg-[#004BB5] text-white">
              Browse iPhones
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            {orders.map((order) => {
              const meta = order.metadata as Record<string, string> | null;
              return (
                <div key={order.id} className="bg-card border border-border rounded-xl p-4 md:p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-foreground">
                        {meta?.model || "iPhone Order"}
                      </h3>
                      <p className="text-xs text-muted-foreground capitalize">
                        {meta?.condition === "brand-new" ? "Brand New" : meta?.condition || ""}
                      </p>
                    </div>
                    <span className={`text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-md border ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/40">
                    <span className="text-xl font-black text-gradient-gold">
                      R{order.total_amount.toLocaleString()}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(order.created_at).toLocaleDateString("en-ZA", {
                        day: "numeric", month: "short", year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
