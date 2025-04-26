'use client';

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What payment options does SKILL BRIDGE offer?",
    answer: "SKILL BRIDGE offers multiple payment options including monthly subscriptions, quarterly payments, and Income Sharing Agreements (ISA). We also offer scholarships for high-potential candidates from underprivileged backgrounds."
  },
  {
    question: "How does the Income Sharing Agreement (ISA) work?",
    answer: "With our ISA, you only pay after securing employment with a salary above ₹3 LPA. You'll pay 10-12% of your salary for 18-24 months, with a payment cap of 1.4x the program price. There's a 3-month grace period after completion or until employment."
  },
  {
    question: "Are there any scholarships available?",
    answer: "Yes, we offer scholarships based on merit and financial need. We reserve a portion of seats in each cohort for scholarship recipients, with a focus on students from tier-2/3 cities and underrepresented groups in tech."
  },
  {
    question: "Can I switch payment plans after starting the program?",
    answer: "Yes, you can switch between subscription and ISA plans within the first month of the program. After that, changes are evaluated on a case-by-case basis. Please contact our financial support team for assistance."
  },
  {
    question: "What happens if I lose my job while on an ISA?",
    answer: "If you lose your job while on an ISA, payments are paused until you find new employment above the ₹3 LPA threshold. The payment term extends accordingly, but there's no penalty for periods of unemployment."
  },
  {
    question: "Are there any discounts for group enrollments?",
    answer: "Yes, we offer discounts for group enrollments: 10% discount for groups of 3-5 students, 15% for 6-10 students, and 20% for groups of 10+ students. All members must enroll in the same cohort to qualify."
  },
  {
    question: "What's the refund policy?",
    answer: "We offer a full refund within the first 7 days of the program (satisfaction guarantee). After that, refunds are prorated based on the time remaining in the current payment period, minus a small administrative fee."
  }
];

const FinancialFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Financial FAQs</h2>
      <p className="text-lg text-gray-600 text-center mb-10">
        Common questions about our pricing, payment plans, and financial options.
      </p>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div 
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 transition-colors text-left"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <span className="ml-4 flex-shrink-0 text-indigo-600">
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            
            {openIndex === index && (
              <div className="p-5 border-t border-gray-200 bg-gray-50">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-600 mb-4">
          Have more questions about our financial options?
        </p>
        <a 
          href="/contact"
          className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800"
        >
          Contact our financial aid team
        </a>
      </div>
    </div>
  );
};

export default FinancialFAQ;
