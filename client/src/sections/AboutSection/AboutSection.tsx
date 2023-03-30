import "./AboutSection.scss";
import CompetenceSlider from "../../components/CompetenceSlider/CompetenceSlider";
import ContentRow from "../../components/UI/ContentRow/ContentRow";
import { useAppContext } from "../../context/AppContext";

type Props = {};

export default function AboutSection({}: Props) {
  const { aboutSectionRef } = useAppContext();

  return (
    <section
      className="app-content-section about-section"
      id="about"
      ref={aboutSectionRef}
    >
      <ContentRow>
        {window.innerWidth > 800 ? (
          <CompetenceSlider
            className="about-section-competence-slider"
            perView={6}
          />
        ) : (
          <CompetenceSlider
            className="about-section-competence-slider"
            perView={2}
          />
        )}
      </ContentRow>
    </section>
  );
}
