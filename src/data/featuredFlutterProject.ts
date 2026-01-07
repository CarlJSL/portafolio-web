import React from 'react';
import { Smartphone } from 'lucide-react';
import { FeaturedProject } from '../types/flutter';

export const featuredFlutterProject: FeaturedProject = {
  title: "Offline-First Reactive Task Manager",
  tech: ["Flutter 3.x", "Riverpod 2.0", "Drift", "SQLite", "GoRouter"],
  description: "Aplicación móvil escalable diseñada con Clean Architecture. Implementa un flujo unidireccional de datos con Riverpod y persistencia local segura mediante Drift con estrategias de migración de base de datos. Cuenta con navegación profunda (Deep Links) y UI adaptativa.",
  color: "bg-blue-600",
  icon: React.createElement(Smartphone, { size: 24 }),
  featured: true,
  screenshots: [
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&q=80"
  ],
  architecture: [
    "Feature-First Structure",
    "Clean Architecture Layers",
    "Dependency Injection with Riverpod",
    "Repository Pattern"
  ],
  keyFeatures: [
    "🔄 Reactive state management con Riverpod 2.0",
    "💾 Persistencia type-safe con Drift (SQLite)",
    "🔗 Deep linking y navegación declarativa con GoRouter",
    "📱 UI adaptativa para múltiples dispositivos",
    "⚡ Sincronización offline-first con manejo de conflictos",
    "🎨 Material Design 3 con tema personalizado"
  ],
  githubUrl: "https://github.com/CarlJSL/flutter-task-manager",
  liveUrl: "#"
};
