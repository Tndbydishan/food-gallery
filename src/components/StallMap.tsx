import React, { useEffect, useRef, useState } from 'react';
import { SectionHeading } from './ui/SectionHeading';
import anime from 'animejs';
import { MapPin, Utensils, Info } from 'lucide-react';
import { foods, FoodItem } from '../data/foods';
import { useNavigate } from 'react-router-dom';

export function StallMap() {
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          anime({
            targets: '.stall-pin',
            scale: [0, 1],
            opacity: [0, 1],
            delay: anime.stagger(100),
            easing: 'easeOutElastic(1, .8)',
            duration: 1000
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
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
  ].filter(s => s.food); // Only include if food is found

  return (
    <section id="map" ref={sectionRef} className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading 
          badge="Find Your Way"
          title="Festival Room Map"
          description="Explore our interactive room layout. Click on any food station to view its detailed nutrition, ingredients, and home science insights."
          className="mb-16"
        />

        <div className="overflow-x-auto pb-8 -mx-4 px-4 lg:mx-0 lg:px-0">
          <div className="relative min-w-[700px] max-w-5xl mx-auto h-[450px] md:h-auto md:aspect-[21/9] bg-[#f8f9fa] rounded-[40px] border-4 border-brand-text overflow-hidden shadow-sm">
            {/* Room Floor Pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'linear-gradient(90deg, #303038 1px, transparent 1px), linear-gradient(#303038 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}></div>
            
            {/* Entrance Door */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-4 border-t-4 border-l-4 border-r-4 border-brand-text bg-white rounded-t-lg z-10 flex items-center justify-center">
              <span className="text-brand-text font-bold text-sm tracking-widest uppercase">Entrance</span>
            </div>

            {/* Tables / Zones */}
            <div className="absolute top-10 bottom-20 left-10 w-24 md:w-32 rounded-3xl border-2 border-brand-baby-blue/30 bg-brand-baby-blue/10"></div>
            <div className="absolute top-10 bottom-40 left-1/2 -translate-x-1/2 w-24 md:w-32 rounded-3xl border-2 border-brand-soft-mint/30 bg-brand-soft-mint/10"></div>
            <div className="absolute top-10 bottom-20 right-10 w-24 md:w-32 rounded-3xl border-2 border-brand-accent-peach/30 bg-brand-accent-peach/10"></div>

            {/* Path */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
              <path d="M 50% 90% L 50% 65% L 35% 65% L 35% 35% L 65% 35% L 65% 65%" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="8 8" className="text-brand-text/15" />
            </svg>

            {/* Stalls */}
            {stalls.map(stall => (
              <div 
                key={stall.id} 
                className="stall-pin absolute opacity-0 flex flex-col items-center group cursor-pointer"
                style={{ left: `${stall.x}%`, top: `${stall.y}%`, transform: 'translate(-50%, -50%)' }}
                onClick={() => navigate(`/food/${stall.food?.id}`)}
              >
                <div className="relative">
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center ${stall.color} shadow-lg relative z-10 transition-transform group-hover:scale-110 border-2 border-white`}>
                    {stall.food?.image ? (
                      <img src={stall.food.image} alt={stall.food.name} className="w-full h-full object-cover rounded-full opacity-80 mix-blend-multiply" />
                    ) : (
                      <Utensils className="text-brand-text" size={24} />
                    )}
                    <div className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-sm border border-brand-text/10 scale-0 group-hover:scale-100 transition-transform">
                      <Info size={14} className="text-brand-text" />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-brand-text/20 blur-sm rounded-full -z-10"></div>
                </div>
                
                {/* Label */}
                <div className="mt-3 bg-white px-4 py-2 rounded-xl shadow-md border border-brand-text/10 text-center transition-all group-hover:-translate-y-1">
                  <div className="text-sm font-bold text-brand-text whitespace-nowrap">
                    {stall.food?.name}
                  </div>
                  <div className="text-[10px] text-brand-text/60 uppercase tracking-wider mt-0.5">
                    Click for details
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
