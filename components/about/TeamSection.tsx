'use client';

import { motion } from 'framer-motion';
import { useElementOnScreen } from '@/hooks/useElementOnScreen';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: 'Rajiv Mehta',
    role: 'Founder & CEO',
    bio: 'Former education lead at Microsoft India with 15+ years of experience in EdTech. Passionate about making quality education accessible in tier-2 and tier-3 cities.',
    image: '/images/team/member1.jpg',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    name: 'Ananya Sharma',
    role: 'Chief Learning Officer',
    bio: 'Ex-Google education specialist with expertise in curriculum design and educational psychology. Leads our domain-based learning framework development.',
    image: '/images/team/member2.jpg',
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Vikram Singh',
    role: 'CTO',
    bio: 'Former tech lead at Byju\'s with extensive experience in AI-driven educational platforms. Oversees our technology infrastructure and personalization engine.',
    image: '/images/team/member3.jpg',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    name: 'Priya Reddy',
    role: 'Head of Industry Partnerships',
    bio: 'With over a decade in corporate relations at TCS, Priya bridges the gap between education and industry needs, ensuring our programs remain relevant.',
    image: '/images/team/member4.jpg',
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const TeamSection = () => {
  const [ref, isVisible] = useElementOnScreen({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4 text-primary">Our Leadership Team</h2>
        <p className="text-lg text-gray-700">
          Meet the passionate educators, technologists, and industry experts behind Skill Bridge's mission to transform education.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={container}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            variants={item}
          >
            <div className="relative h-64 w-full bg-gray-200">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-gray-200">{member.role}</p>
              </div>
            </div>
            <div className="p-5">
              <p className="text-gray-600">{member.bio}</p>
              <div className="mt-4 flex space-x-3">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">Join Our Team</h3>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
          We're always looking for passionate educators, technologists, and industry experts to join our mission.
        </p>
        <a
          href="/careers"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200"
        >
          View Open Positions
        </a>
      </div>
    </section>
  );
};

export default TeamSection;