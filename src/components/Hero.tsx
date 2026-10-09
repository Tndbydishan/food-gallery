import React from 'react';
import { Button } from './ui/Button';
import { StarBurst, JapaneseSeal, RetroStamp, RetroTicket, Halftone, ComicBurst } from './graphic';
import { scrollToElement } from '../utils/lenis';
import heroImage from '../assets/images/hero_culinary_showcase_1791045681873.jpg';
import { foods } from '../data/foods';

export function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-offwhite border-b-4 border-black">
      
      {/* Comic Halftone Ben-Day Dot Texture */}
      <Halftone color="black" opacity={0.04} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Top Comic/Cartoon Metadata Ribbon */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <JapaneseSeal kanji="食育" subtext="SPSC" size="sm" variant="red" rotate="-4deg" />

          <span className="hidden xl:inline-block font-mono text-xs font-bold uppercase tracking-widest text-black/80 bg-white border-2 border-black px-2.5 py-1 rounded-md shadow-[2px_2px_0px_#111111]">
            Academic Year 2026
          </span>
        </div>

        {/* 12-Column Asymmetric Comic-Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Stacked High-Contrast Headline & Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Japanese Subheading Banner */}
            <div className="inline-flex items-center gap-2 mb-3 bg-yellow border-2.5 border-black px-3 py-1 rounded-lg font-mono font-black text-xs text-black uppercase tracking-widest shadow-[2px_2px_0px_#111111]">
              <span>家庭科 食育フェスティバル</span>
              <span>/</span>
              <span>Home Science Festival</span>
            </div>

            <h1 className="font-headline font-black text-3xl min-[380px]:text-4xl min-[480px]:text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-black leading-[1.08] sm:leading-[1.02] tracking-[0.04em] mb-6 select-none [text-wrap:balance]">
              A LITTLE <br />
              <span className="relative inline-block my-1.5 max-w-fit">
                <span className="relative z-10 bg-red text-yellow px-1.5 sm:px-2 py-0.5 sm:py-0.5 border-3 sm:border-3.5 border-black rounded-xl sm:rounded-2xl shadow-[4px_4px_0px_#111111] sm:shadow-[6px_6px_0px_#111111] inline-block max-w-fit -rotate-1 tracking-[0.03em] text-2xl min-[380px]:text-3xl min-[480px]:text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
                  FOOD FESTIVAL!!
                </span>
              </span>
            </h1>

            <p className="max-w-xl text-base sm:text-lg md:text-xl text-black font-medium leading-relaxed mb-8 [text-wrap:pretty]">
              Exploring culinary skills, nutritional charts, balanced dietetics, and the process behind home-cooked recipes. A student Food exhibition by Section Tulip.
            </p>

            {/* Tactile Action Button Row */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8">
              <Button 
                size="lg" 
                variant="primary" 
                onClick={() => scrollToElement('#menu')} 
                className="w-full sm:w-auto text-base shadow-[5px_5px_0px_#111111]"
              >
                <span>Explore The Menu (料理一覧)</span>
                <span className="ml-1.5">→</span>
              </Button>
              
              <Button 
                size="lg" 
                variant="red" 
                onClick={() => scrollToElement('#map')} 
                className="w-full sm:w-auto text-base shadow-[5px_5px_0px_#111111]"
              >
                <span>Floor Plan (配置図)</span>
              </Button>
            </div>

            {/* Food Preparation Disclaimer Ticket */}
            <div className="w-full max-w-xl">
              <RetroTicket
                badge="CURRICULAR REQUIREMENT"
                code="SPSC-Tulip-2026"
                title="Prepared at Home • Presented at School"
                subtitle="All dishes were prepared by students' home kitchens and brought to school for Home Science demonstration. No dishes were cooked on school premises."
                variant="yellow"
                className="w-full"
              />
            </div>

          </div>

          {/* Right Column: Layered Graphic Poster Composition (5 cols) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Solid Offset Backing Card (Vermillion Red) */}
              <div className="absolute inset-0 bg-red border-4 border-black rounded-3xl translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6 shadow-[8px_8px_0px_#111111]" />
              
              {/* Secondary Offset Yellow Strip */}
              <div className="absolute -inset-2 bg-yellow border-3.5 border-black rounded-3xl -rotate-2 -z-10" />

              {/* Foreground Image Poster Frame */}
              <div className="relative bg-white border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_#111111]">
                <div className="aspect-[4/3] sm:aspect-square overflow-hidden bg-primary relative">
                  <img 
                    src={heroImage} 
                    alt="Student prepared Home Science food festival exhibition showcase" 
                    onError={(e) => {
                      const target = e.currentTarget;
                      const fallback = '/images/hero_culinary_showcase_1791045681873.jpg';
                      if (target.src !== fallback && !target.src.endsWith(fallback)) {
                        target.src = fallback;
                      }
                    }}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="eager"
                    decoding="async"
                  />

                  {/* Japanese Vertical Label Stripe Overlay */}
                  <div className="absolute top-4 left-4 z-10 writing-vertical bg-yellow text-black border-2.5 border-black px-2 py-3 rounded-xl font-display font-black text-xs uppercase shadow-[3px_3px_0px_#111111]">
                    南尖学園 · 2026 展示
                  </div>

                  {/* Cute Cartoon Speech Badge */}
                  <div className="absolute bottom-3 right-3 z-10 bg-white/95 text-black border-2.5 border-black px-3 py-1 rounded-xl text-xs font-mono font-black shadow-[3px_3px_0px_#111111] flex items-center gap-1.5 select-none">
                    <span className="text-red">✧(๑˃ᴗ˂)ﻭ</span>
                    <span>100% Home Cooked!</span>
                  </div>
                </div>

                {/* Bottom Graphic Caption Bar (Cobalt Blue Background) */}
                <div className="p-4 bg-blue text-white border-t-3.5 border-black flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-display font-black text-xs uppercase tracking-wider text-yellow">
                      Section Tulip Exhibition
                    </span>
                    <span className="text-[11px] font-mono text-white/90">
                      Southpoint School & College · 第7学年
                    </span>
                  </div>
                  <div className="bg-yellow text-black font-display font-black px-2.5 py-1 rounded-lg text-xs uppercase border-2 border-black shadow-[2px_2px_0px_#111111]">
                    Stalls 01–11
                  </div>
                </div>
              </div>

              {/* Floating Comic StarBurst Graphic (Top-Right) */}
              <div className="absolute -top-6 -right-4 sm:-top-8 sm:-right-6 z-20">
                <StarBurst text="100% HOME PREPARED" color="yellow" size="lg" rotate="12deg" />
              </div>

              {/* Floating Comic Burst Graphic (Bottom-Left) */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 z-20">
                <ComicBurst text="SCIENCE × TASTE" sub={`${foods.length} DISHES`} variant="red" rotate="-6deg" />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
