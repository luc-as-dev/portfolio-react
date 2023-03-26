import ContentCard from "../UI/ContentCard/ContentCard";
import "./WelcomeCard.scss";

type Props = {
  className?: string;
};

export default function WelcomeCard({ className }: Props) {
  const classes = `welcome-card${className ? " " + className : ""}`;
  return (
    <ContentCard className={classes}>
      <h2 className="welcome-card-title">
        Greetings! I'm Lucas, the dedicated coder you've been looking for.
      </h2>
      <p className="welcome-card-text">
        As a passionate programmer with a knack for pattern recognition, I've
        gained proficiency in various languages through years of self-learning,
        and I'm eager to make a mark in the programming world.
      </p>
    </ContentCard>
  );
}
