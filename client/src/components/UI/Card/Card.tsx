import { ReactNode } from "react";
import "./Card.scss";

type Props = {
  className?: string;
  classNameInner?: string;
  children?: ReactNode;
};

export default function Card({ className, classNameInner, children }: Props) {
  return (
    <div className={`card ${className || ""}`.trim()}>
      <div className={`card-inner ${classNameInner || ""}`.trim()}>
        {children}
      </div>
    </div>
  );
}
