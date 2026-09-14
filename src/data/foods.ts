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
  name: string;
  category: 'main' | 'savory' | 'salad' | 'beverage' | 'dessert';
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
  }
}

export const foods: FoodItem[] = [
  {
    id: "fried-rice",
    name: "Fried Rice",
    category: "main",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=800",
    description: "A classic favorite packed with colorful vegetables and perfectly seasoned grains.",
    dietary: ["Vegetarian"],
    ingredients: ["Rice", "Carrots", "Peas", "Green Beans", "Cooking Oil", "Soy Sauce", "Salt", "Seasonings"],
    allergens: {
      contains: ["Soy"],
      mayContain: ["Wheat"]
    },
    nutrition: {
      basis: "100g",
      energyKcal: 160,
      protein: 3.5,
      carbohydrates: 28.0,
      fat: 3.8,
      saturatedFat: 0.6,
      fiber: 1.2,
      sugars: 0.5,
      sodiumMg: 210
    },
    serving: {
      size: "1 plate (200g)",
      yield: "4 portions"
    },
    preparation: {
      time: "20 min",
      difficulty: "Medium"
    },
    measurementBasis: {
      metric: { weight: 100 },
      imperial: { weight: 3.5 }
    },
    homeScienceInsight: "Proper heat control and precooked cooled rice are essential to prevent the grains from becoming mushy, demonstrating the science of starch retrogradation."
  },
  {
    id: "fried-chicken",
    name: "Fried Chicken",
    category: "main",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=800",
    description: "Crispy on the outside, juicy on the inside. Carefully marinated and fried to golden perfection.",
    dietary: ["High Protein"],
    ingredients: ["Chicken pieces", "Wheat flour", "Egg", "Milk", "Spices", "Salt", "Cooking oil"],
    allergens: {
      contains: ["Wheat", "Gluten", "Egg", "Milk"],
      mayContain: ["Soy"]
    },
    nutrition: {
      basis: "100g",
      energyKcal: 290,
      protein: 15.0,
      carbohydrates: 12.5,
      fat: 19.8,
      saturatedFat: 4.5,
      fiber: 0.8,
      sugars: 0.2,
      sodiumMg: 350
    },
    serving: {
      size: "2 pieces (150g)",
      yield: "6 portions"
    },
    preparation: {
      time: "45 min",
      difficulty: "Hard"
    },
    measurementBasis: {
      metric: { weight: 100 },
      imperial: { weight: 3.5 }
    },
    homeScienceInsight: "The Maillard reaction creates the delicious golden crust during frying, while the buttermilk marinade tenderizes the protein structures."
  },
  {
    id: "vegetable-salad",
    name: "Vegetable Salad",
    category: "salad",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    description: "A refreshing mix of crisp, fresh vegetables tossed in a light lemon dressing.",
    dietary: ["Vegan", "Vegetarian", "High Fiber"],
    ingredients: ["Cucumber", "Tomato", "Carrot", "Onion", "Lettuce", "Lemon juice", "Salt"],
    allergens: {
      contains: [],
      mayContain: []
    },
    nutrition: {
      basis: "100g",
      energyKcal: 25,
      protein: 1.2,
      carbohydrates: 5.5,
      fat: 0.2,
      saturatedFat: 0,
      fiber: 2.1,
      sugars: 2.8,
      sodiumMg: 15
    },
    serving: {
      size: "1 bowl (150g)",
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
    homeScienceInsight: "Preparing salads requires understanding oxidation; applying acidic lemon juice helps prevent the vegetables from browning too quickly."
  },
  {
    id: "fruit-salad",
    name: "Fruit Salad",
    category: "salad",
    image: "https://images.unsplash.com/photo-1564093497595-593b96d80180?auto=format&fit=crop&q=80&w=800",
    description: "A sweet, vibrant medley of fresh seasonal fruits.",
    dietary: ["Vegan", "Vegetarian", "Low Fat"],
    ingredients: ["Apple", "Banana", "Orange", "Papaya", "Watermelon", "Grapes"],
    allergens: {
      contains: [],
      mayContain: []
    },
    nutrition: {
      basis: "100g",
      energyKcal: 45,
      protein: 0.6,
      carbohydrates: 11.5,
      fat: 0.3,
      saturatedFat: 0,
      fiber: 1.8,
      sugars: 9.5,
      sodiumMg: 2
    },
    serving: {
      size: "1 cup (120g)",
      yield: "5 portions"
    },
    preparation: {
      time: "15 min",
      difficulty: "Easy"
    },
    measurementBasis: {
      metric: { weight: 100 },
      imperial: { weight: 3.5 }
    },
    homeScienceInsight: "Careful cutting techniques ensure uniform pieces, providing better mouthfeel, while understanding fruit sugar profiles helps balance the overall sweetness."
  },
  {
    id: "kabab",
    name: "Chicken Kabab",
    category: "savory",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
    description: "Succulent, spiced chicken minced and grilled to perfection on skewers.",
    dietary: ["High Protein"],
    ingredients: ["Minced Chicken", "Onions", "Garlic", "Ginger", "Spices", "Coriander", "Cooking Oil"],
    allergens: {
      contains: [],
      mayContain: ["Soy"]
    },
    nutrition: {
      basis: "100g",
      energyKcal: 210,
      protein: 18.5,
      carbohydrates: 4.2,
      fat: 13.0,
      saturatedFat: 3.5,
      fiber: 1.0,
      sugars: 1.2,
      sodiumMg: 320
    },
    serving: {
      size: "2 skewers (120g)",
      yield: "8 portions"
    },
    preparation: {
      time: "40 min",
      difficulty: "Medium"
    },
    measurementBasis: {
      metric: { weight: 100 },
      imperial: { weight: 3.5 }
    },
    homeScienceInsight: "The binding of the minced meat without egg relies on the mechanical working of the meat proteins (myosin) to create a sticky matrix."
  },
  {
    id: "soft-drinks",
    name: "Soft Drinks",
    category: "beverage",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800",
    description: "Chilled, bubbly, and refreshing carbonated beverages.",
    dietary: ["Vegan", "Vegetarian"],
    ingredients: ["Carbonated Water", "Sugar", "Coloring", "Phosphoric Acid", "Natural Flavors", "Caffeine"],
    allergens: {
      contains: [],
      mayContain: []
    },
    nutrition: {
      basis: "100ml",
      energyKcal: 42,
      protein: 0,
      carbohydrates: 10.6,
      fat: 0,
      saturatedFat: 0,
      fiber: 0,
      sugars: 10.6,
      sodiumMg: 4
    },
    variants: [
      {
        name: "Coca-Cola",
        nutrition: {
          basis: "100ml",
          energyKcal: 42,
          protein: 0,
          carbohydrates: 10.6,
          fat: 0,
          saturatedFat: 0,
          fiber: 0,
          sugars: 10.6,
          sodiumMg: 4
        },
        ingredients: ["Carbonated Water", "Sugar", "Color (Caramel E150d)", "Phosphoric Acid", "Natural Flavors", "Caffeine"],
        dietary: ["Vegan"],
        allergens: { contains: [], mayContain: [] }
      },
      {
        name: "MOJO",
        nutrition: {
          basis: "100ml",
          energyKcal: 45,
          protein: 0,
          carbohydrates: 11.2,
          fat: 0,
          saturatedFat: 0,
          fiber: 0,
          sugars: 11.2,
          sodiumMg: 5
        },
        ingredients: ["Carbonated Water", "Sugar", "Citric Acid", "Flavors", "Preservatives"],
        dietary: ["Vegan"],
        allergens: { contains: [], mayContain: [] }
      }
    ],
    serving: {
      size: "1 glass (250ml)",
      yield: "1 portion"
    },
    measurementBasis: {
      metric: { volume: 100 },
      imperial: { volume: 3.4 }
    },
    homeScienceInsight: "Carbonation involves dissolving carbon dioxide gas under pressure; understanding temperature effects on gas solubility explains why cold drinks hold fizz longer."
  },
  {
    id: "tang",
    name: "Tang",
    category: "beverage",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&q=80&w=800",
    description: "A sweet, citrusy prepared orange beverage, perfect for a refreshing energy boost.",
    dietary: ["Vegetarian", "Vegan"],
    ingredients: ["Water", "Sugar", "Citric Acid", "Artificial Flavor", "Ascorbic Acid (Vitamin C)", "Food Color (Yellow 5, Yellow 6)"],
    allergens: {
      contains: [],
      mayContain: []
    },
    nutrition: {
      basis: "100ml (Prepared)",
      energyKcal: 38,
      protein: 0,
      carbohydrates: 9.5,
      fat: 0,
      saturatedFat: 0,
      fiber: 0,
      sugars: 9.0,
      sodiumMg: 15
    },
    serving: {
      size: "1 glass (200ml)",
      yield: "5 portions"
    },
    preparation: {
      time: "5 min",
      difficulty: "Easy"
    },
    measurementBasis: {
      metric: { volume: 100 },
      imperial: { volume: 3.4 }
    },
    homeScienceInsight: "The preparation demonstrates solute-solvent interactions; stirring increases the kinetic energy, helping the powdered sugar and acids dissolve faster in water."
  },
  {
    id: "pudding",
    name: "Caramel Pudding",
    category: "dessert",
    image: "https://images.unsplash.com/photo-1590080826978-8316dfc0d663?auto=format&fit=crop&q=80&w=800",
    description: "A silky smooth baked custard dessert topped with a layer of rich, golden caramel.",
    dietary: ["Vegetarian"],
    ingredients: ["Milk", "Eggs", "Sugar", "Vanilla Extract"],
    allergens: {
      contains: ["Milk", "Egg"],
      mayContain: []
    },
    nutrition: {
      basis: "100g",
      energyKcal: 145,
      protein: 4.8,
      carbohydrates: 22.5,
      fat: 4.2,
      saturatedFat: 2.1,
      fiber: 0,
      sugars: 21.0,
      sodiumMg: 55
    },
    serving: {
      size: "1 slice (120g)",
      yield: "6 portions"
    },
    preparation: {
      time: "60 min",
      difficulty: "Medium"
    },
    measurementBasis: {
      metric: { weight: 100 },
      imperial: { weight: 3.5 }
    },
    homeScienceInsight: "Baking in a water bath (bain-marie) ensures gentle, even heat distribution, preventing the egg proteins from coagulating too quickly and curdling."
  },
  {
    id: "custard",
    name: "Fruit Custard",
    category: "dessert",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800",
    description: "Creamy, chilled vanilla custard loaded with a colorful mix of fresh fruits.",
    dietary: ["Vegetarian"],
    ingredients: ["Milk", "Sugar", "Custard Powder (Cornstarch, Flavor, Color)", "Apple", "Banana", "Grapes", "Pomegranate"],
    allergens: {
      contains: ["Milk"],
      mayContain: ["Wheat"]
    },
    nutrition: {
      basis: "100g",
      energyKcal: 110,
      protein: 3.2,
      carbohydrates: 18.5,
      fat: 2.8,
      saturatedFat: 1.5,
      fiber: 1.2,
      sugars: 14.5,
      sodiumMg: 45
    },
    serving: {
      size: "1 bowl (150g)",
      yield: "6 portions"
    },
    preparation: {
      time: "30 min",
      difficulty: "Easy"
    },
    measurementBasis: {
      metric: { weight: 100 },
      imperial: { weight: 3.5 }
    },
    homeScienceInsight: "The thickening agent is cornstarch (in the custard powder), which undergoes gelatinization when heated with milk, trapping liquid in a starch network."
  }
];
