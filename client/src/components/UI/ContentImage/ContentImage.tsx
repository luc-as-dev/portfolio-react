import ContentCard from "../ContentCard/ContentCard";
import "./ContentImage.scss";

type Props = {
  src: string;
  className?: string;
};

export default function ContentImage({ src, className }: Props) {
  const classes = `content-image${className ? " " + className : ""}`;
  return (
    <ContentCard className={classes}>
      <img src={src} />
    </ContentCard>
  );
}
