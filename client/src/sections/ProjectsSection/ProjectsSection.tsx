import "./ProjectsSection.scss";
import QuizGame from "../../components/QuizGame/QuizGame";
import ContentRow from "../../components/UI/ContentRow/ContentRow";
import { useAppContext } from "../../context/AppContext";

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
      <div
        style={{
          background: "var(--app-content-bg)",
          height: "200px",
          borderRadius: "8px",
        }}
      ></div>
    </section>
  );
}
