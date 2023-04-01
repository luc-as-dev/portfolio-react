import { ReactNode, useEffect, useRef, useState } from "react";
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

  const classes = `slide-switch${className ? " " + className : ""}`;

  useEffect(() => {
    if (!value && selectorRef.current) {
      selectorRef.current.style.width = `${0}px`;
    }

    if (slideSwitchRef.current && selectorRef.current && selectedRef.current) {
      const width: number = selectedRef.current.clientWidth;
      const slideLeft = slideSwitchRef.current.getBoundingClientRect().left;
      const left = selectedRef.current.getBoundingClientRect().left;

      selectorRef.current.style.left = `${left - slideLeft}px`;
      selectorRef.current.style.width = `${width}px`;
    }
  }, [value]);

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
      <div className="slide-switch-selector" ref={selectorRef}></div>
    </div>
  );
}
