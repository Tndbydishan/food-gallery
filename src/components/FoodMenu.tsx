import React, { useState, useMemo, useEffect } from 'react';
import { foods } from '../data/foods';
import { FoodCard } from './FoodCard';
import { SectionHeading } from './ui/SectionHeading';
import { Search } from 'lucide-react';
import anime from 'animejs';

const CATEGORIES = [
  { id: 'all', label: 'All' },
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
      const query = searchQuery.toLowerCase();
      
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
    
    setIsAnimating(true);
    
    // Animate out
    anime({
      targets: '.food-card-wrapper',
      opacity: 0,
      scale: 0.9,
      translateY: 10,
      duration: 300,
      easing: 'easeInExpo',
      complete: () => {
        setActiveCategory(catId);
        // We need a small timeout to let React render the new items before animating them in
        setTimeout(() => {
          anime({
            targets: '.food-card-wrapper',
            opacity: [0, 1],
            scale: [0.9, 1],
            translateY: [10, 0],
            delay: anime.stagger(50),
            duration: 400,
            easing: 'easeOutExpo',
            complete: () => setIsAnimating(false)
          });
        }, 50);
      }
    });
  };

  // Initial animation
  useEffect(() => {
    anime({
      targets: '.food-card-wrapper',
      opacity: [0, 1],
      scale: [0.9, 1],
      translateY: [20, 0],
      delay: anime.stagger(100),
      duration: 600,
      easing: 'easeOutExpo'
    });
  }, []);

  return (
    <section id="menu" className="py-16 md:py-24 bg-brand-cream relative">
      <div className="container mx-auto px-4 lg:px-8">
        
        <SectionHeading 
          badge="Official Festival Menu"
          title="Taste The Science"
          description="Explore our interactive menu to see ingredients, nutritional insights, and the home science behind each dish."
          className="mb-12"
        />

        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
          
          <div className="flex flex-wrap items-center gap-2 bg-white p-2 rounded-3xl shadow-sm border border-brand-text/5">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-5 py-2 rounded-full font-bold text-sm transition-colors ${
                  activeCategory === cat.id 
                    ? 'bg-brand-baby-blue text-brand-text' 
                    : 'text-brand-text/60 hover:bg-brand-soft-baby-blue/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64 shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-text/40 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search our food..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-brand-text/10 rounded-full py-3 pl-12 pr-4 font-body outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all shadow-sm placeholder:text-brand-text/40"
            />
          </div>

        </div>

        <div className="min-h-[400px]">
          {filteredFoods.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFoods.map(food => (
                <div key={food.id} className="food-card-wrapper opacity-0">
                  <FoodCard food={food} />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-[40px] border border-dashed border-brand-text/20">
              <span className="text-6xl mb-4">🍽️</span>
              <h3 className="text-2xl font-display mb-2">Nothing tasty here yet!</h3>
              <p className="text-brand-text/60">Try another search or category.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

