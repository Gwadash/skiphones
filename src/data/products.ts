export interface Product {
  id: string;
  model: string;
  price: number;
  condition: "brand-new" | "pre-owned";
  image?: string;
}

export const brandNewProducts: Product[] = [
  { id: "bn1", model: "iPhone XR", price: 3000, condition: "brand-new", image: "/lovable-uploads/c16f4f49-c799-4c19-acdb-5e25d8f042f8.png" },
  { id: "bn2", model: "iPhone 11", price: 4200, condition: "brand-new", image: "/lovable-uploads/7c5544b8-af91-4224-9d62-46067b2c070f.png" },
  { id: "bn3", model: "iPhone 12", price: 6300, condition: "brand-new", image: "/__l5e/assets-v1/039b5127-c985-40cf-93ba-a00b9d54d696/iphone-12-white.jpg" },
  { id: "bn4", model: "iPhone 13", price: 7900, condition: "brand-new", image: "/lovable-uploads/ffbd6bb9-f1bb-49f2-88db-18145465fdd0.png" },
  { id: "bn5", model: "iPhone 13 Pro", price: 8600, condition: "brand-new", image: "/lovable-uploads/c3a1f61e-6476-46ff-b5b7-f0dc3cb55c1e.png" },
  { id: "bn6", model: "iPhone 13 Pro Max", price: 9800, condition: "brand-new", image: "/__l5e/assets-v1/08b63ce6-3ceb-425f-8cde-dd98bdc902ad/iphone-13-pro-max-graphite.jpg" },
  { id: "bn7", model: "iPhone 14", price: 8700, condition: "brand-new", image: "/lovable-uploads/15778401-8141-4ff2-a54a-6b6073be207b.png" },
  { id: "bn8", model: "iPhone 14 Pro", price: 9300, condition: "brand-new", image: "/lovable-uploads/a10b91da-93d8-4ba5-b455-98e50878cc47.png" },
  { id: "bn9", model: "iPhone 14 Pro Max", price: 10600, condition: "brand-new", image: "/lovable-uploads/91426426-f886-473c-bdfd-4226031b0d81.png" },
  { id: "bn10", model: "iPhone 15", price: 11000, condition: "brand-new", image: "/__l5e/assets-v1/54999de3-eb6a-4692-b0ab-07c5dc090005/iphone-15.png" },
  { id: "bn11", model: "iPhone 15 Pro", price: 12400, condition: "brand-new", image: "/lovable-uploads/iPhone_15_Pro_Blue_Titanium_Pure_Back_iPhone_15_Pro_Blue_Tit-1.webp" },
  { id: "bn12", model: "iPhone 15 Pro Max", price: 13700, condition: "brand-new", image: "/lovable-uploads/bc14a16d-e0dd-426f-84b0-2f1a4fe4f0e4.png" },
  { id: "bn13", model: "iPhone 16", price: 14300, condition: "brand-new", image: "/__l5e/assets-v1/3a39dfd9-3644-4252-b176-dcc66b9c3083/iphone-16.png" },
  { id: "bn14", model: "iPhone 17", price: 15000, condition: "brand-new", image: "/__l5e/assets-v1/d85ed835-3874-4ef6-b804-6c5abe003a3e/iphone-17.png" },
  { id: "bn15", model: "iPhone 17 Pro", price: 18200, condition: "brand-new", image: "/__l5e/assets-v1/6de03824-1cd0-4853-bce1-b561bc91b8b3/iphone-17-pro.png" },
  { id: "bn16", model: "iPhone 17 Pro Max", price: 23000, condition: "brand-new", image: "/__l5e/assets-v1/ef9ff47b-5c9d-4f03-a488-4759d4b67256/iphone-17-pro-max.png" },
];

export const preOwnedProducts: Product[] = [
  { id: "po1", model: "iPhone XR", price: 2200, condition: "pre-owned", image: "/lovable-uploads/c16f4f49-c799-4c19-acdb-5e25d8f042f8.png" },
  { id: "po2", model: "iPhone 11", price: 3200, condition: "pre-owned", image: "/lovable-uploads/7c5544b8-af91-4224-9d62-46067b2c070f.png" },
  { id: "po3", model: "iPhone 12", price: 5600, condition: "pre-owned", image: "/__l5e/assets-v1/039b5127-c985-40cf-93ba-a00b9d54d696/iphone-12-white.jpg" },
  { id: "po4", model: "iPhone 13", price: 6800, condition: "pre-owned", image: "/lovable-uploads/ffbd6bb9-f1bb-49f2-88db-18145465fdd0.png" },
  { id: "po5", model: "iPhone 13 Pro", price: 7900, condition: "pre-owned", image: "/lovable-uploads/c3a1f61e-6476-46ff-b5b7-f0dc3cb55c1e.png" },
  { id: "po6", model: "iPhone 13 Pro Max", price: 8950, condition: "pre-owned", image: "/__l5e/assets-v1/08b63ce6-3ceb-425f-8cde-dd98bdc902ad/iphone-13-pro-max-graphite.jpg" },
  { id: "po7", model: "iPhone 14", price: 7700, condition: "pre-owned", image: "/lovable-uploads/15778401-8141-4ff2-a54a-6b6073be207b.png" },
  { id: "po8", model: "iPhone 14 Pro", price: 8500, condition: "pre-owned", image: "/lovable-uploads/a10b91da-93d8-4ba5-b455-98e50878cc47.png" },
  { id: "po9", model: "iPhone 14 Pro Max", price: 9500, condition: "pre-owned", image: "/lovable-uploads/91426426-f886-473c-bdfd-4226031b0d81.png" },
  { id: "po10", model: "iPhone 15", price: 10100, condition: "pre-owned", image: "/__l5e/assets-v1/54999de3-eb6a-4692-b0ab-07c5dc090005/iphone-15.png" },
  { id: "po11", model: "iPhone 15 Pro", price: 11000, condition: "pre-owned", image: "/lovable-uploads/iPhone_15_Pro_Blue_Titanium_Pure_Back_iPhone_15_Pro_Blue_Tit-1.webp" },
  { id: "po12", model: "iPhone 15 Pro Max", price: 12000, condition: "pre-owned", image: "/lovable-uploads/bc14a16d-e0dd-426f-84b0-2f1a4fe4f0e4.png" },
  { id: "po13", model: "iPhone 16", price: 12300, condition: "pre-owned", image: "/__l5e/assets-v1/3a39dfd9-3644-4252-b176-dcc66b9c3083/iphone-16.png" },
  { id: "po14", model: "iPhone 17", price: 14700, condition: "pre-owned", image: "/__l5e/assets-v1/d85ed835-3874-4ef6-b804-6c5abe003a3e/iphone-17.png" },
  { id: "po15", model: "iPhone 17 Pro", price: 15200, condition: "pre-owned", image: "/__l5e/assets-v1/6de03824-1cd0-4853-bce1-b561bc91b8b3/iphone-17-pro.png" },
  { id: "po16", model: "iPhone 17 Pro Max", price: 18000, condition: "pre-owned", image: "/__l5e/assets-v1/ef9ff47b-5c9d-4f03-a488-4759d4b67256/iphone-17-pro-max.png" },
];
