import "./CompetenceIcon.scss";

type Props = {
  src: string;
  label: string;
  className?: string;
};

export default function CompetenceIcon({ label, src, className }: Props) {
  const classes = `competence-icon${className ? " " + className : ""}`;
  return (
    <div className={classes}>
      <div className="competence-icon-inner">
        <img src={src} alt={label} className="competence-icon-inner-image" />
        <h3 className="competence-icon-inner-label">{label}</h3>
      </div>
    </div>
  );
}
