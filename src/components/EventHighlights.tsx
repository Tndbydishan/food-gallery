import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { SectionHeading } from './ui/SectionHeading';
import { highlights } from '../data/highlights';
import { Heart, Apple, FlaskConical, Palette, Users, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart className="w-7 h-7 text-brand-baby-blue" />,
  Apple: <Apple className="w-7 h-7 text-emerald-600" />,
  FlaskConical: <FlaskConical className="w-7 h-7 text-brand-text" />,
  Palette: <Palette className="w-7 h-7 text-brand-accent-peach" />,
  Users: <Users className="w-7 h-7 text-brand-baby-blue" />,
  Sparkles: <Sparkles className="w-7 h-7 text-amber-500" />
};

export function EventHighlights() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          anime({
            targets: '.highlight-card',
            translateY: [24, 0],
            opacity: [0, 1],
            delay: anime.stagger(80),
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
    <section id="highlights" ref={sectionRef} className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          badge="More Than Just Food"
          title="Event Highlights" 
          description="This festival explores food preparation, nutrition, hygiene, food presentation, and the science behind every recipe."
          className="mb-12 md:mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {highlights.map((item) => (
            <div 
              key={item.id} 
              className="highlight-card bg-brand-cream/90 rounded-[28px] md:rounded-[36px] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(137,207,240,0.18)] border border-brand-text/5 hover:border-brand-baby-blue/50 flex flex-col"
            >
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-xs rotate-2 border border-brand-text/5">
                {iconMap[item.icon] || <Sparkles className="w-7 h-7 text-brand-baby-blue" />}
              </div>
              <h3 className="text-xl md:text-2xl font-display mb-2.5 text-brand-text">{item.title}</h3>
              <p className="text-sm md:text-base text-brand-text/75 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
