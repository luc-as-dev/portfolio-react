import { cloneElement, ReactElement } from "react";
import { useKeenSlider } from "keen-slider/react";
import { KeenSliderOptions } from "keen-slider";
import ContentCard from "../ContentCard/ContentCard";
import "keen-slider/keen-slider.min.css";
import "./SliderCard.scss";

type Props = {
  options: KeenSliderOptions;
  className?: string;
  children?: ReactElement[];
};

export default function SliderCard({ options, className, children }: Props) {
  const classes = `slider-card${className ? " " + className : ""}`;
  const [sliderRef] = useKeenSlider<HTMLDivElement>(options);

  return (
    <ContentCard className={classes}>
      <div className="slider-card-slider keen-slider" ref={sliderRef}>
        {children?.map((child, index) =>
          cloneElement(child, {
            className: `${child.props.className || ""} keen-slider__slide`,
            key: index,
          })
        )}
      </div>
    </ContentCard>
  );
}
