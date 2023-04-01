import { ReactNode, useEffect, useRef } from "react";
import { animated, useSpring } from "@react-spring/web";
import "./SlideSwitch.scss";

type Props = {
  alternatives: { [name: string]: { onClick: () => void; node: ReactNode } };
  value: string;
  className?: string;
};

export default function SlideSwitch({ alternatives, value, className }: Props) {
  const slideSwitchRef = useRef<HTMLDivElement>(null);
  const selectorRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLDivElement>(null);

  const [springs, api] = useSpring(() => ({
    from: { left: 0, width: 0 },
  }));

  const classes = `slide-switch${className ? " " + className : ""}`;

  useEffect(() => {
    if (!value && selectorRef.current) {
      selectorRef.current.style.width = `${0}px`;
    }

    if (slideSwitchRef.current && selectorRef.current && selectedRef.current) {
      const slideLeft = slideSwitchRef.current.getBoundingClientRect().left;
      const oldLeft =
        selectorRef.current.getBoundingClientRect().left - slideLeft;
      const oldWidth = selectorRef.current.clientWidth;
      const newLeft =
        selectedRef.current.getBoundingClientRect().left - slideLeft;
      const newWidth = selectedRef.current.clientWidth;

      // on start
      if (oldWidth === 0 && oldLeft === 0) {
        api.start({
          to: {
            left: newLeft,
            width: newWidth,
          },
          config: { duration: 0 },
        });
      }

      const factor = 2;
      const duration = factor * Math.abs(newLeft - oldLeft);

      api.start({
        from: { left: oldLeft, width: oldWidth },
        to: { left: newLeft, width: newWidth },
        config: { duration },
      });
    }
  }, [value, slideSwitchRef, selectorRef, selectedRef]);

  return (
    <div className={classes} ref={slideSwitchRef}>
      {Object.keys(alternatives).map((key: string) => (
        <div
          className={`slide-switch-item${key === value ? " active" : ""}`}
          key={key}
          ref={key === value ? selectedRef : undefined}
          onClick={() => {
            alternatives[key].onClick!();
          }}
        >
          {alternatives[key].node}
        </div>
      ))}
      <animated.div
        className="slide-switch-selector"
        style={{ ...springs }}
        ref={selectorRef}
      ></animated.div>
    </div>
  );
}
