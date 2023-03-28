import SliderCard from "../UI/SliderCard/SliderCard";
import CompetenceIcon from "./CompetenceIcon/CompetenceIcon";
import "./CompetenceSlider.scss";

import reactIcon from "../../assets/icons/react.png";
import jsIcon from "../../assets/icons/js.png";
import tsIcon from "../../assets/icons/ts.png";
import htmlIcon from "../../assets/icons/html.png";
import cssIcon from "../../assets/icons/css.png";
import mongodbIcon from "../../assets/icons/mongodb.png";

const AUTO_TIME_MS = 5000;

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
      <CompetenceIcon src={reactIcon} alt="React" />
      <CompetenceIcon src={jsIcon} alt="Javascript" />
      <CompetenceIcon src={tsIcon} alt="Typescript" />
      <CompetenceIcon src={htmlIcon} alt="HTTML" />
      <CompetenceIcon src={cssIcon} alt="CSS" />
      <CompetenceIcon src={mongodbIcon} alt="MongoDB" />
    </SliderCard>
  );
}
