import "./ProjectsSection.scss";
import SectionHeader from "../../SectionHeader/SectionHeader";
import ProjectCard from "../../ProjectCard/ProjectCard";
import { forwardRef } from "react";

import quizMultiplayerGameImg from "../../../assets/projects/quiz-multiplayer-game.png";
import kanbanImg from "../../../assets/projects/kanban.png";
import spotifyCloneImg from "../../../assets/projects/spotify-clone.png";

const ProjectsSection = forwardRef<HTMLElement>(({}, ref) => {
  return (
    <section className="projects-section" ref={ref} id="projects">
      <SectionHeader
        label="Projects"
        description="Take a look at some of my latest projects"
      />
      <div className="projects-section-list">
        <ProjectCard
          className="projects-section-list-item"
          imgSrc={quizMultiplayerGameImg}
          label="Quiz Multiplayer Game"
          description="A multiplayer quiz game built with React and Socket.io"
          href="https://quiz-multiplayer-game.netlify.app/"
        />
        <ProjectCard
          className="projects-section-list-item"
          imgSrc={kanbanImg}
          label="Kanban Board"
          description="A simple kanban board built with React and Sass"
          href="https://luc-as-dev-kanban-board.netlify.app/"
        />
        <ProjectCard
          className="projects-section-list-item"
          imgSrc={spotifyCloneImg}
          label="Spotify Clone"
          description="A Spotify clone built with React, Tailwind and Next.js"
          href=""
        />
      </div>
    </section>
  );
});

export default ProjectsSection;
