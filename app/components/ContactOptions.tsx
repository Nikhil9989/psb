import React from 'react';
import { Phone, MessageSquare, Mail, MapPin } from 'lucide-react';

const ContactOptions = () => {
  return (
    <div className="bg-obsidian-800 rounded-xl shadow-gold-glow border border-gold-500/20 p-6 mb-8">
      <h3 className="text-xl font-semibold text-white mb-6">Contact Us Directly</h3>
      <div className="space-y-5">
        {/* WhatsApp Option */}
        <div className="flex items-start">
          <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 border border-green-500/30 mr-4">
            <MessageSquare className="h-5 w-5" />
          </div>
          <div>
            <p className="text-white font-medium">WhatsApp</p>
            <p className="text-obsidian-300">Quick responses during business hours</p>
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center text-gold-500 hover:text-gold-400"
            >
              +91 98765 43210
            </a>
          </div>
        </div>
        
        {/* Phone Option */}
        <div className="flex items-start">
          <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/30 mr-4">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <p className="text-white font-medium">Call Us</p>
            <p className="text-obsidian-300">Mon-Fri, 9:00 AM - 6:00 PM IST</p>
            <a 
              href="tel:+919876543210" 
              className="mt-1 inline-flex items-center text-gold-500 hover:text-gold-400"
            >
              +91 98765 43210
            </a>
          </div>
        </div>
        
        {/* Email Option */}
        <div className="flex items-start">
          <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 border border-purple-500/30 mr-4">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <p className="text-white font-medium">Email</p>
            <p className="text-obsidian-300">We'll respond within 24 hours</p>
            <a 
              href="mailto:admissions@skillbridge.edu" 
              className="mt-1 inline-flex items-center text-gold-500 hover:text-gold-400"
            >
              admissions@skillbridge.edu
            </a>
          </div>
        </div>
        
        {/* Campus Location */}
        <div className="flex items-start">
          <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/30 mr-4">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <p className="text-white font-medium">Visit Our Campus</p>
            <p className="text-obsidian-300">Main Center - Jaipur</p>
            <p className="text-obsidian-400">
              SKILL BRIDGE Learning Center, Raja Park<br />
              Jaipur, Rajasthan 302004
            </p>
          </div>
        </div>
      </div>
      
      {/* Mobile-specific quick action buttons */}
      <div className="mt-8 grid grid-cols-2 gap-4 md:hidden">
        <a 
          href="https://wa.me/919876543210" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-md text-center flex items-center justify-center"
        >
          <MessageSquare className="h-5 w-5 mr-2" />
          WhatsApp Us
        </a>
        <a 
          href="tel:+919876543210" 
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md text-center flex items-center justify-center"
        >
          <Phone className="h-5 w-5 mr-2" />
          Call Us
        </a>
      </div>
    </div>
  );
};

export default ContactOptions;
