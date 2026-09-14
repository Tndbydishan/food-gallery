import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { SectionHeading } from './ui/SectionHeading';
import { teamGroups } from '../data/team';

export function ManagementTeam() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          anime({
            targets: '.team-card',
            translateY: [40, 0],
            opacity: [0, 1],
            delay: anime.stagger(100),
            easing: 'easeOutExpo',
            duration: 800
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
      <div className="absolute top-20 right-10 w-64 h-64 bg-brand-soft-baby-blue rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-brand-soft-blue rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeading 
          badge="The People Behind The Festival"
          title="Meet Our Team"
          description="The dedicated students who brought this home science project to life."
          className="mb-16"
        />

        {/* Decoration Team */}
        <div className="mb-20">
          <h3 className="font-display text-3xl text-center text-brand-text mb-10">Decoration Team</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {teamGroups.decoration.map((member) => (
              <div key={member.id} className="team-card opacity-0 group flex flex-col items-center">
                <div className="w-full aspect-square rounded-[32px] bg-brand-soft-baby-blue border-4 border-brand-baby-blue/30 flex flex-col items-center justify-center mb-4 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-brand-baby-blue/20">
                  <span className="text-4xl font-display text-brand-baby-blue mb-2 opacity-80">#{member.roll}</span>
                </div>
                <h4 className="font-display text-xl text-brand-text text-center">{member.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Food Prep Team */}
        <div>
          <h3 className="font-display text-3xl text-center text-brand-text mb-10">Food Prep Team</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {teamGroups.foodPrep.map((member) => (
              <div key={member.id} className="team-card opacity-0 group flex flex-col items-center">
                <div className="w-full aspect-square rounded-[32px] bg-brand-soft-blue border-4 border-brand-blue/30 flex flex-col items-center justify-center mb-4 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-brand-blue/20">
                  <span className="text-4xl font-display text-brand-blue mb-2 opacity-80">#{member.roll}</span>
                </div>
                <h4 className="font-display text-xl text-brand-text text-center">{member.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
