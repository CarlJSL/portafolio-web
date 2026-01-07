import React from 'react';
import { Github, ExternalLink, Code2, Layers } from 'lucide-react';
import { FeaturedProject } from '../../types/flutter';
import { Badge } from '../common/Badge';
import { ImageCarousel } from '../common/ImageCarousel';

interface FeaturedProjectSectionProps {
  project: FeaturedProject;
}

export const FeaturedProjectSection: React.FC<FeaturedProjectSectionProps> = ({ project }) => {
  return (
    <section id="featured-project" className="py-20 px-4 bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-violet-500/10 border border-blue-500/30 rounded-full mb-6">
            <span className="text-2xl">⭐</span>
            <span className="text-blue-400 font-semibold text-sm">Featured Project</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proyecto Destacado de Flutter
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Caso de estudio técnico: Implementación completa de Clean Architecture con Riverpod y Drift
          </p>
        </div>

        {/* Main project card */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: Screenshots carousel */}
            <div className="relative h-[400px] md:h-auto bg-slate-900">
              <ImageCarousel 
                images={project.screenshots || project.images || []} 
                alt={project.title}
              />
              {/* Overlay gradient for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent md:hidden"></div>
            </div>

            {/* Right: Project details */}
            <div className="p-8 md:p-10 flex flex-col">
              {/* Project icon and title */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/30">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="info">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Architecture highlights */}
              {project.architecture && (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Code2 size={18} className="text-violet-400" />
                    <h4 className="text-white font-semibold text-sm">Arquitectura</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {project.architecture.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                        <span className="text-emerald-500">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key features */}
              {project.keyFeatures && (
                <div className="mb-6 flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Layers size={18} className="text-blue-400" />
                    <h4 className="text-white font-semibold text-sm">Características Clave</h4>
                  </div>
                  <ul className="space-y-2">
                    {project.keyFeatures.map((feature, i) => (
                      <li key={i} className="text-slate-300 text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action buttons */}
              <div className="flex gap-4 pt-6 border-t border-slate-700/50">
                <a
                  href={project.githubUrl || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-medium transition-all border border-slate-700 hover:border-slate-600"
                >
                  <Github size={18} />
                  Ver Código
                </a>
                <a
                  href={project.liveUrl || "#"}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all"
                >
                  <ExternalLink size={18} />
                  Demo Live
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Technical notes banner */}
        <div className="mt-8 p-6 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-3 text-slate-300">
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <span className="text-xl">💡</span>
              </div>
              <div>
                <p className="font-semibold text-white">Nota Técnica</p>
                <p className="text-sm text-slate-400">
                  Este proyecto demuestra dominio completo del ecosistema Flutter moderno
                </p>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-lg border border-emerald-500/30">
                Production Ready
              </span>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-lg border border-blue-500/30">
                Clean Code
              </span>
              <span className="px-3 py-1 bg-violet-500/10 text-violet-400 text-xs font-semibold rounded-lg border border-violet-500/30">
                Well Tested
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
