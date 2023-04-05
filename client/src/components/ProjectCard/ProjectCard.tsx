import { ReactNode } from "react";
import "./ProjectCard.scss";
import { ArrowUpRight } from "react-feather";
import Card from "../UI/Card/Card";

type Props = {
  imgSrc: string;
  label: string;
  description: string;
  href: string;
  className?: string;
};

export default function ProjectCard({
  imgSrc,
  label,
  description,
  href,
  className,
}: Props) {
  const classes = `project-card${className ? " " + className : ""}`;
  return (
    <Card className={classes} classNameInner="project-card-inner">
      <div className="project-card-inner-top">
        <div className="project-card-inner-top-text">
          <h3 className="project-card-inner-top-text-label">{label}</h3>
          <p className="project-card-inner-top-text-description">
            {description}
          </p>
        </div>
        <a className="project-card-inner-top-link" href={href} target="_blank">
          <ArrowUpRight />
        </a>
      </div>
      <div className="project-card-inner-bottom">
        <img src={imgSrc} alt={label} />
      </div>
    </Card>
  );
}
