import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "./ProductCard";
import { brandNewProducts, preOwnedProducts } from "@/data/products";
import { Sparkles, RefreshCw } from "lucide-react";

const ProductSection = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-background relative">
      {/* Subtle top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/15">
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">Price List</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
            <span className="text-gradient-gold">iPhone</span> Collection
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            Choose from our premium selection. All phones tested & verified.
          </p>
        </div>

        <Tabs defaultValue="brand-new" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-10 md:mb-14 max-w-sm mx-auto bg-secondary/50 border border-border/50 p-1 rounded-xl h-auto">
            <TabsTrigger 
              value="brand-new" 
              className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md font-bold rounded-lg py-2.5 text-sm transition-all flex items-center gap-1.5"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Brand New
            </TabsTrigger>
            <TabsTrigger 
              value="pre-owned"
              className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md font-bold rounded-lg py-2.5 text-sm transition-all flex items-center gap-1.5"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Pre-Owned
            </TabsTrigger>
          </TabsList>

          <TabsContent value="brand-new">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
              {brandNewProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  model={product.model}
                  price={product.price}
                  condition={product.condition}
                  image={product.image}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pre-owned">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
              {preOwnedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  model={product.model}
                  price={product.price}
                  condition={product.condition}
                  image={product.image}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductSection;
