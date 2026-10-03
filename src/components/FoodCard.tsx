import React from 'react';
import { Link } from 'react-router-dom';
import { FoodItem } from '../data/foods';
import { Badge } from './ui/Badge';
import { ArrowUpRight, Flame } from 'lucide-react';
import { scrollToTop } from '../utils/lenis';

interface FoodCardProps {
  food: FoodItem;
}

export function FoodCard({ food }: FoodCardProps) {
  const handleClick = () => {
    scrollToTop(true);
  };

  const categoryConfig: Record<string, { variant: 'yellow' | 'red' | 'blue' | 'green' | 'pink' | 'orange', kanji: string }> = {
    main: { variant: 'yellow', kanji: '主食' },
    savory: { variant: 'orange', kanji: '風味' },
    salad: { variant: 'green', kanji: '生菜' },
    beverage: { variant: 'blue', kanji: '飲料' },
    dessert: { variant: 'pink', kanji: '甘味' },
  };

  const currentCategory = categoryConfig[food.category] || { variant: 'yellow', kanji: '料理' };

  return (
    <Link 
      to={`/food/${food.id}`}
      onClick={handleClick}
      className="group cursor-pointer bg-white border-3.5 border-black rounded-3xl p-5 shadow-[6px_6px_0px_#111111] hover:shadow-[9px_9px_0px_#111111] hover:-translate-x-0.5 hover:-translate-y-1 transition-all duration-150 flex flex-col h-full outline-none focus-visible:ring-4 focus-visible:ring-primary relative overflow-hidden"
    >
      {/* Top Graphic Header: Food Image with Saturated Frame */}
      <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-2xl border-3 border-black bg-primary">
        <img 
          src={food.image} 
          alt={food.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Category Sticker with Kanji & English */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1">
          <Badge 
            variant={currentCategory.variant} 
            rotate="-2"
            className="shadow-[3px_3px_0px_#111111] border-2.5 text-xs font-black"
          >
            <span className="font-mono opacity-80 mr-1">{currentCategory.kanji}</span>
            <span>{food.category}</span>
          </Badge>
        </div>

        {/* Calorie Tag Overlay Styled like a Japanese Retail Price Tag */}
        <div className="absolute bottom-2.5 right-2.5 bg-black text-yellow px-2.5 py-1 rounded-lg text-xs font-mono font-black flex items-center gap-1 border-2 border-white shadow-[2px_2px_0px_#FFD21F]">
          <Flame size={13} className="text-red fill-red" />
          <span>{food.nutrition.energyKcal} kcal</span>
        </div>
      </div>
      
      {/* Content Details */}
      <div className="flex-grow flex flex-col">
        
        {/* Dish Title */}
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="text-xl sm:text-2xl font-display font-black text-black group-hover:text-red transition-colors tracking-tight line-clamp-1">
            {food.name}
          </h3>
        </div>
        
        {/* Dietary Unboxed Tags (Zero-Pill Discipline) */}
        <div className="flex flex-wrap items-center gap-1.5 mb-3 text-xs font-bold text-black/75 font-mono">
          {food.dietary.map((tag, idx) => (
            <React.Fragment key={tag}>
              <span>{tag}</span>
              {idx < food.dietary.length - 1 && <span className="opacity-40">·</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-black/80 mb-5 line-clamp-2 leading-relaxed flex-grow font-medium">
          {food.description}
        </p>

        {/* Bottom Poster Action Bar */}
        <div className="flex items-center justify-between pt-3.5 border-t-2.5 border-black/15 mt-auto">
          <div className="text-xs font-mono font-bold text-black/80">
            Portion: <span className="text-black font-black bg-yellow px-1.5 py-0.5 rounded border border-black">{food.nutrition.basis}</span>
          </div>

          <div className="inline-flex items-center gap-1 text-xs font-display font-black text-black group-hover:text-red transition-colors uppercase tracking-wider">
            <span>Inspect Recipe (詳細)</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>

      </div>
    </Link>
  );
}
