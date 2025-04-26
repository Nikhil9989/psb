import React from 'react';
import { ResumeData } from './ResumeBuilder';
import { Mail, Phone, MapPin, Globe, Calendar, User, Award, Briefcase, Code, FileCheck } from 'lucide-react';

interface ResumePreviewProps {
  data: ResumeData;
  template: string;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ data, template }) => {
  // Function to render resume based on selected template
  const renderResume = () => {
    switch (template) {
      case 'modern':
        return renderModernTemplate();
      case 'classic':
        return renderClassicTemplate();
      case 'creative':
        return renderCreativeTemplate();
      case 'technical':
        return renderTechnicalTemplate();
      default:
        return renderModernTemplate();
    }
  };

  // Modern template
  const renderModernTemplate = () => {
    return (
      <div className="p-6 text-slate-800 text-xs h-full overflow-y-auto" style={{ maxHeight: '800px' }}>
        {/* Header */}
        <div className="border-b-2 border-amber-500 pb-4 mb-4">
          <h1 className="text-xl font-bold text-slate-900">{data.personal.name || 'Your Name'}</h1>
          <div className="flex flex-wrap gap-3 mt-2 text-slate-600">
            {data.personal.email && (
              <div className="flex items-center">
                <Mail size={12} className="mr-1" />
                {data.personal.email}
              </div>
            )}
            {data.personal.phone && (
              <div className="flex items-center">
                <Phone size={12} className="mr-1" />
                {data.personal.phone}
              </div>
            )}
            {data.personal.location && (
              <div className="flex items-center">
                <MapPin size={12} className="mr-1" />
                {data.personal.location}
              </div>
            )}
            {data.personal.website && (
              <div className="flex items-center">
                <Globe size={12} className="mr-1" />
                {data.personal.website}
              </div>
            )}
          </div>
        </div>

        {/* Summary */}
        {data.personal.summary && (
          <div className="mb-4">
            <h2 className="text-sm font-semibold text-amber-600 mb-2 flex items-center">
              <User size={14} className="mr-2" /> PROFESSIONAL SUMMARY
            </h2>
            <p className="text-slate-700">{data.personal.summary}</p>
          </div>
        )}

        {/* Skills */}
        {data.skills && data.skills.length > 0 && (
          <div className="mb-4">
            <h2 className="text-sm font-semibold text-amber-600 mb-2 flex items-center">
              <Award size={14} className="mr-2" /> SKILLS
            </h2>
            <div className="flex flex-wrap gap-1">
              {data.skills.map((skill, index) => (
                <span key={index} className="bg-slate-100 text-slate-700 px-2 py-1 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Experience */}
        {data.experience && data.experience.length > 0 && (
          <div className="mb-4">
            <h2 className="text-sm font-semibold text-amber-600 mb-3 flex items-center">
              <Briefcase size={14} className="mr-2" /> EXPERIENCE
            </h2>
            {data.experience.map((exp, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between">
                  <h3 className="font-semibold">{exp.position}</h3>
                  <div className="text-slate-500 flex items-center">
                    <Calendar size={10} className="mr-1" />
                    {exp.startDate && exp.startDate.substring(0, 7)} — {exp.current ? 'Present' : exp.endDate && exp.endDate.substring(0, 7)}
                  </div>
                </div>
                <div className="flex items-center text-slate-600 mb-1">
                  <span className="font-medium">{exp.company}</span>
                  {exp.location && (
                    <>
                      <span className="mx-1">•</span>
                      <span>{exp.location}</span>
                    </>
                  )}
                </div>
                {exp.achievements && exp.achievements.length > 0 && (
                  <ul className="list-disc list-inside text-slate-700 ml-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {data.education && data.education.length > 0 && (
          <div className="mb-4">
            <h2 className="text-sm font-semibold text-amber-600 mb-3 flex items-center">
              <Award size={14} className="mr-2" /> EDUCATION
            </h2>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between">
                  <h3 className="font-semibold">{edu.degree} {edu.field && `in ${edu.field}`}</h3>
                  <div className="text-slate-500 flex items-center">
                    <Calendar size={10} className="mr-1" />
                    {edu.startDate && edu.startDate.substring(0, 7)} — {edu.endDate && edu.endDate.substring(0, 7)}
                  </div>
                </div>
                <div className="text-slate-600 mb-1">{edu.institution}</div>
                {edu.description && <p className="text-slate-700">{edu.description}</p>}
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        {data.projects && data.projects.length > 0 && (
          <div className="mb-4">
            <h2 className="text-sm font-semibold text-amber-600 mb-3 flex items-center">
              <Code size={14} className="mr-2" /> PROJECTS
            </h2>
            {data.projects.map((project, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between">
                  <h3 className="font-semibold">{project.title}</h3>
                  {project.link && (
                    <a href={project.link} className="text-amber-600 underline text-xs" target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  )}
                </div>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1 my-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-amber-100 text-amber-800 px-1.5 py-0.5 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                {project.description && <p className="text-slate-700">{project.description}</p>}
              </div>
            ))}
          </div>
        )}

        {/* Certifications */}
        {data.certifications && data.certifications.length > 0 && (
          <div className="mb-4">
            <h2 className="text-sm font-semibold text-amber-600 mb-3 flex items-center">
              <FileCheck size={14} className="mr-2" /> CERTIFICATIONS
            </h2>
            {data.certifications.map((cert, index) => (
              <div key={index} className="mb-2">
                <div className="flex justify-between">
                  <h3 className="font-semibold">{cert.name}</h3>
                  <div className="text-slate-500">{cert.date}</div>
                </div>
                <div className="text-slate-600">{cert.issuer}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Classic template
  const renderClassicTemplate = () => {
    return (
      <div className="p-6 text-slate-800 text-xs h-full overflow-y-auto" style={{ maxHeight: '800px' }}>
        {/* Header */}
        <div className="text-center mb-4 pb-4 border-b border-slate-300">
          <h1 className="text-xl font-bold uppercase tracking-wider text-slate-900 mb-1">
            {data.personal.name || 'Your Name'}
          </h1>
          <div className="flex flex-wrap justify-center gap-3 text-slate-600">
            {data.personal.email && (
              <div className="flex items-center">
                <Mail size={12} className="mr-1" />
                {data.personal.email}
              </div>
            )}
            {data.personal.phone && (
              <div className="flex items-center">
                <Phone size={12} className="mr-1" />
                {data.personal.phone}
              </div>
            )}
            {data.personal.location && (
              <div className="flex items-center">
                <MapPin size={12} className="mr-1" />
                {data.personal.location}
              </div>
            )}
            {data.personal.website && (
              <div className="flex items-center">
                <Globe size={12} className="mr-1" />
                {data.personal.website}
              </div>
            )}
          </div>
        </div>

        {/* Summary */}
        {data.personal.summary && (
          <div className="mb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-2 border-b border-slate-300 pb-1">
              Professional Summary
            </h2>
            <p className="text-slate-700">{data.personal.summary}</p>
          </div>
        )}

        {/* Experience */}
        {data.experience && data.experience.length > 0 && (
          <div className="mb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-3 border-b border-slate-300 pb-1">
              Experience
            </h2>
            {data.experience.map((exp, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between">
                  <h3 className="font-bold">{exp.position}</h3>
                  <div className="text-slate-600">
                    {exp.startDate && exp.startDate.substring(0, 7)} — {exp.current ? 'Present' : exp.endDate && exp.endDate.substring(0, 7)}
                  </div>
                </div>
                <div className="text-slate-700 font-semibold mb-1">{exp.company}, {exp.location}</div>
                {exp.achievements && exp.achievements.length > 0 && (
                  <ul className="list-disc list-inside text-slate-700 ml-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {data.education && data.education.length > 0 && (
          <div className="mb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-3 border-b border-slate-300 pb-1">
              Education
            </h2>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between">
                  <h3 className="font-bold">{edu.degree} {edu.field && `in ${edu.field}`}</h3>
                  <div className="text-slate-600">
                    {edu.startDate && edu.startDate.substring(0, 7)} — {edu.endDate && edu.endDate.substring(0, 7)}
                  </div>
                </div>
                <div className="text-slate-700 font-semibold mb-1">{edu.institution}</div>
                {edu.description && <p className="text-slate-700">{edu.description}</p>}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {data.skills && data.skills.length > 0 && (
          <div className="mb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-2 border-b border-slate-300 pb-1">
              Skills
            </h2>
            <p className="text-slate-700">{data.skills.join(', ')}</p>
          </div>
        )}

        {/* Projects */}
        {data.projects && data.projects.length > 0 && (
          <div className="mb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-3 border-b border-slate-300 pb-1">
              Projects
            </h2>
            {data.projects.map((project, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between">
                  <h3 className="font-bold">{project.title}</h3>
                  {project.link && (
                    <a href={project.link} className="text-slate-600 underline text-xs" target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  )}
                </div>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="my-1 text-slate-700 italic">
                    Technologies: {project.technologies.join(', ')}
                  </div>
                )}
                {project.description && <p className="text-slate-700">{project.description}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Creative template
  const renderCreativeTemplate = () => {
    return (
      <div className="p-6 text-slate-800 text-xs h-full overflow-y-auto bg-indigo-50" style={{ maxHeight: '800px' }}>
        {/* Header */}
        <div className="mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-lg text-white">
          <h1 className="text-xl font-bold mb-2">{data.personal.name || 'Your Name'}</h1>
          <div className="flex flex-wrap gap-3">
            {data.personal.email && (
              <div className="flex items-center">
                <Mail size={12} className="mr-1" />
                {data.personal.email}
              </div>
            )}
            {data.personal.phone && (
              <div className="flex items-center">
                <Phone size={12} className="mr-1" />
                {data.personal.phone}
              </div>
            )}
            {data.personal.location && (
              <div className="flex items-center">
                <MapPin size={12} className="mr-1" />
                {data.personal.location}
              </div>
            )}
            {data.personal.website && (
              <div className="flex items-center">
                <Globe size={12} className="mr-1" />
                {data.personal.website}
              </div>
            )}
          </div>
        </div>

        {/* Summary */}
        {data.personal.summary && (
          <div className="mb-4 bg-white p-3 rounded-lg shadow-sm">
            <h2 className="text-sm font-semibold text-indigo-700 mb-2 flex items-center">
              <User size={14} className="mr-2" /> About Me
            </h2>
            <p className="text-slate-700">{data.personal.summary}</p>
          </div>
        )}

        {/* Skills */}
        {data.skills && data.skills.length > 0 && (
          <div className="mb-4 bg-white p-3 rounded-lg shadow-sm">
            <h2 className="text-sm font-semibold text-indigo-700 mb-2 flex items-center">
              <Award size={14} className="mr-2" /> Skills & Expertise
            </h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <span key={index} className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Experience */}
        {data.experience && data.experience.length > 0 && (
          <div className="mb-4 bg-white p-3 rounded-lg shadow-sm">
            <h2 className="text-sm font-semibold text-indigo-700 mb-3 flex items-center">
              <Briefcase size={14} className="mr-2" /> Work Experience
            </h2>
            {data.experience.map((exp, index) => (
              <div key={index} className="mb-3 border-l-2 border-indigo-300 pl-3">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-indigo-900">{exp.position}</h3>
                  <div className="text-indigo-500 bg-indigo-50 px-2 rounded text-xs">
                    {exp.startDate && exp.startDate.substring(0, 7)} — {exp.current ? 'Present' : exp.endDate && exp.endDate.substring(0, 7)}
                  </div>
                </div>
                <div className="text-slate-700 mb-1">{exp.company}, {exp.location}</div>
                {exp.achievements && exp.achievements.length > 0 && (
                  <ul className="list-disc list-inside text-slate-600 ml-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        {data.projects && data.projects.length > 0 && (
          <div className="mb-4 bg-white p-3 rounded-lg shadow-sm">
            <h2 className="text-sm font-semibold text-indigo-700 mb-3 flex items-center">
              <Code size={14} className="mr-2" /> Projects
            </h2>
            {data.projects.map((project, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-indigo-900">{project.title}</h3>
                  {project.link && (
                    <a href={project.link} className="text-indigo-600 underline text-xs bg-indigo-50 px-2 py-0.5 rounded" target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  )}
                </div>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1 my-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-purple-100 text-purple-800 px-1.5 py-0.5 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                {project.description && <p className="text-slate-600">{project.description}</p>}
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {data.education && data.education.length > 0 && (
          <div className="mb-4 bg-white p-3 rounded-lg shadow-sm">
            <h2 className="text-sm font-semibold text-indigo-700 mb-3 flex items-center">
              <Award size={14} className="mr-2" /> Education
            </h2>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-indigo-900">{edu.degree} {edu.field && `in ${edu.field}`}</h3>
                  <div className="text-indigo-500 bg-indigo-50 px-2 rounded text-xs">
                    {edu.startDate && edu.startDate.substring(0, 7)} — {edu.endDate && edu.endDate.substring(0, 7)}
                  </div>
                </div>
                <div className="text-slate-700 mb-1">{edu.institution}</div>
                {edu.description && <p className="text-slate-600">{edu.description}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Technical template
  const renderTechnicalTemplate = () => {
    return (
      <div className="p-6 text-slate-800 text-xs h-full overflow-y-auto" style={{ maxHeight: '800px' }}>
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-xl font-bold text-slate-900 mb-1">{data.personal.name || 'Your Name'}</h1>
            <div className="text-slate-600">
              {data.personal.summary && (
                <p className="max-w-xs">{data.personal.summary}</p>
              )}
            </div>
          </div>
          <div className="text-right">
            {data.personal.email && (
              <div className="flex items-center justify-end mb-1">
                <Mail size={12} className="mr-1" />
                {data.personal.email}
              </div>
            )}
            {data.personal.phone && (
              <div className="flex items-center justify-end mb-1">
                <Phone size={12} className="mr-1" />
                {data.personal.phone}
              </div>
            )}
            {data.personal.location && (
              <div className="flex items-center justify-end mb-1">
                <MapPin size={12} className="mr-1" />
                {data.personal.location}
              </div>
            )}
            {data.personal.website && (
              <div className="flex items-center justify-end mb-1">
                <Globe size={12} className="mr-1" />
                {data.personal.website}
              </div>
            )}
          </div>
        </div>

        {/* Two column layout */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left column */}
          <div className="w-full md:w-2/3">
            {/* Experience */}
            {data.experience && data.experience.length > 0 && (
              <div className="mb-6">
                <h2 className="text-sm font-bold text-cyan-800 mb-3 pb-1 border-b border-cyan-200">
                  PROFESSIONAL EXPERIENCE
                </h2>
                {data.experience.map((exp, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-slate-800">{exp.position}</h3>
                      <div className="text-xs bg-slate-100 px-2 py-0.5 rounded">
                        {exp.startDate && exp.startDate.substring(0, 7)} — {exp.current ? 'Present' : exp.endDate && exp.endDate.substring(0, 7)}
                      </div>
                    </div>
                    <div className="text-slate-700 mb-1 font-medium">{exp.company}, {exp.location}</div>
                    {exp.achievements && exp.achievements.length > 0 && (
                      <ul className="list-disc list-inside text-slate-700 ml-1 text-xs">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Projects */}
            {data.projects && data.projects.length > 0 && (
              <div className="mb-6">
                <h2 className="text-sm font-bold text-cyan-800 mb-3 pb-1 border-b border-cyan-200">
                  TECHNICAL PROJECTS
                </h2>
                {data.projects.map((project, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-slate-800">{project.title}</h3>
                      {project.link && (
                        <a href={project.link} className="text-cyan-700 underline text-xs" target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      )}
                    </div>
                    {project.description && <p className="text-slate-700 mb-1 text-xs">{project.description}</p>}
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-1">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-slate-100 px-1.5 py-0.5 text-xs rounded font-mono text-slate-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right column */}
          <div className="w-full md:w-1/3">
            {/* Skills */}
            {data.skills && data.skills.length > 0 && (
              <div className="mb-6">
                <h2 className="text-sm font-bold text-cyan-800 mb-3 pb-1 border-b border-cyan-200">
                  TECHNICAL SKILLS
                </h2>
                <div className="flex flex-wrap gap-1">
                  {data.skills.map((skill, index) => (
                    <div key={index} className="bg-slate-100 px-2 py-1 rounded text-slate-800 mb-1 w-full">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education */}
            {data.education && data.education.length > 0 && (
              <div className="mb-6">
                <h2 className="text-sm font-bold text-cyan-800 mb-3 pb-1 border-b border-cyan-200">
                  EDUCATION
                </h2>
                {data.education.map((edu, index) => (
                  <div key={index} className="mb-3">
                    <h3 className="font-bold text-slate-800">{edu.degree}</h3>
                    <div className="text-slate-700 mb-1">{edu.field}</div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">{edu.institution}</span>
                      <span className="text-xs text-slate-500">
                        {edu.startDate && edu.startDate.substring(0, 4)} — {edu.endDate && edu.endDate.substring(0, 4)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Certifications */}
            {data.certifications && data.certifications.length > 0 && (
              <div className="mb-6">
                <h2 className="text-sm font-bold text-cyan-800 mb-3 pb-1 border-b border-cyan-200">
                  CERTIFICATIONS
                </h2>
                {data.certifications.map((cert, index) => (
                  <div key={index} className="mb-2">
                    <div className="font-bold text-slate-800">{cert.name}</div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">{cert.issuer}</span>
                      <span className="text-xs text-slate-500">{cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full bg-white">
      {renderResume()}
    </div>
  );
};

export default ResumePreview;
