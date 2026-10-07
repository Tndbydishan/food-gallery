import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { RetroStamp, JapaneseSeal, Halftone, ComicBurst } from './graphic';
import { ShieldCheck, BookOpen, Sparkles, Heart } from 'lucide-react';
import aboutImage from '../assets/images/about_home_preparation_1791045717331.jpg';

export function AboutEvent() {
  return (
    <section id="about" className="py-20 md:py-28 bg-offwhite border-b-4 border-black relative overflow-hidden">
      
      <Halftone color="black" opacity={0.04} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Mission Narrative & Official Disclaimer (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            <SectionHeading 
              number="04"
              kanjiBadge="家庭科"
              badge="Project Narrative"
              badgeVariant="yellow"
              title="Home Science: From Kitchen to Classroom (台所から教室へ)"
              align="left"
              className="mb-6"
            />
            
            <div className="space-y-4 text-black text-base md:text-lg leading-relaxed font-medium mb-8">
              <p>
                This digital showcase presents the Home Science Food Festival organized by Class 7, Section Tulip of Southpoint School and College. The initiative merges hands-on food preparation, nutritional calculations, culinary skills, teamwork, and food hygiene into one shared learning session.
              </p>
              <p>
                Rather than treating cooking as mere routine, our students explored why foods react the way they do: how marination tenders meats, how gentle heat prevents custard curdling, and how proper cooling creates superior fried rice grains through starch retrogradation.
              </p>
            </div>

            {/* Dedicated Food Preparation Disclaimer Card */}
            <div className="bg-yellow border-3.5 border-black rounded-2xl p-5 sm:p-6 shadow-[6px_6px_0px_#111111] w-full mb-6 relative overflow-hidden">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue text-white border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#111111]">
                  <ShieldCheck size={20} />
                </div>
                <h4 className="font-display font-black text-base sm:text-lg text-black uppercase tracking-wide">
                  About The Food Preparation (調理に関する重要事項)
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-black font-bold leading-relaxed">
                The food featured in this project was prepared at home by students and brought to school for presentation as part of our Home Science coursework. The dishes were not cooked or prepared on the school premises.
              </p>
            </div>

            {/* Educational Goal Metric Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="bg-blue text-white border-2.5 border-black px-3.5 py-1.5 rounded-xl shadow-[3px_3px_0px_#111111] text-xs font-display font-black uppercase">
                ✦ 100% Student Made (生徒制作)
              </div>
              <div className="bg-green text-white border-2.5 border-black px-3.5 py-1.5 rounded-xl shadow-[3px_3px_0px_#111111] text-xs font-display font-black uppercase">
                ✦ Hygiene Maintained (衛生検証)
              </div>
              <div className="bg-red text-white border-2.5 border-black px-3.5 py-1.5 rounded-xl shadow-[3px_3px_0px_#111111] text-xs font-display font-black uppercase">
                ✦ Nutrition calculated (栄養計算)
              </div>
            </div>

          </div>

          {/* Right Column: Visual Frame (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Background Offset Card (Saturated Vermillion Red) */}
              <div className="absolute inset-0 bg-red border-4 border-black rounded-3xl translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6 shadow-[8px_8px_0px_#111111]" />
              
              {/* Foreground Image Card */}
              <div className="relative bg-white border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_#111111]">
                <div className="aspect-[4/3] overflow-hidden bg-primary relative">
                  <img 
                    src={aboutImage} 
                    alt="Students home cooking and culinary presentation preparation" 
                    onError={(e) => {
                      const target = e.currentTarget;
                      const fallback = '/images/about_home_preparation_1791045717331.jpg';
                      if (target.src !== fallback && !target.src.endsWith(fallback)) {
                        target.src = fallback;
                      }
                    }}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  
                  {/* Japanese Stamp in image corner */}
                  <div className="absolute top-3 right-3">
                    <JapaneseSeal kanji="純手作" subtext="HOME" size="sm" variant="red" rotate="6deg" />
                  </div>
                </div>
                
                <div className="p-4 bg-blue text-white border-t-3 border-black flex items-center justify-between">
                  <span className="font-display font-black text-xs uppercase tracking-wider text-yellow">
                    Home Kitchen · Class 7 Tulip
                  </span>
                  <span className="text-xs font-mono font-bold text-white/90">
                    Handmade with Care (手作りの味)
                  </span>
                </div>
              </div>

              {/* Floating Japanese Comic Burst */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 z-20">
                <ComicBurst 
                  text="PREPARED AT HOME!" 
                  sub="PRESENTED AT SCHOOL" 
                  variant="yellow" 
                  rotate="-4deg" 
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
