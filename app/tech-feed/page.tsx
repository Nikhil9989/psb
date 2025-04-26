import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import TechFeedHero from '@/components/tech-feed/TechFeedHero';
import TechFeedContent from '@/components/tech-feed/TechFeedContent';
import TechFeedSidebar from '@/components/tech-feed/TechFeedSidebar';
import TechFeedNewsletter from '@/components/tech-feed/TechFeedNewsletter';

export const metadata = {
  title: 'Technology Feed | SKILL BRIDGE',
  description: 'Stay updated with the latest technological developments, industry trends, and expert insights tailored to your learning journey.',
}

export default function TechFeedPage() {
  return (
    <PageLayout>
      <TechFeedHero />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <TechFeedContent />
          </div>
          <div className="w-full lg:w-1/3">
            <TechFeedSidebar />
          </div>
        </div>
      </div>
      <TechFeedNewsletter />
    </PageLayout>
  );
}
