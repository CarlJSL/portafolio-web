import React from 'react';
import { Server, Smartphone } from 'lucide-react';
import { Project } from '../types';

export const projects: Project[] = [
  {
    title: "TaskFlow - App de Gestión de Productividad",
    tech: ["Flutter 3.9.2", "BLoC Pattern", "Firebase Auth", "Cloud Firestore", "Material Design 3", "Drag & Drop"],
    description: "App multiplataforma de gestión de tareas y notas con arquitectura BLoC y Firebase. Incluye tablero Kanban interactivo con drag & drop nativo, sincronización en tiempo real, dashboard con métricas, sistema de autenticación completo, 4 niveles de prioridad y gestión avanzada de estados. ~3,500 líneas de código con Repository Pattern y Streams reactivos.",
    color: "bg-purple-600",
    icon: React.createElement(Smartphone, { size: 24 }),
    isMobile: true,
    images: [
      "images/taskflow-1.jpg",
      "images/taskflow-2.jpg",
      "images/taskflow-3.jpg",
      "images/taskflow-4.jpg",
      "images/taskflow-5.jpg"
    ],
    githubUrl: "https://github.com/CarlJSL/taskflow.git"
  },
  {
    title: "Sistema Académico Integral",
    tech: ["Flutter 3.9", "Firebase", "BLoC Pattern", "Cloud Firestore", "Material Design 3"],
    description: "Sistema completo de gestión académica multiplataforma con autenticación Firebase. Dashboard analítico en tiempo real con 15+ métricas estadísticas. CRUD completo para estudiantes, profesores y cursos. Incluye cálculos automáticos de IMC, promedios académicos, validaciones robustas y exportación de reportes CSV.",
    color: "bg-emerald-600",
    icon: React.createElement(Smartphone, { size: 24 }),
    isMobile: true,
    images: [
      "images/alumnosipan-1.jpg",
      "images/alumnosipan-2.jpg",
      "images/alumnosipan-3.jpg",
      "images/alumnosipan-4.jpg",
      "images/alumnosipan-5.jpg"
    ],
    githubUrl: "https://github.com/CarlJSL/sistemaIntegral.git"
  },
  {
    title: "Sistema ERP/CRM Empresarial con Jmix",
    tech: ["Java 17+", "Spring Boot 3.5.6", "Jmix 2.6.2", "Vaadin Flow", "MySQL", "Liquibase"],
    description: "Sistema integral de planificación de recursos empresariales y gestión de relaciones con clientes. Incluye módulos CRM (Leads, Oportunidades, Actividades), gestión completa de ventas con cálculo automático de IGV/descuentos, catálogos de productos, clientes y proveedores. Control de acceso basado en roles, exportación a Excel/PDF y sistema multiidioma.",
    color: "bg-blue-600",
    icon: React.createElement(Server, { size: 24 }),
    images: [
      "images/erp-1.png",
      "images/erp-2.png",
      "images/erp-3.png"
    ],
    githubUrl: "https://github.com/CarlJSL"
  },
  {
    title: "Sistema de Gestión Ágil Scrum - MVP",
    tech: ["Java 17+", "Spring Boot", "Jmix 2.6.2", "Vaadin Flow 24.7", "React 18.3 + TypeScript", "MySQL"],
    description: "Sistema empresarial completo para gestión de proyectos bajo metodología Scrum. Módulo destacado de Historias de Usuario con vista Kanban interactiva, 4 estados (En Progreso, En Revisión, Terminada, Cancelada), sistema de priorización inteligente, tracking de progreso automático con validaciones robustas, gestión de épicas y tareas. Incluye dashboard con métricas en tiempo real, Chart.js/ECharts y FullCalendar.",
    color: "bg-orange-600",
    icon: React.createElement(Server, { size: 24 }),
    images: [
      "images/scrum-1.jpg",
      "images/scrum-2.jpg",
      "images/scrum-3.jpg",
      "images/scrum-4.jpg"
    ],
    githubUrl: "https://github.com/CarlJSL"
  },
  {
    title: "E-Commerce Moda y Salud",
    tech: ["PHP 8.2", "PostgreSQL 15", "TailwindCSS 4.1", "Docker", "DomPDF", "OOP"],
    description: "Plataforma web moderna de comercio electrónico especializada en productos de moda y salud. Dashboard administrativo completo con autenticación, gestión de productos/categorías, sistema de usuarios con roles, seguimiento de órdenes, análisis de ventas con reportes estadísticos y generación automática de facturas PDF. Arquitectura dockerizada con PHP OOP, PostgreSQL y diseño responsive con Tailwind.",
    color: "bg-teal-600",
    icon: React.createElement(Server, { size: 24 }),
    images: [
      "images/ecommerce-1.jpg",
      "images/ecommerce-2.jpg",
      "images/ecommerce-3.jpg",
      "images/ecommerce-4.jpg"
    ],
    githubUrl: "https://github.com/CarlJSL/modasalud-web.git"
  }
];
