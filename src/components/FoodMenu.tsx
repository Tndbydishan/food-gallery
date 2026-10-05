import React, { useState, useMemo } from 'react';
import { foods } from '../data/foods';
import { FoodCard } from './FoodCard';
import { SectionHeading } from './ui/SectionHeading';
import { RetroStamp, Halftone } from './graphic';
import { Search, ShieldCheck, X } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Dishes', kanji: '全品' },
  { id: 'main', label: 'Main', kanji: '主食' },
  { id: 'savory', label: 'Savory', kanji: '風味' },
  { id: 'salad', label: 'Salads', kanji: '生菜' },
  { id: 'beverage', label: 'Beverages', kanji: '飲料' },
  { id: 'dessert', label: 'Desserts', kanji: '甘味' },
];

export function FoodMenu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

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

  return (
    <section id="menu" className="py-20 md:py-28 bg-offwhite border-b-4 border-black relative overflow-hidden">
      
      <Halftone color="black" opacity={0.04} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <SectionHeading 
            number="03"
            kanjiBadge="献立一覧"
            badge="Official Festival Menu"
            badgeVariant="yellow"
            title={`Taste The Science: ${foods.length} Curated Dishes (展示料理)`}
            description="Examine full nutritional breakdowns, biochemical transformations, allergen notices, and home preparation notes for every exhibited dish."
            className="mb-5"
          />

          {/* Neo-Brutalist Disclaimer Stamp */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-yellow border-3 border-black rounded-xl shadow-[4px_4px_0px_#111111] text-xs sm:text-sm font-display font-black text-black select-none">
            <ShieldCheck size={18} className="text-black" />
            <span>Prepared at home · Presented at school (家庭調理 · 学校展示)</span>
          </div>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-10 pb-6 border-b-3 border-black/15">
          
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map(cat => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl font-display font-black text-xs sm:text-sm border-3 border-black transition-all cursor-pointer whitespace-nowrap active:translate-x-[2px] active:translate-y-[2px] active:shadow-none flex items-center gap-1.5 ${
                    isActive 
                      ? 'bg-blue text-white shadow-[4px_4px_0px_#111111] -translate-y-0.5' 
                      : 'bg-white text-black hover:bg-yellow shadow-[3px_3px_0px_#111111]'
                  }`}
                >
                  <span className="font-mono text-[10px] opacity-75">{cat.kanji}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-black/60 w-4 h-4 pointer-events-none" />
            <input 
              type="text" 
              placeholder="Search recipes, ingredients..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border-3 border-black rounded-xl py-2.5 pl-10 pr-9 text-xs sm:text-sm font-body font-bold outline-none shadow-[4px_4px_0px_#111111] focus:shadow-[5px_5px_0px_#FFD21F] transition-all text-black placeholder:text-black/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-black/50 hover:text-black font-bold p-1 cursor-pointer"
                aria-label="Clear search"
              >
                <X size={15} />
              </button>
            )}
          </div>

        </div>

        {/* Food Cards Grid */}
        <div className="min-h-[420px]">
          {filteredFoods.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredFoods.map(food => (
                <div key={food.id} className="transition-all duration-200">
                  <FoodCard food={food} />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-white border-3.5 border-black rounded-3xl shadow-[6px_6px_0px_#111111] max-w-lg mx-auto">
              <span className="text-5xl mb-4">🍱</span>
              <h3 className="text-2xl font-display font-black text-black mb-2">No matching dishes (該当なし)</h3>
              <p className="text-sm text-black/75 max-w-xs mb-6 font-medium">
                No items match "{searchQuery}" in this category. Reset search or switch categories.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="btn-poster btn-poster-yellow px-5 py-2.5 text-xs rounded-xl shadow-[4px_4px_0px_#111111]"
              >
                Reset Search Filters (全品表示)
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
