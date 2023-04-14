import "./AppContent.scss";
import AboutSection from "./AboutSection/AboutSection";
import HomeSection from "./HomeSection/HomeSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import { RefObject } from "react";

type Props = {
  sections: { [id: string]: { ref: RefObject<HTMLElement> } };
};

export default function AppContent({ sections }: Props) {
  return (
    <div className="app-content">
      <HomeSection ref={sections.home.ref} />
      <ProjectsSection ref={sections.projects.ref} />
      <AboutSection ref={sections.about.ref} />
    </div>
  );
}
