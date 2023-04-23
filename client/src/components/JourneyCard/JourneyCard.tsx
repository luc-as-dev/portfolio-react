import "./JourneyCard.scss";
import Card from "../UI/Card/Card";
import JourneyItem from "./JourneyItem/JourneyItem";

import journey from "../../assets/data/journey.json";

type Props = {
  className?: string;
};

export default function JourneyCard({ className }: Props) {
  return (
    <Card
      className={`journey-card ${className || ""}`.trim()}
      classNameInner="journey-card-inner"
    >
      <h2 className="journey-card-inner-label">My Coding Journey</h2>
      <div className="journey-card-inner-content">
        {journey.map(({ date, title, texts, hidden }) => {
          if (hidden) return "";
          return (
            <JourneyItem key={title} date={date} title={title}>
              {texts.map((text: string, index: number) => (
                <p key={index}>{text}</p>
              ))}
            </JourneyItem>
          );
        })}
      </div>
    </Card>
  );
}
