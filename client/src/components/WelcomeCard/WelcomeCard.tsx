import ContentCard from "../UI/ContentCard/ContentCard";
import "./WelcomeCard.scss";

type Props = {
  className?: string;
};

export default function WelcomeCard({ className }: Props) {
  const classes = `welcome-card${className ? " " + className : ""}`;
  return (
    <ContentCard className={classes}>
      <h2>Hey, i'm Lucas, a developer with a big passion for code</h2>
    </ContentCard>
  );
}
