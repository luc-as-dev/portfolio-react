import "./Chip.scss";

type Props = {
  name: string;
};

export default function Chip({ name }: Props) {
  return <div className="chip">{name}</div>;
}
