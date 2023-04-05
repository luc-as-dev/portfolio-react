import Card from "../UI/Card/Card";
import ContentCard from "../UI/ContentCard/ContentCard";
import "./SectionHeader.scss";

type Props = {
  label: string;
  description: string;
};

export default function SectionHeader({ label, description }: Props) {
  return (
    <Card classNameInner="section-header">
      <h2 className="section-header-label">{label}</h2>
      <p className="section-header-description">{description}</p>
    </Card>
  );
}
