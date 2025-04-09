import React from 'react';
import ContactOptions from '@/components/ContactOptions';

const ContactUs = () => {
  return (
    <section id="contact" className="py-20 bg-obsidian-950">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get in Touch</h2>
          <p className="text-obsidian-300 text-lg leading-relaxed">
            Have questions about our programs or need guidance on which path is right for you?
            Our admissions team is here to help you take the next step in your career journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-obsidian-800 rounded-xl shadow-gold-glow border border-gold-500/20 p-6">
            <h3 className="text-xl font-semibold text-white mb-6">Send Us a Message</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-obsidian-300 text-sm mb-2">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-obsidian-700 border border-obsidian-600 focus:border-gold-500 rounded-md text-white placeholder:text-obsidian-400 focus:outline-none focus:ring-1 focus:ring-gold-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-obsidian-300 text-sm mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-obsidian-700 border border-obsidian-600 focus:border-gold-500 rounded-md text-white placeholder:text-obsidian-400 focus:outline-none focus:ring-1 focus:ring-gold-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-obsidian-300 text-sm mb-2">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 bg-obsidian-700 border border-obsidian-600 focus:border-gold-500 rounded-md text-white placeholder:text-obsidian-400 focus:outline-none focus:ring-1 focus:ring-gold-500"
                  placeholder="+91 12345 67890"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="interest" className="block text-obsidian-300 text-sm mb-2">
                  I'm interested in
                </label>
                <select 
                  id="interest" 
                  className="w-full px-4 py-3 bg-obsidian-700 border border-obsidian-600 focus:border-gold-500 rounded-md text-white placeholder:text-obsidian-400 focus:outline-none focus:ring-1 focus:ring-gold-500"
                >
                  <option value="" disabled selected>Select your interest</option>
                  <option value="web-development">Web Development</option>
                  <option value="data-science">Data Science & Analytics</option>
                  <option value="app-development">Mobile App Development</option>
                  <option value="cloud-devops">Cloud & DevOps</option>
                  <option value="other">Other (Please specify)</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-obsidian-300 text-sm mb-2">
                  Your Message
                </label>
                <textarea 
                  id="message" 
                  className="w-full px-4 py-3 bg-obsidian-700 border border-obsidian-600 focus:border-gold-500 rounded-md text-white placeholder:text-obsidian-400 focus:outline-none focus:ring-1 focus:ring-gold-500"
                  rows={5}
                  placeholder="Please let us know how we can help you..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gold-500 hover:bg-gold-600 text-obsidian-900 font-medium py-3 px-6 rounded-md transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Options */}
          <div className="lg:col-span-1">
            <ContactOptions />
            
            <div className="bg-obsidian-800 rounded-xl shadow-gold-glow border border-gold-500/20 p-6">
              <h3 className="text-xl font-semibold text-white mb-6">FAQ</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-gold-500 font-medium mb-2">When do applications open for the next cohort?</h4>
                  <p className="text-obsidian-300">Applications for our July 2025 cohort are open now through June 15th. Early applications are encouraged as spaces fill quickly.</p>
                </div>
                <div>
                  <h4 className="text-gold-500 font-medium mb-2">Do I need prior programming experience?</h4>
                  <p className="text-obsidian-300">Basic computer knowledge is required, but no specific programming experience is necessary for our foundation modules.</p>
                </div>
                <div>
                  <h4 className="text-gold-500 font-medium mb-2">How is SKILL BRIDGE different from other programs?</h4>
                  <p className="text-obsidian-300">Our domain-based approach teaches related skills together, with hybrid local/online learning and personalized paths for each student.</p>
                </div>
                <div>
                  <h4 className="text-gold-500 font-medium mb-2">What are the payment options?</h4>
                  <p className="text-obsidian-300">We offer flexible payment plans, including monthly installments and Income Sharing Agreements (ISA) where you pay after securing employment.</p>
                </div>
                <div>
                  <h4 className="text-gold-500 font-medium mb-2">Where are your facilities located?</h4>
                  <p className="text-obsidian-300">We have partner facilities in Jaipur, Bhopal, and Lucknow, with expansion to additional tier-2 cities planned for 2025.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
