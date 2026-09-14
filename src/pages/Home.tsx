import React from 'react';
import { Hero } from '../components/Hero';
import { EventHighlights } from '../components/EventHighlights';
import { StallMap } from '../components/StallMap';
import { FoodMenu } from '../components/FoodMenu';
import { AboutEvent } from '../components/AboutEvent';
import { ManagementTeam } from '../components/ManagementTeam';
import { Statistics, BuildWithPassion } from '../components/BuildWithPassion';

export function Home() {
  return (
    <main>
      <Hero />
      <EventHighlights />
      <StallMap />
      <FoodMenu />
      <Statistics />
      <AboutEvent />
      <ManagementTeam />
      <BuildWithPassion />
    </main>
  );
}
