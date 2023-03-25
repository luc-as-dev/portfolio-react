import "./AppMessage.scss";
import { ReactNode } from "react";
import AppCard from "../AppCard/AppCard";

type Props = {
  title: string;
  children?: ReactNode;
};

export default function AppMessage({ title, children }: Props) {
  return (
    <AppCard className="app-message">
      <h2 className="app-message-title">{title}</h2>
      {children}
    </AppCard>
  );
}
