import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import PuzzleHero from '@/components/puzzle-solver/PuzzleHero';
import PuzzleLayout from '@/components/puzzle-solver/PuzzleLayout';

export const metadata = {
  title: 'Daily Puzzle Solver | SKILL BRIDGE',
  description: 'Enhance your problem-solving skills with daily coding challenges, algorithm problems, and interactive exercises.',
}

export default function PuzzleSolverPage() {
  return (
    <PageLayout>
      <PuzzleHero />
      <PuzzleLayout />
    </PageLayout>
  );
}
