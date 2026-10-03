import React, { useEffect, useRef } from 'react';
import { SectionHeading } from './ui/SectionHeading';
import anime from 'animejs';
import { Utensils, Info, MoveHorizontal } from 'lucide-react';
import { foods } from '../data/foods';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../utils/lenis';

export function StallMap() {
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          anime({
            targets: '.stall-pin',
            scale: [0, 1],
            opacity: [0, 1],
            delay: anime.stagger(80),
            easing: 'easeOutElastic(1, .8)',
            duration: 900
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getFood = (id: string) => foods.find(f => f.id === id);

  const stalls = [
    { id: "fried-rice", food: getFood("fried-rice"), x: 20, y: 25, color: "bg-brand-baby-blue" },
    { id: "fried-chicken", food: getFood("fried-chicken"), x: 20, y: 50, color: "bg-brand-baby-blue" },
    { id: "kabab", food: getFood("kabab"), x: 20, y: 75, color: "bg-brand-baby-blue" },
    
    { id: "vegetable-salad", food: getFood("vegetable-salad"), x: 50, y: 25, color: "bg-brand-soft-mint" },
    { id: "fruit-salad", food: getFood("fruit-salad"), x: 50, y: 50, color: "bg-brand-soft-mint" },
    
    { id: "tang", food: getFood("tang"), x: 80, y: 25, color: "bg-brand-blue" },
    { id: "soft-drinks", food: getFood("soft-drinks"), x: 80, y: 50, color: "bg-brand-blue" },
    
    { id: "pudding", food: getFood("pudding"), x: 50, y: 75, color: "bg-brand-accent-peach" },
    { id: "custard", food: getFood("custard"), x: 80, y: 75, color: "bg-brand-accent-peach" },
  ].filter(s => s.food);

  const handleStallClick = (foodId?: string) => {
    if (!foodId) return;
    scrollToTop(true);
    navigate(`/food/${foodId}`);
  };

  return (
    <section id="map" ref={sectionRef} className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading 
          badge="Find Your Way"
          title="Festival Room Map"
          description="Explore our interactive classroom layout. Tap or click on any food station to inspect ingredients, preparation facts, and Home Science principles."
          className="mb-8"
        />

        {/* Mobile Swipe Hint */}
        <div className="flex items-center justify-center gap-2 text-xs text-brand-text/60 font-semibold mb-4 lg:hidden">
          <MoveHorizontal size={16} className="text-brand-baby-blue animate-pulse" />
          <span>Swipe horizontally to explore all stalls</span>
        </div>

        <div className="overflow-x-auto pb-6 -mx-4 px-4 lg:mx-0 lg:px-0">
          <div className="relative min-w-[720px] max-w-5xl mx-auto h-[440px] md:h-auto md:aspect-[21/9] bg-[#f9fafb] rounded-[36px] md:rounded-[44px] border-4 border-brand-text/90 overflow-hidden shadow-sm">
            
            {/* Room Floor Pattern */}
            <div className="absolute inset-0 opacity-[0.07]" style={{
              backgroundImage: 'linear-gradient(90deg, #303038 1px, transparent 1px), linear-gradient(#303038 1px, transparent 1px)',
              backgroundSize: '36px 36px'
            }}></div>
            
            {/* Entrance Door Label */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-44 h-5 border-t-4 border-l-4 border-r-4 border-brand-text/90 bg-white rounded-t-lg z-10 flex items-center justify-center">
              <span className="text-brand-text font-bold text-xs tracking-widest uppercase">Room Entrance</span>
            </div>

            {/* Table Zones */}
            <div className="absolute top-8 bottom-16 left-8 w-24 md:w-32 rounded-3xl border-2 border-brand-baby-blue/40 bg-brand-baby-blue/10"></div>
            <div className="absolute top-8 bottom-36 left-1/2 -translate-x-1/2 w-24 md:w-32 rounded-3xl border-2 border-brand-soft-mint/40 bg-brand-soft-mint/10"></div>
            <div className="absolute top-8 bottom-16 right-8 w-24 md:w-32 rounded-3xl border-2 border-brand-accent-peach/40 bg-brand-accent-peach/10"></div>

            {/* Walking Path */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
              <path d="M 50% 90% L 50% 65% L 35% 65% L 35% 35% L 65% 35% L 65% 65%" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="6 6" className="text-brand-text/15" />
            </svg>

            {/* Stalls Pins */}
            {stalls.map(stall => (
              <div 
                key={stall.id} 
                className="stall-pin absolute flex flex-col items-center group cursor-pointer transition-transform"
                style={{ left: `${stall.x}%`, top: `${stall.y}%`, transform: 'translate(-50%, -50%)' }}
                onClick={() => handleStallClick(stall.food?.id)}
              >
                <div className="relative">
                  <div className={`w-13 h-13 md:w-15 md:h-15 rounded-full flex items-center justify-center ${stall.color} shadow-md relative z-10 transition-transform duration-300 group-hover:scale-110 border-2 border-white`}>
                    {stall.food?.image ? (
                      <img src={stall.food.image} alt={stall.food.name} className="w-full h-full object-cover rounded-full opacity-85 mix-blend-multiply" />
                    ) : (
                      <Utensils className="text-brand-text" size={20} />
                    )}
                    <div className="absolute -top-1.5 -right-1.5 bg-white rounded-full p-1 shadow-xs border border-brand-text/10 scale-0 group-hover:scale-100 transition-transform">
                      <Info size={12} className="text-brand-text" />
                    </div>
                  </div>
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-7 h-2 bg-brand-text/15 blur-xs rounded-full -z-10"></div>
                </div>
                
                {/* Stall Label */}
                <div className="mt-2.5 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-xl shadow-xs border border-brand-text/10 text-center transition-all group-hover:-translate-y-1 group-hover:shadow-md">
                  <div className="text-xs sm:text-sm font-bold text-brand-text whitespace-nowrap">
                    {stall.food?.name}
                  </div>
                  <div className="text-[9px] text-brand-text/55 font-bold uppercase tracking-wider mt-0.5">
                    View Recipe
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
