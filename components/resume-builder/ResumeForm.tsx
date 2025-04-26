import React, { useState } from 'react';
import { Plus, Minus, Trash2, X } from 'lucide-react';
import { ResumeData } from './ResumeBuilder';

interface ResumeFormProps {
  section: 'personal' | 'education' | 'experience' | 'projects';
  data: any;
  skills?: string[];
  onChange: (data: any) => void;
}

const ResumeForm: React.FC<ResumeFormProps> = ({ section, data, skills = [], onChange }) => {
  const [skill, setSkill] = useState<string>('');

  // Handle personal info changes
  const handlePersonalChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onChange({
      ...data,
      [name]: value
    });
  };

  // Add a new skill
  const addSkill = () => {
    if (skill && !skills.includes(skill)) {
      const updatedSkills = [...skills, skill];
      onChange({
        education: data,
        skills: updatedSkills
      });
      setSkill('');
    }
  };

  // Remove a skill
  const removeSkill = (index: number) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    onChange({
      education: data,
      skills: updatedSkills
    });
  };

  // Add a new education item
  const addEducation = () => {
    const newEducation = {
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      description: ''
    };
    onChange([...data, newEducation]);
  };

  // Update an education item
  const updateEducation = (index: number, field: string, value: string) => {
    const updatedEducation = [...data];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [field]: value
    };
    onChange(updatedEducation);
  };

  // Remove an education item
  const removeEducation = (index: number) => {
    onChange(data.filter((_: any, i: number) => i !== index));
  };

  // Add a new experience item
  const addExperience = () => {
    const newExperience = {
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      achievements: ['']
    };
    onChange([...data, newExperience]);
  };

  // Update an experience item
  const updateExperience = (index: number, field: string, value: any) => {
    const updatedExperience = [...data];
    updatedExperience[index] = {
      ...updatedExperience[index],
      [field]: value
    };
    onChange(updatedExperience);
  };

  // Add an achievement to an experience
  const addAchievement = (expIndex: number) => {
    const updatedExperience = [...data];
    updatedExperience[expIndex].achievements.push('');
    onChange(updatedExperience);
  };

  // Update an achievement
  const updateAchievement = (expIndex: number, achieveIndex: number, value: string) => {
    const updatedExperience = [...data];
    updatedExperience[expIndex].achievements[achieveIndex] = value;
    onChange(updatedExperience);
  };

  // Remove an achievement
  const removeAchievement = (expIndex: number, achieveIndex: number) => {
    const updatedExperience = [...data];
    updatedExperience[expIndex].achievements = updatedExperience[expIndex].achievements.filter(
      (_: string, i: number) => i !== achieveIndex
    );
    onChange(updatedExperience);
  };

  // Remove an experience item
  const removeExperience = (index: number) => {
    onChange(data.filter((_: any, i: number) => i !== index));
  };

  // Add a new project
  const addProject = () => {
    const newProject = {
      title: '',
      description: '',
      technologies: [],
      link: ''
    };
    onChange([...data, newProject]);
  };

  // Update a project
  const updateProject = (index: number, field: string, value: any) => {
    const updatedProjects = [...data];
    
    if (field === 'technologies' && typeof value === 'string') {
      // Handle technologies as a comma-separated string
      updatedProjects[index][field] = value.split(',').map((tech: string) => tech.trim());
    } else {
      updatedProjects[index][field] = value;
    }
    
    onChange(updatedProjects);
  };

  // Remove a project
  const removeProject = (index: number) => {
    onChange(data.filter((_: any, i: number) => i !== index));
  };

  // Render form based on section
  const renderForm = () => {
    switch (section) {
      case 'personal':
        return (
          <div>
            <h3 className="text-xl font-semibold mb-6">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={data.name || ''}
                  onChange={handlePersonalChange}
                  className="w-full px-3 py-2 bg-slate-700 rounded border border-slate-600 text-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={data.email || ''}
                  onChange={handlePersonalChange}
                  className="w-full px-3 py-2 bg-slate-700 rounded border border-slate-600 text-white"
                  placeholder="john.doe@example.com"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={data.phone || ''}
                  onChange={handlePersonalChange}
                  className="w-full px-3 py-2 bg-slate-700 rounded border border-slate-600 text-white"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  value={data.location || ''}
                  onChange={handlePersonalChange}
                  className="w-full px-3 py-2 bg-slate-700 rounded border border-slate-600 text-white"
                  placeholder="Hyderabad, India"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-300 mb-1">Website/LinkedIn (Optional)</label>
              <input
                type="url"
                name="website"
                value={data.website || ''}
                onChange={handlePersonalChange}
                className="w-full px-3 py-2 bg-slate-700 rounded border border-slate-600 text-white"
                placeholder="https://linkedin.com/in/johndoe"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-300 mb-1">Professional Summary</label>
              <textarea
                name="summary"
                value={data.summary || ''}
                onChange={handlePersonalChange}
                rows={4}
                className="w-full px-3 py-2 bg-slate-700 rounded border border-slate-600 text-white"
                placeholder="Experienced web developer with 5+ years of experience specializing in front-end technologies..."
              />
            </div>
          </div>
        );

      case 'education':
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Education & Skills</h3>
              <button
                onClick={addEducation}
                className="bg-slate-700 hover:bg-slate-600 text-white py-1 px-3 rounded-lg flex items-center text-sm"
              >
                <Plus size={16} className="mr-1" /> Add Education
              </button>
            </div>

            {/* Skills Section */}
            <div className="mb-8">
              <h4 className="text-lg font-medium text-slate-200 mb-3">Skills</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {skills.map((skillItem, index) => (
                  <div 
                    key={index} 
                    className="bg-slate-700 text-white px-3 py-1 rounded-lg flex items-center"
                  >
                    {skillItem}
                    <button 
                      onClick={() => removeSkill(index)}
                      className="ml-2 text-slate-400 hover:text-red-400"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex">
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                  className="flex-grow px-3 py-2 bg-slate-700 rounded-l border border-slate-600 text-white"
                  placeholder="Add a skill (e.g., JavaScript, React)"
                  onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                />
                <button
                  onClick={addSkill}
                  className="bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded-r"
                >
                  Add
                </button>
              </div>
            </div>

            {/* Education Items */}
            {data.length > 0 ? (
              data.map((edu: any, index: number) => (
                <div key={index} className="mb-6 p-4 bg-slate-700 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-medium text-slate-200">Education #{index + 1}</h4>
                    <button
                      onClick={() => removeEducation(index)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Institution</label>
                      <input
                        type="text"
                        value={edu.institution || ''}
                        onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                        className="w-full px-3 py-2 bg-slate-600 rounded border border-slate-500 text-white"
                        placeholder="University/College Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Degree</label>
                      <input
                        type="text"
                        value={edu.degree || ''}
                        onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                        className="w-full px-3 py-2 bg-slate-600 rounded border border-slate-500 text-white"
                        placeholder="Bachelor's, Master's, etc."
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Field of Study</label>
                      <input
                        type="text"
                        value={edu.field || ''}
                        onChange={(e) => updateEducation(index, 'field', e.target.value)}
                        className="w-full px-3 py-2 bg-slate-600 rounded border border-slate-500 text-white"
                        placeholder="Computer Science, Business, etc."
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Start Date</label>
                        <input
                          type="month"
                          value={edu.startDate || ''}
                          onChange={(e) => updateEducation(index, 'startDate', e.target.value)}
                          className="w-full px-3 py-2 bg-slate-600 rounded border border-slate-500 text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">End Date</label>
                        <input
                          type="month"
                          value={edu.endDate || ''}
                          onChange={(e) => updateEducation(index, 'endDate', e.target.value)}
                          className="w-full px-3 py-2 bg-slate-600 rounded border border-slate-500 text-white"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Description (Optional)</label>
                    <textarea
                      value={edu.description || ''}
                      onChange={(e) => updateEducation(index, 'description', e.target.value)}
                      rows={2}
                      className="w-full px-3 py-2 bg-slate-600 rounded border border-slate-500 text-white"
                      placeholder="Relevant coursework, achievements, etc."
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-6 bg-slate-700 rounded-lg">
                <p className="text-slate-400 mb-2">No education items added yet</p>
                <button
                  onClick={addEducation}
                  className="bg-amber-500 hover:bg-amber-600 text-black py-2 px-4 rounded-lg inline-flex items-center"
                >
                  <Plus size={16} className="mr-1" /> Add Education
                </button>
              </div>
            )}
          </div>
        );

      case 'experience':
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Work Experience</h3>
              <button
                onClick={addExperience}
                className="bg-slate-700 hover:bg-slate-600 text-white py-1 px-3 rounded-lg flex items-center text-sm"
              >
                <Plus size={16} className="mr-1" /> Add Experience
              </button>
            </div>

            {/* Experience Items */}
            {data.length > 0 ? (
              data.map((exp: any, index: number) => (
                <div key={index} className="mb-6 p-4 bg-slate-700 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-medium text-slate-200">Experience #{index + 1}</h4>
                    <button
                      onClick={() => removeExperience(index)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Company/Organization</label>
                      <input
                        type="text"
                        value={exp.company || ''}
                        onChange={(e) => updateExperience(index, 'company', e.target.value)}
                        className="w-full px-3 py-2 bg-slate-600 rounded border border-slate-500 text-white"
                        placeholder="Company Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Position/Title</label>
                      <input
                        type="text"
                        value={exp.position || ''}
                        onChange={(e) => updateExperience(index, 'position', e.target.value)}
                        className="w-full px-3 py-2 bg-slate-600 rounded border border-slate-500 text-white"
                        placeholder="Software Engineer, Project Manager, etc."
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Location</label>
                      <input
                        type="text"
                        value={exp.location || ''}
                        onChange={(e) => updateExperience(index, 'location', e.target.value)}
                        className="w-full px-3 py-2 bg-slate-600 rounded border border-slate-500 text-white"
                        placeholder="City, Country or Remote"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Start Date</label>
                        <input
                          type="month"
                          value={exp.startDate || ''}
                          onChange={(e) => updateExperience(index, 'startDate', e.target.value)}
                          className="w-full px-3 py-2 bg-slate-600 rounded border border-slate-500 text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">End Date</label>
                        <div className="flex flex-col">
                          <input
                            type="month"
                            value={exp.endDate || ''}
                            onChange={(e) => updateExperience(index, 'endDate', e.target.value)}
                            className="w-full px-3 py-2 bg-slate-600 rounded border border-slate-500 text-white"
                            disabled={exp.current}
                          />
                          <div className="flex items-center mt-1">
                            <input
                              type="checkbox"
                              id={`current-${index}`}
                              checked={exp.current || false}
                              onChange={(e) => updateExperience(index, 'current', e.target.checked)}
                              className="mr-2"
                            />
                            <label htmlFor={`current-${index}`} className="text-sm text-slate-300">
                              Current Position
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievements/Responsibilities */}
                  <div className="mb-2">
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-sm font-medium text-slate-300">Key Achievements/Responsibilities</label>
                      <button
                        onClick={() => addAchievement(index)}
                        className="text-amber-500 hover:text-amber-400 text-sm flex items-center"
                      >
                        <Plus size={14} className="mr-1" /> Add
                      </button>
                    </div>
                    {exp.achievements && exp.achievements.length > 0 ? (
                      exp.achievements.map((achievement: string, achieveIndex: number) => (
                        <div key={achieveIndex} className="flex items-start mb-2">
                          <input
                            type="text"
                            value={achievement}
                            onChange={(e) => updateAchievement(index, achieveIndex, e.target.value)}
                            className="flex-grow px-3 py-2 bg-slate-600 rounded-l border border-slate-500 text-white"
                            placeholder="Developed a feature that increased conversion by 20%"
                          />
                          <button
                            onClick={() => removeAchievement(index, achieveIndex)}
                            className="bg-slate-600 hover:bg-slate-500 text-white p-2 rounded-r border border-l-0 border-slate-500"
                          >
                            <Minus size={16} />
                          </button>
                        </div>
                      ))
                    ) : (
                      <button
                        onClick={() => addAchievement(index)}
                        className="w-full py-2 px-3 bg-slate-600 border border-dashed border-slate-500 rounded text-slate-400 hover:bg-slate-500 hover:text-white"
                      >
                        Add key responsibilities or achievements
                      </button>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-6 bg-slate-700 rounded-lg">
                <p className="text-slate-400 mb-2">No experience items added yet</p>
                <button
                  onClick={addExperience}
                  className="bg-amber-500 hover:bg-amber-600 text-black py-2 px-4 rounded-lg inline-flex items-center"
                >
                  <Plus size={16} className="mr-1" /> Add Experience
                </button>
              </div>
            )}
          </div>
        );

      case 'projects':
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Projects</h3>
              <button
                onClick={addProject}
                className="bg-slate-700 hover:bg-slate-600 text-white py-1 px-3 rounded-lg flex items-center text-sm"
              >
                <Plus size={16} className="mr-1" /> Add Project
              </button>
            </div>

            {/* Project Items */}
            {data.length > 0 ? (
              data.map((project: any, index: number) => (
                <div key={index} className="mb-6 p-4 bg-slate-700 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-medium text-slate-200">Project #{index + 1}</h4>
                    <button
                      onClick={() => removeProject(index)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Project Title</label>
                      <input
                        type="text"
                        value={project.title || ''}
                        onChange={(e) => updateProject(index, 'title', e.target.value)}
                        className="w-full px-3 py-2 bg-slate-600 rounded border border-slate-500 text-white"
                        placeholder="E-commerce Platform, Portfolio Website, etc."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Project Link (Optional)</label>
                      <input
                        type="url"
                        value={project.link || ''}
                        onChange={(e) => updateProject(index, 'link', e.target.value)}
                        className="w-full px-3 py-2 bg-slate-600 rounded border border-slate-500 text-white"
                        placeholder="https://github.com/yourusername/project"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Technologies Used</label>
                      <input
                        type="text"
                        value={Array.isArray(project.technologies) ? project.technologies.join(', ') : ''}
                        onChange={(e) => updateProject(index, 'technologies', e.target.value)}
                        className="w-full px-3 py-2 bg-slate-600 rounded border border-slate-500 text-white"
                        placeholder="React, Node.js, MongoDB, etc. (comma-separated)"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Description</label>
                      <textarea
                        value={project.description || ''}
                        onChange={(e) => updateProject(index, 'description', e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 bg-slate-600 rounded border border-slate-500 text-white"
                        placeholder="Describe the project, your role, and significant achievements..."
                      />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-6 bg-slate-700 rounded-lg">
                <p className="text-slate-400 mb-2">No projects added yet</p>
                <button
                  onClick={addProject}
                  className="bg-amber-500 hover:bg-amber-600 text-black py-2 px-4 rounded-lg inline-flex items-center"
                >
                  <Plus size={16} className="mr-1" /> Add Project
                </button>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return renderForm();
};

export default ResumeForm;