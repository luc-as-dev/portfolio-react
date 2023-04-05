import "./ProjectsSection.scss";
import { useAppContext } from "../../context/AppContext";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import quizMultiplayerGameImg from "../../assets/projects/quiz-multiplayer-game.png";
import kanbanImg from "../../assets/projects/kanban.png";
import spotifyCloneImg from "../../assets/projects/spotify-clone.png";

type Props = {};

export default function ProjectsSection({}: Props) {
  const { sectionRefs } = useAppContext();

  return (
    <section
      className="projects-section"
      id="projects"
      ref={sectionRefs.projects}
    >
      <div className="projects-section-list">
        <ProjectCard
          className="projects-section-list-item"
          background={
            <img
              className="projects-section-list-item-img"
              src={quizMultiplayerGameImg}
            />
          }
          label="Quiz Multiplayer Game"
          href="https://quiz-multiplayer-game.netlify.app/"
        />
        <ProjectCard
          className="projects-section-list-item"
          background={
            <img className="projects-section-list-item-img" src={kanbanImg} />
          }
          label="Kanban Board"
          href="https://luc-as-dev-kanban-board.netlify.app/"
        />
        <ProjectCard
          className="projects-section-list-item"
          background={
            <img
              className="projects-section-list-item-img"
              src={spotifyCloneImg}
            />
          }
          label="Spotify Clone"
          href=""
        />
      </div>
    </section>
  );
}
