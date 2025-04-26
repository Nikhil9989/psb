import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import ShowcaseHero from '@/components/showcase/ShowcaseHero';
import ShowcaseGallery from '@/components/showcase/ShowcaseGallery';
import ShowcaseFilters from '@/components/showcase/ShowcaseFilters';
import FeaturedProjects from '@/components/showcase/FeaturedProjects';
import ShowcaseMetrics from '@/components/showcase/ShowcaseMetrics';
import Link from 'next/link';

export const metadata = {
  title: 'Student Showcase | SKILL BRIDGE',
  description: 'Discover outstanding projects created by SKILL BRIDGE students across various domains and technologies.',
}

export default function ShowcasePage() {
  return (
    <PageLayout>
      <ShowcaseHero />
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-lg text-gray-300 mb-6">
          For more features including project submission, personalized recommendations, and advanced filtering, visit the dashboard.
        </p>
        <Link 
          href="/dashboard/showcase"
          className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition font-medium"
        >
          Go to Dashboard
        </Link>
      </div>
      <ShowcaseFilters />
      <FeaturedProjects />
      <ShowcaseGallery />
      <ShowcaseMetrics />
    </PageLayout>
  );
}
