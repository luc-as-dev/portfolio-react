import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppContent from "./components/Sections/AppContent";
import { useEffect, useRef, useState } from "react";
import { scroller } from "react-scroll";

const OFFSET_Y = 68;

export default function App() {
  const [activeSectionName, setActiveSectionName] = useState("home");
  const sections = {
    home: { ref: useRef<HTMLElement>(null) },
    projects: { ref: useRef<HTMLElement>(null) },
    about: { ref: useRef<HTMLElement>(null) },
  };

  useEffect(() => {
    const handleScroll = () => {
      for (const [key, value] of Object.entries(sections)) {
        const sectionRef = value.ref.current;
        if (sectionRef) {
          const top = sectionRef.getBoundingClientRect().top;
          if (top + OFFSET_Y >= 0 && top <= window.innerHeight - OFFSET_Y) {
            setActiveSectionName(key);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  function scrollToSection(id: "home" | "projects" | "about") {
    const sectionRef = sections[id].ref.current;
    if (sectionRef) {
      scroller.scrollTo(id, {
        duration: 1000,
        smooth: true,
        offset: -OFFSET_Y,
      });
    }
  }

  return (
    <div className="app">
      <div className="app-background"></div>
      <div className="app-eraser"></div>
      <Navbar
        activeSectionName={activeSectionName}
        scrollToSection={scrollToSection}
      />
      <AppContent sections={sections} />
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
