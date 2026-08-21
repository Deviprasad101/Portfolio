import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ProfessionalExperience } from './components/ProfessionalExperience';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';

function App() {
  return (
    <div className="w-full min-h-screen bg-[#070B14] text-[#F8FAFC] selection:bg-[#3B82F6]/30 selection:text-[#06B6D4]">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProfessionalExperience />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}

export default App;