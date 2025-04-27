// app/layout.tsx
import { AuthProvider } from '@/context/AuthContext';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skill Bridge - Domain-Based Learning Platform',
  description: 'An innovative domain-based learning platform designed to bridge the gap between theoretical education and practical industry skills.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}