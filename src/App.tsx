import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { initLenis, destroyLenis } from './utils/lenis';
import { LoadingScreen } from './components/LoadingScreen';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { FoodDetail } from './pages/FoodDetail';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    if (!loadingComplete) return;

    initLenis();

    return () => {
      destroyLenis();
    };
  }, [loadingComplete]);


  return (
    <BrowserRouter>
      <ScrollToTop />
      <LoadingScreen onLoadingComplete={() => setLoadingComplete(true)} />
      <div className={`min-h-screen bg-brand-cream selection:bg-brand-baby-blue selection:text-brand-text ${!loadingComplete ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
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
