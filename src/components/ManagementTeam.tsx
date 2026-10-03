import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { SectionHeading } from './ui/SectionHeading';
import { teamGroups } from '../data/team';

export function ManagementTeam() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          anime({
            targets: '.team-card',
            translateY: [24, 0],
            opacity: [0, 1],
            delay: anime.stagger(50),
            easing: 'easeOutQuad',
            duration: 650
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" ref={sectionRef} className="py-16 md:py-24 bg-brand-white relative overflow-hidden">
      <div className="absolute top-20 right-10 w-64 h-64 bg-brand-soft-baby-blue/40 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-brand-soft-blue/40 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          badge="The Students Behind The Festival"
          title="Meet Our Student Team"
          description="Class 7 Section Tulip students collaborated across decoration, food prep, presentation, and culinary science."
          className="mb-12 md:mb-16"
        />

        {/* Decoration Team */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="text-xs uppercase font-bold tracking-wider text-brand-text/50">Section Tulip</span>
            <h3 className="font-display text-2xl md:text-3xl text-brand-text">Decoration & Presentation Team</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {teamGroups.decoration.map((member) => (
              <div key={member.id} className="team-card group flex flex-col items-center">
                <div className="w-full aspect-square rounded-[26px] sm:rounded-[32px] bg-brand-soft-baby-blue/70 border-2 border-brand-baby-blue/30 flex flex-col items-center justify-center mb-3 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_12px_28px_rgba(137,207,240,0.25)] group-hover:border-brand-baby-blue">
                  <span className="text-2xl sm:text-3xl font-display text-brand-text/80 group-hover:text-brand-text transition-colors">#{member.roll}</span>
                </div>
                <h4 className="font-display text-base sm:text-lg text-brand-text text-center">{member.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Food Prep Team */}
        <div>
          <div className="text-center mb-8">
            <span className="text-xs uppercase font-bold tracking-wider text-brand-text/50">Section Tulip</span>
            <h3 className="font-display text-2xl md:text-3xl text-brand-text">Home Preparation & Nutrition Team</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {teamGroups.foodPrep.map((member) => (
              <div key={member.id} className="team-card group flex flex-col items-center">
                <div className="w-full aspect-square rounded-[26px] sm:rounded-[32px] bg-brand-soft-blue/60 border-2 border-brand-blue/40 flex flex-col items-center justify-center mb-3 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_12px_28px_rgba(137,207,240,0.25)] group-hover:border-brand-baby-blue">
                  <span className="text-2xl sm:text-3xl font-display text-brand-text/80 group-hover:text-brand-text transition-colors">#{member.roll}</span>
                </div>
                <h4 className="font-display text-base sm:text-lg text-brand-text text-center">{member.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
