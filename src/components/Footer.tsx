import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { scrollToElement, scrollToTop } from '../utils/lenis';
import { ShieldCheck, Heart } from 'lucide-react';

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

  return (
    <footer className="bg-brand-text text-brand-soft-cream py-14 md:py-20 px-4 sm:px-6 lg:px-8 mt-16 md:mt-24 rounded-t-[36px] md:rounded-t-[52px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
        
        {/* Left Column: School Identity & Description */}
        <div className="md:col-span-6 flex flex-col gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-brand-baby-blue/80">
              Home Science Project
            </span>
            <h3 className="font-display text-3xl sm:text-4xl text-brand-baby-blue mt-1">
              Southpoint School and College
            </h3>
            <p className="font-bold tracking-widest uppercase text-xs sm:text-sm opacity-90 mt-0.5">
              Class 7 — Section Tulip
            </p>
          </div>
          
          <p className="max-w-md opacity-80 text-sm sm:text-base leading-relaxed">
            This website is a digital showcase of the Home Science Food Festival project created by Class 7, Section Tulip of Southpoint School and College. The project brings together food preparation, nutrition, presentation, creativity, teamwork and basic Home Science concepts.
          </p>

          {/* Dedicated Disclaimer box */}
          <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10 max-w-md flex items-start gap-2.5">
            <ShieldCheck size={18} className="text-brand-baby-blue shrink-0 mt-0.5" />
            <p className="text-xs opacity-75 leading-relaxed">
              <strong className="text-white font-bold">About the Food: </strong>
              The food featured in this project was prepared at home and brought to school for presentation as part of our Home Science project. The dishes were not cooked or prepared on the school premises.
            </p>
          </div>

          <p className="text-xs opacity-65 flex items-center gap-1.5 pt-1">
            <span>Made in collaboration with the</span>
            <strong className="text-brand-baby-blue font-bold">SPSC Programming Club</strong>
          </p>
        </div>

        {/* Middle Column: Navigation */}
        <div className="md:col-span-3">
          <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-brand-baby-blue">Navigation</h4>
          <ul className="flex flex-col gap-3 text-sm opacity-80">
            <li>
              {isHomePage ? (
                <button onClick={() => handleLinkClick('#home')} className="hover:text-brand-baby-blue transition-colors cursor-pointer text-left">
                  Home
                </button>
              ) : (
                <Link to="/#home" className="hover:text-brand-baby-blue transition-colors">Home</Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <button onClick={() => handleLinkClick('#menu')} className="hover:text-brand-baby-blue transition-colors cursor-pointer text-left">
                  Food Menu
                </button>
              ) : (
                <Link to="/#menu" className="hover:text-brand-baby-blue transition-colors">Food Menu</Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <button onClick={() => handleLinkClick('#map')} className="hover:text-brand-baby-blue transition-colors cursor-pointer text-left">
                  Festival Map
                </button>
              ) : (
                <Link to="/#map" className="hover:text-brand-baby-blue transition-colors">Festival Map</Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <button onClick={() => handleLinkClick('#highlights')} className="hover:text-brand-baby-blue transition-colors cursor-pointer text-left">
                  Event Highlights
                </button>
              ) : (
                <Link to="/#highlights" className="hover:text-brand-baby-blue transition-colors">Event Highlights</Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <button onClick={() => handleLinkClick('#about')} className="hover:text-brand-baby-blue transition-colors cursor-pointer text-left">
                  About Event
                </button>
              ) : (
                <Link to="/#about" className="hover:text-brand-baby-blue transition-colors">About Event</Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <button onClick={() => handleLinkClick('#team')} className="hover:text-brand-baby-blue transition-colors cursor-pointer text-left">
                  Student Team
                </button>
              ) : (
                <Link to="/#team" className="hover:text-brand-baby-blue transition-colors">Student Team</Link>
              )}
            </li>
          </ul>
        </div>

        {/* Right Column: Project Info */}
        <div className="md:col-span-3">
          <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-brand-baby-blue">Educational Focus</h4>
          <ul className="flex flex-col gap-2.5 text-xs sm:text-sm opacity-80">
            <li>• Nutritional Balance & Energy</li>
            <li>• Starch Gelatinization & Reactions</li>
            <li>• Allergen Identification & Care</li>
            <li>• Temperature Control & Hygiene</li>
            <li>• Presentation & Portioning</li>
            <li>• Metric & Imperial Measurements</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 opacity-60 text-xs text-center md:text-left">
        <p>Nutritional calculations are approximate student estimates for Home Science educational showcase purposes.</p>
        <p>&copy; {new Date().getFullYear()} SPSC Class 7 Tulip • Home Science Food Festival</p>
      </div>
    </footer>
  );
}
