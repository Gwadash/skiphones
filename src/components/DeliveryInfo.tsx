import { Truck, Clock, MapPin, MessageCircle, Phone } from "lucide-react";

const DeliveryInfo = () => {
  return (
    <section className="py-16 md:py-24 bg-card relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">
            We Deliver <span className="text-gradient-gold">Nationwide</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Order now and get same day delivery
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mb-14">
          {[
            { icon: Truck, title: "Fast Delivery", desc: "Same day dispatch", emoji: "🚚" },
            { icon: Clock, title: "Quick Response", desc: "Reply in minutes", emoji: "⚡" },
            { icon: MapPin, title: "Nationwide", desc: "All 9 provinces", emoji: "📍" },
            { icon: MessageCircle, title: "WhatsApp", desc: "Easy ordering", emoji: "💬" },
          ].map(({ title, desc, emoji }) => (
            <div key={title} className="card-shine bg-gradient-card border border-border/60 hover:border-primary/30 rounded-xl p-4 md:p-5 text-center transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl md:text-3xl mb-3">{emoji}</div>
              <h3 className="text-foreground font-bold text-sm mb-1">{title}</h3>
              <p className="text-muted-foreground text-xs">{desc}</p>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-gradient-primary p-8 md:p-10 text-center shadow-lg">
          <div className="absolute inset-0 bg-gradient-shine pointer-events-none" />
          <h3 className="text-2xl md:text-3xl font-black text-primary-foreground mb-4 relative z-10">
            Ready to Order?
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a href="tel:0606945132" className="flex items-center gap-2 text-primary-foreground font-bold text-lg hover:opacity-80 transition-opacity">
              <Phone className="h-5 w-5" />
              060 694 5132
            </a>
            <span className="hidden sm:block text-primary-foreground/40">|</span>
            <a href="https://wa.me/27606945132" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground font-bold text-lg hover:opacity-80 transition-opacity">
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>
          <p className="text-primary-foreground/60 text-sm mt-3 relative z-10">Order now and get same day delivery</p>
        </div>
      </div>
    </section>
  );
};

export default DeliveryInfo;
