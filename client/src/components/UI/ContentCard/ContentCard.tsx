import "./ContentCard.scss";
import { ReactNode } from "react";

type Props = {
  className?: string;
  children?: ReactNode;
};

export default function ContentCard({ className, children }: Props) {
  const classes = `content-card${className ? " " + className : ""}`;
  return <div className={classes}>{children}</div>;
}
