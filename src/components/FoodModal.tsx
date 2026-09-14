import React, { useState, useEffect } from 'react';
import { X, Info, Flame, Droplets, Wheat, Activity, Clock, Utensils, FlaskConical } from 'lucide-react';
import { FoodItem, FoodVariant, MeasurementSystem } from '../data/foods';
import { Badge } from './ui/Badge';
import anime from 'animejs';

interface FoodModalProps {
  food: FoodItem;
  onClose: () => void;
  system: MeasurementSystem;
  onSystemToggle: (sys: MeasurementSystem) => void;
}

export function FoodModal({ food, onClose, system, onSystemToggle }: FoodModalProps) {
  const [activeVariantIndex, setActiveVariantIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    // Animate in
    anime({
      targets: '.modal-backdrop',
      opacity: [0, 1],
      duration: 300,
      easing: 'easeOutExpo'
    });
    
    anime({
      targets: '.modal-content',
      translateY: ['100%', '0%'],
      opacity: [0, 1],
      duration: 500,
      easing: 'easeOutExpo'
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, []);

  const handleClose = () => {
    anime({
      targets: '.modal-backdrop',
      opacity: 0,
      duration: 300,
      easing: 'easeInExpo'
    });
    
    anime({
      targets: '.modal-content',
      translateY: '100%',
      opacity: 0,
      duration: 300,
      easing: 'easeInExpo',
      complete: onClose
    });
  };

  const activeData = food.variants ? food.variants[activeVariantIndex] : food;
  const nutrition = activeData.nutrition;
  const ingredients = activeData.ingredients;
  const allergens = activeData.allergens;
  const dietary = activeData.dietary;

  const renderMeasurement = (metricVal?: number, imperialVal?: number, metricUnit = 'g', imperialUnit = 'oz') => {
    if (!metricVal || !imperialVal) return null;
    return system === 'metric' ? `${metricVal}${metricUnit}` : `${imperialVal}${imperialUnit}`;
  };

  const weightStr = renderMeasurement(food.measurementBasis?.metric.weight, food.measurementBasis?.imperial.weight, 'g', 'oz');
  const volumeStr = renderMeasurement(food.measurementBasis?.metric.volume, food.measurementBasis?.imperial.volume, 'ml', 'fl oz');
  const basisStr = weightStr || volumeStr || nutrition.basis;

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center pointer-events-none">
      <div 
        className="modal-backdrop absolute inset-0 bg-brand-text/40 backdrop-blur-sm pointer-events-auto opacity-0"
        onClick={handleClose}
      />
      
      <div className="modal-content relative w-full h-[90dvh] max-h-[90dvh] md:h-auto md:w-[90vw] md:max-w-4xl md:max-h-[90vh] bg-brand-cream md:rounded-[40px] rounded-t-[32px] overflow-hidden flex flex-col md:flex-row pointer-events-auto opacity-0 shadow-2xl mt-auto md:mt-0">
        
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-brand-text hover:bg-white transition-colors shadow-sm"
        >
          <X size={20} />
        </button>

        {/* Image Section */}
        <div className="md:w-[45%] h-[30dvh] min-h-[200px] md:h-auto relative bg-brand-soft-baby-blue shrink-0">
          <img src={food.image} alt={food.name} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h2 className="text-3xl md:text-4xl font-display leading-none mb-2">{food.variants ? activeData.name : food.name}</h2>
            <div className="flex gap-2">
              <Badge variant="white" className="text-brand-text">{food.category}</Badge>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div 
          className="flex-1 overflow-y-auto overscroll-contain touch-pan-y p-6 md:p-8 custom-scrollbar pb-24 md:pb-12" 
          data-lenis-prevent="true"
        >
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex bg-white rounded-full p-1 border border-brand-text/10 w-fit">
              <button 
                className={`px-4 py-1.5 rounded-full text-sm font-bold transition-colors ${system === 'metric' ? 'bg-brand-baby-blue text-brand-text' : 'text-brand-text/60 hover:bg-brand-soft-baby-blue/50'}`}
                onClick={() => onSystemToggle('metric')}
              >
                Metric
              </button>
              <button 
                className={`px-4 py-1.5 rounded-full text-sm font-bold transition-colors ${system === 'imperial' ? 'bg-brand-baby-blue text-brand-text' : 'text-brand-text/60 hover:bg-brand-soft-baby-blue/50'}`}
                onClick={() => onSystemToggle('imperial')}
              >
                Imperial
              </button>
            </div>
          </div>

          <p className="text-brand-text/80 text-lg mb-8">{food.description}</p>

          {food.variants && (
            <div className="mb-8">
              <h3 className="font-bold text-sm uppercase tracking-wider text-brand-text/50 mb-3">Variants</h3>
              <div className="flex flex-wrap gap-2">
                {food.variants.map((v, idx) => (
                  <button
                    key={v.name}
                    onClick={() => setActiveVariantIndex(idx)}
                    className={`px-4 py-2 rounded-full font-bold text-sm border-2 transition-colors ${activeVariantIndex === idx ? 'border-brand-blue bg-brand-blue text-brand-text' : 'border-brand-text/10 bg-white text-brand-text hover:border-brand-blue/50'}`}
                  >
                    {v.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider text-brand-text/50 mb-3 flex items-center gap-2">
                <Utensils size={16} /> Serving Info
              </h3>
              <div className="bg-white rounded-[24px] p-5 shadow-sm space-y-3 border border-brand-text/5">
                <div className="flex justify-between border-b border-brand-text/5 pb-2">
                  <span className="text-brand-text/70">Serving Size</span>
                  <span className="font-bold">{food.serving.size}</span>
                </div>
                <div className="flex justify-between border-b border-brand-text/5 pb-2">
                  <span className="text-brand-text/70">Yield</span>
                  <span className="font-bold">{food.serving.yield}</span>
                </div>
                {food.preparation && (
                  <div className="flex justify-between border-b border-brand-text/5 pb-2">
                    <span className="text-brand-text/70">Prep Time</span>
                    <span className="font-bold">{food.preparation.time}</span>
                  </div>
                )}
                {food.preparation && (
                  <div className="flex justify-between">
                    <span className="text-brand-text/70">Difficulty</span>
                    <span className="font-bold">{food.preparation.difficulty}</span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider text-brand-text/50 mb-3 flex items-center gap-2">
                <Activity size={16} /> Nutrition Facts
              </h3>
              <div className="bg-white rounded-[24px] p-5 shadow-sm border border-brand-text/5">
                <div className="text-center mb-4 pb-4 border-b border-brand-text/10">
                  <span className="block text-3xl font-display text-brand-baby-blue mb-1">{nutrition.energyKcal} <span className="text-lg">kcal</span></span>
                  <span className="text-xs font-bold uppercase tracking-wider opacity-50">per {basisStr}</span>
                </div>
                <div className="grid grid-cols-2 gap-y-3 text-sm">
                  <div className="flex flex-col">
                    <span className="text-brand-text/50">Protein</span>
                    <span className="font-bold">{nutrition.protein}g</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-brand-text/50">Carbs</span>
                    <span className="font-bold">{nutrition.carbohydrates}g</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-brand-text/50">Fat (Total)</span>
                    <span className="font-bold">{nutrition.fat}g</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-brand-text/50">Sugars</span>
                    <span className="font-bold">{nutrition.sugars}g</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-brand-text/5 text-center">
                  <span className="text-[10px] uppercase tracking-wider text-brand-text/40">Approximate educational values</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-bold text-sm uppercase tracking-wider text-brand-text/50 mb-3">Dietary & Allergens</h3>
            <div className="bg-brand-soft-baby-blue/30 rounded-[24px] p-5 border border-brand-soft-baby-blue space-y-4">
              {dietary.length > 0 && (
                <div>
                  <span className="block text-sm font-bold text-brand-text/70 mb-2">Suitable for:</span>
                  <div className="flex flex-wrap gap-2">
                    {dietary.map(d => <Badge key={d} variant="white">{d}</Badge>)}
                  </div>
                </div>
              )}
              
              <div className="pt-4 border-t border-brand-text/10">
                <span className="block text-sm font-bold text-brand-text/70 mb-2 flex items-center gap-1">
                  <Info size={14} className="text-red-500" /> Allergen Alert:
                </span>
                {allergens.contains.length > 0 ? (
                  <p className="text-sm">
                    <strong>Contains:</strong> {allergens.contains.join(", ")}
                    {allergens.mayContain.length > 0 && <span> <br/><strong>May contain:</strong> {allergens.mayContain.join(", ")}</span>}
                  </p>
                ) : (
                  <p className="text-sm opacity-70 italic">No major allergens identified from the listed ingredients.</p>
                )}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-bold text-sm uppercase tracking-wider text-brand-text/50 mb-3">Ingredients</h3>
            <ul className="flex flex-wrap gap-2">
              {ingredients.map((ing, i) => (
                <li key={i} className="bg-white border border-brand-text/10 px-3 py-1.5 rounded-lg text-sm font-medium">
                  {ing}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-brand-soft-blue/30 rounded-[24px] p-6 border border-brand-soft-blue">
            <h3 className="font-display text-xl text-brand-blue mb-2 flex items-center gap-2">
              <FlaskConical size={20} /> Home Science Insight
            </h3>
            <p className="text-brand-text/90 italic">
              {food.homeScienceInsight}
            </p>
          </div>

        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(0,0,0,0.1);
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
}
