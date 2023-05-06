import "./AboutSection.scss";
import SectionHeader from "../../SectionHeader/SectionHeader";
import Card from "../../UI/Card/Card";
import CompetenceSlider from "../../CompetenceSlider/CompetenceSlider";
import JourneyCard from "../../JourneyCard/JourneyCard";
import ContactMe from "../../ContactMe/ContactMe";
import { forwardRef } from "react";

import HERO_IMAGE from "/images/hero-color-800.png";
import FadeInOnScroll from "../../UI/FadeInOnScroll/FadeInOnScroll";

const AboutSection = forwardRef<HTMLElement>(({}, ref) => {
  return (
    <section className="about-section" ref={ref} id="about">
      <FadeInOnScroll>
        <SectionHeader
          label="Get to know more about me"
          description="Look at some of my competences and experience."
        />
      </FadeInOnScroll>
      <FadeInOnScroll>
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
      </FadeInOnScroll>
      <FadeInOnScroll>
        <JourneyCard className="about-section-journey" />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <div className="about-section-contact">
          <ContactMe className="about-section-contact-me" />
          <Card className="about-section-contact-hero">
            <img className="about-section-contact-hero-img" src={HERO_IMAGE} />
          </Card>
        </div>
      </FadeInOnScroll>
    </section>
  );
});

export default AboutSection;
