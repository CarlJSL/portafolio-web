import React from 'react';
import { Smartphone, Database, Layers, Navigation, Code2 } from 'lucide-react';
import { FlutterSkillCategory } from '../types/flutter';

export const flutterSkills: FlutterSkillCategory[] = [
  {
    category: "Core Mobile Development",
    description: "Framework & Language",
    skills: ["Flutter 3.x", "Dart (Null Safety)", "Material Design 3", "Adaptive UI"],
    icon: React.createElement(Smartphone, { className: "w-6 h-6" }),
    color: "blue"
  },
  {
    category: "State Management",
    description: "Reactive & Declarative",
    skills: ["Riverpod 2.0", "BLoC Pattern", "Provider", "Change Notifier"],
    icon: React.createElement(Layers, { className: "w-6 h-6" }),
    color: "emerald"
  },
  {
    category: "Data & Persistence",
    description: "Offline-First Architecture",
    skills: ["Drift (SQLite)", "Type-Safe Queries", "Migration Management", "Reactive Streams"],
    icon: React.createElement(Database, { className: "w-6 h-6" }),
    color: "violet"
  },
  {
    category: "Navigation & Routing",
    description: "Deep Linking Ready",
    skills: ["GoRouter", "Deep Links", "Redirection Logic", "Route Guards"],
    icon: React.createElement(Navigation, { className: "w-6 h-6" }),
    color: "cyan"
  },
  {
    category: "Architecture & Patterns",
    description: "Clean & Scalable",
    skills: ["Clean Architecture", "SOLID Principles", "Feature-First Structure", "Dependency Injection"],
    icon: React.createElement(Code2, { className: "w-6 h-6" }),
    color: "amber"
  }
];
