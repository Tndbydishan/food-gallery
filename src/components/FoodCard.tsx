import React from 'react';
import { Link } from 'react-router-dom';
import { FoodItem } from '../data/foods';
import { Badge } from './ui/Badge';
import { ArrowRight, Sparkles } from 'lucide-react';
import { scrollToTop } from '../utils/lenis';

interface FoodCardProps {
  food: FoodItem;
}

export function FoodCard({ food }: FoodCardProps) {
  const handleClick = () => {
    scrollToTop(true);
  };

  return (
    <Link 
      to={`/food/${food.id}`}
      onClick={handleClick}
      className="food-card group cursor-pointer bg-white/90 hover:bg-white rounded-[28px] md:rounded-[32px] p-4 pb-5 md:pb-6 transition-all duration-300 hover:-translate-y-1.5 shadow-[0_4px_20px_rgba(48,52,59,0.04)] hover:shadow-[0_16px_36px_rgba(137,207,240,0.18)] border border-brand-text/5 hover:border-brand-baby-blue/60 flex flex-col h-full outline-none focus-visible:ring-4 focus-visible:ring-brand-baby-blue/50"
    >
      <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-[20px] md:rounded-[24px] bg-brand-soft-cream/80">
        <img 
          src={food.image} 
          alt={food.name} 
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <Badge variant="cream" className="shadow-xs backdrop-blur-xs">{food.category}</Badge>
        </div>
      </div>
      
      <div className="px-1 md:px-2 flex-grow flex flex-col">
        <h3 className="text-xl md:text-2xl font-display text-brand-text mb-2 line-clamp-1 group-hover:text-brand-text/90 transition-colors">
          {food.name}
        </h3>
        
        <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
          {food.dietary.slice(0, 2).map(tag => (
            <span key={tag} className="text-[11px] md:text-xs font-bold text-brand-text/70 bg-brand-soft-cream px-2.5 py-1 rounded-md border border-brand-text/5">
              {tag}
            </span>
          ))}
          {food.dietary.length > 2 && (
            <span className="text-[11px] md:text-xs font-bold text-brand-text/60 bg-brand-soft-cream px-2 py-1 rounded-md">
              +{food.dietary.length - 2}
            </span>
          )}
        </div>

        <p className="text-xs md:text-sm text-brand-text/75 mb-5 line-clamp-2 leading-relaxed flex-grow">
          {food.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-3.5 border-t border-brand-text/5">
          <div className="text-xs md:text-sm font-bold text-brand-text">
            {food.nutrition.energyKcal} <span className="text-[11px] md:text-xs font-normal text-brand-text/60">kcal / {food.nutrition.basis}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 text-brand-text font-bold text-xs md:text-sm group-hover:text-brand-baby-blue transition-colors">
            <span>Explore Dish</span>
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}


