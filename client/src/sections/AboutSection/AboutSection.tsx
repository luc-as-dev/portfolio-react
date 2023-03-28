import "./AboutSection.scss";
import CompetenceSlider from "../../components/CompetenceSlider/CompetenceSlider";
import ContentRow from "../../components/UI/ContentRow/ContentRow";

type Props = {};

export default function AboutSection({}: Props) {
  return (
    <section className="app-content-section about-section" id="about">
      <ContentRow>
        {window.innerWidth > 800 ? (
          <CompetenceSlider
            className="about-section-competence-slider"
            perView={5}
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
