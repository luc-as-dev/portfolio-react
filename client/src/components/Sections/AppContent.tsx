import "./AppContent.scss";
import AboutSection from "./AboutSection/AboutSection";
import ContactSection from "./ContactSection/ContactSection";
import HomeSection from "./HomeSection/HomeSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";

export default function AppContent() {
  return (
    <div className="app-content">
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
