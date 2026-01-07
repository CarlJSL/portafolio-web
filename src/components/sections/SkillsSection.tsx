import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Skill } from '../../types';
import { Card } from '../common/Card';
import { SectionHeader } from '../common/SectionHeader';

interface SkillsSectionProps {
  skills: Skill[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <section id="skills" className="py-20 bg-slate-950/50">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader 
          title="Habilidades Técnicas" 
          subtitle="Mi stack tecnológico para crear soluciones robustas"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="group">
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-900/20 transition-colors">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center text-slate-400 group-hover:text-slate-300">
                    <ChevronRight className="w-4 h-4 text-emerald-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
