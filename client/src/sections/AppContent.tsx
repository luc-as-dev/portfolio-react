import "./AppContent.scss";
import AppCard from "../components/UI/AppCard/AppCard";
import AboutSection from "./AboutSection/AboutSection";
import ContactSection from "./ContactSection/ContactSection";
import HomeSection from "./HomeSection/HomeSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import { useEffect } from "react";

type Props = {};

export default function AppContent({}: Props) {
  return (
    <AppCard className="app-content">
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </AppCard>
  );
}
