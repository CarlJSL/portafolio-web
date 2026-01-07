import React from 'react';
import { Server, Code2, Database, Terminal, Smartphone, Layers } from 'lucide-react';
import { Skill } from '../types';

export const skills: Skill[] = [
  { 
    category: "Mobile Development", 
    icon: React.createElement(Smartphone, { className: "w-6 h-6" }), 
    items: ["Flutter 3.x", "Dart", "Material Design 3", "Adaptive UI", "iOS & Android"] 
  },
  { 
    category: "State Management & Architecture", 
    icon: React.createElement(Layers, { className: "w-6 h-6" }), 
    items: ["Riverpod 2.0", "BLoC Pattern", "Clean Architecture", "SOLID Principles", "Feature-First"] 
  },
  { 
    category: "Backend", 
    icon: React.createElement(Server, { className: "w-6 h-6" }), 
    items: ["Java", "Spring Boot", "NestJS", "Express", "NodeJS", "PHP", "Python"] 
  },
  { 
    category: "Frontend", 
    icon: React.createElement(Code2, { className: "w-6 h-6" }), 
    items: ["React", "Angular", "JavaScript", "TypeScript", "Jmix"] 
  },
  { 
    category: "Base de Datos & Persistencia", 
    icon: React.createElement(Database, { className: "w-6 h-6" }), 
    items: ["Drift (SQLite)", "PostgreSQL", "SQL Server", "MySQL", "MongoDB", "Offline-First"] 
  },
  { 
    category: "DevOps & Herramientas", 
    icon: React.createElement(Terminal, { className: "w-6 h-6" }), 
    items: ["GoRouter", "Deep Links", "Docker", "Git/GitHub", "Postman", "Cloud Computing", "Scrum"] 
  }
];
