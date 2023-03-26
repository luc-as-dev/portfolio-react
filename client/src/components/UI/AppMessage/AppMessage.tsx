import "./AppMessage.scss";
import { ReactNode } from "react";
import AppCard from "../AppCard/AppCard";
import { useSpring, animated } from "@react-spring/web";

type Props = {
  title: string;
  children?: ReactNode;
};

export default function AppMessage({ title, children }: Props) {
  const spring = useSpring({
    from: { marginTop: -200 },
    to: { marginTop: 0 },
    config: { duration: 250 },
  });

  return (
    <animated.div style={{ ...spring }}>
      <AppCard className="app-message">
        <h2 className="app-message-title">{title}</h2>
        {children}
      </AppCard>
    </animated.div>
  );
}
