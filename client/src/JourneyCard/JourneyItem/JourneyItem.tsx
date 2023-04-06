import { ReactNode } from "react";
import "./JourneyItem.scss";

type Props = {
  date: string;
  title: string;
  children: ReactNode;
};

export default function JourneyItem({ date, title, children }: Props) {
  return (
    <div className="journey-item">
      <div className="journey-item-left">{date}</div>
      <div className="journey-item-right">
        <h4 className="journey-item-right-title">{title}</h4>
        <div className="journey-item-right-content">{children}</div>
      </div>
    </div>
  );
}
