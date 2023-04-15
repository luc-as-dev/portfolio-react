import "./AboutSection.scss";
import SectionHeader from "../../SectionHeader/SectionHeader";
import Card from "../../UI/Card/Card";
import CompetenceSlider from "../../CompetenceSlider/CompetenceSlider";
import JourneyCard from "../../JourneyCard/JourneyCard";
import ContactMe from "../../ContactMe/ContactMe";
import { forwardRef } from "react";

import HERO_IMAGE from "/images/hero.png";

const AboutSection = forwardRef<HTMLElement>(({}, ref) => {
  return (
    <section className="app-content-section about-section" ref={ref} id="about">
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
        <ContactMe className="about-section-contact-me" />
        <Card className="about-section-contact-hero">
          <img className="about-section-contact-hero-img" src={HERO_IMAGE} />
        </Card>
      </div>
    </section>
  );
});

export default AboutSection;
