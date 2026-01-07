import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { PersonalInfo } from '../../types';

interface FooterProps {
  personalInfo: PersonalInfo;
}

export const Footer: React.FC<FooterProps> = ({ personalInfo }) => {
  return (
    <footer id="contacto" className="bg-slate-900 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">¿Tienes un proyecto en mente?</h2>
        <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
          Estoy disponible para oportunidades como Freelance o contrato directo. 
          Ayudo a empresas a construir soluciones escalables y modernas.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
          <a 
            href={`mailto:${personalInfo.email}`} 
            className="flex items-center gap-3 px-6 py-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors w-full md:w-auto border border-slate-700"
          >
            <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400">
              <Mail size={20} />
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-400">Envíame un correo</p>
              <p className="text-sm font-semibold text-white">{personalInfo.email}</p>
            </div>
          </a>
          
          <a 
            href={`https://wa.me/${personalInfo.phone.replace(/[\s\+]/g, '')}`} 
            className="flex items-center gap-3 px-6 py-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors w-full md:w-auto border border-slate-700"
          >
            <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-400">
              <Phone size={20} />
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-400">Llamar / WhatsApp</p>
              <p className="text-sm font-semibold text-white">{personalInfo.phone}</p>
            </div>
          </a>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Carlos Sipan. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
