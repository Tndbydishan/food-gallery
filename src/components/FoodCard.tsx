import React from 'react';
import { Link } from 'react-router-dom';
import { FoodItem } from '../data/foods';
import { Badge } from './ui/Badge';
import { ArrowRight } from 'lucide-react';

interface FoodCardProps {
  food: FoodItem;
}

export function FoodCard({ food }: FoodCardProps) {
  return (
    <Link 
      to={`/food/${food.id}`}
      className="food-card group cursor-pointer bg-white rounded-[32px] p-4 pb-6 transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-xl border-2 border-transparent hover:border-brand-soft-blue flex flex-col h-full outline-none focus-visible:ring-4 focus-visible:ring-brand-baby-blue"
    >
      <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-[24px] bg-brand-soft-cream">
        <img 
          src={food.image} 
          alt={food.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <Badge variant="cream">{food.category}</Badge>
        </div>
      </div>
      
      <div className="px-2 flex-grow flex flex-col">
        <h3 className="text-2xl font-display text-brand-text mb-2 line-clamp-1">{food.name}</h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {food.dietary.slice(0, 2).map(tag => (
            <span key={tag} className="text-xs font-bold text-brand-text/60 bg-brand-soft-cream px-2 py-1 rounded-md">
              {tag}
            </span>
          ))}
          {food.dietary.length > 2 && (
            <span className="text-xs font-bold text-brand-text/60 bg-brand-soft-cream px-2 py-1 rounded-md">
              +{food.dietary.length - 2}
            </span>
          )}
        </div>

        <p className="text-sm text-brand-text/80 mb-6 line-clamp-2 flex-grow">
          {food.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-text/5">
          <div className="text-sm font-bold text-brand-text">
            {food.nutrition.energyKcal} kcal <span className="opacity-60 font-normal">/ {food.nutrition.basis}</span>
          </div>
          <div className="flex items-center gap-1 text-brand-baby-blue font-bold text-sm group-hover:text-brand-blue transition-colors">
            View Full Details <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}

