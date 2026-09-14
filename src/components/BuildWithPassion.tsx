import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { SectionHeading } from './ui/SectionHeading';

export function Statistics() {
  const sectionRef = useRef<HTMLElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
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
            easing: 'easeOutExpo',
            duration: 2000,
            delay: anime.stagger(200)
          });
          
          anime({
            targets: '.stat-card',
            scale: [0.8, 1],
            opacity: [0, 1],
            easing: 'easeOutElastic(1, .8)',
            duration: 1200,
            delay: anime.stagger(150)
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
    { label: "Food Items", value: 9, suffix: "+", color: "bg-brand-baby-blue" },
    { label: "Food Categories", value: 5, suffix: "", color: "bg-brand-soft-mint" },
    { label: "Home Science", value: 100, suffix: "%", color: "bg-brand-soft-blue" },
    { label: "Big Team", value: 1, suffix: "", color: "bg-brand-accent-peach" }
  ];

  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-brand-cream border-y-2 border-brand-text/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card opacity-0 flex flex-col items-center justify-center text-center p-6 bg-white rounded-[32px] shadow-sm">
              <div className={`w-16 h-16 rounded-full ${stat.color} mb-4 flex items-center justify-center`}>
                <span className="text-3xl font-display text-brand-text">
                  <span className="stat-number" data-value={stat.value}>0</span>{stat.suffix}
                </span>
              </div>
              <span className="font-bold text-brand-text/80">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BuildWithPassion() {
  return (
    <section id="passion" className="py-16 md:py-24 bg-brand-soft-cream relative overflow-hidden">
      
      {/* Decorative floating elements */}
      <div className="absolute top-10 left-10 text-4xl opacity-20 rotate-12">🍎</div>
      <div className="absolute bottom-20 right-10 text-5xl opacity-20 -rotate-12">🧁</div>
      <div className="absolute top-1/2 left-1/4 text-3xl opacity-20 rotate-45">✨</div>
      <div className="absolute bottom-1/4 right-1/4 text-4xl opacity-20 -rotate-12">🧪</div>
      
      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <SectionHeading 
          badge="A Labor of Love"
          title="Built With Passion"
          className="mb-8"
        />
        
        <p className="text-xl md:text-2xl text-brand-text/80 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
          Every recipe, every decoration and every little detail was created with curiosity, teamwork and a love for learning.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xl md:text-2xl font-display text-brand-text">
          <span className="bg-brand-baby-blue px-6 py-3 rounded-full rotate-2">Food</span>
          <span>+</span>
          <span className="bg-brand-soft-mint px-6 py-3 rounded-full -rotate-2">Science</span>
          <span>+</span>
          <span className="bg-brand-soft-blue px-6 py-3 rounded-full rotate-3">Creativity</span>
          <span>+</span>
          <span className="bg-brand-accent-peach px-6 py-3 rounded-full -rotate-1">Teamwork</span>
        </div>
      </div>
    </section>
  );
}
