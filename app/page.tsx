import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian-900">
      {/* Transparent Header */}
      <header className="absolute w-full z-10">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold bg-gradient-to-r from-amber-500 to-yellow-300 bg-clip-text text-transparent">
              SKILL BRIDGE
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#how-it-works" className="text-gray-300 hover:text-white transition">How It Works</Link>
            <Link href="/showcase" className="text-gray-300 hover:text-white transition">Showcase</Link>
            <Link href="/tech-feed" className="text-gray-300 hover:text-white transition">Tech Feed</Link>
            <Link href="/puzzle-solver" className="text-gray-300 hover:text-white transition">Puzzles</Link>
            <Link 
              href="/login" 
              className="px-4 py-2 bg-obsidian-800 hover:bg-obsidian-700 text-white rounded-lg border border-gray-800 transition"
            >
              Log In
            </Link>
          </nav>
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-52 md:pb-40 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-amber-900/20 z-0"></div>
        <div className="absolute w-96 h-96 -top-10 -right-10 bg-purple-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute w-96 h-96 bottom-0 left-0 bg-amber-600/10 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-amber-500 to-yellow-300 bg-clip-text text-transparent">
              Transforming Education with Domain-Based Learning
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              SKILL BRIDGE offers cohort-based, domain-focused learning pathways that bridge the skill gap between education and industry demands through personalized, incremental skill development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/login"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition font-medium flex items-center justify-center"
              >
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="#how-it-works"
                className="px-6 py-3 bg-obsidian-800 hover:bg-obsidian-700 text-white rounded-lg border border-gray-800 transition font-medium"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-obsidian-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <p className="text-4xl font-bold text-white mb-2">90%</p>
              <p className="text-gray-400">Employment rate within 6 months of completion</p>
            </div>
            <div className="bg-obsidian-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <p className="text-4xl font-bold text-white mb-2">10+</p>
              <p className="text-gray-400">Industry-aligned domains from web development to AI</p>
            </div>
            <div className="bg-obsidian-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <p className="text-4xl font-bold text-white mb-2">15K+</p>
              <p className="text-gray-400">Students transforming their careers with SKILL BRIDGE</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-obsidian-800">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Our unique domain-based progressive learning approach ensures you build a complete, industry-ready skill set incrementally
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-obsidian-700 rounded-xl p-6 border border-gray-700">
              <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-400 text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Skill Assessment</h3>
              <p className="text-gray-400">
                Begin with a comprehensive skill assessment to identify your starting point and create a personalized learning path.
              </p>
            </div>
            
            <div className="bg-obsidian-700 rounded-xl p-6 border border-gray-700">
              <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-400 text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Structured Progress</h3>
              <p className="text-gray-400">
                Follow a clear 0→20→40→60→80→100% progression path with expert guidance and hands-on projects at every stage.
              </p>
            </div>
            
            <div className="bg-obsidian-700 rounded-xl p-6 border border-gray-700">
              <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-400 text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Industry Integration</h3>
              <p className="text-gray-400">
                Connect with hiring partners, build a professional portfolio, and prepare for a successful career transition.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Feature Highlights */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Unique Approach</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              What makes SKILL BRIDGE different from traditional education and other platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-obsidian-800 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">Domain-Based Learning</h3>
              <p className="text-gray-400 mb-4">
                Instead of teaching individual technologies in isolation, we integrate multiple related skills into cohesive domains that mirror real industry requirements.
              </p>
              <Link href="/login" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                Start learning
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-obsidian-800 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">Hybrid Learning Model</h3>
              <p className="text-gray-400 mb-4">
                Combine the flexibility of online learning with the infrastructure and community of physical locations through our institutional partnerships.
              </p>
              <Link href="/showcase" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                See student projects
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-obsidian-800 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">AI-Enhanced Personalization</h3>
              <p className="text-gray-400 mb-4">
                Our AI system adapts to your learning patterns, strengths, and goals to create truly personalized learning experiences.
              </p>
              <Link href="/tech-feed" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                Explore tech updates
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-obsidian-800 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">Industry-Aligned Projects</h3>
              <p className="text-gray-400 mb-4">
                Build a portfolio of real-world projects that demonstrate your skills and are validated by industry experts.
              </p>
              <Link href="/puzzle-solver" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                Try daily challenges
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900/30 to-amber-900/30">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-obsidian-800 rounded-xl p-8 md:p-12 border border-purple-500/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Bridge the Skill Gap?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Join thousands of students transforming their careers through our domain-based learning approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/login"
                className="px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition font-medium text-lg"
              >
                Get Started Today
              </Link>
              <Link 
                href="/showcase"
                className="px-8 py-3 bg-obsidian-700 hover:bg-obsidian-600 text-white rounded-lg border border-gray-700 transition font-medium text-lg"
              >
                Browse Student Work
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-obsidian-800 py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <h1 className="text-2xl font-extrabold bg-gradient-to-r from-amber-500 to-yellow-300 bg-clip-text text-transparent mb-4">
                SKILL BRIDGE
              </h1>
              <p className="text-gray-400 mb-4 max-w-md">
                Transforming education through domain-based progressive learning that bridges the gap between theoretical knowledge and industry demands.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-4">Platform</h3>
              <ul className="space-y-2">
                <li><Link href="#how-it-works" className="text-gray-400 hover:text-white transition">How It Works</Link></li>
                <li><Link href="/showcase" className="text-gray-400 hover:text-white transition">Showcase</Link></li>
                <li><Link href="/tech-feed" className="text-gray-400 hover:text-white transition">Tech Feed</Link></li>
                <li><Link href="/puzzle-solver" className="text-gray-400 hover:text-white transition">Puzzles</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-4">Domains</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Web Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Data Science</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Mobile Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Cloud Computing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Cybersecurity</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Partners</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500">© 2025 SKILL BRIDGE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
