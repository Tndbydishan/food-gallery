import React, { useEffect } from 'react';
import anime from 'animejs';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Sparkles, Utensils, Heart } from 'lucide-react';

export function Hero() {
  useEffect(() => {
    // Initial entrance animation
    anime({
      targets: '.hero-element',
      translateY: [30, 0],
      opacity: [0, 1],
      delay: anime.stagger(150, {start: 300}),
      easing: 'easeOutExpo',
      duration: 1000
    });

    // Continuous floating animation for decorative icons
    anime({
      targets: '.floating-icon',
      translateY: [-15, 15],
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      duration: 2000,
      delay: anime.stagger(200)
    });
    
    // Continuous rotation for image badges
    anime({
      targets: '.floating-badge',
      rotate: [-5, 5],
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      duration: 3000
    });
  }, []);

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-28 pb-12 md:pt-24 md:pb-16 overflow-hidden">
      
      {/* Decorative bg blobs */}
      <div className="absolute top-10 right-0 w-64 h-64 md:w-96 md:h-96 bg-brand-soft-baby-blue rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 md:w-72 md:h-72 bg-brand-soft-blue rounded-full blur-3xl opacity-50 -z-10 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      {/* Floating Icons */}
      <div className="absolute top-32 left-1/4 floating-icon text-brand-baby-blue/40 hidden lg:block">
        <Sparkles size={40} />
      </div>
      <div className="absolute bottom-32 left-1/3 floating-icon text-brand-blue/40 hidden lg:block">
        <Utensils size={32} />
      </div>
      <div className="absolute top-48 right-1/4 floating-icon text-brand-accent-peach/60 hidden lg:block">
        <Heart size={36} />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
        
        <div className="flex flex-col gap-5 md:gap-6 z-10 text-center lg:text-left mx-auto lg:mx-0 items-center lg:items-start">
          <div className="hero-element opacity-0 flex flex-col gap-2 items-center lg:items-start">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-text/60">Southpoint School and College</span>
            <span className="text-sm font-bold tracking-wider uppercase text-brand-blue">Class 7 — Section Tulip</span>
            <Badge variant="mint" className="mt-2 transition-transform hover:scale-105 cursor-default">Home Science Project</Badge>
          </div>
          <h1 className="hero-element opacity-0 text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-brand-text leading-[1.1]">
            Food <span className="text-brand-baby-blue inline-block hover:animate-bounce">Festival</span>
          </h1>
          <p className="hero-element opacity-0 text-base md:text-lg lg:text-xl text-brand-text/80 max-w-lg mt-2 font-medium">
            A digital showcase of culinary science. Prepared at home, presented at school by the students of Section Tulip.
          </p>
          <div className="hero-element opacity-0 flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 mt-2 md:mt-4">
            <a href="#menu"><Button size="lg" className="hover:-translate-y-1 transition-transform w-full sm:w-auto">Explore the Menu</Button></a>
            <a href="#about"><Button size="lg" variant="outline" className="hover:-translate-y-1 transition-transform w-full sm:w-auto">Our Story</Button></a>
          </div>
        </div>

        <div className="hero-element opacity-0 relative z-10 mt-8 lg:mt-0 px-4 sm:px-8 lg:px-0">
          <div className="relative w-full aspect-square max-w-sm md:max-w-lg mx-auto group">
            {/* Main composition image */}
            <div className="absolute inset-0 bg-brand-soft-cream rounded-[30px] md:rounded-[40px] rotate-3 transition-transform duration-500 group-hover:rotate-6"></div>
            <img 
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800" 
              alt="Delicious homemade food" 
              className="absolute inset-0 w-full h-full object-cover rounded-[30px] md:rounded-[40px] -rotate-3 transition-all duration-500 group-hover:-rotate-0 group-hover:scale-[1.02] shadow-xl border-4 border-white"
            />
            {/* Small decorative stickers */}
            <div className="floating-badge absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-brand-blue text-brand-text font-display rotate-12 px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-md z-20 cursor-default hover:scale-110 transition-transform text-sm md:text-base">Fresh!</div>
            <div className="floating-badge absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 bg-brand-baby-blue text-brand-text font-display -rotate-6 px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-md z-20 cursor-default hover:scale-110 transition-transform text-sm md:text-base">100% Homemade</div>
          </div>
        </div>

      </div>
    </section>
  );
}
