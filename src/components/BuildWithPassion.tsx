import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Code, Sparkles, Heart } from 'lucide-react';
import { Halftone, StarBurst } from './graphic';

export function Statistics() {
  const stats = [
    { label: "Exhibited Dishes", kanji: "展示品数", value: "09", desc: "Handcrafted recipes", color: "bg-primary text-black", shadow: "shadow-[5px_5px_0px_#111111]" },
    { label: "Food Categories", kanji: "料理区分", value: "05", desc: "From mains to desserts", color: "bg-green text-white", shadow: "shadow-[5px_5px_0px_#111111]" },
    { label: "Home Science", kanji: "家庭科実践", value: "100%", desc: "Curriculum integrated", color: "bg-red text-white", shadow: "shadow-[5px_5px_0px_#111111]" },
    { label: "Student Creators", kanji: "参加生徒", value: "16", desc: "Section Tulip cohort", color: "bg-blue text-white", shadow: "shadow-[5px_5px_0px_#111111]" }
  ];

  return (
    <section className="py-14 md:py-20 bg-yellow border-b-4 border-black relative overflow-hidden">
      <Halftone color="black" opacity={0.06} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className={`${stat.color} border-3.5 border-black rounded-3xl p-5 sm:p-6 ${stat.shadow} hover:-translate-y-1 transition-all flex flex-col justify-between`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="w-9 h-9 rounded-xl bg-black text-yellow border-2 border-white flex items-center justify-center font-display font-black text-xs shadow-[2px_2px_0px_#111111]">
                  0{i + 1}
                </span>
                <span className="text-[10px] font-mono uppercase font-black tracking-widest opacity-80">
                  {stat.kanji}
                </span>
              </div>
              <div>
                <div className="font-display font-black text-4xl sm:text-5xl tracking-tighter mb-1">
                  {stat.value}
                </div>
                <div className="font-display font-black text-sm sm:text-base leading-snug">
                  {stat.label}
                </div>
                <div className="text-xs font-mono font-medium opacity-85 mt-0.5">
                  {stat.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BuildWithPassion() {
  return (
    <section id="passion" className="py-20 md:py-28 bg-offwhite border-b-4 border-black relative overflow-hidden">
      
      <Halftone color="black" opacity={0.04} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative z-10">
        
        <SectionHeading 
          number="06"
          kanjiBadge="情熱協調"
          badge="Curiosity & Learning"
          badgeVariant="yellow"
          title="Built With Passion, Science & Curiosity (探求と協力)"
          className="mb-6"
        />
        
        <p className="text-base sm:text-lg md:text-xl text-black font-medium leading-relaxed mb-10 max-w-2xl mx-auto [text-wrap:pretty]">
          Every recipe ratio, display label, and nutritional estimate was crafted with scientific inquiry and enthusiastic teamwork by Class 7 Section Tulip.
        </p>

        {/* Neo-Brutalist Japanese Pop Equation Blocks */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-display font-black text-base sm:text-xl md:text-2xl text-black mb-14">
          <span className="bg-primary border-3 border-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl shadow-[5px_5px_0px_#111111] rotate-1">
            Food · 食
          </span>
          <span className="font-mono text-2xl text-black">+</span>
          <span className="bg-green text-white border-3 border-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl shadow-[5px_5px_0px_#111111] -rotate-1">
            Science · 科
          </span>
          <span className="font-mono text-2xl text-black">+</span>
          <span className="bg-red text-white border-3 border-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl shadow-[5px_5px_0px_#111111] rotate-2">
            Creativity · 創
          </span>
          <span className="font-mono text-2xl text-black">+</span>
          <span className="bg-blue text-white border-3 border-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl shadow-[5px_5px_0px_#111111] -rotate-2">
            Teamwork · 協
          </span>
        </div>

        {/* Distinct SPSC Programming Club Collaboration Card */}
        <div className="bg-white border-4 border-black rounded-3xl p-6 sm:p-8 shadow-[8px_8px_0px_#111111] max-w-xl mx-auto text-left flex items-start gap-4 relative overflow-hidden">
          <div className="w-14 h-14 rounded-2xl bg-primary border-3 border-black flex items-center justify-center shadow-[4px_4px_0px_#111111] shrink-0">
            <Code size={26} className="text-black" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-black text-yellow px-2 py-0.5 rounded text-[10px] font-mono font-black uppercase">
                Digital Engineering · 情報開発
              </span>
            </div>
            <h4 className="font-display font-black text-lg sm:text-xl text-black mb-1">
              Made in Collaboration with SPSC Programming Club
            </h4>
            <p className="text-xs sm:text-sm text-black font-medium leading-relaxed">
              Designed and engineered by the SPSC Programming Club to celebrate our Section Tulip peers' academic and culinary achievements.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
