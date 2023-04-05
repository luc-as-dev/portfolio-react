import "./AboutSection.scss";
import CompetenceSlider from "../../components/CompetenceSlider/CompetenceSlider";
import ContentRow from "../../components/UI/ContentRow/ContentRow";
import { useAppContext } from "../../context/AppContext";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

type Props = {};

export default function AboutSection({}: Props) {
  const { sectionRefs } = useAppContext();

  return (
    <section
      className="app-content-section about-section"
      id="about"
      ref={sectionRefs.about}
    >
      <SectionHeader
        label="Get to know more about me"
        description="Take a look at some of my projects"
      />
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
