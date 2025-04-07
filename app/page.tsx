import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Hero from '@/components/home/Hero';
import ProblemStatement from '@/components/home/ProblemStatement';
import DomainApproach from '@/components/home/DomainApproach';
import KeyFeatures from '@/components/home/KeyFeatures';
import MissionVision from '@/components/home/MissionVision';
import ContactUs from '@/components/home/ContactUs';
import CallToAction from '@/components/home/CallToAction';

export default function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <ProblemStatement />
      <DomainApproach />
      <KeyFeatures />
      <MissionVision />
      <ContactUs />
      <CallToAction />
    </PageLayout>
  );
}