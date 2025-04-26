import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import PuzzleHero from '@/components/puzzle-solver/PuzzleHero';
import PuzzleLayout from '@/components/puzzle-solver/PuzzleLayout';
import Link from 'next/link';

export const metadata = {
  title: 'Daily Puzzle Solver | SKILL BRIDGE',
  description: 'Enhance your problem-solving skills with daily coding challenges, algorithm problems, and interactive exercises.',
}

export default function PuzzleSolverPage() {
  return (
    <PageLayout>
      <PuzzleHero />
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-lg text-gray-300 mb-6">
          Access the full Puzzle Solver dashboard with personalized challenges, tracking, and more.
        </p>
        <Link 
          href="/dashboard/puzzle-solver"
          className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition font-medium"
        >
          Go to Dashboard
        </Link>
      </div>
      <PuzzleLayout />
    </PageLayout>
  );
}
