import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import PuzzleSolverDashboard from '@/components/puzzle-solver/PuzzleSolverDashboard';

export const metadata = {
  title: 'Puzzle Solver Dashboard | SKILL BRIDGE',
  description: 'Your personalized dashboard for daily coding challenges, algorithms, and problem-solving exercises.',
}

export default function PuzzleSolverDashboardPage() {
  return (
    <DashboardLayout>
      <PuzzleSolverDashboard />
    </DashboardLayout>
  );
}
