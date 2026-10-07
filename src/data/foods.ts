import friedRiceImg from '../assets/images/fried_rice_accurate_1791371460329.jpg';
import friedChickenImg from '../assets/images/crispy_fried_chicken_1791371475110.jpg';
import chineseVegImg from '../assets/images/chinese_vegetable_white_1791371488346.jpg';
import chickenKababImg from '../assets/images/chicken_kabab_accurate_1791371497870.jpg';
import custardImg from '../assets/images/creamy_fruit_custard_1791371508443.jpg';
import puddingImg from '../assets/images/caramel_custard_pudding_1791371519256.jpg';
import saladImg from '../assets/images/fresh_veg_fruit_salad_1791371529398.jpg';
import juiceImg from '../assets/images/fresh_chilled_juice_1791371540270.jpg';
import pithaImg from '../assets/images/traditional_sweet_pitha_1791371552623.jpg';
import pastaImg from '../assets/images/chicken_vegetable_pasta_1791371563994.jpg';

export type MeasurementSystem = 'metric' | 'imperial';

export interface FoodVariant {
  name: string;
  nutrition: NutritionInfo;
  ingredients: string[];
  dietary: string[];
  allergens: AllergensInfo;
}

export interface NutritionInfo {
  basis: string;
  energyKcal: number;
  protein: number;
  carbohydrates: number;
  fat: number;
  saturatedFat: number;
  fiber: number;
  sugars: number;
  sodiumMg: number;
}

export interface AllergensInfo {
  contains: string[];
  mayContain: string[];
}

export interface ServingInfo {
  size: string;
  yield: string;
}

export interface PreparationInfo {
  time: string;
  difficulty: string;
}

export interface FoodItem {
  id: string;
  slug: string;
  name: string;
  category: 'main' | 'side' | 'dessert' | 'savory' | 'salad' | 'beverage';
  image: string;
  description: string;
  dietary: string[];
  ingredients: string[];
  allergens: AllergensInfo;
  nutrition: NutritionInfo;
  serving: ServingInfo;
  preparation?: PreparationInfo;
  homeScienceInsight: string;
  variants?: FoodVariant[];
  measurementBasis?: {
    metric: { weight?: number, volume?: number, temp?: number };
    imperial: { weight?: number, volume?: number, temp?: number };
  };
}

export const foods: FoodItem[] = [
  {
    id: "fried-rice",
    slug: "fried-rice",
    name: "Egg & Vegetable Fried Rice",
    category: "main",
    image: friedRiceImg,
    description: "Fluffy fragrant stir-fried rice tossed with golden scrambled farm eggs, finely diced sweet carrots, tender green peas, and scallions in light savory seasoning.",
    dietary: ["High Energy", "Halal"],
    ingredients: [
      "Aromatic Long-Grain Rice",
      "Farm Fresh Eggs",
      "Sweet Carrots (Finely Diced)",
      "Green Peas & Spring Onions",
      "Green Capsicum",
      "Light Soy Sauce",
      "Pure Vegetable Oil",
      "White Pepper & Sea Salt"
    ],
    allergens: {
      contains: ["Egg", "Soy"],
      mayContain: ["Wheat"]
    },
    nutrition: {
      basis: "100g",
      energyKcal: 175,
      protein: 5.2,
      carbohydrates: 28.8,
      fat: 4.4,
      saturatedFat: 0.9,
      fiber: 1.5,
      sugars: 0.8,
      sodiumMg: 235
    },
    serving: {
      size: "1 plate (220g)",
      yield: "4 portions"
    },
    preparation: {
      time: "25 min",
      difficulty: "Medium"
    },
    measurementBasis: {
      metric: { weight: 100 },
      imperial: { weight: 3.5 }
    },
    homeScienceInsight: "Using pre-chilled cooked rice promotes retrogradation of amylose starches, keeping individual grains separated and preventing starch gelatin mushiness during high-temperature wok searing."
  },
  {
    id: "fried-chicken",
    slug: "fried-chicken",
    name: "Crispy Fried Chicken",
    category: "main",
    image: friedChickenImg,
    description: "Golden crispy fried chicken seasoned with garlic, ginger, and cracked black pepper, coated in a crunchy spiced batter and fried to juicy tenderness.",
    dietary: ["High Protein", "Halal"],
    ingredients: [
      "Fresh Chicken Drumsticks & Cuts",
      "Refined Wheat Flour",
      "Cornstarch (Crisping Agent)",
      "Farm Egg",
      "Garlic-Ginger Marinade",
      "Black Pepper & Mild Paprika",
      "Light Soy Sauce",
      "Vegetable Frying Oil"
    ],
    allergens: {
      contains: ["Wheat", "Gluten", "Egg", "Soy"],
      mayContain: ["Milk"]
    },
    nutrition: {
      basis: "100g",
      energyKcal: 252,
      protein: 20.4,
      carbohydrates: 9.8,
      fat: 14.8,
      saturatedFat: 3.1,
      fiber: 0.5,
      sugars: 0.2,
      sodiumMg: 360
    },
    serving: {
      size: "1 piece (120g)",
      yield: "6 portions"
    },
    preparation: {
      time: "35 min",
      difficulty: "Medium"
    },
    measurementBasis: {
      metric: { weight: 100 },
      imperial: { weight: 3.5 }
    },
    homeScienceInsight: "The cornstarch and flour coating creates a high-surface-area starch matrix that flash-dehydrates upon contact with hot oil (175°C), creating an impervious crispy shield that seals in internal moisture."
  },
  {
    id: "chinese-vegetable",
    slug: "chinese-vegetable",
    name: "Chinese Mixed Vegetables (White Gravy)",
    category: "main",
    image: chineseVegImg,
    description: "Classic restaurant-style mixed vegetables bathed in a savory, translucent glossy white cornstarch gravy with crisp papaya, carrots, cabbage, and aromatic garlic.",
    dietary: ["Low Calorie", "High Fiber", "Halal"],
    ingredients: [
      "Crisp Green Papaya (Thin batons)",
      "Fresh Carrots",
      "Shredded Green Cabbage",
      "Green Bell Pepper (Capsicum)",
      "Baby Corn / Button Mushrooms",
      "Sautéed Minced Garlic",
      "Slit Mild Green Chilies",
      "Refined Cornstarch (Thickening)",
      "White Pepper & Chicken/Vegetable Broth",
      "Light Cooking Oil"
    ],
    allergens: {
      contains: [],
      mayContain: ["Soy"]
    },
    nutrition: {
      basis: "100g",
      energyKcal: 65,
      protein: 1.9,
      carbohydrates: 9.4,
      fat: 2.2,
      saturatedFat: 0.3,
      fiber: 2.7,
      sugars: 2.4,
      sodiumMg: 185
    },
    serving: {
      size: "1 bowl (180g)",
      yield: "4 portions"
    },
    preparation: {
      time: "20 min",
      difficulty: "Easy"
    },
    measurementBasis: {
      metric: { weight: 100 },
      imperial: { weight: 3.5 }
    },
    homeScienceInsight: "Brief parboiling preserves hemicellulose and pectic cellular crispness in raw papaya and carrots, while cornstarch amylopectin expands above 70°C to create the iconic translucent, glossy white Chinese gravy without dairy."
  },
  {
    id: "chicken-kabab",
    slug: "chicken-kabab",
    name: "Grilled Chicken Kabab",
    category: "main",
    image: chickenKababImg,
    description: "Succulent, herb-infused chicken kababs marinated with crushed garlic, ginger, roasted cumin, fresh coriander, and lemon juice, seared with golden char marks.",
    dietary: ["High Protein", "Halal"],
    ingredients: [
      "Minced Fresh Chicken Breast",
      "Finely Chopped Red Onion",
      "Crushed Garlic & Fresh Ginger",
      "Fresh Mint & Coriander Leaves",
      "Roasted Cumin & Coriander Spices",
      "Cracked Black Pepper",
      "Farm Egg Binder",
      "Fresh Lemon Juice",
      "Mustard Oil / Vegetable Oil"
    ],
    allergens: {
      contains: ["Egg"],
      mayContain: ["Gluten"]
    },
    nutrition: {
      basis: "100g",
      energyKcal: 188,
      protein: 21.5,
      carbohydrates: 5.4,
      fat: 8.8,
      saturatedFat: 2.0,
      fiber: 1.2,
      sugars: 0.9,
      sodiumMg: 320
    },
    serving: {
      size: "2 kababs (110g)",
      yield: "6 portions"
    },
    preparation: {
      time: "35 min",
      difficulty: "Medium"
    },
    measurementBasis: {
      metric: { weight: 100 },
      imperial: { weight: 3.5 }
    },
    homeScienceInsight: "The mild acidity of fresh lemon juice denatures outer actin and myosin proteins in the chicken, allowing aromatic ginger and roasted spices to penetrate deeply while pan-searing triggers savory Maillard browning."
  },
  {
    id: "custard",
    slug: "custard",
    name: "Fruit Custard",
    category: "dessert",
    image: custardImg,
    description: "Silky, chilled vanilla custard layered with sweet diced seasonal apples, bananas, juicy grapes, and ruby pomegranate pearls.",
    dietary: ["Vegetarian", "Calcium Rich", "Halal"],
    ingredients: [
      "Pasteurized Whole Cow's Milk",
      "Vanilla Custard Powder",
      "Refined Cane Sugar",
      "Crisp Sweet Apple",
      "Ripe Sagar Banana",
      "Fresh Green & Black Grapes",
      "Pomegranate Seeds (Dalim)"
    ],
    allergens: {
      contains: ["Milk"],
      mayContain: ["Wheat"]
    },
    nutrition: {
      basis: "100g",
      energyKcal: 115,
      protein: 3.5,
      carbohydrates: 19.8,
      fat: 2.7,
      saturatedFat: 1.5,
      fiber: 1.4,
      sugars: 15.8,
      sodiumMg: 46
    },
    serving: {
      size: "1 dessert cup (150g)",
      yield: "6 portions"
    },
    preparation: {
      time: "20 min + Chilling",
      difficulty: "Easy"
    },
    measurementBasis: {
      metric: { weight: 100 },
      imperial: { weight: 3.5 }
    },
    homeScienceInsight: "Milk casein proteins interact with gelatinized cornstarch granules to produce a stable emulsion. Folding in fresh fruits immediately after chilling minimizes enzyme breakdown and maintains crisp fruit cell turgor."
  },
  {
    id: "pudding",
    slug: "pudding",
    name: "Caramel Pudding",
    category: "dessert",
    image: puddingImg,
    description: "Velvety smooth steamed whole-milk and egg custard topped with a glistening, bittersweet amber caramel sauce.",
    dietary: ["Vegetarian", "High Protein", "Halal"],
    ingredients: [
      "Fresh Farm Eggs",
      "Sweetened Condensed Milk",
      "Full Cream Liquid Milk",
      "Granulated Sugar (Caramel Base)",
      "Pure Vanilla Extract",
      "Ground Cardamom (Aroma)"
    ],
    allergens: {
      contains: ["Milk", "Egg"],
      mayContain: []
    },
    nutrition: {
      basis: "100g",
      energyKcal: 165,
      protein: 5.8,
      carbohydrates: 23.5,
      fat: 5.1,
      saturatedFat: 2.6,
      fiber: 0,
      sugars: 21.8,
      sodiumMg: 60
    },
    serving: {
      size: "1 slice (110g)",
      yield: "6 portions"
    },
    preparation: {
      time: "45 min",
      difficulty: "Medium"
    },
    measurementBasis: {
      metric: { weight: 100 },
      imperial: { weight: 3.5 }
    },
    homeScienceInsight: "Gentle water-bath steam cooking regulates heat below 85°C, ensuring egg ovalbumin and ovotransferrin proteins form a delicate tender gel without syneresis (weeping), while sucrose thermal caramelization produces complex aromatic lactones."
  },
  {
    id: "salad",
    slug: "salad",
    name: "Fresh Salad (Vegetable & Fruit)",
    category: "side",
    image: saladImg,
    description: "Crisp, revitalizing medley of fresh sliced cucumbers, ripe tomatoes, carrots, crisp green apples, and sweet grapes tossed in fresh lemon and rock salt.",
    dietary: ["Low Calorie", "Vegan", "High Vitamin C", "Halal"],
    ingredients: [
      "Crisp Local Cucumber",
      "Ripe Red Tomatoes",
      "Sweet Grated Carrots",
      "Crisp Green Apple Slices",
      "Sweet Seedless Grapes",
      "Fresh Lemon Juice",
      "Chopped Mint & Coriander",
      "Rock Salt & Black Pepper"
    ],
    allergens: {
      contains: [],
      mayContain: []
    },
    nutrition: {
      basis: "100g",
      energyKcal: 36,
      protein: 1.0,
      carbohydrates: 7.2,
      fat: 0.3,
      saturatedFat: 0.05,
      fiber: 2.0,
      sugars: 4.2,
      sodiumMg: 95
    },
    serving: {
      size: "1 bowl (130g)",
      yield: "4 portions"
    },
    preparation: {
      time: "15 min",
      difficulty: "Easy"
    },
    measurementBasis: {
      metric: { weight: 100 },
      imperial: { weight: 3.5 }
    },
    homeScienceInsight: "The natural ascorbic and citric acids in freshly squeezed lemon juice inhibit polyphenol oxidase, preventing oxidation and browning of apple polyphenols while enhancing iron bioavailability."
  },
  {
    id: "juice",
    slug: "juice",
    name: "Fresh Fruit Juice",
    category: "side",
    image: juiceImg,
    description: "Chilled and rejuvenating tropical fruit juice prepared with ripe mango nectar and sweet citrus, served over ice with fresh mint.",
    dietary: ["Refreshing", "Vegan", "Vitamin C", "Halal"],
    ingredients: [
      "Ripe Mango Pulp",
      "Fresh Sweet Orange / Tangerine",
      "Chilled Filtered Water",
      "Pure Cane Sugar",
      "Fresh Lime Juice",
      "Pinch of Himalayan Pink Salt",
      "Fresh Garden Mint Leaves"
    ],
    allergens: {
      contains: [],
      mayContain: []
    },
    nutrition: {
      basis: "100g",
      energyKcal: 46,
      protein: 0.4,
      carbohydrates: 11.5,
      fat: 0.1,
      saturatedFat: 0.0,
      fiber: 0.5,
      sugars: 10.6,
      sodiumMg: 30
    },
    serving: {
      size: "1 glass (250ml)",
      yield: "4 glasses"
    },
    preparation: {
      time: "10 min",
      difficulty: "Easy"
    },
    measurementBasis: {
      metric: { weight: 100 },
      imperial: { weight: 3.5 }
    },
    homeScienceInsight: "Cold blending retains heat-sensitive L-ascorbic acid (Vitamin C) and beta-carotene antioxidants, providing bioavailable natural carbohydrates and vital electrolyte ions."
  },
  {
    id: "pitha",
    slug: "pitha",
    name: "Traditional Sweet Pitha",
    category: "side",
    image: pithaImg,
    description: "Delicate homemade rolled rice-flour crepes wrapped around a rich, aromatic filling of reduced condensed milk kheer and crushed green cardamom.",
    dietary: ["Vegetarian", "Traditional Heritage", "Halal"],
    ingredients: [
      "Finely Milled Rice Flour",
      "All-Purpose Wheat Flour",
      "Fresh Cow's Milk",
      "Slow-Reduced Milk Kheer Filling",
      "Refined Cane Sugar",
      "Aromatic Cardamom Pods",
      "Pure Ghee (Pan greasing)"
    ],
    allergens: {
      contains: ["Milk", "Wheat", "Gluten"],
      mayContain: []
    },
    nutrition: {
      basis: "100g",
      energyKcal: 232,
      protein: 5.1,
      carbohydrates: 42.8,
      fat: 5.0,
      saturatedFat: 2.8,
      fiber: 1.0,
      sugars: 20.4,
      sodiumMg: 42
    },
    serving: {
      size: "2 rolls (120g)",
      yield: "6 portions"
    },
    preparation: {
      time: "40 min",
      difficulty: "Medium"
    },
    measurementBasis: {
      metric: { weight: 100 },
      imperial: { weight: 3.5 }
    },
    homeScienceInsight: "Combining amylose-rich rice flour with gluten-forming wheat flour gives the crepe batter flexibility without fragility, preventing tearing when rolled around hot reduced milk."
  },
  {
    id: "pasta",
    slug: "pasta",
    name: "Savory Chicken Pasta",
    category: "side",
    image: pastaImg,
    description: "Tender sautéed chicken breast strips and durum pasta tossed with crisp bell peppers, onions, and sweet corn in an herb-infused savory sauce.",
    dietary: ["High Energy", "Halal"],
    ingredients: [
      "Durum Wheat Penne Pasta",
      "Boneless Diced Chicken Breast",
      "Green & Red Bell Peppers",
      "Sweet Onions & Sweet Corn",
      "Garlic & Green Chilies",
      "Rich Tomato Puree",
      "Olive & Sunflower Oil",
      "Oregano, Thyme & Black Pepper",
      "Sea Salt"
    ],
    allergens: {
      contains: ["Wheat", "Gluten"],
      mayContain: ["Soy"]
    },
    nutrition: {
      basis: "100g",
      energyKcal: 182,
      protein: 9.2,
      carbohydrates: 25.4,
      fat: 5.0,
      saturatedFat: 1.0,
      fiber: 2.3,
      sugars: 2.6,
      sodiumMg: 275
    },
    serving: {
      size: "1 plate (180g)",
      yield: "4 portions"
    },
    preparation: {
      time: "25 min",
      difficulty: "Medium"
    },
    measurementBasis: {
      metric: { weight: 100 },
      imperial: { weight: 3.5 }
    },
    homeScienceInsight: "Cooking durum semolina pasta al dente encapsulates starch inside gluten protein webs, yielding a lower glycemic impact while emulsifying with vegetable cooking oil to evenly coat the chicken."
  }
];
