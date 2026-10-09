import React from 'react';
import { Hero } from '../components/Hero';
import { EventHighlights } from '../components/EventHighlights';
import { StallMap } from '../components/StallMap';
import { FoodMenu } from '../components/FoodMenu';
import { AboutEvent } from '../components/AboutEvent';
import { ManagementTeam } from '../components/ManagementTeam';
import { Statistics, BuildWithPassion } from '../components/BuildWithPassion';
import { Marquee } from '../components/ui/Marquee';
import { foods } from '../data/foods';

export function Home() {
  return (
    <main className="bg-offwhite min-h-screen">
      <Hero />
      
      {/* Primary Hero Divider Marquee (Poster Yellow Strip with Black Typography) */}
      <Marquee 
        items={[
          "IMAGINE · 発見", 
          "CREATE · 創造", 
          "TASTE · 美味", 
          "SCIENCE · 科学", 
          "HYGIENE · 衛生", 
          "NUTRITION · 栄養", 
          "TEAMWORK · 協調"
        ]} 
        variant="yellow" 
        speed="normal" 
        separator="✦"
      />

      <EventHighlights />

      {/* Comic Pop Red Transition Marquee */}
      <Marquee 
        items={[
          "CLASSROOM", 
          "FLOOR PLAN · 配置図", 
          `${foods.length} EXHIBITED STALLS`, 
          "SOUTHPOINT SCHOOL & COLLEGE", 
          `NO. 01 TO NO. ${foods.length < 10 ? '0' + foods.length : foods.length}`
        ]} 
        variant="red" 
        speed="normal" 
        separator="★"
      />

      <StallMap />

      {/* Information Ticker Marquee (Safety Yellow with Black Type) */}
      <Marquee 
        items={[
          "PREPARED AT HOME · 家庭調理", 
          "PRESENTED AT SCHOOL · 学校展示", 
          "SPSC CLASS 7 TULIP · 第7学年", 
          "PURE HOME SCIENCE PROJECT", 
          `${foods.length} EXHIBITED DISHES · 全${foods.length}品`, 
          "HYGIENE MAINTAINED · 衛生管理"
        ]} 
        variant="ticker" 
        speed="slow" 
        separator="★"
      />

      <FoodMenu />

      <Statistics />

      <AboutEvent />

      <ManagementTeam />

      {/* High-Contrast Section Divider Marquee (Cobalt Blue with White Typography) */}
      <Marquee 
        items={[
          "COLLABORATION · 協同", 
          "IMAGINATION · 情熱", 
          "CULINARY SKILLS · 料理", 
          "PRESENTATION · 化学", 
          "STUDENT SQUADS · 生徒班", 
          "SPSC 2026 · 南尖学園"
        ]} 
        variant="blue" 
        speed="normal" 
        reverse={true} 
        separator="✦"
      />

      <BuildWithPassion />
    </main>
  );
}
