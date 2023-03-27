import githubIcon from "../../assets/icons/github.png";
import linkedinIcon from "../../assets/icons/linkedin.png";
import "./WelcomeCard.scss";
import ContentCard from "../UI/ContentCard/ContentCard";

type Props = {
  className?: string;
};

export default function WelcomeCard({ className }: Props) {
  const classes = `welcome-card${className ? " " + className : ""}`;
  return (
    <ContentCard className={classes}>
      <div className="welcome-card-inner">
        <h2 className="welcome-card-inner-title">
          Greetings! I'm Lucas, the dedicated coder you've been looking for.
        </h2>
        <p className="welcome-card-inner-text">
          As a passionate programmer with a knack for pattern recognition, I've
          gained proficiency in various languages through years of
          self-learning, and I'm eager to make a mark in the programming world.
        </p>
        <div className="welcome-card-inner-socials">
          <a
            href="https://github.com/luc-as-dev"
            className="welcome-card-inner-socials-item"
          >
            <img src={githubIcon} alt="github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-karlsson-luc-as-dev/"
            className="welcome-card-inner-socials-item"
          >
            <img src={linkedinIcon} alt="github icon" />
          </a>
        </div>
      </div>
    </ContentCard>
  );
}
