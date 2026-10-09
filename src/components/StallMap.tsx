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
    // Zone A: Mains
    { id: "fried-rice", food: getFood("fried-rice"), x: 18, y: 22, color: "bg-primary text-black", stallNum: "01", kanji: "炒飯" },
    { id: "fried-chicken", food: getFood("fried-chicken"), x: 18, y: 46, color: "bg-primary text-black", stallNum: "02", kanji: "唐揚" },
    { id: "chinese-vegetable", food: getFood("chinese-vegetable"), x: 18, y: 70, color: "bg-primary text-black", stallNum: "03", kanji: "中華" },
    { id: "chicken-kabab", food: getFood("chicken-kabab"), x: 33, y: 46, color: "bg-primary text-black", stallNum: "04", kanji: "肉串" },
    
    // Zone B: Side Dishes
    { id: "salad", food: getFood("salad"), x: 49, y: 22, color: "bg-green text-white", stallNum: "05", kanji: "生菜" },
    { id: "juice", food: getFood("juice"), x: 49, y: 46, color: "bg-blue text-white", stallNum: "06", kanji: "果汁" },
    { id: "pasta", food: getFood("pasta"), x: 49, y: 70, color: "bg-yellow text-black", stallNum: "07", kanji: "麺類" },
    { id: "spring-rolls", food: getFood("spring-rolls"), x: 65, y: 32, color: "bg-yellow text-black", stallNum: "08", kanji: "春巻" },
    { id: "momos", food: getFood("momos"), x: 65, y: 60, color: "bg-primary text-black", stallNum: "09", kanji: "点心" },
    
    // Zone C: Desserts
    { id: "pudding", food: getFood("pudding"), x: 82, y: 32, color: "bg-red text-white", stallNum: "10", kanji: "布丁" },
    { id: "custard", food: getFood("custard"), x: 82, y: 64, color: "bg-red text-white", stallNum: "11", kanji: "菓子" },
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
            <div className="absolute top-8 bottom-16 left-6 w-36 md:w-56 rounded-2xl border-3 border-dashed border-black bg-primary/20 flex flex-col items-center pt-2">
              <span className="text-[10px] font-mono font-black uppercase text-black bg-primary px-2 py-0.5 rounded border-2 border-black shadow-[2px_2px_0px_#111111]">
                A区 · 主食 Mains (01-04)
              </span>
            </div>
            
            {/* Zone B: Side Dishes (Green) */}
            <div className="absolute top-8 bottom-16 left-[40%] right-[32%] rounded-2xl border-3 border-dashed border-black bg-green/20 flex flex-col items-center pt-2">
              <span className="text-[10px] font-mono font-black uppercase text-white bg-green px-2 py-0.5 rounded border-2 border-black shadow-[2px_2px_0px_#111111]">
                B区 · 副菜 Sides (05-09)
              </span>
            </div>
            
            {/* Zone C: Desserts (Red) */}
            <div className="absolute top-8 bottom-16 right-6 w-32 md:w-44 rounded-2xl border-3 border-dashed border-black bg-red/20 flex flex-col items-center pt-2">
              <span className="text-[10px] font-mono font-black uppercase text-white bg-red px-2 py-0.5 rounded border-2 border-black shadow-[2px_2px_0px_#111111]">
                C区 · 甘味 Desserts (10-11)
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
                role="button"
                tabIndex={0}
                aria-label={`Stall ${stall.stallNum}: ${stall.food?.name}`}
                className="absolute flex flex-col items-center group cursor-pointer transition-all duration-150 z-10 outline-none focus-visible:ring-4 focus-visible:ring-primary rounded-2xl"
                style={{ left: `${stall.x}%`, top: `${stall.y}%`, transform: 'translate(-50%, -50%)' }}
                onClick={() => handleStallClick(stall.food?.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleStallClick(stall.food?.id);
                  }
                }}
              >
                {/* Stall Circle Pin with Offset Shadow */}
                <div className="relative">
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center ${stall.color} border-3 border-black shadow-[4px_4px_0px_#111111] group-hover:shadow-[7px_7px_0px_#111111] group-hover:-translate-y-1 transition-all overflow-hidden`}>
                    {stall.food?.image ? (
                      <img 
                        src={stall.food.image} 
                        alt={stall.food.name} 
                        onError={(e) => {
                          const target = e.currentTarget;
                          const fallback1 = `/images/${stall.food?.id}.jpg`;
                          const fallback2 = `/assets/images/${stall.food?.id}.jpg`;
                          if (target.src !== fallback1 && !target.src.endsWith(fallback1)) {
                            target.src = fallback1;
                          } else if (target.src !== fallback2 && !target.src.endsWith(fallback2)) {
                            target.src = fallback2;
                          }
                        }}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <Utensils className="text-black" size={22} />
                    )}
                  </div>
                  
                  {/* Stall Number Tag */}
                  <div className="absolute -top-2.5 -left-2.5 bg-blue text-white px-1.5 py-0.2 rounded text-[10px] font-mono font-black border-2 border-black shadow-[1px_1px_0px_#111111]">
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
                    Discover Recipe →
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
