// Local dummy catalogue for Bunon.
// In a real build this would come from a CMS or commerce API — for this
// project it's a static file so the whole app can run without a backend.

const products = [
  {
    id: 1,
    name: "Classic Cotton Panjabi",
    category: "Panjabi",
    price: 1490,
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1626497764746-6dc36546b388?auto=format&fit=crop&w=1200&q=80",
    ],
    rating: 4.5,
    reviews: 128,
    colors: ["White", "Navy"],
    sizes: ["M", "L", "XL"],
    inStock: true,
    isNew: false,
    description:
      "A relaxed, breathable panjabi cut from combed cotton. Stone-washed for softness on the very first wear, with a mandarin collar and hand-finished button placket — built for long adda sessions and Friday prayers alike.",
  },
  {
    id: 2,
    name: "Handloom Nakshi Panjabi",
    category: "Panjabi",
    price: 2350,
    oldPrice: 2650,
    image:
      "https://images.unsplash.com/photo-1614251055880-ee96e4803393?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1614251055880-ee96e4803393?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1200&q=80",
    ],
    rating: 4.8,
    reviews: 76,
    colors: ["Off White", "Maroon"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    isNew: true,
    description:
      "Woven on a traditional handloom in Sirajganj, then finished with fine nakshi embroidery along the yoke. Every piece carries small, honest irregularities — proof of the hand that made it.",
  },
  {
    id: 3,
    name: "Everyday Oxford Shirt",
    category: "Shirts",
    price: 1690,
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1200&q=80",
    ],
    rating: 4.3,
    reviews: 94,
    colors: ["Sky Blue", "White", "Charcoal"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    isNew: false,
    description:
      "A tidy Oxford weave that goes from desk to dinner without changing. Semi-fitted through the body, single chest pocket, and a collar stiff enough to hold its shape through a full work day.",
  },
  {
    id: 4,
    name: "Linen Blend Kurta",
    category: "Kurta",
    price: 1990,
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618453292459-53478dcc7b22?auto=format&fit=crop&w=1200&q=80",
    ],
    rating: 4.6,
    reviews: 51,
    colors: ["Sand", "Olive"],
    sizes: ["M", "L", "XL"],
    inStock: true,
    isNew: true,
    description:
      "A linen-cotton blend that only gets better with a little creasing. Side slits and a straight hem make it easy to layer over slim trousers or wear loose with denim.",
  },
  {
    id: 5,
    name: "Tailored Chino Trousers",
    category: "Trousers",
    price: 2190,
    oldPrice: 2490,
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=80",
    ],
    rating: 4.2,
    reviews: 63,
    colors: ["Khaki", "Black", "Navy"],
    sizes: ["30", "32", "34", "36"],
    inStock: true,
    isNew: false,
    description:
      "A tapered chino with just enough stretch to move with you. Mid-rise, clean front with no pleats, and a finished hem length so you can wear it straight off the rack.",
  },
  {
    id: 6,
    name: "Denim Trucker Jacket",
    category: "Jackets",
    price: 3450,
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=1200&q=80",
    ],
    rating: 4.7,
    reviews: 39,
    colors: ["Indigo"],
    sizes: ["S", "M", "L", "XL"],
    inStock: false,
    isNew: false,
    description:
      "Rigid 12oz denim that will soften and fade to your own creases over time. Twin chest pockets, adjustable waist tabs, and a boxy cut built to layer over a hoodie in the cooler months.",
  },
  {
    id: 7,
    name: "Merino Crew Sweater",
    category: "Sweaters",
    price: 2790,
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1614975059251-992f11792b9f?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1614975059251-992f11792b9f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=1200&q=80",
    ],
    rating: 4.4,
    reviews: 28,
    colors: ["Charcoal", "Camel"],
    sizes: ["S", "M", "L"],
    inStock: true,
    isNew: false,
    description:
      "Fine-gauge merino that regulates temperature far better than it has any right to at this weight. A close, not-tight fit, ribbed cuffs and hem, no itch.",
  },
  {
    id: 8,
    name: "Relaxed Fit Polo",
    category: "Shirts",
    price: 1290,
    oldPrice: 1450,
    image:
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
    ],
    rating: 4.1,
    reviews: 87,
    colors: ["Forest Green", "White", "Rust"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    isNew: false,
    description:
      "Piqué cotton with a two-button placket and a dropped shoulder for a fit that sits easy rather than sporty. Holds its shape wash after wash.",
  },
  {
    id: 9,
    name: "Silk-Touch Panjabi",
    category: "Panjabi",
    price: 2890,
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1610030181087-540f31f81d70?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1610030181087-540f31f81d70?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?auto=format&fit=crop&w=1200&q=80",
    ],
    rating: 4.9,
    reviews: 44,
    colors: ["Deep Maroon", "Black"],
    sizes: ["M", "L", "XL"],
    inStock: true,
    isNew: true,
    description:
      "A silk-cotton blend with a subtle sheen, reserved for the evenings that call for it. Fully lined yoke, covered buttons, and a fit that's fitted through the chest without being tight.",
  },
  {
    id: 10,
    name: "Cargo Utility Trousers",
    category: "Trousers",
    price: 2450,
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1200&q=80",
    ],
    rating: 4.0,
    reviews: 22,
    colors: ["Olive", "Stone"],
    sizes: ["30", "32", "34", "36"],
    inStock: true,
    isNew: false,
    description:
      "Six-pocket cargos in a brushed cotton twill that's heavy enough to hold its shape but soft enough for daily wear. Elastic waist panels at the back for actual comfort, not just marketing copy.",
  },
  {
    id: 11,
    name: "Quilted Bomber Jacket",
    category: "Jackets",
    price: 3990,
    oldPrice: 4490,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=1200&q=80",
    ],
    rating: 4.6,
    reviews: 31,
    colors: ["Black", "Olive"],
    sizes: ["M", "L", "XL"],
    inStock: true,
    isNew: false,
    description:
      "Lightly insulated for the two months a year Dhaka actually gets cold enough to need it. Ribbed collar and cuffs, two zip hand pockets, and a shell that sheds a light drizzle.",
  },
  {
    id: 12,
    name: "Waffle Knit Sweater",
    category: "Sweaters",
    price: 2190,
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1614975059251-992f11792b9f?auto=format&fit=crop&w=1200&q=80",
    ],
    rating: 4.3,
    reviews: 19,
    colors: ["Cream", "Rust"],
    sizes: ["S", "M", "L"],
    inStock: true,
    isNew: true,
    description:
      "A textured waffle knit in a mid-weight cotton yarn — enough structure to layer under a jacket, enough softness to wear alone around the house.",
  },
];

export const categories = [...new Set(products.map((p) => p.category))].sort();

export default products;
