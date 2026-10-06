import React, { useEffect, useState, useRef } from 'react';
import anime from 'animejs';
import { JapaneseSeal } from './graphic';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

interface StoryStep {
  step: string;
  kanji: string;
  title: string;
  desc: string;
  sound: string;
  soundColor: string;
  badge: string;
}

const STORY_STEPS: StoryStep[] = [
  {
    step: '01',
    kanji: '食材準備',
    title: 'Gathering Fresh Home Ingredients',
    desc: 'Washing, measuring ratios & preparing in student home kitchen',
    sound: 'CHOP CHOP!',
    soundColor: 'bg-yellow text-black',
    badge: 'STAGE 1: PREP',
  },
  {
    step: '02',
    kanji: '科学調理',
    title: 'Preparing and Brewing Foods',
    desc: 'Maillard browning, starch gelatinization & heat transformations',
    sound: 'SIZZLE SIZZLE!',
    soundColor: 'bg-red text-white',
    badge: 'STAGE 2: SCIENCE',
  },
  {
    step: '03',
    kanji: '衛生検証',
    title: 'Hygiene Maintenance & Food Presentation',
    desc: 'Allergen labeling & safe delivery to school',
    sound: 'CHECK! 100%',
    soundColor: 'bg-green text-white',
    badge: 'STAGE 3: HYGIENE',
  },
  {
    step: '04',
    kanji: '完成開店',
    title: 'Welcome to SPSC Food Festival!',
    desc: 'Section Tulip stalls are now arranged — Itadakimasu!',
    sound: 'OISHII! ★',
    soundColor: 'bg-yellow text-black',
    badge: 'STAGE 4: OPEN',
  },
];

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [progress, setProgress] = useState(15);
  const [isDone, setIsDone] = useState(false);
  const hasFinishedRef = useRef(false);

  const finishLoading = () => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;

    // Smooth exit choreography
    anime({
      targets: '.loading-modal-box',
      scale: [1, 0.92],
      opacity: [1, 0],
      duration: 320,
      easing: 'easeInBack',
    });

    anime({
      targets: '.loading-screen-root',
      opacity: [1, 0],
      duration: 380,
      delay: 150,
      easing: 'easeOutQuad',
      complete: () => {
        setIsDone(true);
        document.body.style.overflow = '';
        onLoadingComplete();
      },
    });
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsDone(true);
      onLoadingComplete();
      return;
    }

    document.body.style.overflow = 'hidden';

    // Keyboard shortcut to skip intro immediately
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        finishLoading();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // 1. Entrance animation for the entire modal & elements
    anime.timeline({ easing: 'easeOutBack(1.5)' })
      .add({
        targets: '.loading-modal-box',
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 420,
      })
      .add({
        targets: '.cartoon-mascot',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 380,
      }, '-=220')
      .add({
        targets: '.sound-burst',
        scale: [0, 1],
        rotate: [-15, 6],
        duration: 320,
      }, '-=150');

    // 2. Cute bouncing loop for cartoon mascot
    const bounceAnime = anime({
      targets: '.mascot-body',
      translateY: [
        { value: -8, duration: 380, easing: 'easeInOutQuad' },
        { value: 0, duration: 420, easing: 'easeOutBounce' },
      ],
      scaleX: [
        { value: 1.04, duration: 380 },
        { value: 0.97, duration: 420 },
      ],
      scaleY: [
        { value: 0.96, duration: 380 },
        { value: 1.03, duration: 420 },
      ],
      loop: true,
    });

    // 3. Floating steam puffs animation
    anime({
      targets: '.steam-puff',
      translateY: [-2, -18],
      opacity: [0.85, 0],
      scale: [0.6, 1.25],
      duration: 1100,
      loop: true,
      delay: anime.stagger(280),
      easing: 'easeOutSine',
    });

    // 4. Story step transitions
    const stepInterval = setInterval(() => {
      setCurrentStepIndex(prev => {
        const next = prev + 1;
        if (next < STORY_STEPS.length) {
          setProgress(Math.round(((next + 1) / STORY_STEPS.length) * 100));
          
          anime({
            targets: '.story-content',
            opacity: [0, 1],
            translateY: [6, 0],
            duration: 280,
            easing: 'easeOutQuad',
          });

          anime({
            targets: '.sound-burst',
            scale: [0.5, 1.15, 1],
            rotate: [prev % 2 === 0 ? 10 : -10, prev % 2 === 0 ? -6 : 8],
            duration: 320,
            easing: 'easeOutBack(2)',
          });

          return next;
        } else {
          clearInterval(stepInterval);
          setProgress(100);
          setTimeout(() => {
            finishLoading();
          }, 400);
          return prev;
        }
      });
    }, 1150);

    return () => {
      clearInterval(stepInterval);
      window.removeEventListener('keydown', handleKeyDown);
      bounceAnime.pause();
      document.body.style.overflow = '';
    };
  }, [onLoadingComplete]);

  if (isDone) return null;

  const currentStep = STORY_STEPS[currentStepIndex];

  return (
    <div className="loading-screen-root fixed inset-0 z-[9999] w-screen h-[100dvh] min-h-[100dvh] bg-blue flex flex-col justify-between items-center p-3 sm:p-5 md:p-6 text-center select-none relative overflow-y-auto overflow-x-hidden">
      
      {/* Cartoon Comic Sunburst Rays in Background (Pure Blue & White - Covers 100% of Screen) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 'repeating-conic-gradient(from 0deg, rgba(255,255,255,0.2) 0deg 10deg, transparent 10deg 20deg)',
        }}
      />

      {/* Halftone Ben-Day Dot Overlay (White Dots on Cobalt Blue - NO BLACK BG!) */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#FFFFFF 2.5px, transparent 2.5px)',
          backgroundSize: '22px 22px',
        }}
      />

      {/* Editorial Corner Registration Marks (Authentic Japanese Graphic Poster Aesthetic) */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 pointer-events-none text-white/50 font-mono text-sm leading-none font-bold">
        ⌜ 07
      </div>
      <div className="absolute top-3 right-3 sm:top-4 right-4 pointer-events-none text-white/50 font-mono text-sm leading-none font-bold">
        2026 ⌝
      </div>
      <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 pointer-events-none text-white/50 font-mono text-sm leading-none font-bold">
        ⌞ SPSC
      </div>
      <div className="absolute bottom-3 right-3 sm:bottom-4 right-4 pointer-events-none text-white/50 font-mono text-sm leading-none font-bold">
        TULIP ⌟
      </div>

      {/* Responsive Top Utility Bar (Always Visible Across 380px to Large Screens) */}
      <header className="w-full max-w-5xl flex items-center justify-between shrink-0 mb-auto relative z-20 pt-1 sm:pt-2">
        <div className="flex items-center gap-2">
          <div className="bg-primary text-black border-2 sm:border-2.5 border-black px-2.5 py-1 rounded-xl font-display font-black text-[11px] sm:text-xs shadow-[2.5px_2.5px_0px_#111111] flex items-center gap-1.5">
            <span>SPSC</span>
            <span className="text-red font-mono text-[10px]">南尖</span>
          </div>
          <div className="hidden min-[420px]:flex items-center gap-1.5 bg-white text-black border-2 border-black px-2.5 py-1 rounded-xl font-mono font-bold text-[10px] sm:text-xs shadow-[2px_2px_0px_#111111]">
            <span>Class 7 Tulip</span>
            <span className="text-red font-black">第7学年</span>
          </div>
        </div>

        <button
          onClick={finishLoading}
          className="bg-yellow hover:bg-white text-black border-2 sm:border-2.5 border-black px-3 sm:px-4 py-1.5 rounded-xl font-display font-black text-xs shadow-[3px_3px_0px_#111111] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex items-center gap-1.5 group"
          aria-label="Skip loading introduction"
        >
          <span>Skip Intro</span>
          <span className="font-mono opacity-80 group-hover:translate-x-0.5 transition-transform">(スキップ) →</span>
        </button>
      </header>

      {/* Main Comic Pop Storytelling Center Stage (Guaranteed Vertical & Horizontal Centering) */}
      <main className="my-auto py-3 sm:py-4 w-full flex items-center justify-center relative z-10">
        <div className="loading-modal-box bg-white border-3.5 sm:border-4 border-black rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-7 shadow-[6px_6px_0px_#111111] sm:shadow-[8px_8px_0px_#111111] md:shadow-[10px_10px_0px_#111111] w-full max-w-[340px] min-[400px]:max-w-[380px] sm:max-w-[460px] md:max-w-[500px] relative mx-auto flex flex-col items-center">
          
          {/* Top Header Identity Bar */}
          <div className="flex items-center justify-between w-full pb-3 mb-3 border-b-2.5 sm:border-b-3 border-black">
            <div className="flex items-center gap-2 text-left">
              <JapaneseSeal kanji="食育" subtext="SPSC" size="sm" variant="red" rotate="-3deg" className="shrink-0 scale-90 sm:scale-100" />
              <div className="leading-tight">
                <span className="font-display font-black text-xs sm:text-sm text-black block">
                  Food Festival Chronicle
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] font-bold text-red uppercase tracking-wider">
                  Home Science Exhibition · 家庭科
                </span>
              </div>
            </div>

            <div className="bg-yellow text-black border-2 border-black px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg font-mono font-black text-[11px] sm:text-xs shadow-[2px_2px_0px_#111111] shrink-0">
              {progress}% READY
            </div>
          </div>

          {/* Mascot Center Stage with Responsive Cute Cartoon SVG */}
          <div className="cartoon-mascot relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 flex items-center justify-center my-1 sm:my-2">
            
            {/* Animated Comic Action Sound Bubble (*CHOP!*, *SIZZLE!*, *OISHII!*) */}
            <div className="sound-burst absolute -top-2.5 -right-1 sm:-top-3 sm:-right-2 z-20">
              <div className={`${currentStep.soundColor} border-2 sm:border-2.5 border-black px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-xl font-display font-black text-[10px] sm:text-xs md:text-sm shadow-[2.5px_2.5px_0px_#111111] uppercase tracking-wider whitespace-nowrap`}>
                ✦ {currentStep.sound} ✦
              </div>
            </div>

            {/* Steam Puffs for Cooking */}
            <div className="absolute top-1 left-6 sm:left-9 flex gap-1.5 pointer-events-none">
              <div className="steam-puff w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow border-2 border-black opacity-0" />
              <div className="steam-puff w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-white border-2 border-black opacity-0" />
              <div className="steam-puff w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red border-2 border-black opacity-0" />
            </div>

            {/* Bouncing Cute Cartoon Mascot (Bento-kun & Riceball Chef) */}
            <div className="mascot-body relative w-28 h-28 sm:w-34 sm:h-34 md:w-38 md:h-38 flex items-center justify-center">
              <svg 
                viewBox="0 0 160 160" 
                className="w-full h-full drop-shadow-[3px_3px_0px_rgba(0,0,0,0.8)]"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Chef Hat with Cute Puffs */}
                <g className="chef-hat">
                  <path 
                    d="M50 48 C45 28, 70 20, 80 22 C90 20, 115 28, 110 48 Z" 
                    fill="#FFFFFF" 
                    stroke="#111111" 
                    strokeWidth="3.5" 
                    strokeLinejoin="round" 
                  />
                  <circle cx="62" cy="28" r="14" fill="#FFFFFF" stroke="#111111" strokeWidth="3" />
                  <circle cx="80" cy="22" r="16" fill="#FFFFFF" stroke="#111111" strokeWidth="3" />
                  <circle cx="98" cy="28" r="14" fill="#FFFFFF" stroke="#111111" strokeWidth="3" />
                  {/* Red Hat Band */}
                  <rect x="52" y="44" width="56" height="10" rx="3" fill="#F04424" stroke="#111111" strokeWidth="3" />
                  {/* Mini Golden Star on Hat */}
                  <polygon points="80,45 82,49 86,50 83,52 84,56 80,53 76,56 77,52 74,50 78,49" fill="#FFC928" />
                </g>

                {/* Riceball / Onigiri Body (Rounded Triangle) */}
                <path 
                  d="M80 52 C115 54, 138 105, 126 132 C116 148, 44 148, 34 132 C22 105, 45 54, 80 52 Z" 
                  fill="#FFF4D6" 
                  stroke="#111111" 
                  strokeWidth="4" 
                  strokeLinejoin="round" 
                />

                {/* Nori / Seaweed Wrap (Dark Navy Blue with Outline - NO BLACK MUD) */}
                <path 
                  d="M55 106 C62 104, 98 104, 105 106 C106 122, 106 138, 104 144 C95 146, 65 146, 56 144 C54 138, 54 122, 55 106 Z" 
                  fill="#123C73" 
                  stroke="#111111" 
                  strokeWidth="3" 
                />
                {/* Nori Texture Lines */}
                <line x1="68" y1="112" x2="68" y2="138" stroke="#1769C2" strokeWidth="2" strokeDasharray="3 3" />
                <line x1="80" y1="110" x2="80" y2="140" stroke="#1769C2" strokeWidth="2" strokeDasharray="3 3" />
                <line x1="92" y1="112" x2="92" y2="138" stroke="#1769C2" strokeWidth="2" strokeDasharray="3 3" />

                {/* Rosy Anime Cheeks */}
                <ellipse cx="52" cy="94" rx="8" ry="5" fill="#E92870" opacity="0.85" />
                <ellipse cx="108" cy="94" rx="8" ry="5" fill="#E92870" opacity="0.85" />

                {/* Big Kawaii Anime Eyes */}
                <ellipse cx="62" cy="84" rx="6" ry="8" fill="#111111" />
                <circle cx="60" cy="80" r="2.5" fill="#FFFFFF" />
                <circle cx="64" cy="86" r="1.2" fill="#FFFFFF" />

                <ellipse cx="98" cy="84" rx="6" ry="8" fill="#111111" />
                <circle cx="96" cy="80" r="2.5" fill="#FFFFFF" />
                <circle cx="100" cy="86" r="1.2" fill="#FFFFFF" />

                {/* Dynamic Mouth Expression */}
                {currentStepIndex === 3 ? (
                  <path d="M72 94 Q80 108 88 94 Z" fill="#F04424" stroke="#111111" strokeWidth="3" strokeLinejoin="round" />
                ) : (
                  <path d="M73 95 Q80 103 87 95" fill="none" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
                )}

                {/* Cute Animated Arms & Props by Step */}
                <g className="mascot-arms">
                  {currentStepIndex === 3 ? (
                    /* Step 4: Both hands waving up high in celebration */
                    <>
                      <path d="M36 100 Q18 84 16 66" fill="none" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
                      <circle cx="16" cy="65" r="5" fill="#FFF4D6" stroke="#111111" strokeWidth="3" />
                      <path d="M124 100 Q142 84 144 66" fill="none" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
                      <circle cx="144" cy="65" r="5" fill="#FFF4D6" stroke="#111111" strokeWidth="3" />
                    </>
                  ) : (
                    /* Steps 1-3: Cooking / Spatula gesture */
                    <>
                      <path d="M38 102 Q22 92 18 80" fill="none" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
                      <circle cx="17" cy="79" r="5" fill="#FFF4D6" stroke="#111111" strokeWidth="3" />
                      
                      <path d="M122 102 Q136 94 142 86" fill="none" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
                      <circle cx="143" cy="85" r="5" fill="#FFF4D6" stroke="#111111" strokeWidth="3" />
                      
                      <line x1="140" y1="92" x2="152" y2="70" stroke="#111111" strokeWidth="3.5" strokeLinecap="round" />
                      <ellipse cx="152" cy="69" rx="6" ry="4" transform="rotate(-30 152 69)" fill="#FFC928" stroke="#111111" strokeWidth="2.5" />
                    </>
                  )}
                </g>

                {/* Tiny Cute Feet */}
                <ellipse cx="62" cy="147" rx="8" ry="4" fill="#FFC928" stroke="#111111" strokeWidth="3" />
                <ellipse cx="98" cy="147" rx="8" ry="4" fill="#FFC928" stroke="#111111" strokeWidth="3" />
              </svg>
            </div>
          </div>

          {/* Storytelling Caption Box with Live Updates */}
          <div className="story-content min-h-[64px] sm:min-h-[72px] flex flex-col items-center justify-center my-1 sm:my-2 text-center w-full px-1">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
              <span className="font-mono text-[10px] sm:text-xs font-black bg-blue text-white px-2 py-0.5 rounded border border-black shadow-[1.5px_1.5px_0px_#111111]">
                STEP {currentStep.step}
              </span>
              <span className="font-display font-black text-xs text-red">
                {currentStep.kanji}
              </span>
              <span className="hidden sm:inline-block font-mono text-[9px] font-bold text-black/60 bg-paper px-1.5 py-0.5 rounded border border-black/40">
                {currentStep.badge}
              </span>
            </div>

            <h3 className="font-headline font-black text-base sm:text-lg md:text-xl text-black tracking-[0.035em] leading-tight line-clamp-1">
              {currentStep.title}
            </h3>
            
            <p className="font-mono text-[11px] sm:text-xs text-black/75 font-medium mt-1 max-w-sm line-clamp-2 leading-snug">
              {currentStep.desc}
            </p>
          </div>

          {/* 4-Step Animated Capsule Pipeline (Minimalist, Responsive from 380px) */}
          <div className="grid grid-cols-4 gap-1.5 sm:gap-2 w-full mt-3 pt-3 border-t-2 border-black/15">
            {STORY_STEPS.map((s, idx) => {
              const isActive = idx === currentStepIndex;
              const isCompleted = idx < currentStepIndex;
              return (
                <div 
                  key={s.step} 
                  className={`py-1.5 px-0.5 sm:py-2 sm:px-1 rounded-xl border-2 transition-all flex flex-col items-center text-center ${
                    isActive 
                      ? 'bg-primary border-black shadow-[2.5px_2.5px_0px_#111111] -translate-y-0.5 scale-102 font-black' 
                      : isCompleted 
                        ? 'bg-blue border-black text-white shadow-[1.5px_1.5px_0px_#111111]' 
                        : 'bg-paper/40 border-black/30 text-black/50'
                  }`}
                >
                  <span className="font-mono text-[9px] sm:text-[10px] font-black block leading-none mb-0.5">
                    {isCompleted ? '✓ ' + (idx + 1) : '0' + (idx + 1)}
                  </span>
                  <span className="font-display font-black text-[9px] sm:text-[10px] truncate max-w-full block leading-tight">
                    {s.kanji}
                  </span>
                </div>
              );
            })}
          </div>

          {/* High-Contrast Progress Track (Yellow Bar with Black Border - Zero Black Murkiness) */}
          <div className="w-full mt-3.5">
            <div className="w-full h-3 sm:h-3.5 bg-paper rounded-full border-2 border-black overflow-hidden p-0.5 shadow-inner">
              <div 
                className="h-full bg-red rounded-full transition-all duration-300 border border-black"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Bottom SPSC Tulip Tagline inside card */}
          <div className="mt-2.5 flex items-center justify-between w-full text-[10px] sm:text-[11px] font-mono text-black/70">
            <span className="truncate">Southpoint School & College</span>
            <span className="font-black text-black shrink-0 ml-1">Section Tulip · 2026</span>
          </div>

        </div>
      </main>

      {/* Bottom Editorial Caption Bar (Frames Full Viewport) */}
      <footer className="w-full max-w-5xl shrink-0 mt-auto pt-2 pb-1 flex flex-col sm:flex-row items-center justify-between gap-1 text-[10px] sm:text-xs font-mono text-white/80 relative z-20">
        <p>
          Home Science Project Exhibition · SPSC Section Tulip
        </p>
        <p className="font-bold text-yellow">
          Prepared at Home • Presented at School (家庭調理 · 学校展示)
        </p>
      </footer>

    </div>
  );
}
