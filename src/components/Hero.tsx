import React from 'react';
import { Button } from './ui/Button';
import { StarBurst, JapaneseSeal, RetroStamp, RetroTicket, Halftone, ComicBurst } from './graphic';
import { scrollToElement } from '../utils/lenis';
import heroImage from '../assets/images/hero_culinary_showcase_1791045681873.jpg';

export function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-offwhite border-b-4 border-black">
      
      {/* Retro Halftone Screen Print Texture */}
      <Halftone color="black" opacity={0.05} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Top Japanese Poster Metadata Ribbon */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <JapaneseSeal kanji="食育" subtext="SPSC" size="sm" variant="red" rotate="-4deg" />
          
          <div className="bg-black text-yellow border-2.5 border-black px-3 py-1 rounded-lg font-mono font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_#FFD21F]">
            No. 07 · Class 7 Tulip
          </div>

          <RetroStamp 
            label="HOME PREPARED · PRESENTED AT SCHOOL" 
            sub="SOUTHPOINT SCHOOL & COLLEGE" 
            variant="red" 
            rotate="1deg"
          />

          <span className="hidden xl:inline-block font-mono text-xs font-bold uppercase tracking-widest text-black/70 bg-white border-2 border-black px-2.5 py-1 rounded-md shadow-[2px_2px_0px_#111111]">
            Academic Year 2026
          </span>
        </div>

        {/* 12-Column Asymmetric Japanese Poster Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Stacked High-Contrast Headline & Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Japanese Subheading Banner */}
            <div className="inline-flex items-center gap-2 mb-3 bg-yellow border-2 border-black px-3 py-0.5 rounded-md font-mono font-black text-xs text-black uppercase tracking-widest shadow-[2px_2px_0px_#111111]">
              <span>家庭科 食育フェスティバル</span>
              <span>/</span>
              <span>Home Science Festival</span>
            </div>

            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-black leading-[0.95] tracking-tighter mb-6 select-none">
              A LITTLE <br />
              <span className="relative inline-block my-1.5">
                <span className="relative z-10 bg-red text-yellow px-4 py-1.5 border-3.5 border-black rounded-2xl shadow-[6px_6px_0px_#111111] inline-block -rotate-1">
                  TASTE OF HOME
                </span>
              </span>
              <br />
              <span className="text-black inline-block mt-1">
                FOOD FESTIVAL.
              </span>
            </h1>

            <p className="max-w-xl text-base sm:text-lg md:text-xl text-black font-medium leading-relaxed mb-8 [text-wrap:pretty]">
              Exploring culinary science, nutritional biochemistry, balanced dietetics, and the physical transformations behind home-cooked recipes. A student exhibition by Section Tulip.
            </p>

            {/* Tactile Action Button Row */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8">
              <Button 
                size="lg" 
                variant="primary" 
                onClick={() => scrollToElement('#menu')} 
                className="w-full sm:w-auto text-base shadow-[6px_6px_0px_#111111]"
              >
                <span>Explore The Menu (料理一覧)</span>
                <span className="ml-1.5">→</span>
              </Button>
              
              <Button 
                size="lg" 
                variant="red" 
                onClick={() => scrollToElement('#map')} 
                className="w-full sm:w-auto text-base shadow-[6px_6px_0px_#111111]"
              >
                <span>Floor Blueprint (配置図)</span>
              </Button>
            </div>

            {/* Mandatory Food Preparation Disclaimer Ticket */}
            <div className="w-full max-w-xl">
              <RetroTicket
                badge="CURRICULAR REQUIREMENT"
                code="SPSC-HS-2026"
                title="Prepared at Home • Presented at School"
                subtitle="All dishes were crafted in students' home kitchens and brought to school for Home Science demonstration. No dishes were cooked on school premises."
                variant="yellow"
                className="w-full"
              />
            </div>

          </div>

          {/* Right Column: Layered Graphic Poster Composition (5 cols) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Solid Offset Backing Block (Vermillion Red) */}
              <div className="absolute inset-0 bg-red border-4 border-black rounded-3xl translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6 shadow-[8px_8px_0px_#111111]" />
              
              {/* Secondary Offset Yellow Strip */}
              <div className="absolute -inset-2 bg-yellow border-3 border-black rounded-3xl -rotate-2 -z-10" />

              {/* Foreground Image Poster Frame */}
              <div className="relative bg-white border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_#111111]">
                <div className="aspect-[4/3] sm:aspect-square overflow-hidden bg-primary relative">
                  <img 
                    src={heroImage} 
                    alt="Student prepared Home Science food festival exhibition showcase" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />

                  {/* Japanese Vertical Label Stripe Overlay */}
                  <div className="absolute top-4 left-4 z-10 writing-vertical bg-black text-yellow border-2 border-white px-2 py-3 rounded-lg font-display font-black text-xs uppercase shadow-[3px_3px_0px_#D92B20]">
                    南尖学園 · 2026 展示
                  </div>
                </div>

                {/* Bottom Graphic Caption Bar */}
                <div className="p-4 bg-black text-white border-t-3 border-black flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-display font-black text-xs uppercase tracking-wider text-yellow">
                      Section Tulip Exhibition
                    </span>
                    <span className="text-[11px] font-mono text-white/70">
                      Southpoint School & College · 第7学年
                    </span>
                  </div>
                  <div className="bg-primary text-black font-display font-black px-2.5 py-1 rounded text-xs uppercase border border-black shadow-[2px_2px_0px_#FFFFFF]">
                    Stalls 01–09
                  </div>
                </div>
              </div>

              {/* Floating Japanese StarBurst Graphic (Top-Right) */}
              <div className="absolute -top-6 -right-4 sm:-top-8 sm:-right-6 z-20">
                <StarBurst text="100% HOME PREPARED" color="yellow" size="lg" rotate="12deg" />
              </div>

              {/* Floating Comic Burst Graphic (Bottom-Left) */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 z-20">
                <ComicBurst text="SCIENCE × TASTE" sub="09 DISHES" variant="red" rotate="-6deg" />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
