'use client';

import React from 'react';
import { FaUniversity, FaChalkboardTeacher, FaLaptopCode, FaHandshake, FaCheck } from 'react-icons/fa';

interface PartnerBenefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const partnerBenefits: PartnerBenefit[] = [
  {
    title: "Enhanced Student Outcomes",
    description: "Improve placement rates and student success metrics through complementary skill development programs.",
    icon: <FaChalkboardTeacher className="text-indigo-600" size={24} />
  },
  {
    title: "Facility Utilization",
    description: "Generate revenue from existing computer labs and classrooms during off-peak hours.",
    icon: <FaLaptopCode className="text-indigo-600" size={24} />
  },
  {
    title: "Industry Connections",
    description: "Access SKILL BRIDGE's network of industry partners and hiring companies for your students.",
    icon: <FaHandshake className="text-indigo-600" size={24} />
  },
  {
    title: "Faculty Development",
    description: "Professional development opportunities for faculty members through our industry expert network.",
    icon: <FaUniversity className="text-indigo-600" size={24} />
  }
];

interface PartnershipModel {
  title: string;
  features: string[];
}

const partnershipModels: PartnershipModel[] = [
  {
    title: "Facility Sharing Model",
    features: [
      "Use of institutional computer labs and classrooms",
      "Joint certification with your institution's name",
      "Flexible scheduling during off-peak hours",
      "Revenue sharing based on student enrollments"
    ]
  },
  {
    title: "Integrated Curriculum Model",
    features: [
      "SKILL BRIDGE content delivered as part of regular curriculum",
      "Co-development of specialized modules",
      "Student internship pipeline for participating companies",
      "Credit recognition options for completed programs"
    ]
  },
  {
    title: "Complete Management Model",
    features: [
      "SKILL BRIDGE manages end-to-end implementation",
      "Regular reports on student performance and outcomes",
      "Institutional branding on all program materials",
      "Dedicated institutional success coordinator"
    ]
  }
];

const InstitutionalPartnerships: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Institutional Partnerships</h2>
          <p className="text-lg text-gray-600">
            Join our network of educational institutions across tier-2 and tier-3 cities to bring industry-relevant skill development to your students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {partnerBenefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100"
            >
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Partnership Models</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipModels.map((model, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-6 bg-gray-50">
                <h4 className="text-xl font-semibold text-indigo-800 mb-4">{model.title}</h4>
                <ul className="space-y-3">
                  {model.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-indigo-800 text-white rounded-xl p-8 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Become a SKILL BRIDGE Partner Institution</h3>
          <p className="text-indigo-100 mb-8">
            Join our growing network of 10+ partner institutions across India bringing industry-relevant skills to students in tier-2 and tier-3 cities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/institutional-partnerships"
              className="bg-white text-indigo-800 hover:bg-indigo-50 font-medium px-6 py-3 rounded-lg transition duration-300"
            >
              Learn More
            </a>
            <a 
              href="/contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl font-medium text-gray-900 mb-8">Trusted by institutions across India</p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
            {/* Placeholder for partner logos */}
            <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-500">Partner 1</div>
            <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-500">Partner 2</div>
            <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-500">Partner 3</div>
            <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-500">Partner 4</div>
            <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-500">Partner 5</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstitutionalPartnerships;
