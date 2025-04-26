'use client';

import React from 'react';
import { FaUsers, FaRegCheckCircle } from 'react-icons/fa';

interface DiscountTier {
  size: string;
  discount: string;
  features: string[];
}

const discountTiers: DiscountTier[] = [
  {
    size: "3-5 Students",
    discount: "10%",
    features: [
      "Individual learning paths",
      "Shared mentorship sessions",
      "Group project opportunities",
      "Dedicated group coordinator"
    ]
  },
  {
    size: "6-10 Students",
    discount: "15%",
    features: [
      "All smaller group benefits",
      "Custom group dashboard",
      "Priority technical support",
      "Monthly progress reports"
    ]
  },
  {
    size: "10+ Students",
    discount: "20%",
    features: [
      "All previous benefits",
      "Custom workshop session",
      "Employer networking event",
      "Group-specific job placement support"
    ]
  }
];

const GroupEnrollment: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Group Enrollment Discounts</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Enroll with friends, classmates, or colleagues and save on tuition while creating a supportive learning community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {discountTiers.map((tier, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-4">
                  <FaUsers size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{tier.size}</h3>
                  <p className="text-indigo-600 font-bold">{tier.discount} Discount</p>
                </div>
              </div>
              
              <ul className="mt-6 space-y-3">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <FaRegCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <a 
                  href="/group-enrollment"
                  className="block w-full py-3 px-4 text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition duration-300"
                >
                  Enroll Your Group
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-indigo-50 border border-indigo-100 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-center text-indigo-900 mb-4">How Group Enrollment Works</h3>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>Gather your group of classmates, colleagues, or friends interested in the same domain</li>
            <li>Fill out the group enrollment application with details of all participants</li>
            <li>Our team will contact you to confirm enrollment details and process the discount</li>
            <li>All group members must enroll in the same cohort to qualify for the discount</li>
            <li>Payment can be made individually or as a group sum</li>
          </ol>
          <div className="mt-6 text-center">
            <a 
              href="/group-enrollment-faq"
              className="text-indigo-600 font-medium hover:text-indigo-800"
            >
              View Group Enrollment FAQ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupEnrollment;
