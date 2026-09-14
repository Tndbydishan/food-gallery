import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { foods, MeasurementSystem } from '../data/foods';
import { ArrowLeft, Scale, ChefHat, Info, Beaker, Leaf, AlertTriangle, ArrowRight } from 'lucide-react';
import anime from 'animejs';

export function FoodDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [system, setSystem] = useState<MeasurementSystem>('metric');
  
  const food = foods.find(f => f.id === slug);

  useEffect(() => {
    if (food) {
      anime({
        targets: '.animate-stagger',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 600,
        delay: anime.stagger(100),
        easing: 'easeOutExpo'
      });
    }
  }, [food]);

  if (!food) {
    return (
      <div className="min-h-screen bg-brand-cream flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-display text-brand-text mb-4">Food Not Found</h1>
        <p className="text-brand-text/60 mb-8">We couldn't find the dish you're looking for.</p>
        <button 
          onClick={() => navigate('/')}
          className="bg-brand-baby-blue text-brand-text px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-brand-blue transition-colors"
        >
          <ArrowLeft size={20} /> Back to Menu
        </button>
      </div>
    );
  }

  const currentIndex = foods.findIndex(f => f.id === slug);
  const nextFood = foods[(currentIndex + 1) % foods.length];
  const prevFood = foods[(currentIndex - 1 + foods.length) % foods.length];

  return (
    <div className="min-h-screen bg-brand-cream pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        
        {/* Navigation */}
        <div className="mb-8 animate-stagger opacity-0">
          <Link 
            to="/#menu" 
            className="inline-flex items-center gap-2 text-brand-text/60 hover:text-brand-blue transition-colors font-bold text-sm bg-white px-4 py-2 rounded-full shadow-sm"
          >
            <ArrowLeft size={16} /> Back to Festival Menu
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-[40px] p-4 md:p-8 shadow-sm border border-brand-text/5 mb-8 animate-stagger opacity-0 flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 lg:w-2/5 shrink-0 relative">
            <div className="aspect-square md:aspect-[4/5] rounded-[32px] overflow-hidden bg-brand-soft-cream">
              <img 
                src={food.image} 
                alt={food.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              <span className="bg-white/90 backdrop-blur-sm text-brand-text px-4 py-2 rounded-full text-xs font-bold shadow-sm uppercase tracking-wider">
                {food.category}
              </span>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-brand-text mb-4">{food.name}</h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {food.dietary.map(tag => (
                <span key={tag} className="flex items-center gap-1.5 text-xs font-bold text-brand-text/70 bg-brand-soft-cream px-3 py-1.5 rounded-full border border-brand-text/5">
                  <Leaf size={14} /> {tag}
                </span>
              ))}
            </div>
            
            <p className="text-brand-text/80 text-lg mb-8 leading-relaxed">
              {food.description}
            </p>

            {food.preparation && (
              <div className="flex items-center gap-6 p-4 bg-brand-soft-baby-blue/30 rounded-2xl border border-brand-baby-blue/20">
                <div className="flex items-center gap-2">
                  <ChefHat size={20} className="text-brand-blue" />
                  <div>
                    <div className="text-xs text-brand-text/60 font-bold uppercase tracking-wider">Prep Time</div>
                    <div className="font-bold text-brand-text">{food.preparation.time}</div>
                  </div>
                </div>
                <div className="w-px h-8 bg-brand-text/10"></div>
                <div>
                  <div className="text-xs text-brand-text/60 font-bold uppercase tracking-wider">Difficulty</div>
                  <div className="font-bold text-brand-text">{food.preparation.difficulty}</div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Ingredients */}
            <div className="bg-white p-6 md:p-8 rounded-[32px] shadow-sm border border-brand-text/5 animate-stagger opacity-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-brand-baby-blue flex items-center justify-center">
                  <span className="text-xl">🥗</span>
                </div>
                <h2 className="text-2xl font-display">Ingredients</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {food.ingredients.map(ing => (
                  <span key={ing} className="bg-brand-soft-cream border border-brand-text/5 text-brand-text px-4 py-2 rounded-xl text-sm font-bold">
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Home Science Insight */}
            <div className="bg-brand-text text-white p-6 md:p-8 rounded-[32px] shadow-sm animate-stagger opacity-0 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 text-white/5 rotate-12 pointer-events-none">
                <Beaker size={160} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4 text-brand-baby-blue">
                  <Beaker size={24} />
                  <h2 className="text-xl font-bold tracking-wider uppercase">Home Science Insight</h2>
                </div>
                <p className="text-lg text-white/90 leading-relaxed font-medium">
                  {food.homeScienceInsight}
                </p>
              </div>
            </div>

            {/* Allergens (if any) */}
            {(food.allergens.contains.length > 0 || food.allergens.mayContain.length > 0) && (
              <div className="bg-[#FFF5F5] border border-[#FFE0E0] p-6 md:p-8 rounded-[32px] animate-stagger opacity-0">
                <div className="flex items-center gap-3 mb-4 text-[#D12027]">
                  <AlertTriangle size={24} />
                  <h2 className="text-xl font-display">Allergen Information</h2>
                </div>
                {food.allergens.contains.length > 0 && (
                  <div className="mb-3">
                    <span className="font-bold text-[#D12027]">Contains: </span>
                    <span className="text-brand-text/80">{food.allergens.contains.join(', ')}</span>
                  </div>
                )}
                {food.allergens.mayContain.length > 0 && (
                  <div>
                    <span className="font-bold text-brand-text">May contain traces of: </span>
                    <span className="text-brand-text/80">{food.allergens.mayContain.join(', ')}</span>
                  </div>
                )}
              </div>
            )}
            
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Nutrition Facts */}
            <div className="bg-white p-6 md:p-8 rounded-[32px] shadow-sm border border-brand-text/5 animate-stagger opacity-0">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-soft-cream flex items-center justify-center">
                    <Scale size={20} className="text-brand-blue" />
                  </div>
                  <h2 className="text-xl font-display">Nutrition</h2>
                </div>
                
                <button 
                  onClick={() => setSystem(s => s === 'metric' ? 'imperial' : 'metric')}
                  className="bg-brand-soft-cream text-brand-text px-3 py-1.5 rounded-full text-xs font-bold hover:bg-brand-soft-baby-blue transition-colors flex items-center gap-1"
                >
                  {system === 'metric' ? 'Metric' : 'Imperial'}
                </button>
              </div>

              <div className="text-sm text-brand-text/60 mb-4 pb-4 border-b border-brand-text/10 flex justify-between">
                <span>Amount per</span>
                <span className="font-bold text-brand-text">
                  {system === 'metric' 
                    ? food.nutrition.basis 
                    : (food.measurementBasis?.imperial.weight ? `${food.measurementBasis.imperial.weight} oz` : 
                       food.measurementBasis?.imperial.volume ? `${food.measurementBasis.imperial.volume} fl oz` : food.nutrition.basis)
                  }
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="font-bold text-xl">Calories</span>
                  <span className="font-display text-3xl text-brand-blue">{food.nutrition.energyKcal}</span>
                </div>
                
                <div className="space-y-2 pt-4">
                  <NutritionRow label="Total Fat" value={`${food.nutrition.fat}g`} />
                  <NutritionRow label="Saturated Fat" value={`${food.nutrition.saturatedFat}g`} indent />
                  <NutritionRow label="Sodium" value={`${food.nutrition.sodiumMg}mg`} />
                  <NutritionRow label="Total Carbohydrates" value={`${food.nutrition.carbohydrates}g`} />
                  <NutritionRow label="Dietary Fiber" value={`${food.nutrition.fiber}g`} indent />
                  <NutritionRow label="Sugars" value={`${food.nutrition.sugars}g`} indent />
                  <NutritionRow label="Protein" value={`${food.nutrition.protein}g`} />
                </div>
              </div>
            </div>

            {/* Project Note */}
            <div className="bg-brand-soft-baby-blue/30 border border-brand-baby-blue/20 p-6 rounded-[32px] animate-stagger opacity-0">
              <div className="flex items-center gap-2 mb-3">
                <Info size={18} className="text-brand-blue" />
                <h3 className="font-bold text-sm tracking-wider uppercase text-brand-text/80">Project Note</h3>
              </div>
              <p className="text-sm text-brand-text/70">
                This food item was prepared at home by students of Class 7 Section Tulip and brought to school for presentation as part of the Home Science Food Festival.
              </p>
            </div>

          </div>
        </div>

        {/* Next/Prev Navigation */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between animate-stagger opacity-0 pt-8 border-t border-brand-text/5">
          <Link 
            to={`/food/${prevFood.id}`}
            className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow group w-full sm:w-auto"
          >
            <div className="w-12 h-12 rounded-full bg-brand-soft-cream flex items-center justify-center shrink-0 group-hover:bg-brand-baby-blue transition-colors">
              <ArrowLeft size={20} className="text-brand-text" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-brand-text/50 uppercase tracking-wider mb-1">Previous</div>
              <div className="font-bold text-brand-text line-clamp-1">{prevFood.name}</div>
            </div>
          </Link>
          
          <Link 
            to={`/food/${nextFood.id}`}
            className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow group w-full sm:w-auto justify-end sm:text-right"
          >
            <div className="text-right">
              <div className="text-xs font-bold text-brand-text/50 uppercase tracking-wider mb-1">Next Dish</div>
              <div className="font-bold text-brand-text line-clamp-1">{nextFood.name}</div>
            </div>
            <div className="w-12 h-12 rounded-full bg-brand-soft-cream flex items-center justify-center shrink-0 group-hover:bg-brand-baby-blue transition-colors">
              <ArrowRight size={20} className="text-brand-text" />
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}

function NutritionRow({ label, value, indent = false }: { label: string, value: string, indent?: boolean }) {
  return (
    <div className={`flex justify-between py-1 border-b border-brand-text/5 ${indent ? 'pl-4 text-sm' : 'font-bold'}`}>
      <span className={indent ? 'text-brand-text/70' : 'text-brand-text'}>{label}</span>
      <span className="text-brand-text">{value}</span>
    </div>
  );
}
