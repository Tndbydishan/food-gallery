import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { NumberLabel, RetroStamp, Halftone } from './graphic';
import { Utensils, MoveHorizontal } from 'lucide-react';
import { foods } from '../data/foods';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../utils/lenis';

export function StallMap() {
  const navigate = useNavigate();

  const getFood = (id: string) => foods.find(f => f.id === id);

  const stalls = [
    { id: "fried-rice", food: getFood("fried-rice"), x: 20, y: 25, color: "bg-primary text-black", stallNum: "01", kanji: "炒飯" },
    { id: "fried-chicken", food: getFood("fried-chicken"), x: 20, y: 50, color: "bg-primary text-black", stallNum: "02", kanji: "唐揚" },
    { id: "kabab", food: getFood("kabab"), x: 20, y: 75, color: "bg-primary text-black", stallNum: "03", kanji: "肉串" },
    
    { id: "vegetable-salad", food: getFood("vegetable-salad"), x: 50, y: 25, color: "bg-green text-white", stallNum: "04", kanji: "野菜" },
    { id: "fruit-salad", food: getFood("fruit-salad"), x: 50, y: 50, color: "bg-green text-white", stallNum: "05", kanji: "果物" },
    
    { id: "tang", food: getFood("tang"), x: 80, y: 25, color: "bg-blue text-white", stallNum: "06", kanji: "果汁" },
    { id: "soft-drinks", food: getFood("soft-drinks"), x: 80, y: 50, color: "bg-blue text-white", stallNum: "07", kanji: "炭酸" },
    
    { id: "pudding", food: getFood("pudding"), x: 50, y: 75, color: "bg-red text-white", stallNum: "08", kanji: "布丁" },
    { id: "custard", food: getFood("custard"), x: 80, y: 75, color: "bg-red text-white", stallNum: "09", kanji: "菓子" },
  ].filter(s => s.food);

  const handleStallClick = (foodId?: string) => {
    if (!foodId) return;
    scrollToTop(true);
    navigate(`/food/${foodId}`);
  };

  return (
    <section id="map" className="py-20 md:py-28 bg-offwhite border-b-4 border-black relative overflow-hidden">
      
      <Halftone color="black" opacity={0.04} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <SectionHeading 
            number="02"
            kanjiBadge="会場図"
            badge="Interactive Floor Plan"
            badgeVariant="yellow"
            title="Classroom Festival Blueprint (教室配置図)"
            description="Explore our physical classroom stall arrangement. Tap any station to inspect recipe formulation, home preparation notes, and nutritional breakdowns."
          />
        </div>

        {/* Mobile Swipe Notice */}
        <div className="flex items-center justify-center gap-2 text-xs font-mono font-black text-black mb-4 lg:hidden bg-yellow border-2.5 border-black p-2 rounded-xl mx-auto max-w-xs shadow-[3px_3px_0px_#111111]">
          <MoveHorizontal size={16} className="text-black shrink-0" />
          <span>Swipe horizontally to navigate stalls (横スクロール)</span>
        </div>

        {/* Blueprint Map Canvas Container */}
        <div className="overflow-x-auto pb-6 -mx-4 px-4 lg:mx-0 lg:px-0">
          <div className="relative min-w-[780px] max-w-5xl mx-auto h-[480px] md:h-auto md:aspect-[21/9] bg-white rounded-3xl border-4 border-black overflow-hidden shadow-[8px_8px_0px_#111111]">
            
            {/* Showa Festival Grid Texture */}
            <div 
              className="absolute inset-0 opacity-[0.07] pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(90deg, #111111 2px, transparent 2px), linear-gradient(#111111 2px, transparent 2px)',
                backgroundSize: '40px 40px'
              }}
            />

            {/* Room Entrance Door Label (Bottom Center) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-8 border-t-3 border-l-3 border-r-3 border-black bg-red text-white rounded-t-xl z-20 flex items-center justify-center shadow-[0_-3px_0px_#111111]">
              <span className="font-display font-black text-xs tracking-widest uppercase">
                ✦ 教室入口 · ENTRANCE GATEWAY ✦
              </span>
            </div>

            {/* Zone Backdrops (Classroom Stall Tables) */}
            {/* Zone A: Mains (Yellow) */}
            <div className="absolute top-8 bottom-16 left-8 w-32 md:w-40 rounded-2xl border-3 border-dashed border-black bg-primary/25 flex flex-col items-center pt-2">
              <span className="text-[10px] font-mono font-black uppercase text-black bg-primary px-2 py-0.5 rounded border-2 border-black shadow-[2px_2px_0px_#111111]">
                A区 · 主食 Mains
              </span>
            </div>
            
            {/* Zone B: Salads & Sweets (Green & Red) */}
            <div className="absolute top-8 bottom-36 left-1/2 -translate-x-1/2 w-32 md:w-40 rounded-2xl border-3 border-dashed border-black bg-green/20 flex flex-col items-center pt-2">
              <span className="text-[10px] font-mono font-black uppercase text-white bg-green px-2 py-0.5 rounded border-2 border-black shadow-[2px_2px_0px_#111111]">
                B区 · 生菜 Salads
              </span>
            </div>
            
            {/* Zone C: Beverages & Desserts (Blue) */}
            <div className="absolute top-8 bottom-16 right-8 w-32 md:w-40 rounded-2xl border-3 border-dashed border-black bg-blue/20 flex flex-col items-center pt-2">
              <span className="text-[10px] font-mono font-black uppercase text-white bg-blue px-2 py-0.5 rounded border-2 border-black shadow-[2px_2px_0px_#111111]">
                C区 · 飲料 Sweets
              </span>
            </div>

            {/* Guided Walking Route Line */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
              <path 
                d="M 50% 90% L 50% 65% L 35% 65% L 35% 35% L 65% 35% L 65% 65%" 
                fill="none" 
                stroke="#111111" 
                strokeWidth="3" 
                strokeDasharray="10 8" 
                className="opacity-40"
              />
            </svg>

            {/* Stall Interactive Pins */}
            {stalls.map(stall => (
              <div 
                key={stall.id} 
                className="absolute flex flex-col items-center group cursor-pointer transition-all duration-150 z-10"
                style={{ left: `${stall.x}%`, top: `${stall.y}%`, transform: 'translate(-50%, -50%)' }}
                onClick={() => handleStallClick(stall.food?.id)}
              >
                {/* Stall Circle Pin with Offset Shadow */}
                <div className="relative">
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center ${stall.color} border-3 border-black shadow-[4px_4px_0px_#111111] group-hover:shadow-[7px_7px_0px_#111111] group-hover:-translate-y-1 transition-all overflow-hidden`}>
                    {stall.food?.image ? (
                      <img 
                        src={stall.food.image} 
                        alt={stall.food.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                      />
                    ) : (
                      <Utensils className="text-black" size={22} />
                    )}
                  </div>
                  
                  {/* Stall Number Tag */}
                  <div className="absolute -top-2.5 -left-2.5 bg-black text-yellow px-1.5 py-0.2 rounded text-[10px] font-mono font-black border-2 border-white shadow-[1px_1px_0px_#111111]">
                    {stall.stallNum}
                  </div>

                  {/* Japanese Mini Kanji Tag */}
                  <div className="absolute -bottom-2 -right-2 bg-red text-white px-1 py-0.2 rounded text-[9px] font-display font-black border border-white">
                    {stall.kanji}
                  </div>
                </div>
                
                {/* Stall Name Tag */}
                <div className="mt-2 bg-white border-2.5 border-black px-3 py-1 rounded-xl shadow-[3px_3px_0px_#111111] text-center transition-all group-hover:-translate-y-0.5 group-hover:bg-primary group-hover:text-black">
                  <div className="text-xs font-display font-black text-black whitespace-nowrap">
                    {stall.food?.name}
                  </div>
                  <div className="text-[9px] font-mono font-black uppercase text-black/70">
                    Inspect Recipe →
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
