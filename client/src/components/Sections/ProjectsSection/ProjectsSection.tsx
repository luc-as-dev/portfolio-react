import "./ProjectsSection.scss";
import SectionHeader from "../../SectionHeader/SectionHeader";
import ProjectCard from "../../ProjectCard/ProjectCard";
import { forwardRef } from "react";
import FadeInOnScroll from "../../UI/FadeInOnScroll/FadeInOnScroll";

import quizMultiplayerGameImg from "/images/projects/quiz-multiplayer-game.png";
import kanbanImg from "/images/projects/kanban.png";
import spotifyCloneImg from "/images/projects/spotify-clone.png";

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
        <FadeInOnScroll>
          <ProjectCard
            className="projects-section-list-item"
            imgSrc={quizMultiplayerGameImg}
            label="Quiz Multiplayer Game"
            description="A multiplayer quiz game built with React and Socket.io"
            href="https://quiz-multiplayer-game.netlify.app/"
          />
        </FadeInOnScroll>
        <FadeInOnScroll>
          <ProjectCard
            className="projects-section-list-item"
            imgSrc={kanbanImg}
            label="Kanban Board"
            description="A simple kanban board built with React and Sass"
            href="https://luc-as-dev-kanban-board.netlify.app/"
          />
        </FadeInOnScroll>
        <FadeInOnScroll>
          <ProjectCard
            className="projects-section-list-item"
            imgSrc={spotifyCloneImg}
            label="Spotify Clone"
            description="A Spotify clone built with React, Tailwind and Next.js"
            href=""
          />
        </FadeInOnScroll>
      </div>
    </section>
  );
});

export default ProjectsSection;
