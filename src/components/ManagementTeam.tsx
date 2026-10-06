import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { teamGroups } from '../data/team';
import { JapaneseSeal, NumberLabel, Halftone } from './graphic';

export function ManagementTeam() {
  const isDualRole = (name: string) => ['Rahnuma', 'Muntaha', 'Erin', 'Arshee'].includes(name);

  return (
    <section id="team" className="py-20 md:py-28 bg-offwhite text-black border-b-4 border-black relative overflow-hidden">
      
      <Halftone color="black" opacity={0.04} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <SectionHeading 
            number="05"
            kanjiBadge="生徒名簿"
            badge="The Cohort"
            badgeVariant="yellow"
            title="Meet The Student Contributors (生徒名簿)"
            description="Class 7 Section Tulip students divided into specialized squads to Prepare Dishes, culinary preparation, hygiene maintaining, and physical presentation."
            theme="light"
          />
        </div>

        {/* Squad 1: Decoration & Presentation Squad (Yellow & Blue Theme) */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b-3 border-black">
            <span className="w-10 h-10 rounded-xl bg-primary text-black border-2.5 border-black flex items-center justify-center font-display font-black text-base shadow-[3px_3px_0px_#111111]">
              A
            </span>
            <div>
              <h3 className="font-headline font-black text-lg sm:text-xl md:text-2xl text-black flex flex-wrap items-center gap-2 tracking-[0.035em] leading-snug">
                <span>Decoration & Presentation Squad</span>
                <span className="text-xs font-mono font-black bg-blue text-white px-2 py-0.5 rounded border border-black shadow-[1px_1px_0px_#111111]">
                  装飾展示班
                </span>
              </h3>
              <p className="text-xs font-mono uppercase text-black/70 font-bold">
                Classroom plan, visual aesthetics, signage & guest reception
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6">
            {teamGroups.decoration.map((member) => (
              <div 
                key={member.id} 
                className="bg-white text-black border-3 border-black rounded-2xl p-4 shadow-[4px_4px_0px_#111111] hover:shadow-[7px_7px_0px_#1769C2] hover:-translate-y-1 transition-all flex flex-col items-center text-center group"
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
                {isDualRole(member.name) && (
                  <span className="mt-1.5 text-[9px] font-mono font-black bg-yellow text-black px-1.5 py-0.5 rounded border border-black shadow-[1px_1px_0px_#111111]">
                    Food & Deco
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Squad 2: Food Preparation & Nutrition Squad (Red & Green Theme) */}
        <div>
          <div className="flex items-center gap-3 mb-6 pb-3 border-b-3 border-black">
            <span className="w-10 h-10 rounded-xl bg-red text-white border-2.5 border-black flex items-center justify-center font-display font-black text-base shadow-[3px_3px_0px_#111111]">
              B
            </span>
            <div>
              <h3 className="font-headline font-black text-lg sm:text-xl md:text-2xl text-black flex flex-wrap items-center gap-2 tracking-[0.035em] leading-snug">
                <span>Food Preparation & Nutrition Squad</span>
                <span className="text-xs font-mono font-black bg-red text-white px-2 py-0.5 rounded border border-black shadow-[1px_1px_0px_#111111]">
                  調理栄養班
                </span>
              </h3>
              <p className="text-xs font-mono uppercase text-black/70 font-bold">
                Home preparation, recipe making, nutrient calculations & hygiene
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
            {teamGroups.foodPrep.map((member) => (
              <div 
                key={member.id} 
                className="bg-white text-black border-3 border-black rounded-2xl p-4 shadow-[4px_4px_0px_#111111] hover:shadow-[7px_7px_0px_#F04424] hover:-translate-y-1 transition-all flex flex-col items-center text-center group"
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
                {isDualRole(member.name) && (
                  <span className="mt-1.5 text-[9px] font-mono font-black bg-yellow text-black px-1.5 py-0.5 rounded border border-black shadow-[1px_1px_0px_#111111]">
                    Food & Deco
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
