import React from 'react';
import { Download } from 'lucide-react';
import { Experience } from '../../types';
import { SectionHeader } from '../common/SectionHeader';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

interface ExperienceSectionProps {
  experience: Experience[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
  return (
    <section id="experiencia" className="py-20 bg-slate-950/50 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="Experiencia Profesional" />

        <div className="space-y-12">
          {experience.map((job, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -ml-[1px]"></div>
              
              <div className={`md:flex items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
                <div className="hidden md:block w-5/12"></div>
                
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 -ml-[5px] md:-ml-[9px] mt-6 group-hover:scale-125 transition-transform"></div>
                
                <div className="w-full md:w-5/12 bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-all shadow-lg">
                  <Badge variant="success">{job.period}</Badge>
                  <h3 className="text-xl font-bold text-white mb-1 mt-2">{job.role}</h3>
                  <h4 className="text-blue-400 font-medium mb-3 flex items-center">
                    {job.company}
                  </h4>
                  <p className="text-slate-400 text-sm">
                    {job.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button icon={Download} variant="secondary">
            Descargar CV Completo
          </Button>
        </div>
      </div>
    </section>
  );
};
