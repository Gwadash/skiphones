import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, User, LogOut, Package } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/27782463563", "_blank");
  };

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="SK Iphones Supplier" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
          <div>
            <h1 className="text-lg md:text-xl font-black tracking-tight leading-none">
              <span className="text-gradient-gold">SK Iphones</span>
            </h1>
            <p className="text-[10px] md:text-xs text-muted-foreground tracking-wider uppercase">Supplier</p>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <a href="tel:0782463563" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors px-2 py-1.5 rounded-lg hover:bg-secondary">
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden md:inline text-sm font-medium">078 246 3563</span>
          </a>
          
          <Button 
            onClick={handleWhatsAppClick}
            size="sm"
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-md"
          >
            <MessageCircle className="h-4 w-4 md:mr-1.5" />
            <span className="hidden md:inline">WhatsApp</span>
          </Button>

          {user ? (
            <Button
              onClick={signOut}
              size="sm"
              variant="outline"
              className="border-border text-muted-foreground hover:text-foreground"
            >
              <LogOut className="h-4 w-4 md:mr-1.5" />
              <span className="hidden md:inline">Sign Out</span>
            </Button>
          ) : (
            <Button
              onClick={() => navigate("/auth")}
              size="sm"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10"
            >
              <User className="h-4 w-4 md:mr-1.5" />
              <span className="hidden md:inline">Sign In</span>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
