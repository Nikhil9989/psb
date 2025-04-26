import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import TechFeedHero from '@/components/tech-feed/TechFeedHero';
import TechFeedHighlights from '@/components/tech-feed/TechFeedHighlights';
import TechTopics from '@/components/tech-feed/TechTopics';
import TechSubscribe from '@/components/tech-feed/TechSubscribe';
import Link from 'next/link';

export const metadata = {
  title: 'Tech Feed | SKILL BRIDGE',
  description: 'Stay updated with the latest technological advancements, industry trends, and curated content relevant to your learning journey.',
}

export default function TechFeedPage() {
  return (
    <PageLayout>
      <TechFeedHero />
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-lg text-gray-300 mb-6">
          For personalized tech updates, bookmarked articles, and topic-specific content customization, access the dashboard.
        </p>
        <Link 
          href="/dashboard/tech-feed"
          className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition font-medium"
        >
          Go to Dashboard
        </Link>
      </div>
      <TechTopics />
      <TechFeedHighlights />
      <TechSubscribe />
    </PageLayout>
  );
}
