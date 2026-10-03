import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { foods, MeasurementSystem } from '../data/foods';
import { ArrowLeft, Scale, ChefHat, Info, Beaker, Leaf, AlertTriangle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import anime from 'animejs';
import { scrollToTop } from '../utils/lenis';

export function FoodDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [system, setSystem] = useState<MeasurementSystem>('metric');
  
  const food = foods.find(f => f.id === slug);

  // Ensure scroll is at top whenever food changes
  useEffect(() => {
    scrollToTop(true);
  }, [slug]);

  useEffect(() => {
    if (!food) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    anime({
      targets: '.animate-stagger',
      translateY: [16, 0],
      opacity: [0, 1],
      duration: 500,
      delay: anime.stagger(70),
      easing: 'easeOutQuad'
    });
  }, [food, slug]);

  if (!food) {
    return (
      <div className="min-h-screen bg-brand-cream flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 rounded-full bg-brand-soft-baby-blue flex items-center justify-center mb-6">
          <span className="text-3xl">🍽️</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-display text-brand-text mb-3">Dish Not Found</h1>
        <p className="text-brand-text/70 max-w-md mb-8 leading-relaxed">
          We couldn't locate this specific food item from our festival showcase.
        </p>
        <button 
          onClick={() => {
            scrollToTop(true);
            navigate('/#menu');
          }}
          className="bg-brand-baby-blue hover:bg-brand-blue text-brand-text px-7 py-3.5 rounded-full font-bold flex items-center gap-2.5 transition-all shadow-sm hover:shadow-md"
        >
          <ArrowLeft size={18} /> Return to Festival Menu
        </button>
      </div>
    );
  }

  const currentIndex = foods.findIndex(f => f.id === slug);
  const nextFood = foods[(currentIndex + 1) % foods.length];
  const prevFood = foods[(currentIndex - 1 + foods.length) % foods.length];

  return (
    <div className="min-h-screen bg-brand-cream pt-24 md:pt-28 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Navigation Breadcrumb Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 animate-stagger">
          <Link 
            to="/#menu" 
            onClick={() => scrollToTop(false)}
            className="inline-flex items-center gap-2 text-brand-text/70 hover:text-brand-text transition-colors font-bold text-xs sm:text-sm bg-white/90 hover:bg-white px-4 py-2 rounded-full shadow-xs border border-brand-text/5 hover:border-brand-baby-blue/40"
          >
            <ArrowLeft size={15} /> Back to Festival Menu
          </Link>
          <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-brand-text/50 bg-brand-soft-cream/80 px-3.5 py-1.5 rounded-full border border-brand-text/5">
            SPSC Class 7 Tulip • Food #{currentIndex + 1} of {foods.length}
          </div>
        </div>

        {/* Hero Card */}
        <div className="bg-white/95 rounded-[28px] sm:rounded-[36px] md:rounded-[44px] p-5 sm:p-7 md:p-9 shadow-[0_8px_30px_rgba(48,52,59,0.04)] border border-brand-text/5 mb-8 animate-stagger flex flex-col md:flex-row gap-6 md:gap-10">
          
          {/* Dish Image */}
          <div className="w-full md:w-5/12 lg:w-4/12 shrink-0">
            <div className="relative aspect-[4/3] sm:aspect-square md:aspect-[4/5] rounded-[22px] sm:rounded-[30px] overflow-hidden bg-brand-soft-cream/80 border-2 border-white shadow-sm">
              <img 
                src={food.image} 
                alt={food.name} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2">
                <span className="bg-white/95 backdrop-blur-xs text-brand-text px-3.5 py-1.5 rounded-full text-xs font-bold shadow-xs uppercase tracking-wider border border-brand-text/5">
                  {food.category}
                </span>
              </div>
            </div>
          </div>
          
          {/* Main Info */}
          <div className="flex flex-col justify-center flex-grow">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-bold text-brand-text/60 tracking-wider uppercase">
                Home Science Food Presentation
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-brand-text mb-3 leading-tight">
              {food.name}
            </h1>
            
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5">
              {food.dietary.map(tag => (
                <span key={tag} className="flex items-center gap-1.5 text-xs font-bold text-brand-text/75 bg-brand-soft-cream px-3 py-1.5 rounded-full border border-brand-text/5">
                  <Leaf size={13} className="text-emerald-600" /> {tag}
                </span>
              ))}
            </div>
            
            <p className="text-brand-text/80 text-base md:text-lg mb-6 leading-relaxed">
              {food.description}
            </p>

            {/* Preparation Details */}
            {food.preparation && (
              <div className="flex flex-wrap items-center gap-4 sm:gap-8 p-3.5 sm:p-4 bg-brand-soft-baby-blue/35 rounded-2xl border border-brand-baby-blue/30 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xs">
                    <ChefHat size={18} className="text-brand-baby-blue" />
                  </div>
                  <div>
                    <div className="text-[10px] text-brand-text/60 font-bold uppercase tracking-wider">Prep Time</div>
                    <div className="font-bold text-xs sm:text-sm text-brand-text">{food.preparation.time}</div>
                  </div>
                </div>
                <div className="hidden sm:block w-px h-8 bg-brand-text/10"></div>
                <div>
                  <div className="text-[10px] text-brand-text/60 font-bold uppercase tracking-wider">Culinary Difficulty</div>
                  <div className="font-bold text-xs sm:text-sm text-brand-text">{food.preparation.difficulty}</div>
                </div>
                <div className="hidden sm:block w-px h-8 bg-brand-text/10"></div>
                <div>
                  <div className="text-[10px] text-brand-text/60 font-bold uppercase tracking-wider">Serving Size</div>
                  <div className="font-bold text-xs sm:text-sm text-brand-text">{food.serving.size}</div>
                </div>
              </div>
            )}

            {/* Preparation Disclaimer Badge */}
            <div className="p-3 bg-brand-cream/90 rounded-xl border border-brand-text/5 flex items-start gap-2.5">
              <ShieldCheck size={18} className="text-brand-text/70 shrink-0 mt-0.5" />
              <p className="text-xs text-brand-text/75 leading-relaxed">
                <strong className="font-bold text-brand-text">Prepared at home • Presented at school: </strong>
                This dish was crafted at home by Section Tulip students and exhibited as part of our SPSC Home Science Festival.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Grid: 2 Columns on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* Main Content Column (Left, 2 cols) */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            
            {/* Ingredients Section */}
            <div className="bg-white/95 p-6 md:p-8 rounded-[28px] md:rounded-[36px] shadow-[0_4px_20px_rgba(48,52,59,0.03)] border border-brand-text/5 animate-stagger">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-brand-soft-mint flex items-center justify-center">
                  <span className="text-xl">🥗</span>
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-display text-brand-text">Key Ingredients</h2>
                  <p className="text-xs text-brand-text/60">Fresh, selected items measured for this recipe</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {food.ingredients.map(ing => (
                  <span key={ing} className="bg-brand-soft-cream/80 hover:bg-brand-soft-cream border border-brand-text/5 text-brand-text px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors">
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Home Science Insight Box */}
            <div className="bg-brand-text text-white p-6 md:p-8 rounded-[28px] md:rounded-[36px] shadow-sm animate-stagger relative overflow-hidden">
              <div className="absolute -right-8 -top-8 text-white/5 rotate-12 pointer-events-none">
                <Beaker size={160} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2.5 mb-3 text-brand-baby-blue">
                  <Beaker size={22} />
                  <h2 className="text-sm md:text-base font-bold tracking-widest uppercase">Home Science Concept</h2>
                </div>
                <h3 className="text-lg md:text-xl font-display text-brand-blue mb-3">
                  The Culinary Science Behind {food.name}
                </h3>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
                  {food.homeScienceInsight}
                </p>
              </div>
            </div>

            {/* Allergens Notification */}
            {(food.allergens.contains.length > 0 || food.allergens.mayContain.length > 0) && (
              <div className="bg-[#FFF8F8] border border-[#FFDADA] p-6 rounded-[28px] md:rounded-[36px] animate-stagger">
                <div className="flex items-center gap-2.5 mb-3 text-[#D12027]">
                  <AlertTriangle size={20} />
                  <h2 className="text-lg font-display">Allergen Information</h2>
                </div>
                {food.allergens.contains.length > 0 && (
                  <div className="mb-2 text-xs sm:text-sm">
                    <span className="font-bold text-[#D12027]">Contains: </span>
                    <span className="text-brand-text/80">{food.allergens.contains.join(', ')}</span>
                  </div>
                )}
                {food.allergens.mayContain.length > 0 && (
                  <div className="text-xs sm:text-sm">
                    <span className="font-bold text-brand-text">May contain traces of: </span>
                    <span className="text-brand-text/80">{food.allergens.mayContain.join(', ')}</span>
                  </div>
                )}
              </div>
            )}
            
          </div>

          {/* Sidebar Column (Right, 1 col) */}
          <div className="space-y-6 md:space-y-8">
            
            {/* Nutrition Facts Card */}
            <div className="bg-white/95 p-6 md:p-8 rounded-[28px] md:rounded-[36px] shadow-[0_4px_20px_rgba(48,52,59,0.03)] border border-brand-text/5 animate-stagger">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-2xl bg-brand-soft-baby-blue/50 flex items-center justify-center">
                    <Scale size={18} className="text-brand-text" />
                  </div>
                  <h2 className="text-lg md:text-xl font-display text-brand-text">Nutrition Facts</h2>
                </div>
                
                {/* Metric/Imperial Switch */}
                <div className="flex items-center bg-brand-soft-cream p-1 rounded-full border border-brand-text/5">
                  <button 
                    onClick={() => setSystem('metric')}
                    className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all ${
                      system === 'metric' 
                        ? 'bg-brand-baby-blue text-brand-text shadow-2xs' 
                        : 'text-brand-text/60 hover:text-brand-text'
                    }`}
                  >
                    Metric
                  </button>
                  <button 
                    onClick={() => setSystem('imperial')}
                    className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all ${
                      system === 'imperial' 
                        ? 'bg-brand-baby-blue text-brand-text shadow-2xs' 
                        : 'text-brand-text/60 hover:text-brand-text'
                    }`}
                  >
                    Imperial
                  </button>
                </div>
              </div>

              <div className="text-xs text-brand-text/60 mb-4 pb-3 border-b border-brand-text/10 flex justify-between items-center">
                <span>Serving basis</span>
                <span className="font-bold text-brand-text">
                  {system === 'metric' 
                    ? food.nutrition.basis 
                    : (food.measurementBasis?.imperial.weight ? `${food.measurementBasis.imperial.weight} oz` : 
                       food.measurementBasis?.imperial.volume ? `${food.measurementBasis.imperial.volume} fl oz` : food.nutrition.basis)
                  }
                </span>
              </div>

              {/* Calories Highlight */}
              <div className="bg-brand-cream/80 p-4 rounded-2xl border border-brand-text/5 mb-4 flex justify-between items-baseline">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-text/60">Energy Value</div>
                  <div className="text-xs text-brand-text/50">per serving portion</div>
                </div>
                <div className="text-right">
                  <span className="font-display text-3xl md:text-4xl text-brand-text">{food.nutrition.energyKcal}</span>
                  <span className="text-xs font-bold text-brand-text/60 ml-1">kcal</span>
                </div>
              </div>
              
              <div className="space-y-1.5 pt-1 text-xs sm:text-sm">
                <NutritionRow label="Total Fat" value={`${food.nutrition.fat}g`} />
                <NutritionRow label="Saturated Fat" value={`${food.nutrition.saturatedFat}g`} indent />
                <NutritionRow label="Sodium" value={`${food.nutrition.sodiumMg}mg`} />
                <NutritionRow label="Total Carbohydrates" value={`${food.nutrition.carbohydrates}g`} />
                <NutritionRow label="Dietary Fiber" value={`${food.nutrition.fiber}g`} indent />
                <NutritionRow label="Sugars" value={`${food.nutrition.sugars}g`} indent />
                <NutritionRow label="Protein" value={`${food.nutrition.protein}g`} />
              </div>

              <p className="text-[11px] text-brand-text/50 mt-5 pt-3 border-t border-brand-text/5 leading-normal">
                * Nutritional values are approximate student calculations for educational Home Science demonstration.
              </p>
            </div>

            {/* Class Presentation Notice Card */}
            <div className="bg-brand-soft-baby-blue/30 border border-brand-baby-blue/25 p-5 sm:p-6 rounded-[28px] md:rounded-[36px] animate-stagger">
              <div className="flex items-center gap-2 mb-2.5">
                <Info size={17} className="text-brand-text" />
                <h3 className="font-bold text-xs tracking-wider uppercase text-brand-text/80">Project Context</h3>
              </div>
              <p className="text-xs text-brand-text/75 leading-relaxed">
                Presented by Class 7 Section Tulip of Southpoint School and College. Students learned how temperature, hygiene, and balanced macros contribute to healthy eating.
              </p>
            </div>

          </div>
        </div>

        {/* Previous & Next Dish Navigation */}
        <div className="mt-12 pt-8 border-t border-brand-text/10 flex flex-col sm:flex-row gap-4 justify-between animate-stagger">
          <Link 
            to={`/food/${prevFood.id}`}
            onClick={() => scrollToTop(true)}
            className="flex items-center gap-3.5 bg-white/90 hover:bg-white p-3.5 sm:p-4 rounded-2xl shadow-xs hover:shadow-md transition-all group w-full sm:w-1/2 border border-brand-text/5"
          >
            <div className="w-11 h-11 rounded-xl bg-brand-soft-cream flex items-center justify-center shrink-0 group-hover:bg-brand-baby-blue transition-colors">
              <ArrowLeft size={18} className="text-brand-text" />
            </div>
            <div className="text-left overflow-hidden">
              <div className="text-[10px] font-bold text-brand-text/50 uppercase tracking-wider mb-0.5">Previous Dish</div>
              <div className="font-bold text-sm text-brand-text truncate">{prevFood.name}</div>
            </div>
          </Link>
          
          <Link 
            to={`/food/${nextFood.id}`}
            onClick={() => scrollToTop(true)}
            className="flex items-center gap-3.5 bg-white/90 hover:bg-white p-3.5 sm:p-4 rounded-2xl shadow-xs hover:shadow-md transition-all group w-full sm:w-1/2 justify-end text-right border border-brand-text/5"
          >
            <div className="text-right overflow-hidden">
              <div className="text-[10px] font-bold text-brand-text/50 uppercase tracking-wider mb-0.5">Next Dish</div>
              <div className="font-bold text-sm text-brand-text truncate">{nextFood.name}</div>
            </div>
            <div className="w-11 h-11 rounded-xl bg-brand-soft-cream flex items-center justify-center shrink-0 group-hover:bg-brand-baby-blue transition-colors">
              <ArrowRight size={18} className="text-brand-text" />
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}

function NutritionRow({ label, value, indent = false }: { label: string, value: string, indent?: boolean }) {
  return (
    <div className={`flex justify-between py-1.5 border-b border-brand-text/5 ${indent ? 'pl-3 text-xs text-brand-text/70' : 'font-bold text-brand-text'}`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
