import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { SectionHeading } from './ui/SectionHeading';

export function AboutEvent() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          anime({
            targets: '.about-element',
            translateY: [40, 0],
            opacity: [0, 1],
            delay: anime.stagger(150),
            easing: 'easeOutExpo',
            duration: 800
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

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24 bg-brand-soft-blue relative overflow-hidden">
      
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-blue rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white rounded-full blur-3xl opacity-40 animate-pulse" style={{animationDelay: '1.5s'}}></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <div className="about-element opacity-0">
            <SectionHeading 
              badge="Our Mission"
              title="Why We Created This"
              align="left"
              className="mb-8"
            />
          </div>
          <div className="space-y-6 text-brand-text/90 text-lg leading-relaxed font-medium">
            <p className="about-element opacity-0">
              This is a Food Festival of the Home Science Subject of the Tulip Section with efforts and works. It is designed to bring food preparation, nutrition, science, creativity and teamwork together in one experience.
            </p>
            <p className="about-element opacity-0">
              We believe that understanding what goes into our food is just as important as how it tastes. Every dish presented here represents hours of learning about ingredient interactions, dietary needs, and proper hygiene standards.
            </p>
            <div className="about-element opacity-0 bg-white/50 p-6 rounded-[24px] border border-white mt-8 transition-transform hover:-translate-y-2 hover:shadow-lg hover:bg-white/70">
              <h4 className="font-bold text-brand-text mb-2">Our Goal</h4>
              <p className="text-base text-brand-text/80">To demonstrate that homemade food can be both delicious and scientifically understood, creating a healthier relationship with what we eat.</p>
            </div>
          </div>
        </div>

        <div className="relative about-element opacity-0 group">
          <div className="aspect-[4/3] rounded-[40px] overflow-hidden border-8 border-white shadow-2xl rotate-2 transition-transform duration-500 group-hover:-rotate-2 group-hover:scale-105">
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800" 
              alt="Students cooking" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-brand-baby-blue text-brand-text p-6 rounded-[32px] shadow-xl -rotate-6 max-w-xs transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:-translate-y-2">
            <span className="text-4xl block mb-2 animate-bounce">👩‍🍳</span>
            <p className="font-bold leading-tight">Prepared with love and science in our classroom kitchen.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
