import { ReactNode } from "react";
import "./ContentRow.scss";

type Props = {
  className?: string;
  children?: ReactNode;
};

export default function ContentRow({ className, children }: Props) {
  const classes = `content-row${className ? " " + className : ""}`;
  return <div className={classes}>{children}</div>;
}
