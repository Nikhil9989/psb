'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, BookOpen, Briefcase, Cpu, Award, Check, X, Sparkles } from 'lucide-react';
import ResumePreview from './ResumePreview';
import ResumeForm from './ResumeForm';
import TemplateSelector from './TemplateSelector';
import JobMatchOptimizer from './JobMatchOptimizer';

// Resume templates with different styles
const RESUME_TEMPLATES = [
  { id: 'modern', name: 'Modern', description: 'Clean and professional design with a modern touch' },
  { id: 'classic', name: 'Classic', description: 'Traditional layout preferred by established industries' },
  { id: 'creative', name: 'Creative', description: 'Distinctive style for design and creative fields' },
  { id: 'technical', name: 'Technical', description: 'Structured format highlighting technical expertise' },
];

export interface ResumeData {
  personal: {
    name: string;
    email: string;
    phone: string;
    location: string;
    website?: string;
    summary: string;
  };
  skills: string[];
  education: Array<{
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    description?: string;
  }>;
  experience: Array<{
    company: string;
    position: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    achievements: string[];
  }>;
  projects: Array<{
    title: string;
    description: string;
    technologies: string[];
    link?: string;
  }>;
  certifications: Array<{
    name: string;
    issuer: string;
    date: string;
  }>;
}

// Initial empty resume data
const initialResumeData: ResumeData = {
  personal: {
    name: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    summary: '',
  },
  skills: [],
  education: [],
  experience: [],
  projects: [],
  certifications: [],
};

function ResumeBuilder() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [selectedTemplate, setSelectedTemplate] = useState<string>('modern');
  const [jobDescription, setJobDescription] = useState<string>('');
  const [isOptimizing, setIsOptimizing] = useState<boolean>(false);
  const [optimizationScore, setOptimizationScore] = useState<number | null>(null);

  // Auto-populate with verified portfolio projects
  useEffect(() => {
    // This would connect to the portfolio service to fetch verified projects
    // For now, we'll simulate with placeholder data
    const portfolioProjects: ResumeData['projects'] = [
      // This would be populated from the user's actual portfolio
    ];

    if (portfolioProjects.length > 0) {
      setResumeData(prev => ({
        ...prev,
        projects: [...portfolioProjects]
      }));
    }
  }, []);

  // Steps for the resume building process
  const steps = [
    { title: 'Choose Template', icon: <BookOpen className="mr-2" /> },
    { title: 'Personal Info', icon: <FileText className="mr-2" /> },
    { title: 'Education & Skills', icon: <Award className="mr-2" /> },
    { title: 'Experience', icon: <Briefcase className="mr-2" /> },
    { title: 'Projects', icon: <Cpu className="mr-2" /> },
    { title: 'Optimize', icon: <Sparkles className="mr-2" /> },
    { title: 'Preview & Download', icon: <Download className="mr-2" /> },
  ];

  // Handle next step in the wizard
  const handleNextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  // Handle previous step in the wizard
  const handlePrevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  // Update resume data from form inputs
  const updateResumeData = (sectionKey: keyof ResumeData, data: any) => {
    setResumeData({
      ...resumeData,
      [sectionKey]: data,
    });
  };

  // Handle template selection
  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
    handleNextStep();
  };

  // Optimize resume for job description
  const optimizeResume = async () => {
    if (!jobDescription.trim()) return;

    setIsOptimizing(true);
    
    try {
      // This would call an AI service to analyze and optimize the resume
      // For now, we'll simulate the process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate optimization suggestions
      const suggestions = {
        skills: ['communication', 'teamwork', 'problem-solving'],
        keywords: ['project management', 'agile', 'cross-functional'],
        achievements: ['quantify your impact', 'highlight leadership', 'showcase collaboration'],
      };
      
      // Calculate match score (1-100)
      const score = Math.floor(Math.random() * 30) + 70;
      setOptimizationScore(score);
      
      // Update resume data with suggested optimizations
      // In a real implementation, this would intelligently enhance the resume
      
    } catch (error) {
      console.error('Error optimizing resume:', error);
    } finally {
      setIsOptimizing(false);
    }
  };

  // Generate PDF for download
  const generatePdf = () => {
    // This would use a PDF generation library to create a downloadable resume
    console.log('Generating PDF with data:', resumeData);
    alert('Resume download functionality will be implemented with PDF generation library');
  };

  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">
            Dynamic Resume Builder
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Create a professional resume tailored to your career goals with AI-assisted optimization
            that matches your experience with job requirements.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between items-center w-full max-w-4xl mx-auto mb-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className={`rounded-full flex items-center justify-center w-12 h-12 ${
                    index === activeStep 
                      ? 'bg-amber-500 text-black' 
                      : index < activeStep 
                        ? 'bg-green-500 text-white' 
                        : 'bg-slate-700 text-slate-400'
                  } transition-all`}
                >
                  {index < activeStep ? <Check /> : step.icon}
                </div>
                <span className={`mt-2 text-xs ${
                  index === activeStep 
                    ? 'text-amber-500' 
                    : index < activeStep 
                      ? 'text-green-500' 
                      : 'text-slate-400'
                }`}>{step.title}</span>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mt-6 ${
                    index < activeStep ? 'bg-green-500' : 'bg-slate-700'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form Section */}
          <motion.div 
            className="lg:col-span-3 bg-slate-800 rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeStep === 0 && (
              <TemplateSelector 
                templates={RESUME_TEMPLATES} 
                selectedTemplate={selectedTemplate}
                onSelectTemplate={handleTemplateSelect}
              />
            )}

            {activeStep === 1 && (
              <ResumeForm 
                section="personal"
                data={resumeData.personal}
                onChange={(data) => updateResumeData('personal', data)}
              />
            )}

            {activeStep === 2 && (
              <ResumeForm 
                section="education"
                data={resumeData.education}
                skills={resumeData.skills}
                onChange={(data) => {
                  updateResumeData('education', data.education);
                  updateResumeData('skills', data.skills);
                }}
              />
            )}

            {activeStep === 3 && (
              <ResumeForm 
                section="experience"
                data={resumeData.experience}
                onChange={(data) => updateResumeData('experience', data)}
              />
            )}

            {activeStep === 4 && (
              <ResumeForm 
                section="projects"
                data={resumeData.projects}
                onChange={(data) => updateResumeData('projects', data)}
              />
            )}

            {activeStep === 5 && (
              <JobMatchOptimizer 
                jobDescription={jobDescription}
                setJobDescription={setJobDescription}
                onOptimize={optimizeResume}
                isOptimizing={isOptimizing}
                optimizationScore={optimizationScore}
              />
            )}

            {activeStep === 6 && (
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Your Resume is Ready!</h3>
                <p className="mb-6 text-slate-300">Review your resume and download it as a PDF.</p>
                <button 
                  onClick={generatePdf}
                  className="bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 px-6 rounded-lg flex items-center justify-center mx-auto"
                >
                  <Download className="mr-2" />
                  Download PDF
                </button>
              </div>
            )}

            {/* Navigation Buttons */}
            {activeStep !== 0 && activeStep !== 6 && (
              <div className="flex justify-between mt-8">
                <button 
                  onClick={handlePrevStep}
                  className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg"
                >
                  Back
                </button>
                <button 
                  onClick={handleNextStep}
                  className="bg-amber-500 hover:bg-amber-600 text-black font-semibold py-2 px-4 rounded-lg"
                >
                  Next
                </button>
              </div>
            )}
          </motion.div>

          {/* Preview Section */}
          <motion.div 
            className="lg:col-span-2 bg-slate-800 rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <ResumePreview 
                data={resumeData} 
                template={selectedTemplate} 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ResumeBuilder;