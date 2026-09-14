import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { SectionHeading } from './ui/SectionHeading';
import { highlights } from '../data/highlights';
import { Heart, Apple, FlaskConical, Palette, Users, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart className="w-8 h-8 text-brand-baby-blue" />,
  Apple: <Apple className="w-8 h-8 text-brand-soft-mint" />,
  FlaskConical: <FlaskConical className="w-8 h-8 text-brand-blue" />,
  Palette: <Palette className="w-8 h-8 text-brand-accent-peach" />,
  Users: <Users className="w-8 h-8 text-brand-soft-blue" />,
  Sparkles: <Sparkles className="w-8 h-8 text-brand-soft-baby-blue" />
};

export function EventHighlights() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          anime({
            targets: '.highlight-card',
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
    <section id="highlights" ref={sectionRef} className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading 
          badge="More Than Just Food"
          title="Event Highlights" 
          description="This festival explores food preparation, nutrition, hygiene, food presentation, and the science behind every delicious bite."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={item.id} 
              className="highlight-card opacity-0 bg-brand-cream rounded-[32px] p-8 transition-transform hover:-translate-y-2 hover:shadow-lg border-2 border-transparent hover:border-brand-soft-baby-blue"
            >
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm rotate-3">
                {iconMap[item.icon] || <Sparkles className="w-8 h-8" />}
              </div>
              <h3 className="text-2xl font-display mb-3">{item.title}</h3>
              <p className="text-brand-text/80 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
