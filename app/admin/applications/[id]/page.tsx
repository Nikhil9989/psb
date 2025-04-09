import React from 'react';
import { Metadata } from 'next';
import ClientApplicationDetailPage from './client-page';

// Mock application IDs for static generation
const applicationIds = ['SB-271503', 'SB-271504', 'SB-271505']; 

// This function tells Next.js which dynamic routes to pre-render
export function generateStaticParams() {
  return applicationIds.map(id => ({
    id: id
  }));
}

export const metadata: Metadata = {
  title: 'Application Details | SKILL BRIDGE Admin',
  description: 'View and manage student application details'
};

// Server component that renders the client component
export default function ApplicationDetailPage({ params }: { params: { id: string } }) {
  return <ClientApplicationDetailPage params={params} />;
}
