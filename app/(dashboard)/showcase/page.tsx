import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import ShowcaseDashboard from '@/components/showcase/ShowcaseDashboard';

export const metadata = {
  title: 'Student Showcase Dashboard | SKILL BRIDGE',
  description: 'Manage and view your showcased projects, track engagement, and interact with the community.',
}

export default function ShowcaseDashboardPage() {
  return (
    <DashboardLayout>
      <ShowcaseDashboard />
    </DashboardLayout>
  );
}
