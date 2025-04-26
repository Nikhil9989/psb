'use client';

import React, { useState } from 'react';
import { Globe, Github, ArrowRight, AlertCircle, X, Check } from 'lucide-react';

const CreateProjectForm = ({ onClose }: { onClose: () => void }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    subdomain: '',
    description: '',
    repository: '',
    buildCommand: 'npm run build',
    deployPath: 'out',
    technologies: [] as string[],
  });
  const [customTech, setCustomTech] = useState('');
  const [subdomainAvailable, setSubdomainAvailable] = useState<boolean | null>(null);
  
  const techOptions = [
    'React', 'Next.js', 'Vue.js', 'Angular', 'Svelte', 
    'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 
    'Tailwind CSS', 'Sass', 'TypeScript', 'JavaScript'
  ];
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Check subdomain availability when the subdomain field changes
    if (name === 'subdomain' && value.length > 0) {
      // In a real app, this would be an API call to check availability
      // Here we're just simulating a check with a random result
      setTimeout(() => {
        setSubdomainAvailable(value.length > 3);
      }, 500);
    } else if (name === 'subdomain') {
      setSubdomainAvailable(null);
    }
  };
  
  const handleTechToggle = (tech: string) => {
    setFormData(prev => {
      if (prev.technologies.includes(tech)) {
        return { ...prev, technologies: prev.technologies.filter(t => t !== tech) };
      } else {
        return { ...prev, technologies: [...prev.technologies, tech] };
      }
    });
  };
  
  const handleCustomTechAdd = () => {
    if (customTech.trim() !== '' && !formData.technologies.includes(customTech)) {
      setFormData(prev => ({
        ...prev,
        technologies: [...prev.technologies, customTech.trim()]
      }));
      setCustomTech('');
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, submit the data to your backend
    console.log('Form submitted:', formData);
    onClose();
  };
  
  const nextStep = () => {
    setStep(current => current + 1);
  };
  
  const prevStep = () => {
    setStep(current => current - 1);
  };
  
  const validateStep1 = () => {
    return formData.name.trim() !== '' && formData.subdomain.trim() !== '' && subdomainAvailable;
  };
  
  const validateStep2 = () => {
    return formData.repository.trim() !== '';
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-obsidian-800 rounded-xl border border-gray-700 shadow-xl max-w-xl w-full mx-auto max-h-[90vh] overflow-auto">
        <div className="p-6 border-b border-gray-700 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Create New Project</h2>
          <button onClick={onClose} className="p-1.5 rounded-full hover:bg-obsidian-700 text-gray-400 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <div className={`flex-1 flex flex-col items-center ${step >= 1 ? 'text-purple-400' : 'text-gray-600'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 mb-1 ${step >= 1 ? 'border-purple-400 bg-purple-900/30' : 'border-gray-700 bg-obsidian-700'}`}>
                  1
                </div>
                <span className="text-xs">Basic Info</span>
              </div>
              <div className={`w-full max-w-[80px] h-0.5 self-start mt-4 ${step >= 2 ? 'bg-purple-400' : 'bg-gray-700'}`}></div>
              <div className={`flex-1 flex flex-col items-center ${step >= 2 ? 'text-purple-400' : 'text-gray-600'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 mb-1 ${step >= 2 ? 'border-purple-400 bg-purple-900/30' : 'border-gray-700 bg-obsidian-700'}`}>
                  2
                </div>
                <span className="text-xs">Source Code</span>
              </div>
              <div className={`w-full max-w-[80px] h-0.5 self-start mt-4 ${step >= 3 ? 'bg-purple-400' : 'bg-gray-700'}`}></div>
              <div className={`flex-1 flex flex-col items-center ${step >= 3 ? 'text-purple-400' : 'text-gray-600'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 mb-1 ${step >= 3 ? 'border-purple-400 bg-purple-900/30' : 'border-gray-700 bg-obsidian-700'}`}>
                  3
                </div>
                <span className="text-xs">Configuration</span>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            {/* Step 1: Basic Information */}
            {step === 1 && (
              <div>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                    Project Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="My Awesome Project"
                    className="w-full px-4 py-2.5 bg-obsidian-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subdomain" className="block text-sm font-medium text-gray-400 mb-1">
                    Subdomain Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subdomain"
                      name="subdomain"
                      value={formData.subdomain}
                      onChange={handleInputChange}
                      placeholder="my-project"
                      className={`w-full px-4 py-2.5 pr-10 bg-obsidian-900 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 ${
                        subdomainAvailable === true 
                          ? 'border-green-500 focus:ring-green-500 focus:border-green-500' 
                          : subdomainAvailable === false 
                          ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                          : 'border-gray-700 focus:ring-purple-500 focus:border-purple-500'
                      }`}
                      required
                    />
                    {subdomainAvailable !== null && (
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        {subdomainAvailable 
                          ? <Check size={18} className="text-green-500" />
                          : <AlertCircle size={18} className="text-red-500" />
                        }
                      </div>
                    )}
                  </div>
                  <div className="flex items-center mt-1.5">
                    <Globe size={14} className="text-gray-500 mr-1.5" />
                    <span className="text-sm text-gray-500">
                      {formData.subdomain ? formData.subdomain : 'your-project'}.skillbridge.in
                    </span>
                  </div>
                  {subdomainAvailable === false && (
                    <p className="text-red-500 text-sm mt-1.5">This subdomain is already taken</p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-400 mb-1">
                    Project Description (optional)
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="A short description of your project"
                    rows={3}
                    className="w-full px-4 py-2.5 bg-obsidian-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              </div>
            )}
            
            {/* Step 2: Source Code */}
            {step === 2 && (
              <div>
                <div className="mb-4">
                  <label htmlFor="repository" className="block text-sm font-medium text-gray-400 mb-1">
                    GitHub Repository URL
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Github size={18} className="text-gray-500" />
                    </div>
                    <input
                      type="text"
                      id="repository"
                      name="repository"
                      value={formData.repository}
                      onChange={handleInputChange}
                      placeholder="https://github.com/username/repository"
                      className="w-full pl-10 px-4 py-2.5 bg-obsidian-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                      required
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-1.5">
                    We'll connect to your repository and automatically deploy your project when you push changes.
                  </p>
                </div>
                
                <div className="mb-4">
                  <p className="block text-sm font-medium text-gray-400 mb-2">
                    Technologies Used
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {techOptions.map(tech => (
                      <button
                        key={tech}
                        type="button"
                        onClick={() => handleTechToggle(tech)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                          formData.technologies.includes(tech)
                            ? 'bg-purple-600 text-white'
                            : 'bg-obsidian-900 text-gray-400 hover:bg-obsidian-700'
                        }`}
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={customTech}
                      onChange={(e) => setCustomTech(e.target.value)}
                      placeholder="Add custom technology"
                      className="flex-1 px-4 py-2 bg-obsidian-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 text-sm"
                    />
                    <button
                      type="button"
                      onClick={handleCustomTechAdd}
                      className="px-3 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors text-sm"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Step 3: Configuration */}
            {step === 3 && (
              <div>
                <div className="mb-4">
                  <label htmlFor="buildCommand" className="block text-sm font-medium text-gray-400 mb-1">
                    Build Command
                  </label>
                  <input
                    type="text"
                    id="buildCommand"
                    name="buildCommand"
                    value={formData.buildCommand}
                    onChange={handleInputChange}
                    placeholder="npm run build"
                    className="w-full px-4 py-2.5 bg-obsidian-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                  />
                  <p className="text-sm text-gray-500 mt-1.5">
                    The command to build your project. Defaults to "npm run build".
                  </p>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="deployPath" className="block text-sm font-medium text-gray-400 mb-1">
                    Deploy Path
                  </label>
                  <input
                    type="text"
                    id="deployPath"
                    name="deployPath"
                    value={formData.deployPath}
                    onChange={handleInputChange}
                    placeholder="out"
                    className="w-full px-4 py-2.5 bg-obsidian-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                  />
                  <p className="text-sm text-gray-500 mt-1.5">
                    The folder to deploy. Typically "build", "dist", or "out" depending on your framework.
                  </p>
                </div>
                
                <div className="p-4 bg-obsidian-900 rounded-lg border border-gray-700 mb-4">
                  <h4 className="text-sm font-medium text-white mb-2">Project Summary</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li><span className="text-gray-500">Name:</span> {formData.name}</li>
                    <li><span className="text-gray-500">Subdomain:</span> {formData.subdomain}.skillbridge.in</li>
                    <li><span className="text-gray-500">Repository:</span> {formData.repository}</li>
                    <li>
                      <span className="text-gray-500">Technologies:</span>{' '}
                      {formData.technologies.length > 0 
                        ? formData.technologies.join(', ') 
                        : 'None specified'}
                    </li>
                  </ul>
                </div>
              </div>
            )}
            
            <div className="flex justify-between pt-4 border-t border-gray-700">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-4 py-2 bg-obsidian-900 border border-gray-700 text-gray-300 rounded-lg hover:bg-obsidian-700 transition-colors"
                >
                  Back
                </button>
              ) : (
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-obsidian-900 border border-gray-700 text-gray-300 rounded-lg hover:bg-obsidian-700 transition-colors"
                >
                  Cancel
                </button>
              )}
              
              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={(step === 1 && !validateStep1()) || (step === 2 && !validateStep2())}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg flex items-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-500 transition-colors"
                >
                  Next Step
                  <ArrowRight size={16} className="ml-1.5" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg flex items-center hover:bg-purple-500 transition-colors"
                >
                  Create Project
                  <ArrowRight size={16} className="ml-1.5" />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectForm;
