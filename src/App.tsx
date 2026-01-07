import React from 'react';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { personalInfo } from './data/personalInfo';
import { skills } from './data/skills';
import { experience } from './data/experience';
import { projects } from './data/projects';
import { navItems } from './data/navigation';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-blue-500 selection:text-white">
      <Navigation items={navItems} />
      <HeroSection personalInfo={personalInfo} />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} githubUrl={personalInfo.github} />
      <ExperienceSection experience={experience} />
      <Footer personalInfo={personalInfo} />
    </div>
  );
};

export default App;
