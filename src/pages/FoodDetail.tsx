import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { foods, MeasurementSystem } from '../data/foods';
import { ArrowLeft, Scale, Beaker, AlertTriangle, ArrowRight, ShieldCheck, Flame } from 'lucide-react';
import { scrollToTop } from '../utils/lenis';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { JapaneseSeal, RetroStamp, Halftone, ComicBurst } from '../components/graphic';

export function FoodDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [system, setSystem] = useState<MeasurementSystem>('metric');
  
  const food = foods.find(f => f.id === slug);

  // Ensure scroll is instantly at top whenever dish changes
  useEffect(() => {
    scrollToTop(true);
  }, [slug]);

  if (!food) {
    return (
      <div className="min-h-screen bg-offwhite flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 rounded-2xl bg-primary border-3 border-black shadow-[5px_5px_0px_#111111] flex items-center justify-center mb-6">
          <span className="text-3xl">🍽️</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-black text-black mb-3">
          Dish Not Found (該当なし)
        </h1>
        <p className="text-black/80 max-w-md mb-8 font-medium">
          We couldn't locate this specific food item in our festival showcase.
        </p>
        <button 
          onClick={() => {
            scrollToTop(true);
            navigate('/#menu');
          }}
          className="btn-poster btn-poster-yellow px-6 py-3 rounded-xl"
        >
          <ArrowLeft size={18} className="mr-2 inline" /> Return to Menu (献立に戻る)
        </button>
      </div>
    );
  }

  const currentIndex = foods.findIndex(f => f.id === slug);
  const nextFood = foods[(currentIndex + 1) % foods.length];
  const prevFood = foods[(currentIndex - 1 + foods.length) % foods.length];

  const categoryKanjiMap: Record<string, string> = {
    main: '主食',
    savory: '風味',
    salad: '生菜',
    beverage: '飲料',
    dessert: '甘味',
  };

  return (
    <div className="min-h-screen bg-offwhite pt-24 md:pt-32 pb-20 relative overflow-hidden">
      
      <Halftone color="black" opacity={0.04} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        
        {/* Navigation Breadcrumb Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link 
            to="/#menu" 
            onClick={() => scrollToTop(false)}
            className="inline-flex items-center gap-2 text-black font-display font-black text-xs sm:text-sm bg-white border-3 border-black px-4 py-2 rounded-xl shadow-[4px_4px_0px_#111111] hover:bg-primary active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all uppercase"
          >
            <ArrowLeft size={16} /> Back to Festival Menu (献立に戻る)
          </Link>
          <div className="text-xs font-mono font-black uppercase tracking-wider text-black bg-primary border-3 border-black px-3.5 py-1.5 rounded-xl shadow-[3px_3px_0px_#111111] flex items-center gap-1.5">
            <span>Dish #{currentIndex + 1} of {foods.length}</span>
            <span>·</span>
            <span>Class 7 Tulip 第7学年</span>
          </div>
        </div>

        {/* Hero Magazine Card */}
        <div className="bg-white border-4 border-black rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[8px_8px_0px_#111111] mb-8 flex flex-col md:flex-row gap-8 lg:gap-12 items-center relative overflow-hidden">
          
          {/* Dish Image with Saturated Packaging Frame */}
          <div className="w-full md:w-5/12 shrink-0">
            <div className="relative aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden border-3.5 border-black bg-primary shadow-[6px_6px_0px_#111111]">
              <img 
                src={food.image} 
                alt={food.name} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              
              {/* Category Sticker */}
              <div className="absolute top-3 left-3">
                <Badge variant="yellow" rotate="-2" className="shadow-[3px_3px_0px_#111111] border-2.5 font-black text-xs">
                  <span className="font-mono mr-1 opacity-75">{categoryKanjiMap[food.category] || '料理'}</span>
                  <span>{food.category}</span>
                </Badge>
              </div>

              {/* Price-tag Style Calorie Overlay */}
              <div className="absolute bottom-3 right-3 bg-black text-yellow px-2.5 py-1 rounded-lg text-xs font-mono font-black flex items-center gap-1 border-2 border-white shadow-[2px_2px_0px_#FFD21F]">
                <Flame size={14} className="text-red fill-red" />
                <span>{food.nutrition.energyKcal} kcal</span>
              </div>
            </div>
          </div>
          
          {/* Main Info */}
          <div className="flex flex-col justify-center flex-grow">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono uppercase font-black text-red bg-red/10 px-2 py-0.5 rounded border border-red">
                家庭科 食育展示 · RECIPE NO. 0{currentIndex + 1}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-black mb-3 leading-[0.98] tracking-tight">
              {food.name}
            </h1>
            
            {/* Dietary Tags (Zero-Pill Discipline) */}
            <div className="flex flex-wrap items-center gap-2 mb-5 text-xs font-bold text-black font-mono">
              {food.dietary.map((tag, i) => (
                <React.Fragment key={tag}>
                  <span className="bg-yellow border-2 border-black px-2 py-0.5 rounded font-black">
                    {tag}
                  </span>
                  {i < food.dietary.length - 1 && <span className="opacity-40">·</span>}
                </React.Fragment>
              ))}
            </div>
            
            <p className="text-black text-base sm:text-lg mb-6 leading-relaxed font-medium">
              {food.description}
            </p>

            {/* Preparation Details Grid */}
            {food.preparation && (
              <div className="grid grid-cols-3 gap-3 p-3.5 bg-offwhite border-3 border-black rounded-2xl shadow-[3px_3px_0px_#111111] mb-5">
                <div>
                  <div className="text-[10px] font-mono text-black/70 uppercase font-black">Prep Time (調理時間)</div>
                  <div className="font-display font-black text-sm sm:text-base text-black">{food.preparation.time}</div>
                </div>
                <div className="border-x-2 border-black/15 px-2">
                  <div className="text-[10px] font-mono text-black/70 uppercase font-black">Difficulty (難易度)</div>
                  <div className="font-display font-black text-sm sm:text-base text-black">{food.preparation.difficulty}</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-black/70 uppercase font-black">Serving (分量)</div>
                  <div className="font-display font-black text-sm sm:text-base text-black truncate">{food.serving.size}</div>
                </div>
              </div>
            )}

            {/* Preparation Disclaimer Badge */}
            <div className="p-3.5 bg-yellow border-3 border-black rounded-xl flex items-start gap-2.5 shadow-[3px_3px_0px_#111111]">
              <ShieldCheck size={20} className="text-black shrink-0 mt-0.5" />
              <p className="text-xs text-black font-bold leading-relaxed">
                <strong className="font-black font-display uppercase tracking-wide">Prepared at home • Presented at school: </strong>
                This dish was crafted at home by Section Tulip students and exhibited as part of our SPSC Home Science Festival.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Grid: 2 Columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content Column (Left, 7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Ingredients Section */}
            <div className="bg-white border-3.5 border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_#111111]">
              <div className="flex items-center justify-between mb-5 pb-3 border-b-2.5 border-black/15">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">🥗</span>
                  <h2 className="text-xl sm:text-2xl font-display font-black text-black">
                    Recipe Ingredients (材料一覧)
                  </h2>
                </div>
                <span className="text-xs font-mono font-black text-black bg-yellow px-2 py-0.5 rounded border border-black">
                  {food.ingredients.length} items
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {food.ingredients.map(ing => (
                  <span 
                    key={ing} 
                    className="bg-offwhite border-2.5 border-black text-black px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold shadow-[2px_2px_0px_#111111]"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Home Science Insight Box (Deep Black & Poster Yellow) */}
            <div className="bg-deep-black text-white border-3.5 border-black rounded-3xl p-6 sm:p-8 shadow-[8px_8px_0px_#FFD21F] relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3 text-yellow">
                  <Beaker size={22} />
                  <h2 className="text-xs sm:text-sm font-mono font-black tracking-widest uppercase">
                    Home Science Principle (家庭科学の原理)
                  </h2>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-black text-white mb-3">
                  The Chemical & Culinary Reaction Behind {food.name}
                </h3>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed font-medium">
                  {food.homeScienceInsight}
                </p>
              </div>
            </div>

            {/* Allergens Notification (Vermillion Red Banner) */}
            {(food.allergens.contains.length > 0 || food.allergens.mayContain.length > 0) && (
              <div className="bg-red text-white border-3.5 border-black rounded-3xl p-6 shadow-[6px_6px_0px_#111111]">
                <div className="flex items-center gap-2.5 mb-3">
                  <AlertTriangle size={22} className="text-yellow" />
                  <h2 className="text-lg font-display font-black text-white uppercase tracking-tight">
                    Allergen Information (アレルゲン明記)
                  </h2>
                </div>
                {food.allergens.contains.length > 0 && (
                  <div className="mb-2 text-xs sm:text-sm font-bold text-white">
                    <strong className="font-black text-yellow uppercase font-mono mr-1">Contains (特定原材料): </strong>
                    <span>{food.allergens.contains.join(', ')}</span>
                  </div>
                )}
                {food.allergens.mayContain.length > 0 && (
                  <div className="text-xs sm:text-sm font-medium text-white/90">
                    <strong className="font-bold text-white uppercase font-mono mr-1">May contain traces of: </strong>
                    <span>{food.allergens.mayContain.join(', ')}</span>
                  </div>
                )}
              </div>
            )}
            
          </div>

          {/* Sidebar Column (Right, 5 cols) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            
            {/* Nutrition Facts Card */}
            <div className="bg-white border-3.5 border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_#111111]">
              <div className="flex items-center justify-between mb-5 pb-3 border-b-3 border-black">
                <div className="flex items-center gap-2">
                  <Scale size={22} className="text-black" />
                  <h2 className="text-xl font-display font-black text-black">
                    Nutrition Facts (栄養成分)
                  </h2>
                </div>
                
                {/* Metric/Imperial Switch */}
                <div className="flex items-center bg-offwhite border-2 border-black p-0.5 rounded-xl shadow-[2px_2px_0px_#111111]">
                  <button 
                    onClick={() => setSystem('metric')}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                      system === 'metric' 
                        ? 'bg-primary text-black font-black shadow-[1px_1px_0px_#111111]' 
                        : 'text-black/60 hover:text-black'
                    }`}
                  >
                    Metric
                  </button>
                  <button 
                    onClick={() => setSystem('imperial')}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                      system === 'imperial' 
                        ? 'bg-primary text-black font-black shadow-[1px_1px_0px_#111111]' 
                        : 'text-black/60 hover:text-black'
                    }`}
                  >
                    Imperial
                  </button>
                </div>
              </div>

              <div className="text-xs font-mono text-black/80 mb-4 pb-3 border-b border-black/15 flex justify-between items-center">
                <span>Serving basis (基準量)</span>
                <span className="font-black text-black">
                  {system === 'metric' 
                    ? food.nutrition.basis 
                    : (food.measurementBasis?.imperial.weight ? `${food.measurementBasis.imperial.weight} oz` : 
                       food.measurementBasis?.imperial.volume ? `${food.measurementBasis.imperial.volume} fl oz` : food.nutrition.basis)
                  }
                </span>
              </div>

              {/* Calories Callout Box */}
              <div className="bg-primary border-3 border-black p-4 rounded-2xl shadow-[4px_4px_0px_#111111] mb-5 flex justify-between items-baseline">
                <div>
                  <div className="text-xs font-display font-black uppercase tracking-wider text-black">Energy Value (熱量)</div>
                  <div className="text-xs font-mono text-black/75">per measured portion</div>
                </div>
                <div className="text-right">
                  <span className="font-display font-black text-4xl text-black">{food.nutrition.energyKcal}</span>
                  <span className="text-xs font-mono font-black text-black ml-1">kcal</span>
                </div>
              </div>
              
              {/* Nutritional Rows */}
              <div className="space-y-2 text-xs sm:text-sm font-mono">
                <NutritionRow label="Total Fat (脂質)" value={`${food.nutrition.fat}g`} />
                <NutritionRow label="Saturated Fat (飽和脂肪酸)" value={`${food.nutrition.saturatedFat}g`} indent />
                <NutritionRow label="Sodium (食塩相当量)" value={`${food.nutrition.sodiumMg}mg`} />
                <NutritionRow label="Total Carbohydrates (炭水化物)" value={`${food.nutrition.carbohydrates}g`} />
                <NutritionRow label="Dietary Fiber (食物繊維)" value={`${food.nutrition.fiber}g`} indent />
                <NutritionRow label="Sugars (糖質)" value={`${food.nutrition.sugars}g`} indent />
                <NutritionRow label="Protein (蛋白質)" value={`${food.nutrition.protein}g`} />
              </div>

              <p className="text-[11px] font-mono text-black/70 mt-5 pt-3 border-t border-black/15 leading-normal">
                * Nutritional values are approximate student calculations for educational Home Science demonstration.
              </p>
            </div>

            {/* SPSC Project Context Badge (Cobalt Blue & White) */}
            <div className="bg-blue text-white border-3.5 border-black p-5 rounded-2xl shadow-[5px_5px_0px_#111111]">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🏫</span>
                <h3 className="font-display font-black text-xs tracking-wider uppercase text-yellow">
                  Academic Context · 南尖学園
                </h3>
              </div>
              <p className="text-xs text-white/90 font-medium leading-relaxed">
                Presented by Class 7 Section Tulip of Southpoint School and College. Students learned how heat, moisture, hygiene, and balanced macros contribute to healthy eating.
              </p>
            </div>

          </div>
        </div>

        {/* Previous & Next Dish Navigation Bar */}
        <div className="mt-12 pt-8 border-t-3 border-black flex flex-col sm:flex-row gap-4 justify-between">
          <Link 
            to={`/food/${prevFood.id}`}
            onClick={() => scrollToTop(true)}
            className="flex items-center gap-3.5 bg-white hover:bg-yellow border-3 border-black p-4 rounded-2xl shadow-[4px_4px_0px_#111111] hover:shadow-[6px_6px_0px_#111111] hover:-translate-y-0.5 transition-all group w-full sm:w-1/2"
          >
            <div className="w-11 h-11 rounded-xl bg-primary border-2 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#111111]">
              <ArrowLeft size={20} className="text-black" />
            </div>
            <div className="text-left overflow-hidden">
              <div className="text-[10px] font-mono font-black text-black/60 uppercase tracking-wider mb-0.5">
                Previous Dish (前の一品)
              </div>
              <div className="font-display font-black text-sm text-black truncate">{prevFood.name}</div>
            </div>
          </Link>
          
          <Link 
            to={`/food/${nextFood.id}`}
            onClick={() => scrollToTop(true)}
            className="flex items-center gap-3.5 bg-white hover:bg-yellow border-3 border-black p-4 rounded-2xl shadow-[4px_4px_0px_#111111] hover:shadow-[6px_6px_0px_#111111] hover:-translate-y-0.5 transition-all group w-full sm:w-1/2 justify-end text-right"
          >
            <div className="text-right overflow-hidden">
              <div className="text-[10px] font-mono font-black text-black/60 uppercase tracking-wider mb-0.5">
                Next Dish (次の一品)
              </div>
              <div className="font-display font-black text-sm text-black truncate">{nextFood.name}</div>
            </div>
            <div className="w-11 h-11 rounded-xl bg-primary border-2 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#111111]">
              <ArrowRight size={20} className="text-black" />
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}

function NutritionRow({ label, value, indent = false }: { label: string, value: string, indent?: boolean }) {
  return (
    <div className={`flex justify-between py-1.5 border-b border-black/10 ${indent ? 'pl-3 text-xs text-black/80' : 'font-bold text-black'}`}>
      <span>{label}</span>
      <span className="font-mono font-black">{value}</span>
    </div>
  );
}
