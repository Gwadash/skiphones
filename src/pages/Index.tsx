import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import DeliveryInfo from "@/components/DeliveryInfo";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useReferralCapture } from "@/hooks/useReferral";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductSection />
      <DeliveryInfo />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
