import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import TechFeedHero from '@/components/tech-feed/TechFeedHero';
import TechFeedPreview from '@/components/tech-feed/TechFeedPreview';
import Link from 'next/link';

export const metadata = {
  title: 'Technology Feed | SKILL BRIDGE',
  description: 'Stay updated with the latest technology trends, industry news, and learning resources.',
}

export default function TechFeedPage() {
  return (
    <PageLayout>
      <TechFeedHero />
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-lg text-gray-300 mb-6">
          Access your personalized technology feed, save articles, and customize your interests through the dashboard.
        </p>
        <Link 
          href="/dashboard/tech-feed"
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition font-medium"
        >
          Go to Dashboard
        </Link>
      </div>
      <TechFeedPreview />
    </PageLayout>
  );
}
