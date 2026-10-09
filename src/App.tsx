import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { initLenis, destroyLenis } from './utils/lenis';
import { LoadingScreen } from './components/LoadingScreen';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { FoodDetail } from './pages/FoodDetail';
import { ScrollToTop } from './components/ScrollToTop';

function checkShouldSkipIntro(): boolean {
  if (typeof window === 'undefined') return true;

  try {
    // 1. Navigation Timing API Level 2: Detect browser reload (F5, reload button, etc.)
    const navEntries = window.performance?.getEntriesByType?.('navigation') as PerformanceNavigationTiming[] | undefined;
    if (navEntries && navEntries.length > 0 && navEntries[0].type === 'reload') {
      return true;
    }

    // 2. Legacy Navigation Timing fallback
    const perfNav = (window.performance as unknown as { navigation?: { type: number } })?.navigation;
    if (perfNav && perfNav.type === 1) {
      return true;
    }

    // 3. Session continuity: Check if the user already saw/completed the intro in this session
    if (sessionStorage.getItem('tulip_intro_completed') === 'true') {
      return true;
    }
  } catch {
    // Fallback if sessionStorage is inaccessible
  }

  return false;
}

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(() => checkShouldSkipIntro());

  // Record user's scroll position so on reload they continue at the exact same section
  useEffect(() => {
    const handleSaveScroll = () => {
      try {
        sessionStorage.setItem('tulip_last_scroll_y', String(window.scrollY));
      } catch {}
    };

    window.addEventListener('beforeunload', handleSaveScroll);
    return () => {
      window.removeEventListener('beforeunload', handleSaveScroll);
    };
  }, []);

  useEffect(() => {
    if (!loadingComplete) return;

    initLenis();

    // If reload occurred, ensure user continues at the exact same progress/section
    try {
      const isReload = checkShouldSkipIntro();
      if (isReload && !window.location.hash) {
        const savedY = sessionStorage.getItem('tulip_last_scroll_y');
        if (savedY) {
          const y = parseInt(savedY, 10);
          if (!isNaN(y) && y > 0) {
            requestAnimationFrame(() => {
              window.scrollTo({ top: y, behavior: 'instant' });
            });
          }
        }
      }
    } catch {}

    return () => {
      destroyLenis();
    };
  }, [loadingComplete]);

  const handleLoadingComplete = () => {
    try {
      sessionStorage.setItem('tulip_intro_completed', 'true');
    } catch {}
    setLoadingComplete(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      {!loadingComplete && (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      )}
      <div className={`min-h-screen bg-paper selection:bg-primary selection:text-black font-body text-black ${!loadingComplete ? 'opacity-0 pointer-events-none' : 'opacity-100 transition-opacity duration-300'}`}>
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food/:slug" element={<FoodDetail />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
