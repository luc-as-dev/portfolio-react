import "./AboutSection.scss";
import CompetenceSlider from "../../CompetenceSlider/CompetenceSlider";
import SectionHeader from "../../SectionHeader/SectionHeader";
import JourneyCard from "../../JourneyCard/JourneyCard";

import heroImg from "../../../assets/hero-contact.png";
import Card from "../../UI/Card/Card";
import ContactMe from "../../ContactMe/ContactMe";

type Props = {};

export default function AboutSection({}: Props) {
  return (
    <section className="app-content-section about-section" id="about">
      <SectionHeader
        label="Get to know more about me"
        description="Look at some of my competences and experience."
      />
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
      <JourneyCard className="about-section-journey" />
      <div className="about-section-contact">
        <Card className="about-section-contact-hero">
          <img className="about-section-contact-hero-img" src={heroImg} />
        </Card>
        <ContactMe />
      </div>
    </section>
  );
}
