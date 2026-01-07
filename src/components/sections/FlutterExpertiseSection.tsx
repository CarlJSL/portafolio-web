import React from 'react';
import { FlutterSkillCategory } from '../../types/flutter';
import { SectionHeader } from '../common/SectionHeader';
import { Badge } from '../common/Badge';

interface FlutterExpertiseSectionProps {
  skills: FlutterSkillCategory[];
}

const colorMap = {
  blue: 'from-blue-500 to-indigo-600',
  emerald: 'from-emerald-500 to-teal-600',
  violet: 'from-violet-500 to-purple-600',
  cyan: 'from-cyan-500 to-blue-600',
  amber: 'from-amber-500 to-orange-600'
};

const iconColorMap = {
  blue: 'text-blue-400 group-hover:text-blue-300',
  emerald: 'text-emerald-400 group-hover:text-emerald-300',
  violet: 'text-violet-400 group-hover:text-violet-300',
  cyan: 'text-cyan-400 group-hover:text-cyan-300',
  amber: 'text-amber-400 group-hover:text-amber-300'
};

export const FlutterExpertiseSection: React.FC<FlutterExpertiseSectionProps> = ({ skills }) => {
  return (
    <section id="flutter-expertise" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header con badge destacado */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span className="text-blue-400 font-semibold text-sm">Flutter Developer Specialist</span>
          </div>
        </div>

        <SectionHeader 
          title="Flutter Technical Expertise" 
          subtitle="Arquitectura móvil escalable con enfoque en Clean Architecture y patrones reactivos"
        />

        {/* Grid de categorías de habilidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skills.map((skillCategory, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${colorMap[skillCategory.color as keyof typeof colorMap]} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Decorative corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${colorMap[skillCategory.color as keyof typeof colorMap]} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`}></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-12 h-12 bg-slate-900/80 rounded-xl flex items-center justify-center mb-4 ${iconColorMap[skillCategory.color as keyof typeof iconColorMap]} transition-colors border border-slate-700/50 group-hover:border-slate-600`}>
                  {skillCategory.icon}
                </div>

                {/* Category title */}
                <h3 className="text-lg font-bold text-white mb-1">
                  {skillCategory.category}
                </h3>
                
                {/* Description */}
                <p className="text-slate-400 text-sm mb-4 font-medium">
                  {skillCategory.description}
                </p>

                {/* Skills list */}
                <div className="flex flex-wrap gap-2">
                  {skillCategory.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-900/60 text-slate-300 text-xs font-medium rounded-lg border border-slate-700/50 hover:border-slate-600 hover:text-white transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical highlights banner */}
        <div className="mt-12 p-6 bg-gradient-to-r from-blue-900/20 to-violet-900/20 rounded-2xl border border-blue-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <div>
                <h4 className="text-white font-bold">Enfoque en Calidad</h4>
                <p className="text-slate-400 text-sm">Clean Architecture • SOLID • Testing • CI/CD</p>
              </div>
            </div>
            <div className="flex gap-3 flex-wrap justify-center">
              <Badge variant="primary">Type-Safe</Badge>
              <Badge variant="primary">Reactive</Badge>
              <Badge variant="primary">Offline-First</Badge>
              <Badge variant="primary">Scalable</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
