import React, { useState, useMemo, useEffect } from 'react';
import { foods } from '../data/foods';
import { FoodCard } from './FoodCard';
import { SectionHeading } from './ui/SectionHeading';
import { Search, Sparkles, Home, ShieldCheck } from 'lucide-react';
import anime from 'animejs';

const CATEGORIES = [
  { id: 'all', label: 'All Dishes' },
  { id: 'main', label: 'Main' },
  { id: 'savory', label: 'Savory' },
  { id: 'salad', label: 'Salads' },
  { id: 'beverage', label: 'Beverages' },
  { id: 'dessert', label: 'Desserts' },
];

export function FoodMenu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const filteredFoods = useMemo(() => {
    return foods.filter(food => {
      const matchesCategory = activeCategory === 'all' || food.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery) return true;
      const query = searchQuery.toLowerCase().trim();
      
      return (
        food.name.toLowerCase().includes(query) ||
        food.category.toLowerCase().includes(query) ||
        food.dietary.some(d => d.toLowerCase().includes(query)) ||
        food.ingredients.some(i => i.toLowerCase().includes(query))
      );
    });
  }, [activeCategory, searchQuery]);

  const handleCategoryChange = (catId: string) => {
    if (isAnimating || catId === activeCategory) return;
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setActiveCategory(catId);
      return;
    }

    setIsAnimating(true);
    
    // Animate out gently
    anime({
      targets: '.food-card-wrapper',
      opacity: [1, 0],
      translateY: [0, 8],
      duration: 200,
      easing: 'easeInQuad',
      complete: () => {
        setActiveCategory(catId);
        // Small delay to let React DOM commit
        setTimeout(() => {
          anime({
            targets: '.food-card-wrapper',
            opacity: [0, 1],
            translateY: [12, 0],
            delay: anime.stagger(40),
            duration: 350,
            easing: 'easeOutQuad',
            complete: () => setIsAnimating(false)
          });
        }, 30);
      }
    });
  };

  // Initial animation
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    anime({
      targets: '.food-card-wrapper',
      opacity: [0, 1],
      translateY: [16, 0],
      delay: anime.stagger(60),
      duration: 500,
      easing: 'easeOutQuad'
    });
  }, []);

  return (
    <section id="menu" className="py-16 md:py-24 bg-brand-cream relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-10">
          <SectionHeading 
            badge="Official Festival Menu"
            title="Taste The Science"
            description="Explore our student-prepared dishes to examine ingredients, nutritional insights, and the Home Science principles behind each recipe."
            className="mb-4"
          />

          {/* Glass information disclaimer badge as requested */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-brand-baby-blue/40 shadow-[0_4px_20px_rgba(75,130,160,0.08)] text-xs md:text-sm text-brand-text/80 font-semibold mt-2">
            <ShieldCheck size={16} className="text-brand-text/70" />
            <span>Prepared at home • Presented at school</span>
          </div>
        </div>

        {/* Filter controls & search bar */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-10">
          
          {/* Scrollable / wrap categories */}
          <div className="flex items-center gap-1.5 p-1.5 bg-white/90 backdrop-blur-xs rounded-2xl md:rounded-full shadow-xs border border-brand-text/5 overflow-x-auto max-w-full">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-2 rounded-xl md:rounded-full font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id 
                    ? 'bg-brand-baby-blue text-brand-text shadow-xs' 
                    : 'text-brand-text/70 hover:bg-brand-soft-baby-blue/50 hover:text-brand-text'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-text/40 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search ingredients or dishes..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-brand-text/10 rounded-full py-2.5 pl-10 pr-4 text-xs sm:text-sm font-body outline-none focus:border-brand-baby-blue focus:ring-2 focus:ring-brand-baby-blue/30 transition-all shadow-xs placeholder:text-brand-text/40 text-brand-text"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-brand-text/40 hover:text-brand-text font-bold"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Food Cards Grid */}
        <div className="min-h-[400px]">
          {filteredFoods.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredFoods.map(food => (
                <div key={food.id} className="food-card-wrapper transition-opacity duration-300">
                  <FoodCard food={food} />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-white/80 rounded-[32px] md:rounded-[40px] border border-dashed border-brand-text/20">
              <span className="text-5xl mb-4">🍽️</span>
              <h3 className="text-xl md:text-2xl font-display mb-1 text-brand-text">No dishes found</h3>
              <p className="text-sm text-brand-text/60 max-w-sm mb-4">
                No items match "{searchQuery}" in this category. Try searching another ingredient or reset the filter.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="bg-brand-soft-baby-blue text-brand-text font-bold text-xs px-5 py-2.5 rounded-full hover:bg-brand-baby-blue transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
