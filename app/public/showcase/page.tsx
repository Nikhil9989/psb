import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import ShowcaseHero from '@/components/showcase/ShowcaseHero';
import ShowcaseGallery from '@/components/showcase/ShowcaseGallery';
import Link from 'next/link';

export const metadata = {
  title: 'Student Showcase | SKILL BRIDGE',
  description: 'Explore projects created by SKILL BRIDGE students showcasing their skills and achievements.',
}

export default function ShowcasePage() {
  return (
    <PageLayout>
      <ShowcaseHero />
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-lg text-gray-300 mb-6">
          Manage your showcase portfolio and access advanced features through your personal dashboard.
        </p>
        <Link 
          href="/dashboard/showcase"
          className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition font-medium"
        >
          Go to Dashboard
        </Link>
      </div>
      <ShowcaseGallery featured={true} limit={9} />
    </PageLayout>
  );
}
