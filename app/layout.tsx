import './globals.css'
import type { Metadata } from 'next'
import { Inter, Montserrat, Playfair_Display as PlayfairDisplay } from 'next/font/google'

// Font configuration for more elegant, refined typography
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const playfairDisplay = PlayfairDisplay({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'SKILL BRIDGE | Transforming Education with Domain-Based Learning',
  description: 'SKILL BRIDGE offers cohort-based, domain-focused learning pathways that bridge the skill gap between education and industry demands through personalized, incremental skill development.',
  keywords: 'education, skill development, domain-based learning, industry training, personalized learning, cohort learning, India education',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} ${playfairDisplay.variable} font-sans bg-obsidian-900 text-white`}>
        {children}
      </body>
    </html>
  )
}
