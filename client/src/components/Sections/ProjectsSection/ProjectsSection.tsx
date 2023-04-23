import "./ProjectsSection.scss";
import SectionHeader from "../../SectionHeader/SectionHeader";
import ProjectCard from "../../ProjectCard/ProjectCard";
import { forwardRef } from "react";
import FadeInOnScroll from "../../UI/FadeInOnScroll/FadeInOnScroll";

import projects from "../../../assets/data/projects.json";

const ProjectsSection = forwardRef<HTMLElement>(({}, ref) => {
  return (
    <section className="projects-section" ref={ref} id="projects">
      <FadeInOnScroll>
        <SectionHeader
          label="Projects"
          description="Take a look at some of my latest projects"
        />
      </FadeInOnScroll>
      <div className="projects-section-list">
        {projects.map(({ name, description, imgSrc, href, hidden }) => {
          if (hidden) return "";
          return (
            <FadeInOnScroll key={name}>
              <ProjectCard
                className="projects-section-list-item"
                label={name}
                description={description}
                imgSrc={imgSrc}
                href={href}
              />
            </FadeInOnScroll>
          );
        })}
      </div>
    </section>
  );
});

export default ProjectsSection;
