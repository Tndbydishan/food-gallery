import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { scrollToElement, scrollToTop } from '../utils/lenis';
import { JapaneseSeal, Halftone } from './graphic';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleLinkClick = (target: string) => {
    if (isHomePage) {
      if (target === '#home') {
        scrollToTop(false);
      } else {
        scrollToElement(target);
      }
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home', kanji: '起点' },
    { id: 'menu', label: 'Menu', kanji: '料理' },
    { id: 'map', label: 'Map', kanji: '配置' },
    { id: 'highlights', label: 'Pillars', kanji: '科学' },
    { id: 'about', label: 'About', kanji: '概要' },
    { id: 'team', label: 'Team', kanji: '生徒' },
  ];

  return (
    <footer className="bg-blue text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t-4 border-black relative overflow-hidden">
      
      {/* Comic Ben-Day Dot Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#FFFFFF 2.5px, transparent 2.5px)',
          backgroundSize: '20px 20px'
        }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Main 12-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b-3 border-white/25">
          
          {/* Brand & Project Identity (6 cols) */}
          <div className="md:col-span-6 flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-1">
              <span className="bg-primary text-black border-2.5 border-black px-2.5 py-0.5 rounded-md text-xs font-display font-black uppercase shadow-[3px_3px_0px_#111111]">
                SPSC
              </span>
              <span className="text-xs uppercase font-mono tracking-widest text-yellow font-black">
                南尖学園 · Food Festival
              </span>
            </div>

            <h3 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              Southpoint School and College
            </h3>
            
            <p className="font-mono text-sm text-yellow font-black uppercase tracking-wider -mt-1">
              Class 7 — Section Tulip · 第7学年チューリップ組
            </p>
            
            <p className="max-w-md text-white/90 text-sm sm:text-base leading-relaxed font-medium mt-1">
              This website is a digital showcase of the Home Science Food Festival project created by Class 7, Section Tulip of Southpoint School and College. The project is about Food Preparation, Presentation and Proper Dining Experience Preparation.
            </p>

            {/* Official Disclaimer Box */}
            <div className="p-4 bg-yellow text-black border-3 border-black rounded-2xl max-w-md flex items-start gap-3 mt-2 shadow-[4px_4px_0px_#111111]">
              <ShieldCheck size={22} className="text-red shrink-0 mt-0.5" />
              <p className="text-xs leading-relaxed font-bold">
                <strong className="font-black font-display uppercase tracking-wide block mb-0.5 text-black">
                  About The Food Preparation (家庭調理に関する告知):
                </strong>
                The food featured in this project was prepared at home and brought to school for presentation as part of our Home Science project. The dishes were not cooked or prepared on the school premises.
              </p>
            </div>

            {/* Collaboration Credit */}
            <div className="pt-2 text-xs font-mono text-white/80">
              Made in collaboration with the <strong className="text-yellow font-black">SPSC Programming Club (情報科学部)</strong>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="font-display font-black text-base uppercase tracking-wider mb-5 text-yellow border-b-2 border-white/25 pb-2">
              Site Navigation (目次)
            </h4>
            <ul className="flex flex-col gap-3 text-sm font-bold text-white/90">
              {navLinks.map((item) => (
                <li key={item.id}>
                  {isHomePage ? (
                    <button 
                      onClick={() => handleLinkClick(`#${item.id}`)} 
                      className="hover:text-yellow transition-colors cursor-pointer capitalize text-left flex items-center gap-2 group"
                    >
                      <span className="font-mono text-xs text-yellow opacity-80">{item.kanji}</span>
                      <span>{item.label}</span>
                      <ArrowUpRight size={14} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  ) : (
                    <Link 
                      to={`/#${item.id}`} 
                      className="hover:text-yellow transition-colors capitalize flex items-center gap-2 group text-white"
                    >
                      <span className="font-mono text-xs text-yellow opacity-80">{item.kanji}</span>
                      <span>{item.label}</span>
                      <ArrowUpRight size={14} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Educational Focus (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="font-display font-black text-base uppercase tracking-wider mb-5 text-yellow border-b-2 border-white/25 pb-2">
              Learning Focus (学修内容)
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm font-mono text-white/85">
              <li>✦ Food Hygiene & Serving (衛生・梱包)</li>
              <li>✦ Complete Nutrition Facts Labeling (アレルゲン明記)</li>
              <li>✦ Dining Preparations (栄養計算)</li>
              <li>✦ Color & Aesthetic Plating (色彩調和)</li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Seal Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-white/80 text-center md:text-left">
          <p>
            Nutritional calculations are approximate estimates for Home Science student demonstration.
          </p>
          <div className="flex items-center gap-3">
            <span>&copy; {new Date().getFullYear()} SPSC Class 7 Tulip · All Rights Reserved</span>
            <JapaneseSeal kanji="南尖" subtext="2026" size="sm" variant="yellow" rotate="0deg" />
          </div>
        </div>

      </div>
    </footer>
  );
}
