import "./AppCard.scss";
import { ReactNode } from "react";

type Props = {
  className?: string;
  children?: ReactNode;
};

export default function AppCard({ className, children }: Props) {
  const classes = `app-card${className ? " " + className : ""}`;
  return <div className={classes}>{children}</div>;
}
