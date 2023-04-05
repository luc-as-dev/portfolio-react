import "./ProjectsSection.scss";
import { useAppContext } from "../../context/AppContext";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import quizMultiplayerGameImg from "../../assets/projects/quiz-multiplayer-game.png";
import kanbanImg from "../../assets/projects/kanban.png";
import spotifyCloneImg from "../../assets/projects/spotify-clone.png";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

type Props = {};

export default function ProjectsSection({}: Props) {
  const { sectionRefs } = useAppContext();

  return (
    <section
      className="projects-section"
      id="projects"
      ref={sectionRefs.projects}
    >
      <SectionHeader
        label="Projects"
        description="Take a look at some of my projects"
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
}
