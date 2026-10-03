import React, { useEffect } from 'react';
import anime from 'animejs';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Sparkles, Utensils, Heart, BookOpen, ShieldCheck } from 'lucide-react';
import { scrollToElement } from '../utils/lenis';

export function Hero() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Entrance animation
    anime({
      targets: '.hero-element',
      translateY: [24, 0],
      opacity: [0, 1],
      delay: anime.stagger(100, { start: 200 }),
      easing: 'easeOutQuad',
      duration: 800
    });

    // Floating animation
    anime({
      targets: '.floating-icon',
      translateY: [-10, 10],
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      duration: 2500,
      delay: anime.stagger(250)
    });
    
    // Rotating badge
    anime({
      targets: '.floating-badge',
      rotate: [-4, 4],
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      duration: 3200
    });
  }, []);

  return (
    <section id="home" className="relative min-h-[88vh] flex items-center pt-24 pb-12 md:pt-28 md:pb-20 overflow-hidden">
      
      {/* Decorative ambient gradient shapes */}
      <div className="absolute top-12 right-0 w-72 h-72 md:w-[480px] md:h-[480px] bg-brand-baby-blue/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-6 left-6 w-60 h-60 md:w-80 md:h-80 bg-brand-soft-blue/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      {/* Floating decorative icons */}
      <div className="absolute top-28 left-[18%] floating-icon text-brand-baby-blue/40 hidden lg:block pointer-events-none">
        <Sparkles size={36} />
      </div>
      <div className="absolute bottom-28 left-[30%] floating-icon text-brand-baby-blue/35 hidden lg:block pointer-events-none">
        <Utensils size={30} />
      </div>
      <div className="absolute top-40 right-[22%] floating-icon text-brand-accent-peach/50 hidden lg:block pointer-events-none">
        <Heart size={32} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Left Column: Hero Content & Identity Hierarchy */}
        <div className="lg:col-span-7 flex flex-col gap-4 md:gap-5 z-10 text-center lg:text-left items-center lg:items-start max-w-2xl mx-auto lg:mx-0">
          
          {/* Identity Stack */}
          <div className="hero-element flex flex-col gap-1.5 items-center lg:items-start">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-brand-text/70">
              Southpoint School and College
            </span>
            <span className="text-sm sm:text-base font-bold tracking-wider uppercase text-brand-text">
              Class 7 — Section Tulip
            </span>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-1.5">
              <Badge variant="mint" className="shadow-xs">PURE HOME SCIENCE PROJECT</Badge>
              <span className="bg-white/80 border border-brand-text/10 text-brand-text text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                SPSC • CLASS 7 • TULIP
              </span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="hero-element text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-brand-text leading-[1.08] tracking-tight mt-1">
            Food <span className="text-brand-baby-blue">Festival</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl text-brand-text/80 font-normal mt-1.5">
              A Little Taste of Home
            </span>
          </h1>

          {/* Supporting Project Copy */}
          <p className="hero-element text-sm sm:text-base md:text-lg text-brand-text/80 leading-relaxed font-medium">
            Exploring food, nutrition, creativity and the science behind what we eat. A student-created educational showcase featuring home-prepared recipes presented at school.
          </p>

          {/* Action CTAs */}
          <div className="hero-element flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mt-2">
            <button 
              onClick={() => scrollToElement('#menu')} 
              className="w-full sm:w-auto cursor-pointer"
            >
              <Button size="lg" className="w-full sm:w-auto shadow-sm hover:shadow-md transition-all">
                Explore Our Menu
              </Button>
            </button>
            <button 
              onClick={() => scrollToElement('#about')} 
              className="w-full sm:w-auto cursor-pointer"
            >
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/80 hover:bg-white transition-all">
                About The Project
              </Button>
            </button>
          </div>

          {/* Quick Disclaimer Ribbon */}
          <div className="hero-element flex items-center gap-2 pt-2 text-xs text-brand-text/60 font-semibold">
            <ShieldCheck size={16} className="text-brand-text/70 shrink-0" />
            <span>Prepared at home • Presented at school by Section Tulip</span>
          </div>

        </div>

        {/* Right Column: Hero Visual Showcase */}
        <div className="lg:col-span-5 hero-element relative z-10 w-full max-w-sm sm:max-w-md mx-auto">
          <div className="relative aspect-square w-full group">
            
            {/* Background frame */}
            <div className="absolute inset-0 bg-brand-soft-baby-blue/60 rounded-[36px] md:rounded-[44px] rotate-2 transition-transform duration-500 group-hover:rotate-4"></div>
            
            {/* Food Image */}
            <img 
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800" 
              alt="Handcrafted home science food presentation" 
              className="absolute inset-0 w-full h-full object-cover rounded-[34px] md:rounded-[42px] -rotate-2 transition-all duration-500 group-hover:rotate-0 group-hover:scale-[1.01] shadow-xl border-4 border-white"
            />
            
            {/* Floating Badges */}
            <div className="floating-badge absolute -top-3 -right-2 sm:-top-4 sm:-right-4 bg-white/95 backdrop-blur-xs text-brand-text font-display rotate-6 px-3.5 py-1.5 rounded-full shadow-md z-20 border border-brand-text/10 text-xs sm:text-sm">
              ✨ Freshly Prepared
            </div>
            <div className="floating-badge absolute -bottom-3 -left-2 sm:-bottom-4 sm:-left-4 bg-brand-baby-blue text-brand-text font-display -rotate-6 px-3.5 py-1.5 rounded-full shadow-md z-20 border border-white text-xs sm:text-sm">
              🏡 Home-Made Recipe
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
