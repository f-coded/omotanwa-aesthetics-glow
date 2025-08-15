import { Product } from "../types";

export const products: Product[] = [
  // --- Updated and new products from brochure ---
  {
    id: "liquid-tribe",
    name: "LIQUID TRIBE",
    description:
      "Specially formulated for sensitive and easily irritated skin. Cleanses, removes dirt, oil, and urban pollutants, exfoliates dry skin and debris, stimulates circulation, and instantly brightens face and body. Suitable for twice-daily use.",
    price: 28,
    images: [
      "/assets/images/products/liquid-tribe-1.jpg",
      "/assets/images/products/liquid-tribe-2.jpg",
      "/assets/images/products/liquid-tribe-3.jpg",
    ],
    category: "cleansers",
    tags: ["sensitive skin", "exfoliating", "brightening", "hydrating"],
    stock: 50,
    rating: 4.8,
    reviews: [],
    featured: true,
    newArrival: false,
    ingredients: "Walnut Shell, Vitamin E, Glutathione",
    howToUse:
      "Can be used at anytime of the day. For best results, use twice daily.",
    benefits:
      "Removes dirt, oil, and pollutants, exfoliates, brightens, stimulates circulation, suitable for sensitive skin.",
  },

  {
    id: "blackpride-soap",
    name: "BLACK PRIDE SOAP",
    description:
      "Our African heritage soap, crafted from natural herbs and oils, suits all skin types. It clears blemishes, boosts collagen, and controls pimples for flawless, even-toned skin. The black pride soap is a global favorite with positive reviews. Use it twice daily for optimal results morning and night.",
    price: 45,
    images: [
      "/assets/images/products/blackpride-1.jpg",
      "/assets/images/products/blackpride-2.jpg",
      "/assets/images/products/blackpride-3.jpg",
    ],
    category: "soaps",
    tags: [
      "even tone",
      "exfoliating",
      "collagen boost",
      "blemish control",
      "pimple control",
    ],
    stock: 35,
    rating: 4.9,
    reviews: [],
    featured: true,
    newArrival: true,
    ingredients: "Coffee Powder, Honey, Willow Herb, Natural Oils, Herbs",
    howToUse:
      "Can be used at anytime of the day. For best results, use twice daily: morning and night.",
    benefits:
      "Clears blemishes, boosts collagen, controls pimples, evens skin tone, suits all skin types.",
  },

  {
    id: "acne-vanish-toner",
    name: "ACNE VANISH TONER",
    description:
      "Formulated to treat acne symptoms with powerful actives that dry up breakouts, clear dark spots, control oil, reduce blemishes, and brighten complexion.",
    price: 52,
    images: [
      "/assets/images/products/acne-vanish-1.jpg",
      "/assets/images/products/acne-vanish-3.jpg",
      "/assets/images/products/acne-vanish-4.jpg",
    ],
    category: "toners",
    tags: ["acne control", "oil control", "brightening", "blemish reduction"],
    stock: 40,
    rating: 4.7,
    reviews: [],
    featured: true,
    newArrival: false,
    ingredients: "Niacinamide, Glycolic Acid, Salicylic Acid",
    howToUse: "Should be applied on affected areas, twice daily.",
    benefits:
      "Dries up acne, clears dark spots, controls oil, reduces blemishes, brightens complexion.",
  },

  {
    id: "mirabel-juice",
    name: "MIRABEL JUICE",
    description:
      "Rejuvenating oil that brightens skin by up to 5 shades using plant extracts and natural oils. Minimizes wrinkles, eliminates dryness, reduces pore size, soothes rashes, and reveals a luminous, healthy complexion. Best applied at night.",
    price: 60,
    images: [
      "/assets/images/products/mirabel-juice-1.jpg",
      "/assets/images/products/mirabel-juice-2.jpg",
    ],
    category: "oils",
    tags: ["brightening", "anti-wrinkle", "hydrating", "soothing"],
    stock: 30,
    rating: 4.8,
    reviews: [],
    featured: false,
    newArrival: true,
    ingredients: "Carrot Oil, Licorice, Arbutin, Beta Carotene",
    howToUse: "Can be used at anytime, but best used at night.",
    benefits:
      "Brightens, minimizes wrinkles, eliminates dryness, reduces pores, soothes rashes.",
  },

  {
    id: "shed-it-off-scrub",
    name: "SHED IT OFF SCRUB",
    description:
      "Gentle yet effective scrub for clearing blemishes on face and body. Removes dead skin, unclogs pores, reduces body acne, and improves skin health. Designed for fragile skin. Use 2 times a week for smoother, clearer skin.",
    price: 40,
    images: [
      "/assets/images/products/shed-it-off-1.jpg",
      "/assets/images/products/shed-it-off-2.jpg",
    ],
    category: "scrubs",
    tags: ["blemish control", "exfoliating", "acne reduction"],
    stock: 25,
    rating: 4.7,
    reviews: [],
    featured: false,
    newArrival: false,
    ingredients: "Goat Milk Powder, Brown Sugar, Grape Seed Oil",
    howToUse: "Can be used on the face & body 2 times a week.",
    benefits:
      "Clears blemishes, removes dead skin, unclogs pores, reduces body acne.",
  },

  {
    id: "glittax-milk",
    name: "GLITTAX MILK",
    description:
      "Top-selling non-toxic brightening cream. Hydrates, smooths wrinkles, combats blemishes, and achieves a brighter complexion. Tightens pores, refines texture, balances pH for clear, plump, and smooth skin. Best used at night.",
    price: 55,
    images: [
      "/assets/images/products/glittax-milk-1.jpg",
      "/assets/images/products/glittax-milk-2.jpg",
    ],
    category: "creams",
    tags: ["brightening", "hydrating", "anti-wrinkle", "blemish control"],
    stock: 28,
    rating: 4.9,
    reviews: [],
    featured: true,
    newArrival: true,
    ingredients: "Almond Oil, Alpha Arbutin, Aqua, Licorice",
    howToUse: "Can be used at anytime of the day, but best used at night.",
    benefits:
      "Brightens, hydrates, smooths wrinkles, combats blemishes, tightens pores, refines texture.",
  },

  {
    id: "heal-drops",
    name: "HEAL DROPS",
    description:
      "Anti-aging face serum that firms, repairs, protects, and improves skin elasticity. Fades sun spots and discoloration, refines texture, reduces wrinkles, plumps skin cells, and protects with antioxidants. Reveals smooth, radiant, youthful skin.",
    price: 65,
    images: [
      "/assets/images/products/heal-drops-1.jpg",
      "/assets/images/products/heal-drops-2.jpg",
    ],
    category: "serums",
    tags: ["anti-aging", "firming", "repair", "elasticity"],
    stock: 22,
    rating: 4.8,
    reviews: [],
    featured: true,
    newArrival: false,
    ingredients: "Vitamin C, Vitamin A, Niacinamide, Hyaluronic Acid",
    howToUse: "Can be used at anytime of the day.",
    benefits:
      "Firms, repairs, protects, improves elasticity, fades sun spots, refines texture, reduces wrinkles.",
  },

  {
    id: "blackpride-gel",
    name: "BLACK PRIDE GEL",
    description:
      "African heritage, natural herbs, and oils for skin soothing. Tailored for sensitive skin, deeply moisturizes, cleanses, and leaves skin radiant. A refreshing, deep-penetrating shower experience.",
    price: 38,
    images: [
      "/assets/images/products/blackpride-gel-1.jpg",
      "/assets/images/products/blackpride-gel-2.jpg",
    ],
    category: "gels",
    tags: ["soothing", "moisturizing", "cleansing", "sensitive skin"],
    stock: 20,
    rating: 4.7,
    reviews: [],
    featured: false,
    newArrival: false,
    ingredients: "Cocoa pods, Coconut oil, Palm Kernel Oil, Vitamins A and E",
    howToUse: "Can be used at anytime of the day.",
    benefits: "Soothes, moisturizes, cleanses, leaves skin radiant.",
  },

  {
    id: "pearl-body-prime",
    name: "PEARL BODY PRIME",
    description:
      "Repairs damaged skin, rebuilds thin skin, fades stretch marks and scars, reduces green vein appearance, deeply moisturizes, and maintains skin color. Butter blend for everyone, a skincare necessity.",
    price: 50,
    images: [
      "/assets/images/products/pearl-body-prime-1.jpg",
      "/assets/images/products/pearl-body-prime-2.jpg",
    ],
    category: "creams",
    tags: ["repair", "moisturizing", "fade marks", "skin color"],
    stock: 18,
    rating: 4.8,
    reviews: [],
    featured: false,
    newArrival: false,
    ingredients: "Murumuru Butter, Almond Oil, Avocado Oil",
    howToUse: "Can be used anytime of the day, but best used in the morning.",
    benefits:
      "Repairs, rebuilds, fades marks, reduces green veins, moisturizes, maintains skin color.",
  },

  {
    id: "intense-glow-oil",
    name: "INTENSE GLOW OIL",
    description:
      "Enhances collagen production, smooths complexion, penetrates deep to lock in moisture, strengthens skin barrier, and defends against toxins. Suitable for anytime use.",
    price: 48,
    images: [
      "/assets/images/products/intense-glow-oil-1.jpg",
      "/assets/images/products/intense-glow-oil-2.jpg",
    ],
    category: "oils",
    tags: ["collagen boost", "moisturizing", "barrier protection", "smoothing"],
    stock: 16,
    rating: 4.7,
    reviews: [],
    featured: false,
    newArrival: false,
    ingredients: "Carrot Seed Oil, Vitamin E Oil, Fragrance, Saffron Petals",
    howToUse: "Can be used at anytime of the day.",
    benefits:
      "Enhances collagen, smooths, locks moisture, strengthens barrier, defends against toxins.",
  },

  {
    id: "forbearance",
    name: "FORBEARANCE",
    description:
      "Body cream that enhances skin tone for a spotless, brighter complexion. Rich in anti-aging properties, accelerates skin cell metabolism, counters aging. Apply at night for optimal results.",
    price: 54,
    images: [
      "/assets/images/products/forbearance-1.jpg",
      "/assets/images/products/forbearance-2.jpg",
    ],
    category: "creams",
    tags: ["brightening", "anti-aging", "spotless", "skin tone"],
    stock: 20,
    rating: 4.8,
    reviews: [],
    featured: true,
    newArrival: false,
    ingredients: "Glutathione, Vitamin C, Kojic Acid, Arbutin",
    howToUse: "Can be used at anytime of the day.",
    benefits:
      "Enhances skin tone, brightens, anti-aging, accelerates cell metabolism.",
  },

  {
    id: "luminance",
    name: "LUMINANCE",
    description:
      "Face cream crafted to remedy blemishes, enriched with niacinamide, vitamin C, and essential ingredients. Enhances complexion and eliminates defects. Specially researched recipe for effectiveness.",
    price: 46,
    images: [
      "/assets/images/products/luminance-1.jpg",
      "/assets/images/products/luminance-2.jpg",
    ],
    category: "creams",
    tags: ["blemish remedy", "complexion", "niacinamide", "vitamin C"],
    stock: 15,
    rating: 4.7,
    reviews: [],
    featured: false,
    newArrival: true,
    ingredients: "Niacinamide, Vitamin C",
    howToUse: "Can be used at anytime of the day.",
    benefits: "Remedies blemishes, enhances complexion, eliminates defects.",
  },

  {
    id: "face-lave",
    name: "FACE LAVE",
    description:
      "Designed for sensitive and easily irritated skin. Cleanses, removes dirt, oil, and urban pollutants, exfoliates dry skin and debris, reveals a fresh layer for a silky smooth complexion. Stimulates circulation and instantly brightens. Suitable for twice-daily use.",
    price: 36,
    images: [
      "/assets/images/products/face-lave-1.jpg",
      "/assets/images/products/face-lave-2.jpg",
    ],
    category: "cleansers",
    tags: ["sensitive skin", "exfoliating", "brightening", "hydrating"],
    stock: 18,
    rating: 4.6,
    reviews: [],
    featured: false,
    newArrival: false,
    ingredients: "Alpha Arbutin, Lemon, Rose Water",
    howToUse: "Can be used at anytime of the day.",
    benefits:
      "Cleanses, exfoliates, brightens, stimulates circulation, suitable for sensitive skin.",
  },

  {
    id: "tender-moist-toner",
    name: "TENDER MOIST TONER",
    description:
      "Enhances facial firmness and evens tone. Minimizes pores, creates smoother appearance, cleans dirt, oils, and impurities, protects against environmental stressors. Use once daily until desired results.",
    price: 42,
    images: ["/assets/images/products/tender-moist-toner-1.jpg"],
    category: "toners",
    tags: ["firming", "even tone", "pore minimizing", "protection"],
    stock: 20,
    rating: 4.7,
    reviews: [],
    featured: false,
    newArrival: true,
    ingredients: "Aloe Vera, Chamomile, Cucumber, Rose Water, Witch Hazel",
    howToUse:
      "Can be used at anytime of the day. Use once daily until desired results.",
    benefits: "Firms, evens tone, minimizes pores, cleans, protects.",
  },

  {
    id: "acne-vanish-wash",
    name: "ACNE VANISH WASH",
    description:
      "Potent acne eradicator with medicinal properties. Exfoliates, kills bacteria, hydrates, removes dry and dead cells, establishes resistance for healthier, smoother skin.",
    price: 44,
    images: ["/assets/images/products/acne-vanish-wash-1.jpg"],
    category: "cleansers",
    tags: ["acne control", "exfoliating", "hydrating", "bacteria-killing"],
    stock: 18,
    rating: 4.8,
    reviews: [],
    featured: false,
    newArrival: true,
    ingredients: "Sulfur, Tea Tree Oil",
    howToUse: "Can be applied on affected areas, twice daily.",
    benefits:
      "Eradicates acne, exfoliates, kills bacteria, hydrates, smooths skin.",
  },

  {
    id: "acne-vanish-cream",
    name: "ACNE VANISH CREAM",
    description:
      "Infused with natural antibacterial remedy to control acne breakout and its effect. Dries up acne and clears dark spots.",
    price: 46,
    images: ["/assets/images/products/acne-vanish-cream-1.jpg"],
    category: "creams",
    tags: ["acne control", "antibacterial", "dark spot removal"],
    stock: 15,
    rating: 4.7,
    reviews: [],
    featured: false,
    newArrival: true,
    ingredients: "Vitamin B3, Neem, Manjisth",
    howToUse: "Should be applied on affected areas, twice daily.",
    benefits: "Controls acne, dries up acne, clears dark spots.",
  },

  {
    id: "lipentance",
    name: "LIPENTANCE (Pink Lip)",
    description:
      "Well-formulated lip balm from an all-natural recipe. Provides safe, moisturizing care for lips, leaving them succulent, supple, and soft. Safe for gentle exfoliation.",
    price: 22,
    images: ["/assets/images/products/lipentance-1.jpg"],
    category: "balms",
    tags: ["moisturizing", "exfoliating", "softening", "natural"],
    stock: 25,
    rating: 4.8,
    reviews: [],
    featured: false,
    newArrival: true,
    ingredients:
      "Rose Petals, Cocoa Butter, Tumeric Oil, Almond Oil, Honey, Omotanwa Mi blend",
    howToUse: "Apply evenly to the lips as much as possible.",
    benefits: "Moisturizes, exfoliates, softens, safe for lips.",
  },

  {
    id: "mask-it-up",
    name: "MASK IT UP",
    description:
      "Herbal remedy mask designed to create a physical barrier that locks in beneficial ingredients, allowing skin to absorb more efficiently. Hydrates, removes excess oils, improves pore appearance.",
    price: 38,
    images: ["/assets/images/products/mask-it-up-1.jpg"],
    category: "masks",
    tags: ["hydrating", "oil control", "pore minimizing", "herbal"],
    stock: 18,
    rating: 4.7,
    reviews: [],
    featured: false,
    newArrival: true,
    ingredients: "Honey, Oatmeal, Aloe Vera",
    howToUse: "Apply evenly to the face. Can be done twice a week.",
    benefits:
      "Hydrates, removes excess oils, improves pores, locks in ingredients.",
  },

  {
    id: "autograph",
    name: "AUTOGRAPH (Face Cream)",
    description:
      "Face cream formulated to shed off dead skin, treats hyperpigmentation, tackles wrinkles and freckles, hydrates, beautifies, deeply moisturizes, restores moisture, improves suppleness, and gives radiant skin. Rich in botanical extracts for skin tone correction.",
    price: 48,
    images: ["/assets/images/products/autograph-1.jpg"],
    category: "creams",
    tags: ["hyperpigmentation", "anti-wrinkle", "moisturizing", "radiance"],
    stock: 15,
    rating: 4.8,
    reviews: [],
    featured: false,
    newArrival: true,
    ingredients: "Avocado, Aqua, Glycerin, Stearic Acid",
    howToUse: "Can be used anytime of the day.",
    benefits:
      "Sheds dead skin, treats hyperpigmentation, tackles wrinkles, hydrates, beautifies.",
  },

  {
    id: "knuckle-clear",
    name: "KNUCKLE CLEAR",
    description:
      "Crafted to address existing blemishes and prevent future discolorations and hyperpigmentation. Designed for darkened areas like knuckles, elbows, knees, and toes.",
    price: 36,
    images: ["/assets/images/products/knuckle-clear-1.jpg"],
    category: "creams",
    tags: ["blemish control", "hyperpigmentation", "moisturizing"],
    stock: 12,
    rating: 4.7,
    reviews: [],
    featured: false,
    newArrival: true,
    ingredients:
      "Specially formulated moisturizer, lemon juice, Ligninperoxidase, Niacinamide, Cherries",
    howToUse: "Apply to the affected areas at anytime of the day.",
    benefits:
      "Addresses blemishes, prevents discoloration, designed for dark areas.",
  },

  {
    id: "verbiage",
    name: "VERBIAGE (Stretch Mark)",
    description:
      "Formula for the treatment of stretch marks with potent natural ingredients. Increases elasticity to help ward off new stretch marks and erase existing ones.",
    price: 42,
    images: ["/assets/images/products/verbiage-1.jpg"],
    category: "creams",
    tags: ["stretch mark", "elasticity", "repair"],
    stock: 10,
    rating: 4.8,
    reviews: [],
    featured: false,
    newArrival: true,
    ingredients:
      "Avocado Oil, Cocoa Seed Butter, Argan Oil, Almond Oil, Vitamin E, Bio C-Elaste",
    howToUse: "Apply evenly on the affected area anytime of the day.",
    benefits: "Treats stretch marks, increases elasticity, repairs skin.",
  },

  {
    id: "forearance-face",
    name: "FOREARANCE (Face Cream)",
    description:
      "Brightens skin, reduces pigmentation, spots, freckles, scars; promotes even tone, diminishes fine lines and wrinkles. Formulated with Vitamin B3, Amino-Peptides, and Hyaluronic Acid.",
    price: 44,
    images: ["/assets/images/products/forearance-face-1.jpg"],
    category: "creams",
    tags: ["brightening", "pigmentation", "anti-wrinkle", "even tone"],
    stock: 14,
    rating: 4.7,
    reviews: [],
    featured: false,
    newArrival: true,
    ingredients:
      "Glycerin, Aqua, Niacinamide, Ceramides, Stearic Acid, Allantoin",
    howToUse: "Can be used anytime of the day.",
    benefits:
      "Brightens, reduces pigmentation, promotes even tone, diminishes fine lines.",
  },
];

export const featuredProducts = products.filter((product) => product.featured);
export const newArrivals = products.filter((product) => product.newArrival);
