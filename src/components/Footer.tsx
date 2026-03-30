import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="SK Iphones Supplier" className="w-10 h-10 object-contain" />
              <div>
                <h3 className="text-lg font-black leading-none">
                  <span className="text-gradient-gold">SK Iphones</span>
                </h3>
                <p className="text-[10px] text-muted-foreground tracking-wider uppercase">Premium iPhones in South Africa</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
              Your trusted source for brand new and pre-owned iPhones in South Africa. Quality Apple devices at competitive prices.
            </p>
            <Button 
              onClick={() => window.open("https://wa.me/27782463563", "_blank")}
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-md"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Order on WhatsApp
            </Button>
          </div>

          <div>
            <h4 className="text-foreground font-bold mb-4 text-xs uppercase tracking-[0.2em]">Contact</h4>
            <div className="space-y-3 text-muted-foreground text-sm">
              <a href="mailto:info@skiphones.co.za" className="flex items-center gap-2.5 hover:text-primary transition-colors">
                <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>info@skiphones.co.za</span>
              </a>
              <a href="tel:0782463563" className="flex items-center gap-2.5 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 text-primary" />
                <span>078 246 3563</span>
              </a>
              <a href="https://wa.me/27606945132" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-primary transition-colors">
                <MessageCircle className="h-4 w-4 text-primary" />
                <span>WhatsApp Available</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-foreground font-bold mb-4 text-xs uppercase tracking-[0.2em]">Social Media</h4>
            <div className="space-y-3 text-muted-foreground text-sm">
              <a href="https://www.tiktok.com/@alex.iphone.plug8?_r=1&_t=ZS-952OJFb1ZQL" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-primary transition-colors">
                <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.89 2.89 2.89 0 0 1 2.88-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.48a8.27 8.27 0 0 0 4.85 1.56V7.6a4.83 4.83 0 0 1-1.09-.91z"/></svg>
                TikTok
              </a>
              <a href="https://www.facebook.com/profile.php?id=61561941696205" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-primary transition-colors">
                <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 mt-10 pt-6 text-center">
          <p className="text-muted-foreground text-xs">
            &copy; 2026 SK Iphones | Premium iPhones in South Africa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
