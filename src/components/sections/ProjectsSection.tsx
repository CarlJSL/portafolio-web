import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../../types';
import { SectionHeader } from '../common/SectionHeader';
import { Badge } from '../common/Badge';
import { ImageCarousel } from '../common/ImageCarousel';

interface ProjectsSectionProps {
  projects: Project[];
  githubUrl: string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, githubUrl }) => {
  return (
    <section id="proyectos" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <SectionHeader title="Proyectos Destacados" align="left" />
          </div>
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="hidden md:flex items-center text-blue-400 hover:text-blue-300 transition-colors mt-4 md:mt-0"
          >
            Ver más en GitHub <ExternalLink size={16} className="ml-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all hover:-translate-y-1 hover:shadow-2xl flex flex-col h-full group"
            >
              {/* Image Carousel */}
              <ImageCarousel 
                images={project.images || []} 
                alt={project.title}
                isMobile={project.isMobile}
              />
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-lg bg-slate-900 ${index % 2 === 0 ? 'text-blue-400' : 'text-emerald-400'}`}>
                    {project.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="info">{tech}</Badge>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-slate-700 mt-auto">
                  <a 
                    href={project.githubUrl || "#"} 
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-700 text-white rounded-lg font-medium transition-all border border-slate-700"
                  >
                    <Github size={18} />
                    Ver Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300"
          >
            Ver más en GitHub <ExternalLink size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};
