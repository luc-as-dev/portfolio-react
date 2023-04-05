import { cloneElement, ReactElement } from "react";
import { useKeenSlider } from "keen-slider/react";
import { KeenSliderOptions, KeenSliderPlugin } from "keen-slider";
import ContentCard from "../ContentCard/ContentCard";
import "keen-slider/keen-slider.min.css";
import "./SliderCard.scss";
import Card from "../Card/Card";

type Props = {
  options: KeenSliderOptions;
  plugins?: KeenSliderPlugin[];
  className?: string;
  children?: ReactElement[];
};

export default function SliderCard({
  options,
  plugins,
  className,
  children,
}: Props) {
  const classes = `slider-card${className ? " " + className : ""}`;
  const [sliderRef] = useKeenSlider<HTMLDivElement>(options, plugins);

  return (
    <Card className={classes}>
      <div className="slider-card-slider keen-slider" ref={sliderRef}>
        {children?.map((child, index) =>
          cloneElement(child, {
            className: `${child.props.className || ""} keen-slider__slide`,
            key: index,
          })
        )}
      </div>
    </Card>
  );
}
