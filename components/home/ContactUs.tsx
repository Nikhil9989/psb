'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheck } from 'react-icons/fa';

const ContactUs = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'General Inquiry',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormState({
          name: '',
          email: '',
          phone: '',
          message: '',
          subject: 'General Inquiry',
        });
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-obsidian-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat opacity-5 z-0"></div>
      
      {/* Gold accent elements */}
      <div className="absolute top-0 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold-500 text-sm uppercase tracking-wider font-medium">Get In Touch</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-6">
            <span className="gold-gradient-text">Contact</span> Us
          </h2>
          <p className="text-obsidian-200 text-base md:text-lg">
            Have questions about our programs or want to learn more about how we can help you bridge the skill gap? 
            Reach out to our team for personalized assistance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-obsidian-900 p-6 rounded-lg border border-gold-500/10"
          >
            <h3 className="text-xl font-semibold mb-6 text-white">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 rounded-full bg-gold-500/10 text-gold-500">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-sm text-obsidian-300 mb-1">Email</h4>
                  <p className="text-white">contact@skillbridge.edu</p>
                  <p className="text-white">admissions@skillbridge.edu</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 rounded-full bg-gold-500/10 text-gold-500">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="text-sm text-obsidian-300 mb-1">Phone</h4>
                  <p className="text-white">+91 9876 543 210</p>
                  <p className="text-white">+91 1234 567 890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 rounded-full bg-gold-500/10 text-gold-500">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-sm text-obsidian-300 mb-1">Address</h4>
                  <p className="text-white">SKILL BRIDGE Campus,</p>
                  <p className="text-white">Tech Park, Sector 15,</p>
                  <p className="text-white">Bangalore - 560001</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-gold-500 text-sm font-medium mb-4">Office Hours</h4>
              <div className="bg-obsidian-800 p-4 rounded border border-gold-500/10">
                <div className="flex justify-between py-1">
                  <span className="text-obsidian-300">Monday - Friday</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-obsidian-300">Saturday</span>
                  <span className="text-white">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-obsidian-300">Sunday</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 bg-obsidian-900 p-6 rounded-lg border border-gold-500/10"
          >
            <h3 className="text-xl font-semibold mb-6 text-white">Send Us a Message</h3>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-6 text-center"
              >
                <div className="mx-auto w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                  <FaCheck className="text-emerald-500 text-xl" />
                </div>
                <h4 className="text-xl font-medium text-white mb-2">Thank You!</h4>
                <p className="text-obsidian-200">Your message has been sent successfully. We'll get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-obsidian-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full bg-obsidian-800 border border-obsidian-700 focus:border-gold-500/50 rounded-lg p-3 text-white outline-none"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm text-obsidian-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full bg-obsidian-800 border border-obsidian-700 focus:border-gold-500/50 rounded-lg p-3 text-white outline-none"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm text-obsidian-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full bg-obsidian-800 border border-obsidian-700 focus:border-gold-500/50 rounded-lg p-3 text-white outline-none"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm text-obsidian-300 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full bg-obsidian-800 border border-obsidian-700 focus:border-gold-500/50 rounded-lg p-3 text-white outline-none"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Admission Info">Admission Information</option>
                      <option value="Pricing and Payment">Pricing and Payment</option>
                      <option value="Career Opportunities">Career Opportunities</option>
                      <option value="Partnership">Partnership</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm text-obsidian-300 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-obsidian-800 border border-obsidian-700 focus:border-gold-500/50 rounded-lg p-3 text-white outline-none resize-none"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-gold px-8 py-3 text-sm w-full md:w-auto relative overflow-hidden group"
                  >
                    <span className="relative z-10">
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </span>
                    {/* Gold shimmer effect */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-500/0 via-gold-500/30 to-gold-500/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;