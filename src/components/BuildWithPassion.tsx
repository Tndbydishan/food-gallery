import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { SectionHeading } from './ui/SectionHeading';

export function Statistics() {
  const sectionRef = useRef<HTMLElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          
          anime({
            targets: '.stat-number',
            innerHTML: function(el: HTMLElement) {
              return [0, el.getAttribute('data-value') || 0];
            },
            round: 1,
            easing: 'easeOutQuad',
            duration: 1500,
            delay: anime.stagger(150)
          });
          
          anime({
            targets: '.stat-card',
            scale: [0.92, 1],
            opacity: [0, 1],
            easing: 'easeOutQuad',
            duration: 700,
            delay: anime.stagger(100)
          });
          
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: "Festival Dishes", value: 9, suffix: "", color: "bg-brand-baby-blue/80" },
    { label: "Food Categories", value: 5, suffix: "", color: "bg-brand-soft-mint" },
    { label: "Home Science", value: 100, suffix: "%", color: "bg-brand-soft-blue" },
    { label: "Section Tulip Team", value: 16, suffix: " students", color: "bg-brand-accent-peach" }
  ];

  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-brand-cream border-y border-brand-text/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card flex flex-col items-center justify-center text-center p-5 sm:p-7 bg-white/90 rounded-[28px] md:rounded-[36px] shadow-xs border border-brand-text/5 hover:border-brand-baby-blue/40 transition-all hover:-translate-y-1">
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${stat.color} mb-3.5 flex items-center justify-center shadow-xs`}>
                <span className="text-xl sm:text-2xl font-display text-brand-text">
                  <span className="stat-number" data-value={stat.value}>{stat.value}</span>{stat.suffix}
                </span>
              </div>
              <span className="font-bold text-xs sm:text-sm text-brand-text/80">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BuildWithPassion() {
  return (
    <section id="passion" className="py-16 md:py-24 bg-brand-soft-cream/60 relative overflow-hidden">
      
      {/* Decorative floating elements */}
      <div className="absolute top-10 left-10 text-3xl opacity-20 rotate-12 pointer-events-none">🍎</div>
      <div className="absolute bottom-20 right-10 text-4xl opacity-20 -rotate-12 pointer-events-none">🧁</div>
      <div className="absolute top-1/2 left-1/4 text-2xl opacity-20 rotate-45 pointer-events-none">✨</div>
      <div className="absolute bottom-1/4 right-1/4 text-3xl opacity-20 -rotate-12 pointer-events-none">🧪</div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <SectionHeading 
          badge="A Student Learning Experience"
          title="Built With Passion & Curiosity"
          className="mb-6 md:mb-8"
        />
        
        <p className="text-base sm:text-lg md:text-xl text-brand-text/80 max-w-2xl mx-auto font-medium leading-relaxed mb-10">
          Every recipe, display card, and nutritional breakdown was prepared with curiosity, teamwork, and enthusiasm by Class 7 Section Tulip.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-base sm:text-xl md:text-2xl font-display text-brand-text">
          <span className="bg-brand-baby-blue/80 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full rotate-1 shadow-xs">Food</span>
          <span>+</span>
          <span className="bg-brand-soft-mint px-5 sm:px-6 py-2.5 sm:py-3 rounded-full -rotate-1 shadow-xs">Science</span>
          <span>+</span>
          <span className="bg-brand-soft-blue px-5 sm:px-6 py-2.5 sm:py-3 rounded-full rotate-2 shadow-xs">Creativity</span>
          <span>+</span>
          <span className="bg-brand-accent-peach px-5 sm:px-6 py-2.5 sm:py-3 rounded-full -rotate-1 shadow-xs">Teamwork</span>
        </div>
      </div>
    </section>
  );
}
