import "./App.scss";
import AppMessage from "./components/UI/AppMessage/AppMessage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppContent from "./components/Sections/AppContent";
import { useEffect, useRef, useState } from "react";

const OFFSET_Y = 68;
const AUTO_SCROLL_THRESHOLD = 100;

export default function App() {
  const [activeSectionName, setActiveSectionName] = useState("home");
  const isAutoScrolling = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (isAutoScrolling.current) {
        return;
      }

      const sections = [
        { id: "home", next: "about", prev: null },
        { id: "about", next: "projects", prev: "home" },
        { id: "projects", next: "contact", prev: "about" },
        { id: "contact", next: null, prev: "projects" },
      ];
      let activeSection = "";

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= OFFSET_Y + 150 && rect.bottom > OFFSET_Y - 150) {
            activeSection = section.id;
            break;
          }
        }
      }

      if (activeSection && activeSection !== activeSectionName) {
        setActiveSectionName(activeSection);
      }

      const currentSection = sections.find((s) => s.id === activeSection);

      if (currentSection) {
        const element = document.getElementById(currentSection?.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top >= OFFSET_Y + AUTO_SCROLL_THRESHOLD &&
            currentSection.prev
          ) {
            autoScroll(currentSection.prev, 700, "up");
          } else if (
            rect.bottom <= window.innerHeight - AUTO_SCROLL_THRESHOLD &&
            currentSection.next
          ) {
            autoScroll(currentSection.next, 700, "down");
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [activeSectionName]);

  const autoScroll = (
    id: string,
    duration: number = 1500,
    scrollDirection: "up" | "down" = "down"
  ) => {
    const section = document.getElementById(id);
    if (section) {
      isAutoScrolling.current = true;
      setActiveSectionName(id);
      customScrollTo(section, duration, scrollDirection);
    }
  };

  function customScrollTo(
    element: HTMLElement,
    duration: number,
    scrollDirection: "up" | "down"
  ) {
    const startPosition = window.pageYOffset;
    const targetPosition =
      scrollDirection === "down"
        ? element.offsetTop
        : element.offsetTop +
          element.offsetHeight -
          innerHeight +
          AUTO_SCROLL_THRESHOLD +
          OFFSET_Y;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime!;
      const progress = Math.min(timeElapsed / duration, 1);

      const easeOutCubic = (t: number) => --t * t * t + 1;
      const ease = easeOutCubic(progress);

      const adjustedStartPosition = Math.min(
        startPosition,
        Math.max(window.pageYOffset, startPosition - AUTO_SCROLL_THRESHOLD)
      );

      window.scrollTo(0, adjustedStartPosition + distance * ease);

      if (timeElapsed < duration) {
        window.requestAnimationFrame(animation);
      } else {
        isAutoScrolling.current = false;
      }
    }

    window.requestAnimationFrame(animation);
  }

  return (
    <div className="app">
      <div className="app-background"></div>
      <div className="app-eraser"></div>
      <Navbar activeSectionName={activeSectionName} autoScroll={autoScroll} />
      <AppContent />
      <Footer />
    </div>
  );
}

{
  /*<AppMessage title="Seeking exciting job opportunities">
  <p>
    Are you on the lookout for a hardworking and ambitious individual who
    is eager to take on new challenges? Look no further! I am currently
    open to exciting job opportunities and ready to bring my passion for
    learning, attention to detail, and dedication to delivering
    high-quality results to your team. Let's connect and explore how we
    can work together to achieve great things!
  </p>
</AppMessage>*/
}
