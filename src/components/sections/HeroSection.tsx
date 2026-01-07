import React from 'react';
import { Mail, Github, Linkedin, Code2, Database } from 'lucide-react';
import { PersonalInfo } from '../../types';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

interface HeroSectionProps {
  personalInfo: PersonalInfo;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ personalInfo }) => {
  return (
    <section id="inicio" className="pt-32 pb-20 md:pt-40 md:pb-28 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <Badge variant="primary">Disponible para trabajar</Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight mt-4">
              Hola, soy <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Carlos Sipan
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              {personalInfo.summary}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button as="a" href="#contacto" icon={Mail} variant="primary" size="lg">
                Contáctame
              </Button>
              <Button 
                as="a" 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer" 
                icon={Github} 
                variant="secondary" 
                size="lg"
              >
                GitHub
              </Button>
              <Button 
                as="a" 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                icon={Linkedin} 
                variant="secondary" 
                size="lg"
              >
                LinkedIn
              </Button>
            </div>
          </div>
          
          {/* Visual Abstract Decoration */}
          <div className="flex-1 flex justify-center relative">
            <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tr from-blue-600 to-emerald-500 rounded-full blur-3xl opacity-20 absolute animate-pulse"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-slate-800 rounded-2xl rotate-3 border border-slate-700 flex items-center justify-center shadow-2xl z-10 hover:rotate-0 transition-all duration-500">
              <div className="text-center p-6">
                <Code2 className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Flutter & Full Stack</h3>
                <p className="text-slate-400">Riverpod • Clean Architecture</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-slate-900 rounded-2xl -rotate-6 border border-slate-700 flex items-center justify-center shadow-xl z-20">
              <div className="text-center">
                <Database className="w-12 h-12 text-emerald-400 mx-auto mb-2" />
                <p className="font-bold text-white">Mobile First</p>
                <p className="text-slate-400 text-xs">Drift • SQLite</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
