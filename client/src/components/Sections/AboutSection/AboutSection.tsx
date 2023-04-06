import "./AboutSection.scss";
import CompetenceSlider from "../../CompetenceSlider/CompetenceSlider";
import ContentRow from "../../UI/ContentRow/ContentRow";
import { useAppContext } from "../../../context/AppContext";
import SectionHeader from "../../SectionHeader/SectionHeader";
import JourneyCard from "../../../JourneyCard/JourneyCard";

type Props = {};

export default function AboutSection({}: Props) {
  const { sectionRefs } = useAppContext();

  return (
    <section
      className="app-content-section about-section"
      id="about"
      ref={sectionRefs.about}
    >
      <SectionHeader label="Get to know more about me" description="" />
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
      <JourneyCard className="about-section-journey" />
    </section>
  );
}
