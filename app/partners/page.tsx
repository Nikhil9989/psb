import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import InstitutionalPartnerships from '@/components/home/InstitutionalPartnerships';

export default function PartnersPage() {
  return (
    <PageLayout>
      <div className="pt-24 pb-8 md:pt-28 bg-obsidian-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="gold-gradient-text">Institutional Partners</span>
            </h1>
            <p className="text-obsidian-200 text-base md:text-lg mb-4">
              SKILL BRIDGE collaborates with leading educational institutions to provide students with 
              the perfect blend of online expertise and local infrastructure support.
            </p>
          </div>
        </div>
      </div>
      
      <InstitutionalPartnerships />
      
      {/* Additional content can be added here in future updates */}
    </PageLayout>
  );
}