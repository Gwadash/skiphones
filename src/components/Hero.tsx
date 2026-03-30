import { Button } from "@/components/ui/button";
import { ArrowDown, MessageCircle, Truck, Shield, Star, Zap } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/27782463563", "_blank");
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[80px]" />
      
      {/* Blue line accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        
        
        <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 border border-primary/20 rounded-full bg-primary/5 backdrop-blur-sm">
          <Star className="h-3.5 w-3.5 text-primary fill-primary" />
          <span className="text-primary text-xs font-semibold tracking-widest uppercase">
            Trusted iPhone Supplier
          </span>
          <Star className="h-3.5 w-3.5 text-primary fill-primary" />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-[1.1]">
          <span className="text-gradient-gold">SK Iphones - Quality iPhones in South Africa</span>
        </h1>
        
        <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto mb-6 leading-relaxed">
          Welcome to SK Iphones, your trusted source for brand new and pre-owned iPhones in South Africa. We offer quality Apple devices at competitive prices with reliable service.
        </p>
        <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8">
          <span className="text-primary font-bold text-sm md:text-base tracking-wide">
            2026 Price List
          </span>
        </div>
        
        <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
          Brand new & pre-owned iPhones at unbeatable prices. 
          Same day delivery nationwide.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
          <Button 
            onClick={scrollToProducts} 
            size="lg"
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 py-6 text-base font-bold rounded-xl shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
          >
            <Zap className="mr-2 h-5 w-5" />
            View Prices
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            onClick={handleWhatsApp} 
            size="lg"
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-6 text-base font-bold rounded-xl shadow-lg shadow-[#25D366]/20"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp Us
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {[
            { icon: Shield, label: "Quality Guaranteed" },
            { icon: Truck, label: "Same Day Delivery" },
            { icon: MessageCircle, label: "24/7 WhatsApp" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50">
              <Icon className="h-4 w-4 text-primary" />
              <span className="text-xs md:text-sm font-medium text-foreground/80">{label}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
