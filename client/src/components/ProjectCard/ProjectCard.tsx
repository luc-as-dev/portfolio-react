import { ReactNode } from "react";
import ContentCard from "../UI/ContentCard/ContentCard";
import "./ProjectCard.scss";
import { ArrowUpRight } from "react-feather";

type Props = {
  background: ReactNode;
  label: string;
  href: string;
  className?: string;
};

export default function ProjectCard({
  background,
  label,
  href,
  className,
}: Props) {
  const classes = `project-card${className ? " " + className : ""}`;
  return (
    <ContentCard className={classes}>
      <div className="project-card-background">{background}</div>
      <div className="project-card-inner">
        <div className="project-card-inner-top">
          <a
            className="project-card-inner-top-link"
            href={href}
            target="_blank"
          >
            <ArrowUpRight />
          </a>
        </div>
        <div className="project-card-inner-bottom">
          <h3 className="project-card-inner-bottom-label">{label}</h3>
        </div>
      </div>
    </ContentCard>
  );
}
