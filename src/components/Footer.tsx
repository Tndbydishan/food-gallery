import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-brand-text text-brand-soft-cream py-12 md:py-16 px-4 md:px-8 mt-16 md:mt-24 rounded-t-3xl md:rounded-t-[48px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
        
        <div className="md:col-span-6 flex flex-col gap-5 md:gap-6">
          <div>
            <h3 className="font-display text-4xl mb-2 text-brand-baby-blue">Southpoint School and College</h3>
            <p className="font-bold tracking-widest uppercase text-sm opacity-80">Class 7 — Section Tulip</p>
          </div>
          <p className="max-w-md opacity-80 leading-relaxed">
            A digital showcase of the Home Science Food Festival project created by Class 7, Section Tulip of Southpoint School and College.
          </p>
          <p className="text-sm opacity-60">
            A student-created educational showcase.<br/>
            Made in collaboration with the SPSC Programming Club.
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-bold text-lg mb-6 text-brand-blue">Navigation</h4>
          <ul className="flex flex-col gap-3 opacity-80">
            <li><Link to="/#home" className="hover:text-brand-baby-blue transition-colors">Home</Link></li>
            <li><Link to="/#menu" className="hover:text-brand-baby-blue transition-colors">Menu</Link></li>
            <li><Link to="/#highlights" className="hover:text-brand-baby-blue transition-colors">Highlights</Link></li>
            <li><Link to="/#about" className="hover:text-brand-baby-blue transition-colors">About</Link></li>
            <li><Link to="/#team" className="hover:text-brand-baby-blue transition-colors">Team</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-bold text-lg mb-6 text-brand-blue">Project Info</h4>
          <ul className="flex flex-col gap-3 opacity-80">
            <li>Nutrition</li>
            <li>Dietary Information</li>
            <li>Allergens</li>
            <li>Measurements</li>
          </ul>
        </div>

      </div>

      <div className="container mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 opacity-60 text-sm text-center md:text-left">
        <p>Nutritional values are approximate educational estimates and may vary depending on ingredients and preparation methods.</p>
        <p>&copy; {new Date().getFullYear()} Home Science Food Festival</p>
      </div>
    </footer>
  );
}
