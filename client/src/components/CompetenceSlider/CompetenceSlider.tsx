import SliderCard from "../UI/SliderCard/SliderCard";
import CompetenceIcon from "./CompetenceIcon/CompetenceIcon";
import "./CompetenceSlider.scss";

import reactIcon from "../../assets/icons/react.png";

type Props = {
  className?: string;
};

export default function CompetenceSlider({ className }: Props) {
  const classes = `competence-slider${className ? " " + className : ""}`;
  return (
    <SliderCard
      className={classes}
      options={{
        mode: "free-snap",
        loop: true,
        slides: {
          origin: "center",
          perView: 5,
          spacing: 15,
        },
      }}
    >
      <CompetenceIcon src={reactIcon} alt="React" />
      <div />
      <div />
      <div />
      <div />
      <div />
    </SliderCard>
  );
}
