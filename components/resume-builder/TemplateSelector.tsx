import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface Template {
  id: string;
  name: string;
  description: string;
}

interface TemplateSelectorProps {
  templates: Template[];
  selectedTemplate: string;
  onSelectTemplate: (id: string) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  templates,
  selectedTemplate,
  onSelectTemplate,
}) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Choose a Resume Template</h3>
      <p className="text-slate-300 mb-6">
        Select a template that best suits your professional style and target industry.
        You can preview how each template presents your information.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {templates.map((template) => (
          <motion.div
            key={template.id}
            className={`relative cursor-pointer overflow-hidden rounded-xl border-2 transition-all ${
              selectedTemplate === template.id
                ? 'border-amber-500 shadow-lg shadow-amber-500/20'
                : 'border-slate-600 hover:border-slate-500'
            }`}
            onClick={() => onSelectTemplate(template.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Template Preview */}
            <div className="aspect-[3/4] bg-slate-200 relative">
              {/* This would be a real preview in production */}
              <div className={`absolute inset-0 ${getTemplatePreviewClass(template.id)}`}>
                {/* Template preview elements */}
                <div className="h-12 mx-6 mt-6 bg-slate-700"></div>
                <div className="mx-6 mt-4 grid grid-cols-3 gap-2">
                  <div className="h-8 col-span-2 bg-slate-700"></div>
                  <div className="h-8 bg-slate-700"></div>
                </div>
                <div className="mx-6 mt-4 h-24 bg-slate-700"></div>
                <div className="mx-6 mt-4 h-4 bg-slate-700"></div>
                <div className="mx-6 mt-2 h-4 bg-slate-700"></div>
                <div className="mx-6 mt-2 h-4 bg-slate-700"></div>
                <div className="mx-6 mt-4 h-4 w-20 bg-slate-700"></div>
                <div className="mx-6 mt-4 h-16 bg-slate-700"></div>
                <div className="mx-6 mt-4 h-4 w-24 bg-slate-700"></div>
                <div className="mx-6 mt-4 h-16 bg-slate-700"></div>
              </div>
            </div>

            {/* Template Info */}
            <div className="p-4 bg-slate-700">
              <div className="flex justify-between items-center">
                <h4 className="font-medium text-white">{template.name}</h4>
                {selectedTemplate === template.id && (
                  <span className="rounded-full bg-amber-500 p-1">
                    <Check size={14} className="text-black" />
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-300 mt-1">{template.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => onSelectTemplate(selectedTemplate)}
          className="bg-amber-500 hover:bg-amber-600 text-black font-semibold py-2 px-6 rounded-lg"
        >
          Continue with {templates.find(t => t.id === selectedTemplate)?.name} Template
        </button>
      </div>
    </div>
  );
};

// Helper function to get different styling for each template preview
function getTemplatePreviewClass(templateId: string): string {
  switch (templateId) {
    case 'modern':
      return 'bg-gradient-to-br from-slate-50 to-slate-200';
    case 'classic':
      return 'bg-gradient-to-br from-amber-50 to-amber-100';
    case 'creative':
      return 'bg-gradient-to-br from-indigo-50 to-purple-100';
    case 'technical':
      return 'bg-gradient-to-br from-cyan-50 to-blue-100';
    default:
      return 'bg-white';
  }
}

export default TemplateSelector;
