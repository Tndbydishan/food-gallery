import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { NumberLabel, StarBurst, ComicBurst, Halftone } from './graphic';
import { Scale, ShieldCheck, Sparkles, Users } from 'lucide-react';
import scienceImage from '../assets/images/bento_culinary_science_1791045693832.jpg';
import presentationImage from '../assets/images/bento_team_presentation_1791045705858.jpg';
import { scrollToElement } from '../utils/lenis';

export function EventHighlights() {
  return (
    <section id="highlights" className="py-20 md:py-28 bg-offwhite text-black border-b-4 border-black relative overflow-hidden">
      
      {/* Comic Halftone Ben-Day Texture */}
      <Halftone color="black" opacity={0.04} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Heading with Comic Cartoon Neo-Brutalism */}
        <div className="mb-14 md:mb-18 text-center max-w-3xl mx-auto">
          <SectionHeading 
            number="01"
            kanjiBadge="五大原則"
            badge="Curricular Pillars"
            badgeVariant="yellow"
            title="Beyond Just Food: The 5 Scientific Pillars (五大原則)"
            description="Our festival bridges theoretical chemistry, macronutrient calculations, food hygiene protocols, and aesthetic visual plating into one coherent student exhibition."
            theme="light"
          />
        </div>

        {/* Comic-Book Paneled Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8">
          
          {/* Bento Item 1: Large 7-col Module (Cobalt Blue Card) */}
          <div className="lg:col-span-7 bg-blue text-white border-3.5 border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_#111111] hover:shadow-[9px_9px_0px_#111111] hover:-translate-y-1 transition-all flex flex-col justify-between group relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <NumberLabel number="01" label="BIOCHEMISTRY" variant="yellow" size="sm" />
                <span className="font-mono text-xs font-black text-black uppercase tracking-widest bg-yellow px-2.5 py-0.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_#111111]">
                  熱化学反応 · Heat Chemistry
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-3 tracking-tight">
                Culinary Science & Heat Transformations
              </h3>
              
              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                Every recipe demonstrates essential chemical principles: starch gelatinization in custards, starch retrogradation in cooled fried rice, the Maillard reaction in golden fried chicken, and acid-base oxidation inhibition in fresh fruit salads.
              </p>
            </div>

            {/* Inset Photo Frame with Comic Panel Border */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border-3.5 border-black bg-white mt-2 shadow-[4px_4px_0px_#111111]">
              <img 
                src={scienceImage} 
                alt="Culinary science ingredients and kitchen laboratory preparation"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 bg-yellow text-black px-3 py-1 rounded-lg text-xs font-mono font-black border-2 border-black shadow-[2px_2px_0px_#111111]">
                🧪 Laboratory Analysis · Section Tulip
              </div>
            </div>
          </div>

          {/* Bento Item 2: 5-col Module (Safety Yellow Card) */}
          <div className="lg:col-span-5 bg-primary text-black border-3.5 border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_#111111] hover:shadow-[9px_9px_0px_#111111] hover:-translate-y-1 transition-all flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <NumberLabel number="02" label="NUTRITION" variant="black" size="sm" />
                <span className="font-mono text-xs font-black text-white uppercase tracking-wider bg-red px-2.5 py-0.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_#111111]">
                  栄養計算 · Macros
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-black mb-3 tracking-tight">
                Nutritional Literacy & Calorie Calculations
              </h3>
              
              <p className="text-black/85 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                Students tracked macronutrients (proteins, carbohydrates, dietary fiber, fats) and calculated energy values per serving basis across every exhibited dish.
              </p>
            </div>

            {/* Comic Calorie Range Graphic Block */}
            <div className="bg-white text-black border-3 border-black rounded-2xl p-4 shadow-[4px_4px_0px_#111111] flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase font-mono font-black tracking-wider text-black/70 block">
                  Measured Calorie Range
                </span>
                <div className="font-display font-black text-3xl text-black mt-0.5">
                  25 – 290 <span className="text-sm font-mono text-red">kcal</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-red text-white border-2.5 border-black flex items-center justify-center shadow-[2px_2px_0px_#111111]">
                <Scale className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Bento Item 3: 5-col Module (Emerald Green Card) */}
          <div className="lg:col-span-5 bg-green text-white border-3.5 border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_#111111] hover:shadow-[9px_9px_0px_#111111] hover:-translate-y-1 transition-all flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <NumberLabel number="03" label="HYGIENE" variant="yellow" size="sm" />
                <span className="font-mono text-xs font-black text-black uppercase tracking-wider bg-white px-2.5 py-0.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_#111111]">
                  衛生管理 · Safety
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-3 tracking-tight">
                Food Hygiene, Allergens & Transit Safety
              </h3>
              
              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                Thorough protocol on cross-contamination prevention, clear allergen disclosures (gluten, dairy, eggs), and sterile container packaging for transit from home to school.
              </p>
            </div>

            <div className="bg-white text-black border-2.5 border-black p-3.5 rounded-xl shadow-[3px_3px_0px_#111111] flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-green shrink-0" />
              <span className="text-xs font-mono font-bold leading-tight text-black">
                Full Allergen Identification & Zero Raw-Cooked Storage Mixing
              </span>
            </div>
          </div>

          {/* Bento Item 4: 7-col Module (Vermillion Red Card) */}
          <div className="lg:col-span-7 bg-red text-white border-3.5 border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_#111111] hover:shadow-[9px_9px_0px_#111111] hover:-translate-y-1 transition-all flex flex-col justify-between group relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <NumberLabel number="04" label="AESTHETICS" variant="yellow" size="sm" />
                <span className="font-mono text-xs font-black text-black uppercase tracking-wider bg-yellow px-2.5 py-0.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_#111111]">
                  盛付調和 · Plating
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-3 tracking-tight">
                Aesthetic Plating & Visual Presentation
              </h3>
              
              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                Culinary arts honor the eyes first. Section Tulip students practiced color theory, textural contrast, uniform knife cuts, and balanced garnishing on every stall table.
              </p>
            </div>

            {/* Inset Photo Frame */}
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden border-3.5 border-black bg-white shadow-[4px_4px_0px_#111111]">
              <img 
                src={presentationImage} 
                alt="Festive food table presentation with desserts and salads"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 bg-white text-black px-3 py-1 rounded-md text-xs font-mono font-black shadow-[3px_3px_0px_#111111] border-2 border-black">
                🍽️ Plating Harmony · Color & Texture Balance
              </div>
            </div>
          </div>

          {/* Bento Item 5: Full 12-col Module (Comic Pop White & Blue Card — No Black Background!) */}
          <div className="lg:col-span-12 bg-white text-black border-4 border-black rounded-3xl p-6 sm:p-8 shadow-[8px_8px_0px_#1769C2] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative overflow-hidden">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-2">
                <NumberLabel number="05" label="COLLABORATION" variant="blue" size="sm" />
                <span className="text-xs font-mono text-red font-black uppercase tracking-wider bg-yellow px-2 py-0.5 rounded border border-black shadow-[1px_1px_0px_#111111]">
                  生徒共同開発 · Class 7 Section Tulip
                </span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-black mb-2 tracking-tight">
                Student Teamwork & Digital Collaboration (共同制作)
              </h3>
              <p className="text-black/80 text-sm sm:text-base leading-relaxed font-medium">
                Bringing together dedicated Section Tulip students across Decoration, Food Prep, and Presentation squads, built in collaboration with the SPSC Programming Club.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3 w-full sm:w-auto">
              <Button 
                size="md" 
                variant="primary"
                onClick={() => scrollToElement('#team')}
                className="w-full sm:w-auto shadow-[4px_4px_0px_#111111]"
              >
                <span>Meet The Team (生徒名簿)</span>
                <span className="ml-1.5">→</span>
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
