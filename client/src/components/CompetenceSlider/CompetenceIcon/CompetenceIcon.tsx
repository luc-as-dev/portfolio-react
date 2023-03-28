import "./CompetenceIcon.scss";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export default function CompetenceIcon({ src, alt, className }: Props) {
  const classes = `competence-icon${className ? " " + className : ""}`;
  return (
    <div className={classes}>
      <img src={src} alt={alt} className="competence-icon-image" />
    </div>
  );
}
