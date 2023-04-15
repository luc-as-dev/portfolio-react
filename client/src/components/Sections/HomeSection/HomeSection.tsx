import "./HomeSection.scss";
import Card from "../../UI/Card/Card";
import Chip from "../../UI/Chip/Chip";
import { forwardRef } from "react";

import HERO_IMAGE from "/images/hero.png";
import githubIcon from "../../../assets/icons/github.svg";
import linkedinIcon from "../../../assets/icons/linkedin.svg";

import competences from "../../../assets/data/competences.json";

const HomeSection = forwardRef<HTMLElement>(({}, ref) => {
  return (
    <section className="home-section" ref={ref} id="home">
      <div className="home-section-me">
        <Card className="home-section-me-hero">
          <img className="home-section-me-hero-img" src={HERO_IMAGE} />
        </Card>
        <Card
          className="home-section-me-greeting"
          classNameInner="home-section-me-greeting-inner"
        >
          <h2 className="home-section-me-greeting-inner-title">
            Greetings! I'm Lucas, the dedicated coder you've been looking for.
          </h2>
          <p className="home-section-me-greeting-inner-text">
            As a passionate programmer with a knack for pattern recognition,
            I've gained proficiency in various languages through years of
            self-learning, and I'm eager to make a mark in the programming
            world.
          </p>
          <div className="home-section-me-greeting-inner-socials">
            <a
              href="https://github.com/luc-as-dev"
              className="home-section-me-greeting-inner-socials-item"
            >
              <img src={githubIcon} alt="github icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-karlsson-luc-as-dev/"
              className="home-section-me-greeting-inner-socials-item"
            >
              <img src={linkedinIcon} alt="github icon" />
            </a>
          </div>
        </Card>
      </div>
      <Card
        className="home-section-chips"
        classNameInner="home-section-chips-inner"
      >
        {Object.values(competences).map(({ name }) => (
          <Chip name={name} />
        ))}
      </Card>
    </section>
  );
});

export default HomeSection;
