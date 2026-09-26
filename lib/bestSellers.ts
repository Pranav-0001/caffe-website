export interface BestSellerProduct {
  id: string;
  name: string;
  tagline?: string;
  description: string;
  price: string;
  image: string;
}

export const bestSellers: BestSellerProduct[] = [
  {
    id: "matcha",
    name: "Pistachio Matcha",
    tagline: "Ceremonial Blend",
    description:
      "Creamy ceremonial-style matcha balanced with smooth milk and a subtle pistachio finish.",
    price: "₹240",
    image: "/images/best-seller-matcha.png",
  },
  {
    id: "latte",
    name: "Signature Latte",
    tagline: "House Favorite",
    description:
      "Our house latte with silky steamed milk, delicate espresso and a soft rosetta finish.",
    price: "₹220",
    image: "/images/best-seller-latte.png",
  },
  {
    id: "mocha",
    name: "Dark Mocha",
    tagline: "Single Origin Chocolate",
    description:
      "Rich espresso and deep chocolate folded into velvety steamed milk with a gentle cocoa finish.",
    price: "₹250",
    image: "/images/best-seller-mocha.png",
  },
];
