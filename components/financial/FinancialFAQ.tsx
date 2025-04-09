'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaMoneyBillWave, FaPercentage, FaQuestion, FaGraduationCap } from 'react-icons/fa';

// FAQ categories and questions
const faqCategories = [
  {
    id: 'isa',
    icon: <FaMoneyBillWave className="h-5 w-5" />,
    name: 'Income Sharing Agreements',
    questions: [
      {
        question: 'What is an Income Sharing Agreement (ISA)?',
        answer: 'An Income Sharing Agreement (ISA) is a financial arrangement where you pay for your education after you get a job. Instead of paying upfront, you agree to pay a percentage of your future income for a set period of time, but only after you start earning above a certain threshold.'
      },
      {
        question: 'How much of my income will I need to share?',
        answer: 'Our ISA terms typically range from 10-12% of your monthly income for 18-24 months, depending on your program. This percentage is fixed at the time of signing your agreement and will not change throughout the repayment period.'
      },
      {
        question: 'When do I start making payments?',
        answer: 'You only begin making payments after you secure a job with a minimum salary threshold of ₹3 LPA (₹25,000/month). If your income falls below this threshold at any point, your payments are paused until you\\'re earning above the threshold again.'
      },
      {
        question: 'Is there a cap on the total amount I\\'ll pay?',
        answer: 'Yes, all our ISAs have a payment cap of 1.4x the program cost. This means you\\'ll never pay more than 140% of the original program fee, regardless of how much you earn. This protects you from overpayment if you secure a high-paying position.'
      },
      {
        question: 'What happens if I don\\'t find a job?',
        answer: 'If you don\\'t find employment or if your income remains below our minimum threshold (₹3 LPA) after completing the program, you won\\'t make any payments. Our ISA term has a maximum length of 5 years, after which the obligation ends regardless of payment status.'
      },
      {
        question: 'Can I pay off my ISA early?',
        answer: 'Yes, you can pay off your ISA early at any time. We offer a 15% discount on the remaining balance for early repayment. This gives you flexibility if your financial situation changes or if you want to reduce your overall payment.'
      }
    ]
  },
  {
    id: 'scholarships',
    icon: <FaGraduationCap className="h-5 w-5" />,
    name: 'Scholarships & Financial Aid',
    questions: [
      {
        question: 'What types of scholarships are available?',
        answer: 'We offer both merit-based and need-based scholarships. Merit scholarships are awarded based on academic achievements, prior project work, or exceptional aptitude demonstrated during our assessment process. Need-based scholarships consider financial circumstances to ensure education remains accessible.'
      },
      {
        question: 'How do I apply for a scholarship?',
        answer: 'When you complete your program application, there\\'s a section to indicate your interest in financial assistance. You\\'ll be asked to provide relevant documentation for need-based scholarships, or to showcase your achievements for merit-based scholarships. All candidates are automatically considered for merit scholarships based on their application and assessment performance.'
      },
      {
        question: 'Can scholarships be combined with ISAs or payment plans?',
        answer: 'Yes, partial scholarships can be combined with ISAs or payment plans to cover the remaining balance. Full scholarships cover the entire program cost and don\\'t require additional financing.'
      },
      {
        question: 'What documentation is required for need-based scholarships?',
        answer: 'Required documentation typically includes proof of family income (such as income tax returns), verification of current employment status, and in some cases, a statement of financial need explaining your circumstances. Our admissions team will guide you through the specific requirements for your situation.'
      },
      {
        question: 'When will I know if I\\'ve received a scholarship?',
        answer: 'Scholarship decisions are communicated along with your program acceptance decision, typically within 2-3 weeks of completing your application and assessment process. This gives you time to plan your finances before the program begins.'
      }
    ]
  },
  {
    id: 'payment',
    icon: <FaPercentage className="h-5 w-5" />,
    name: 'Payment Plans & Options',
    questions: [
      {
        question: 'What payment plans do you offer?',
        answer: 'We offer several payment options: monthly or quarterly subscriptions, staggered payment plans (40% upfront, 30% after 45 days, 30% after 90 days), delayed payment options (begin payments 30 days after starting), and weekly payment options for greater flexibility. All plans give you access to the same high-quality education and support.'
      },
      {
        question: 'Is there a discount for paying the full amount upfront?',
        answer: 'Yes, we offer a 10% discount for students who choose to pay the full program fee upfront. This option provides the greatest savings for those who can afford the initial investment.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit and debit cards, UPI payments, net banking, and bank transfers. International students can pay using standard international payment methods like credit cards or wire transfers.'
      },
      {
        question: 'Are there any hidden fees or additional costs?',
        answer: 'No, our pricing is transparent with no hidden fees. The published program cost includes all learning materials, mentorship sessions, project assessments, and career services. The only potential additional costs would be for optional advanced certifications or specialized tools that some students may choose to pursue.'
      },
      {
        question: 'What happens if I need to leave the program early?',
        answer: 'Our refund policy allows for a full refund within the first 7 days of the program (satisfaction guarantee). After that, refunds are prorated based on the portion of the program completed, minus a small administrative fee. For students on payment plans, remaining payments may be adjusted or waived depending on the circumstances of withdrawal.'
      }
    ]
  },
  {
    id: 'other',
    icon: <FaQuestion className="h-5 w-5" />,
    name: 'Other Financial Questions',
    questions: [
      {
        question: 'Can I switch payment methods after enrolling?',
        answer: 'Yes, you can switch between payment methods or plans by contacting our financial services team. Changes in payment structure may require a review and approval process, but we try to accommodate reasonable requests to ensure your financial comfort.'
      },
      {
        question: 'Are there any tax benefits for education expenses?',
        answer: 'In many cases, educational expenses can qualify for tax benefits under Section 80C or 80E of the Income Tax Act for Indian students. We provide documentation that may help you claim these benefits, but we recommend consulting with a tax professional for advice specific to your situation.'
      },
      {
        question: 'What happens if I miss a payment?',
        answer: 'We understand that financial difficulties can occur. If you anticipate payment issues, contact our financial services team proactively. For unexpected missed payments, we have a 10-day grace period before any late fees are assessed. We work with students experiencing financial hardship to find solutions that allow them to continue their education.'
      },
      {
        question: 'Do you offer any employment guarantees?',
        answer: 'While we don\\'t offer a blanket job guarantee, we do offer an ISA which aligns our success with yours - we only get paid when you do. Additionally, select programs offer conditional placement assurances where students who meet specific criteria for participation and performance may qualify for extended support or partial refunds if placement goals aren\\'t met.'
      },
      {
        question: 'Can I get a loan to cover program costs?',
        answer: 'While we don\\'t directly offer loans, we have partnerships with select financial institutions that provide education loans for our programs, often at preferential rates. Our financial services team can provide information about these options upon request.'
      }
    ]
  }
];

const FinancialFAQ = () => {
  const [activeCategory, setActiveCategory] = useState('isa');
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({});

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  return (
    <section className="py-20 md:py-24 bg-obsidian-900/95 texture-overlay relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat opacity-3 z-0"></div>
      
      {/* Gold accent elements */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/6 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/6 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold-500 text-sm uppercase tracking-wider font-medium">Questions Answered</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-6">
            <span className="gold-gradient-text">Financial</span> FAQ
          </h2>
          <p className="text-obsidian-200 text-base md:text-lg">
            Get answers to the most common questions about our pricing, payment options, ISA terms, and financial assistance programs.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gold-500 text-obsidian-900 shadow-gold'
                    : 'bg-obsidian-800 text-obsidian-300 hover:text-white'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {faqCategories
            .filter((category) => category.id === activeCategory)
            .map((category) => (
              <div key={category.id} className="space-y-4">
                {category.questions.map((faq, index) => {
                  const questionId = `${category.id}-${index}`;
                  const isOpen = openQuestions[questionId] || false;
                  
                  return (
                    <motion.div
                      key={questionId}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="bg-obsidian-800 border border-obsidian-700 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleQuestion(questionId)}
                        className="flex justify-between items-center w-full p-5 text-left focus:outline-none group"
                      >
                        <span className="text-white font-medium text-lg pr-4">{faq.question}</span>
                        <FaChevronDown 
                          className={`text-gold-500 transform transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : 'rotate-0'
                          }`} 
                        />
                      </button>
                      
                      <div 
                        className={`transition-all duration-300 overflow-hidden ${
                          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="p-5 pt-0 border-t border-obsidian-700 text-obsidian-300">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ))}
        </div>
        
        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-obsidian-800/50 border border-obsidian-700/70 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">Still Have Questions?</h3>
            <p className="text-obsidian-300 mb-6">
              Our financial advisors are ready to help you understand your options and find the best payment solution for your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact?topic=financial"
                className="btn btn-gold px-6 py-3 text-sm inline-flex items-center justify-center shadow-gold relative overflow-hidden group"
              >
                <span className="relative z-10">Contact Financial Advisor</span>
                {/* Gold shimmer effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-500/0 via-gold-500/30 to-gold-500/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="/apply"
                className="btn bg-obsidian-700 hover:bg-obsidian-600 text-white px-6 py-3 text-sm inline-flex items-center justify-center transition-all duration-300"
              >
                <span>Apply Now</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinancialFAQ;