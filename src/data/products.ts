export interface Product {
  id: string;
  model: string;
  price: number;
  condition: "brand-new" | "pre-owned";
  image?: string;
}

export const brandNewProducts: Product[] = [
  { id: "bn1", model: "iPhone X", price: 1800, condition: "brand-new", image: "/lovable-uploads/14b8ff94-84eb-4d5f-8808-deba2dd270ea.png" },
  { id: "bn2", model: "iPhone XR", price: 2300, condition: "brand-new", image: "/lovable-uploads/c16f4f49-c799-4c19-acdb-5e25d8f042f8.png" },
  { id: "bn3", model: "iPhone 11", price: 2800, condition: "brand-new", image: "/lovable-uploads/7c5544b8-af91-4224-9d62-46067b2c070f.png" },
  { id: "bn4", model: "iPhone 11 Pro", price: 3300, condition: "brand-new", image: "/lovable-uploads/cc8657f3-a2b9-4797-a444-8e0e0f93b75e.png" },
  { id: "bn5", model: "iPhone 11 Pro Max", price: 4000, condition: "brand-new", image: "/lovable-uploads/b2a62c05-6644-45ce-b5dd-2c3d260db58e.png" },
  { id: "bn6", model: "iPhone 12", price: 4400, condition: "brand-new", image: "/lovable-uploads/96896a74-8c69-41ae-8ee8-3fc7f5fb38f1.png" },
  { id: "bn7", model: "iPhone 12 Pro", price: 4900, condition: "brand-new", image: "/lovable-uploads/5cea7217-dcac-409f-8670-f686f28b2d72.png" },
  { id: "bn8", model: "iPhone 12 Pro Max", price: 5200, condition: "brand-new", image: "/lovable-uploads/bf24c172-ea1d-448f-abae-0fca54aeb346.png" },
  { id: "bn9", model: "iPhone 13", price: 5500, condition: "brand-new", image: "/lovable-uploads/ffbd6bb9-f1bb-49f2-88db-18145465fdd0.png" },
  { id: "bn10", model: "iPhone 13 Pro", price: 6000, condition: "brand-new", image: "/lovable-uploads/c3a1f61e-6476-46ff-b5b7-f0dc3cb55c1e.png" },
  { id: "bn11", model: "iPhone 13 Pro Max", price: 6400, condition: "brand-new", image: "/lovable-uploads/iPhone_13_Pro_Graphite_8313c312-a1d1-4303-a9d1-c396f2fb5dc8-.webp" },
  { id: "bn12", model: "iPhone 14", price: 7000, condition: "brand-new", image: "/lovable-uploads/15778401-8141-4ff2-a54a-6b6073be207b.png" },
  { id: "bn13", model: "iPhone 14 Pro", price: 7600, condition: "brand-new", image: "/lovable-uploads/a10b91da-93d8-4ba5-b455-98e50878cc47.png" },
  { id: "bn14", model: "iPhone 14 Pro Max", price: 8300, condition: "brand-new", image: "/lovable-uploads/91426426-f886-473c-bdfd-4226031b0d81.png" },
  { id: "bn15", model: "iPhone 15", price: 8700, condition: "brand-new", image: "/lovable-uploads/96896a74-8c69-41ae-8ee8-3fc7f5fb38f1.png" },
  { id: "bn16", model: "iPhone 15 Pro", price: 9600, condition: "brand-new", image: "/lovable-uploads/iPhone_15_Pro_Blue_Titanium_Pure_Back_iPhone_15_Pro_Blue_Tit-1.webp" },
  { id: "bn16b", model: "iPhone 15 Pro Max", price: 9900, condition: "brand-new", image: "/lovable-uploads/bc14a16d-e0dd-426f-84b0-2f1a4fe4f0e4.png" },
  
  { id: "bn18", model: "iPhone 16", price: 10300, condition: "brand-new", image: "/lovable-uploads/iPhone_13_Pro_Graphite_8313c312-a1d1-4303-a9d1-c396f2fb5dc8-.webp" },
  { id: "bn19", model: "iPhone 16 Pro", price: 10700, condition: "brand-new", image: "/lovable-uploads/16prooo.webp" },
  { id: "bn20", model: "iPhone 16 Pro Max", price: 11000, condition: "brand-new", image: "/lovable-uploads/16max.webp" },
  { id: "bn21", model: "iPhone 17", price: 15400, condition: "brand-new", image: "/lovable-uploads/cl_iphone_17_black_pdp_image_position_1__wwen-1.jpg" },
];

export const preOwnedProducts: Product[] = [
  { id: "po1", model: "iPhone 7", price: 600, condition: "pre-owned", image: "/lovable-uploads/39e97a94-2071-432b-bf0a-e446a5bd1a9b.png" },
  { id: "po2", model: "iPhone 7 Plus", price: 900, condition: "pre-owned", image: "/lovable-uploads/d60a3aa9-9ae0-4b1e-b65d-760bf33c7740.png" },
  { id: "po3", model: "iPhone 8", price: 900, condition: "pre-owned", image: "/lovable-uploads/7e05145c-8840-4b0d-abdf-2e4896ee92df.png" },
  { id: "po3plus", model: "iPhone 8 Plus", price: 1100, condition: "pre-owned", image: "/lovable-uploads/8b205e3d-8a67-4959-8213-d0106a2040c9.png" },
  { id: "po3", model: "iPhone X", price: 1000, condition: "pre-owned", image: "/lovable-uploads/14b8ff94-84eb-4d5f-8808-deba2dd270ea.png" },
  { id: "po4", model: "iPhone XR", price: 1200, condition: "pre-owned", image: "/lovable-uploads/c16f4f49-c799-4c19-acdb-5e25d8f042f8.png" },
  { id: "po5", model: "iPhone 11", price: 1600, condition: "pre-owned", image: "/lovable-uploads/7c5544b8-af91-4224-9d62-46067b2c070f.png" },
  { id: "po6", model: "iPhone 11 Pro", price: 1800, condition: "pre-owned", image: "/lovable-uploads/cc8657f3-a2b9-4797-a444-8e0e0f93b75e.png" },
  { id: "po7", model: "iPhone 11 Pro Max", price: 2000, condition: "pre-owned", image: "/lovable-uploads/b2a62c05-6644-45ce-b5dd-2c3d260db58e.png" },
  { id: "po8", model: "iPhone 12", price: 2000, condition: "pre-owned", image: "/lovable-uploads/96896a74-8c69-41ae-8ee8-3fc7f5fb38f1.png" },
  { id: "po9", model: "iPhone 12 Pro", price: 2400, condition: "pre-owned", image: "/lovable-uploads/5cea7217-dcac-409f-8670-f686f28b2d72.png" },
  { id: "po10", model: "iPhone 12 Pro Max", price: 2800, condition: "pre-owned", image: "/lovable-uploads/bf24c172-ea1d-448f-abae-0fca54aeb346.png" },
  { id: "po11", model: "iPhone 13", price: 2900, condition: "pre-owned", image: "/lovable-uploads/ffbd6bb9-f1bb-49f2-88db-18145465fdd0.png" },
  { id: "po12", model: "iPhone 13 Pro", price: 3000, condition: "pre-owned", image: "/lovable-uploads/c3a1f61e-6476-46ff-b5b7-f0dc3cb55c1e.png" },
  { id: "po13", model: "iPhone 13 Pro Max", price: 3300, condition: "pre-owned", image: "/lovable-uploads/iPhone_13_Pro_Graphite_8313c312-a1d1-4303-a9d1-c396f2fb5dc8-.webp" },
  { id: "po14", model: "iPhone 14", price: 3300, condition: "pre-owned", image: "/lovable-uploads/15778401-8141-4ff2-a54a-6b6073be207b.png" },
  { id: "po15", model: "iPhone 14 Pro", price: 5600, condition: "pre-owned", image: "/lovable-uploads/a10b91da-93d8-4ba5-b455-98e50878cc47.png" },
  { id: "po16", model: "iPhone 14 Pro Max", price: 4000, condition: "pre-owned", image: "/lovable-uploads/91426426-f886-473c-bdfd-4226031b0d81.png" },
  { id: "po17", model: "iPhone 15", price: 4000, condition: "pre-owned", image: "/lovable-uploads/96896a74-8c69-41ae-8ee8-3fc7f5fb38f1.png" },
  { id: "po18", model: "iPhone 15 Pro", price: 4300, condition: "pre-owned", image: "/lovable-uploads/iPhone_15_Pro_Blue_Titanium_Pure_Back_iPhone_15_Pro_Blue_Tit-1.webp" },
  { id: "po19", model: "iPhone 15 Pro Max", price: 4700, condition: "pre-owned", image: "/lovable-uploads/bc14a16d-e0dd-426f-84b0-2f1a4fe4f0e4.png" },
  { id: "po20", model: "iPhone 16", price: 4700, condition: "pre-owned", image: "/lovable-uploads/iPhone_13_Pro_Graphite_8313c312-a1d1-4303-a9d1-c396f2fb5dc8-.webp" },
  { id: "po21", model: "iPhone 16 Pro", price: 5000, condition: "pre-owned", image: "/lovable-uploads/16prooo.webp" },
  { id: "po22", model: "iPhone 16 Pro Max", price: 5400, condition: "pre-owned", image: "/lovable-uploads/16max.webp" },
  { id: "po23", model: "iPhone 17", price: 8000, condition: "pre-owned", image: "/lovable-uploads/cl_iphone_17_black_pdp_image_position_1__wwen-1.jpg" },
];
