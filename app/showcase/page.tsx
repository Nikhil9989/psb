import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import ShowcaseHero from '@/components/showcase/ShowcaseHero';
import ShowcaseGallery from '@/components/showcase/ShowcaseGallery';
import ShowcaseFilters from '@/components/showcase/ShowcaseFilters';
import FeaturedProjects from '@/components/showcase/FeaturedProjects';
import ShowcaseMetrics from '@/components/showcase/ShowcaseMetrics';

export const metadata = {
  title: 'Student Showcase | SKILL BRIDGE',
  description: 'Discover outstanding projects created by SKILL BRIDGE students across various domains and technologies.',
}

export default function ShowcasePage() {
  return (
    <PageLayout>
      <ShowcaseHero />
      <ShowcaseFilters />
      <FeaturedProjects />
      <ShowcaseGallery />
      <ShowcaseMetrics />
    </PageLayout>
  );
}
