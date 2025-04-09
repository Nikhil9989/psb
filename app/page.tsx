import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Hero from '@/components/home/Hero';
import ProblemStatement from '@/components/home/ProblemStatement';
import SolutionOverview from '@/components/home/SolutionOverview';
import DomainApproach from '@/components/home/DomainApproach';
import KeyFeatures from '@/components/home/KeyFeatures';
import InstitutionalPartnerships from '@/components/home/InstitutionalPartnerships';
import PricingAccess from '@/components/home/PricingAccess';
import MissionVision from '@/components/home/MissionVision';
import ContactUs from '@/components/home/ContactUs';
import CallToAction from '@/components/home/CallToAction';
import ApplicationCTA from '@/components/home/ApplicationCTA';

export default function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <ProblemStatement />
      <SolutionOverview />
      <DomainApproach />
      <KeyFeatures />
      <InstitutionalPartnerships />
      <PricingAccess />
      <MissionVision />
      <ContactUs />
      <CallToAction />
      <ApplicationCTA />
    </PageLayout>
  );
}