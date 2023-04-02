import "./ProjectsSection.scss";
import QuizGame from "../../components/QuizGame/QuizGame";
import ContentRow from "../../components/UI/ContentRow/ContentRow";
import { useAppContext } from "../../context/AppContext";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

type Props = {};

export default function ProjectsSection({}: Props) {
  const { sectionRefs } = useAppContext();

  return (
    <section
      className="projects-section"
      id="projects"
      ref={sectionRefs.projects}
    >
      {/*
        <ContentRow>
          <QuizGame localStorageKey="quiz-client-1" />
          <QuizGame localStorageKey="quiz-client-2" />
        </ContentRow>
      */}

      <div className="projects-section-list">
        <ProjectCard
          className="projects-section-list-item"
          background={<div style={{ background: "#1647a3" }}></div>}
          label="Quiz Multiplayer Game"
          href="https://quiz-multiplayer-game.netlify.app/"
        />
        <ProjectCard
          className="projects-section-list-item"
          background={<div style={{ background: "#20212c" }}></div>}
          label="Kanban Board"
          href="https://luc-as-dev-kanban-board.netlify.app/"
        />
        <ProjectCard
          className="projects-section-list-item"
          background={<div style={{ background: "#121212" }}></div>}
          label="Spotify Clone"
          href=""
        />
      </div>
    </section>
  );
}
