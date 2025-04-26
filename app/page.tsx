import PageLayout from '@/components/layout/PageLayout';
import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Puzzle, Rss, Image } from 'lucide-react';

export const metadata = {
  title: 'SKILL BRIDGE - Integrated Domain-Based Learning Platform',
  description: 'Bridge the skill gap with domain-based learning approach. From theory to practice, designed for tier-2/3 cities with hybrid learning model.',
};

export default function Home() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-900 to-indigo-800 text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Bridge the <span className="text-yellow-400">Skill Gap</span> with Domain-Based Learning
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-lg">
                Transform theoretical knowledge into practical expertise through our integrated learning approach designed specifically for tier-2/3 cities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/register" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition duration-300 text-center"
                >
                  Join Our Next Cohort
                </Link>
                <Link 
                  href="/learning-approach" 
                  className="bg-indigo-700 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 flex items-center justify-center gap-2"
                >
                  <span>Our Approach</span> <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-indigo-700 rounded-lg p-6 relative z-10">
                <div className="aspect-video rounded-lg overflow-hidden bg-indigo-600 flex items-center justify-center">
                  {/* Placeholder for actual image or illustration */}
                  <span className="text-indigo-300 flex items-center gap-2">
                    <Image size={24} />
                    <span className="font-medium">Learning Journey Visualization</span>
                  </span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400 rounded-full opacity-20 -translate-y-1/4 translate-x-1/4"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-500 rounded-full opacity-20 translate-y-1/4 -translate-x-1/4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Unique Approach</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              SKILL BRIDGE combines domain-based learning with physical infrastructure to deliver comprehensive skill development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                <Puzzle size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Domain-Based Learning</h3>
              <p className="text-gray-600">
                Learn complete domains instead of isolated technologies through our progressive 0→70→90% mastery approach.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hybrid Learning Model</h3>
              <p className="text-gray-600">
                Combine online content with physical infrastructure through institutional partnerships in tier-2/3 cities.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Project-Based Learning</h3>
              <p className="text-gray-600">
                Apply skills to real-world projects that integrate multiple technologies for practical experience.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                <Rss size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Alignment</h3>
              <p className="text-gray-600">
                Curriculum constantly validated against industry needs with capstone projects reviewed by hiring managers.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1:1 Mentorship</h3>
              <p className="text-gray-600">
                Personalized guidance from industry experts to accelerate your learning and career development.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                <ArrowRight size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Payment Models</h3>
              <p className="text-gray-600">
                Choose from subscription-based or Income Sharing Agreements (ISA) to make quality education accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Domain Learning Paths */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Domain Learning Paths</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Start your journey from beginner to industry-ready with our structured learning paths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Domain 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold">
                Web Dev
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Full-Stack Web Development</h3>
                <p className="text-gray-600 mb-4">
                  Master front-end, back-end, databases, and deployment with our comprehensive program.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">3-6 months • Next Cohort May 15</span>
                  <Link 
                    href="/domains/web-development" 
                    className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1"
                  >
                    <span>Explore</span> <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Domain 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white text-4xl font-bold">
                Data Science
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Science & Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Learn data analysis, machine learning, and business intelligence with real-world applications.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">4-6 months • Next Cohort June 1</span>
                  <Link 
                    href="/domains/data-science" 
                    className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1"
                  >
                    <span>Explore</span> <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Domain 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="h-48 bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center text-white text-4xl font-bold">
                Cloud & DevOps
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Computing & DevOps</h3>
                <p className="text-gray-600 mb-4">
                  Develop skills in cloud platforms, infrastructure automation, and CI/CD pipelines.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">3-6 months • Coming Soon</span>
                  <Link 
                    href="/domains/cloud-devops" 
                    className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1"
                  >
                    <span>Notify Me</span> <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/domains" 
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
            >
              View All Learning Paths <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Success Stories</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from students who transformed their careers through SKILL BRIDGE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                  AS
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Aisha S.</h4>
                  <p className="text-gray-500">Web Development Graduate</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The domain-based approach helped me understand how technologies connect in real-world applications. I secured a full-stack role within 2 months of graduation."
              </p>
              <div className="flex items-center">
                <span className="text-yellow-500">★★★★★</span>
                <span className="ml-2 text-sm text-gray-500">Currently at TechSolutions</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                  RK
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Rahul K.</h4>
                  <p className="text-gray-500">Data Science Graduate</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The hybrid model worked perfectly for me. I could access top-quality content and mentorship without leaving my hometown. Now I work remotely for a multinational company."
              </p>
              <div className="flex items-center">
                <span className="text-yellow-500">★★★★★</span>
                <span className="ml-2 text-sm text-gray-500">Currently at DataInsights</span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                  MP
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Meera P.</h4>
                  <p className="text-gray-500">Career Transitioner</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Coming from a non-technical background, the structured progression from 0% to 70% mastery gave me confidence. The ISA option made it possible for me to take the leap."
              </p>
              <div className="flex items-center">
                <span className="text-yellow-500">★★★★★</span>
                <span className="ml-2 text-sm text-gray-500">Currently at InnovateNow</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/success-stories" 
              className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Read More Success Stories <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Bridge the Skill Gap?</h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Join our next cohort and transform your career with domain-based learning designed for practical industry skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-lg transition duration-300 text-center"
            >
              Apply Now
            </Link>
            <Link 
              href="/info-session" 
              className="bg-indigo-700 hover:bg-indigo-600 text-white font-semibold px-8 py-4 rounded-lg transition duration-300 text-center"
            >
              Attend an Info Session
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
