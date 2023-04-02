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
      {false && (
        <ContentRow>
          <QuizGame localStorageKey="quiz-client-1" />
          <QuizGame localStorageKey="quiz-client-2" />
        </ContentRow>
      )}
      <ContentRow className="projects-section-row">
        <ProjectCard
          className="projects-section-row-card"
          background={<div style={{ background: "#1647a3" }}></div>}
          label="Quiz Multiplayer Game"
          href="https://quiz-multiplayer-game.netlify.app/"
        />
        <ProjectCard
          className="projects-section-row-card"
          background={<div style={{ background: "#20212c" }}></div>}
          label="Kanban Board"
          href="https://luc-as-dev-kanban-board.netlify.app/"
        />
      </ContentRow>
    </section>
  );
}
