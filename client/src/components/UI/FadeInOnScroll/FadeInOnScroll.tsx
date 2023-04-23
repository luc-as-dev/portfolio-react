import { ReactNode, useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

type Props = {
  children: ReactNode;
};

export default function FadeInOnScroll({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setVisible] = useState(false);
  const fade = useSpring({
    opacity: isVisible ? 1 : 0.3,
    from: { opacity: 0.3 },
    config: { duration: 350 },
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const element = ref.current;
      if (element) {
        const elementTop = element.getBoundingClientRect().top + currentScrollY;
        const elementBottom = elementTop + element.offsetHeight;
        setVisible(
          currentScrollY >= elementTop - window.innerHeight &&
            currentScrollY < elementBottom
        );
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return (
    <animated.div ref={ref} style={fade}>
      {children}
    </animated.div>
  );
}
