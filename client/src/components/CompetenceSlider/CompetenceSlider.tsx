import SliderCard from "../UI/SliderCard/SliderCard";
import CompetenceIcon from "./CompetenceIcon/CompetenceIcon";

import competences from "../../assets/data/competences.json";

const AUTO_TIME_MS = 1000;

type Props = {
  perView: number;
  className?: string;
};

export default function CompetenceSlider({ perView, className }: Props) {
  const classes = `${className ? " " + className : ""}`;
  return (
    <SliderCard
      label="My Competences"
      className={classes}
      options={{
        mode: "free-snap",
        loop: true,
        slides: {
          origin: "center",
          perView,
        },
      }}
      plugins={[
        (slider) => {
          let timeout: number;
          let mouseOver = false;

          function clearNextTimeout() {
            clearTimeout(timeout);
          }

          function nextTimeout() {
            clearTimeout(timeout);
            if (mouseOver) return;
            timeout = setTimeout(() => {
              slider.next();
            }, AUTO_TIME_MS);
          }

          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true;
              clearNextTimeout();
            });
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false;
              nextTimeout();
            });
            nextTimeout();
          });
          slider.on("dragStarted", clearNextTimeout);
          slider.on("animationEnded", nextTimeout);
          slider.on("updated", nextTimeout);
        },
      ]}
    >
      {Object.values(competences).map(({ name, img }) => (
        <CompetenceIcon label={name} src={img} />
      ))}
    </SliderCard>
  );
}
