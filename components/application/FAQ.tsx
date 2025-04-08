'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: "What are the eligibility requirements?",
    answer: "SKILL BRIDGE is open to students and professionals in tier-2 and tier-3 cities with a basic understanding of programming concepts. While a formal CS/IT degree is not required, familiarity with programming fundamentals will help you get the most out of the program. Our initial cohort focuses on Web Development, with future cohorts expanding to other domains."
  },
  {
    question: "How much does the program cost?",
    answer: "We offer flexible payment options designed for accessibility. Our Basic tier starts at ₹2,500-3,000/month with options for quarterly payments at discounted rates. We also offer Income Share Agreements (ISA) where you pay only after securing employment, with payments capped at 1.4x the program price. Scholarships are available for exceptional candidates with financial constraints."
  },
  {
    question: "What is the time commitment required?",
    answer: "The program runs for 3-6 months based on your learning pace. We recommend dedicating at least 15-20 hours per week for optimal progress. This includes live sessions (approximately 6 hours weekly), self-paced learning, and project work. Our hybrid model allows you to attend some sessions at partner institutions and others remotely."
  },
  {
    question: "Do I need a powerful computer or high-speed internet?",
    answer: "No, SKILL BRIDGE is designed for practical accessibility. Our platform works on basic smartphones and computers with modest internet connectivity. Content is optimized for low-bandwidth environments with offline access options. The institutional partnership model also provides access to computer labs during specific hours for students who need additional resources."
  },
  {
    question: "When does the next cohort start?",
    answer: "Our founding Web Development cohort begins on June 15, 2025. Applications are now open with limited spots available (maximum 30 students per cohort to ensure personalized attention). Early applicants will receive priority consideration and potential special founding member benefits."
  },
  {
    question: "What career support do you provide?",
    answer: "We offer comprehensive placement assistance including portfolio development, resume optimization, interview preparation, and direct employer connections. Our hiring partners include local tech companies and remote-friendly employers. The program includes modules on freelancing preparation and entrepreneurship for those interested in alternative career paths."
  },
  {
    question: "How is SKILL BRIDGE different from other programs?",
    answer: "Unlike traditional platforms that teach technologies in isolation, our domain-based approach integrates multiple skills simultaneously as they're used in the real world. We combine local infrastructure with global opportunities through our hybrid model, providing personalized mentorship, hands-on projects, and a structured progression path tailored to tier-2/3 city opportunities."
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {faqItems.map((faq, index) => (
          <div 
            key={index} 
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <span className="text-primary">
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </span>
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 p-4' : 'max-h-0'
              }`}
            >
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Still have questions? Feel free to{" "}
          <a href="/contact" className="text-primary hover:underline font-medium">
            contact us
          </a>{" "}
          for more information.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
