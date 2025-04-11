import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import CurriculumHeader from '@/components/curriculum/CurriculumHeader';
import SkillProgressionRoadmap from '@/components/curriculum/SkillProgressionRoadmap';
import TechnologiesComponent from '@/components/curriculum/TechnologiesComponent';
import ProjectPortfolio from '@/components/curriculum/ProjectPortfolio';
import IndustryAlignment from '@/components/curriculum/IndustryAlignment';
import CallToAction from '@/components/home/CallToAction';

export const metadata = {
  title: 'Detailed Curriculum | SKILL BRIDGE',
  description: 'Explore our comprehensive domain-based curriculum with skill progression roadmap, technologies covered, and industry-aligned projects.'
};

export default function CurriculumPage() {
  return (
    <PageLayout>
      <CurriculumHeader />
      <SkillProgressionRoadmap />
      <TechnologiesComponent />
      <ProjectPortfolio />
      <IndustryAlignment />
      <CallToAction />
    </PageLayout>
  );
}
