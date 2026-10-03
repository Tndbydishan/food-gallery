import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { SectionHeading } from './ui/SectionHeading';
import { ShieldCheck, Info, Sparkles } from 'lucide-react';

export function AboutEvent() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          anime({
            targets: '.about-element',
            translateY: [30, 0],
            opacity: [0, 1],
            delay: anime.stagger(120),
            easing: 'easeOutQuad',
            duration: 700
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24 bg-brand-soft-blue/40 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-baby-blue/30 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/60 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Story & Goal */}
        <div>
          <div className="about-element">
            <SectionHeading 
              badge="Our Purpose & Learning"
              title="Home Science in Action"
              align="left"
              className="mb-6 md:mb-8"
            />
          </div>
          
          <div className="space-y-5 text-brand-text/85 text-base md:text-lg leading-relaxed font-medium">
            <p className="about-element">
              This digital showcase presents the Home Science Food Festival created by Class 7, Section Tulip of Southpoint School and College. The project brings together food preparation, nutrition, presentation, creativity, teamwork, and fundamental Home Science principles.
            </p>
            <p className="about-element">
              Through this project, students explored how culinary techniques, temperature control, starch gelatinization, caramelization, and proper food hygiene work together in daily cooking.
            </p>

            {/* Dedicated Food Preparation Disclaimer Card as requested */}
            <div className="about-element bg-white/90 backdrop-blur-md p-6 rounded-[28px] border border-brand-baby-blue/40 shadow-[0_8px_25px_rgba(75,130,160,0.08)] mt-6">
              <div className="flex items-center gap-2.5 mb-2 text-brand-text">
                <ShieldCheck size={22} className="text-brand-text" />
                <h4 className="font-display text-lg text-brand-text">About The Food Preparation</h4>
              </div>
              <p className="text-sm text-brand-text/80 leading-relaxed">
                The food featured in this project was prepared at home by students and brought to school for presentation as part of our Home Science coursework. The dishes were not cooked or prepared on the school premises.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Composition with badge */}
        <div className="relative about-element group max-w-lg mx-auto lg:max-w-none w-full">
          <div className="aspect-[4/3] rounded-[32px] md:rounded-[44px] overflow-hidden border-4 md:border-8 border-white shadow-xl rotate-1 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-[1.01]">
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800" 
              alt="Students demonstrating culinary presentation" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Corrected Floating Badge: explicitly noting prepared at home */}
          <div className="absolute -bottom-6 -left-2 sm:-left-6 bg-brand-baby-blue text-brand-text p-4 sm:p-5 rounded-[24px] sm:rounded-[28px] shadow-lg max-w-[260px] sm:max-w-xs transition-transform duration-300 hover:scale-105 border-2 border-white">
            <span className="text-2xl sm:text-3xl block mb-1">🏡✨</span>
            <p className="font-bold text-xs sm:text-sm leading-snug">
              Prepared at home with care & science • Proudly presented at school!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
