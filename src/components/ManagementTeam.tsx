import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { teamGroups } from '../data/team';
import { JapaneseSeal, NumberLabel, Halftone } from './graphic';

export function ManagementTeam() {
  return (
    <section id="team" className="py-20 md:py-28 bg-deep-black text-white border-b-4 border-black relative overflow-hidden">
      
      <Halftone color="yellow" opacity={0.04} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <SectionHeading 
            number="05"
            kanjiBadge="生徒名簿"
            badge="The Cohort"
            badgeVariant="yellow"
            title="Meet The Student Contributors (班員紹介)"
            description="Class 7 Section Tulip students divided into specialized squads to execute recipe research, culinary preparation, hygiene monitoring, and physical presentation."
            theme="dark"
          />
        </div>

        {/* Squad 1: Decoration & Presentation Squad (Yellow Theme) */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b-3 border-yellow">
            <span className="w-10 h-10 rounded-xl bg-primary text-black border-2 border-black flex items-center justify-center font-display font-black text-base shadow-[3px_3px_0px_#FFFFFF]">
              A
            </span>
            <div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-yellow flex items-center gap-2">
                <span>Decoration & Presentation Squad</span>
                <span className="text-xs font-mono font-bold bg-white text-black px-2 py-0.5 rounded">装飾展示班</span>
              </h3>
              <p className="text-xs font-mono uppercase text-white/70 font-bold">
                Classroom layout, visual aesthetics, signage & guest reception
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {teamGroups.decoration.map((member) => (
              <div 
                key={member.id} 
                className="bg-white text-black border-3 border-black rounded-2xl p-4 shadow-[5px_5px_0px_#FFD21F] hover:shadow-[7px_7px_0px_#FFD21F] hover:-translate-y-1 transition-all flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-primary border-2.5 border-black flex items-center justify-center mb-3 shadow-[3px_3px_0px_#111111] group-hover:scale-105 transition-transform">
                  <span className="font-display font-black text-xl sm:text-2xl text-black">
                    #{member.roll}
                  </span>
                </div>
                <h4 className="font-display font-black text-base sm:text-lg text-black mb-0.5 leading-snug">
                  {member.name}
                </h4>
                <span className="text-[10px] font-mono font-black text-black/60 uppercase">
                  Class 7 Tulip
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Squad 2: Food Preparation & Nutrition Squad (Vermillion Red & Emerald Theme) */}
        <div>
          <div className="flex items-center gap-3 mb-6 pb-3 border-b-3 border-red">
            <span className="w-10 h-10 rounded-xl bg-red text-white border-2 border-black flex items-center justify-center font-display font-black text-base shadow-[3px_3px_0px_#FFFFFF]">
              B
            </span>
            <div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-red flex items-center gap-2">
                <span>Food Preparation & Nutrition Squad</span>
                <span className="text-xs font-mono font-bold bg-yellow text-black px-2 py-0.5 rounded">調理栄養班</span>
              </h3>
              <p className="text-xs font-mono uppercase text-white/70 font-bold">
                Home culinary execution, recipe ratios, macronutrient calculations & hygiene
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {teamGroups.foodPrep.map((member) => (
              <div 
                key={member.id} 
                className="bg-white text-black border-3 border-black rounded-2xl p-4 shadow-[5px_5px_0px_#F04424] hover:shadow-[7px_7px_0px_#F04424] hover:-translate-y-1 transition-all flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-red text-white border-2.5 border-black flex items-center justify-center mb-3 shadow-[3px_3px_0px_#111111] group-hover:scale-105 transition-transform">
                  <span className="font-display font-black text-xl sm:text-2xl text-yellow">
                    #{member.roll}
                  </span>
                </div>
                <h4 className="font-display font-black text-base sm:text-lg text-black mb-0.5 leading-snug">
                  {member.name}
                </h4>
                <span className="text-[10px] font-mono font-black text-black/60 uppercase">
                  Class 7 Tulip
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
