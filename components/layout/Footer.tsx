import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Mission', href: '/mission' },
        { name: 'Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Learning',
      links: [
        { name: 'Learning Paths', href: '/learning-paths' },
        { name: 'Domains', href: '/domains' },
        { name: 'Cohort Structure', href: '/cohort' },
        { name: 'Mentorship', href: '/mentorship' },
        { name: 'Placement', href: '/placement' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Success Stories', href: '/success-stories' },
        { name: 'Blog', href: '/blog' },
        { name: 'Events', href: '/events' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Knowledge Base', href: '/resources' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'Accessibility', href: '/accessibility' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaTwitter />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaYoutube />, href: 'https://youtube.com', label: 'YouTube' },
  ];

  return (
    <footer className="bg-obsidian-900 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top gold accent line */}
        <div className="w-full h-px bg-gradient-to-r from-gold-500/50 via-gold-500 to-gold-500/50 mb-12"></div>
        
        {/* Footer Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <Link href="/" className="inline-block mb-4 group">
              <span className="font-display font-bold text-2xl relative">
                <span className="text-white">SKILL</span>
                <span className="text-gold-500">BRIDGE</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
            <p className="text-obsidian-300 text-sm mb-4 max-w-xs">
              Bridging the skill gap through cohort-based, domain-focused learning journeys that transform theoretical knowledge into industry-ready expertise.
            </p>
            
            <div className="mt-6 inline-flex items-center">
              <span className="cohort-badge mr-2">Cohort #7 enrolling now</span>
            </div>
            
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-obsidian-400 hover:text-gold-500 transition-colors"
                  aria-label={social.label}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((column) => (
            <div key={column.title} className="col-span-1">
              <h4 className="text-sm font-semibold mb-4 text-gold-500 uppercase tracking-wider">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-obsidian-300 hover:text-gold-500 transition-colors text-sm group relative"
                    >
                      <span>{link.name}</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-500 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certificate and Recognition Section */}
        <div className="border-y border-obsidian-800 py-6 my-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <div className="mr-3 text-gold-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <div className="text-obsidian-200 text-xs">NSDC Certified</div>
                <div className="text-obsidian-400 text-xs">National Skill Development Corporation</div>
              </div>
            </div>
            
            <div className="h-8 w-px bg-obsidian-800 hidden md:block"></div>
            
            <div className="flex items-center">
              <div className="mr-3 text-gold-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <div className="text-obsidian-200 text-xs">Industry Endorsed</div>
                <div className="text-obsidian-400 text-xs">Top tech companies verified curriculum</div>
              </div>
            </div>
            
            <div className="h-8 w-px bg-obsidian-800 hidden md:block"></div>
            
            <div className="flex items-center">
              <div className="mr-3 text-gold-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-obsidian-200 text-xs">92% Placement Rate</div>
                <div className="text-obsidian-400 text-xs">For our alumni across all cohorts</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="text-obsidian-400 hover:text-gold-500 transition-colors text-xs"
            >
              Sitemap
            </a>
            <a
              href="#"
              className="text-obsidian-400 hover:text-gold-500 transition-colors text-xs"
            >
              Cookie Settings
            </a>
            <a
              href="#"
              className="text-obsidian-400 hover:text-gold-500 transition-colors text-xs"
            >
              Support
            </a>
          </div>
          <p className="text-obsidian-400 text-xs text-center">
            &copy; {currentYear} SKILL BRIDGE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;