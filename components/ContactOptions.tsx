'use client';

import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const ContactOptions = () => {
  return (
    <div className="bg-obsidian-800 rounded-xl shadow-gold-glow border border-gold-500/20 p-6 mb-6">
      <h3 className="text-xl font-semibold text-white mb-6">Contact Options</h3>
      
      <div className="space-y-5">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-10 w-10 bg-gold-500/10 rounded-full flex items-center justify-center mr-4">
            <FaPhone className="h-4 w-4 text-gold-500" />
          </div>
          <div>
            <h4 className="text-sm text-gold-500 mb-1">Call Us</h4>
            <p className="text-white text-sm">+91 8247485295</p>
            <p className="text-obsidian-400 text-xs mt-1">Mon-Fri, 9AM-6PM</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-10 w-10 bg-gold-500/10 rounded-full flex items-center justify-center mr-4">
            <FaEnvelope className="h-4 w-4 text-gold-500" />
          </div>
          <div>
            <h4 className="text-sm text-gold-500 mb-1">Email</h4>
            <p className="text-white text-sm">itsmemncworks@outlook.com</p>
            <p className="text-obsidian-400 text-xs mt-1">We respond within 24 hours</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-10 w-10 bg-gold-500/10 rounded-full flex items-center justify-center mr-4">
            <FaWhatsapp className="h-4 w-4 text-gold-500" />
          </div>
          <div>
            <h4 className="text-sm text-gold-500 mb-1">WhatsApp</h4>
            <p className="text-white text-sm">+91 8247485295</p>
            <p className="text-obsidian-400 text-xs mt-1">Instant support</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-10 w-10 bg-gold-500/10 rounded-full flex items-center justify-center mr-4">
            <FaMapMarkerAlt className="h-4 w-4 text-gold-500" />
          </div>
          <div>
            <h4 className="text-sm text-gold-500 mb-1">Visit Us</h4>
            <p className="text-white text-sm">SKILL BRIDGE Campus,</p>
            <p className="text-white text-sm">Tech Park, Sector 15,</p>
            <p className="text-white text-sm">Bangalore - 560001</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <button className="w-full py-2 border border-gold-500 text-gold-500 hover:bg-gold-500/10 text-sm rounded-md transition duration-200">
          Schedule a Call
        </button>
      </div>
    </div>
  );
};

export default ContactOptions;