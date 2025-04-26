import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import TechFeedDashboard from '@/components/tech-feed/TechFeedDashboard';

export const metadata = {
  title: 'Technology Feed Dashboard | SKILL BRIDGE',
  description: 'Your personalized technology news feed with industry updates, trends, and learning resources.',
}

export default function TechFeedDashboardPage() {
  return (
    <DashboardLayout>
      <TechFeedDashboard />
    </DashboardLayout>
  );
}
