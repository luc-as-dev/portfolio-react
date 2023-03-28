import "./AboutSection.scss";
import CompetenceSlider from "../../components/CompetenceSlider/CompetenceSlider";
import ContentRow from "../../components/UI/ContentRow/ContentRow";

type Props = {};

export default function AboutSection({}: Props) {
  return (
    <section className="app-content-section about-section" id="about">
      <ContentRow>
        <CompetenceSlider className="about-section-competence-slider" />
      </ContentRow>
    </section>
  );
}
