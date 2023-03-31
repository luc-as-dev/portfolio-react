import {
  createContext,
  ReactNode,
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type AppContextType = {
  homeSectionRef: RefObject<HTMLElement>;
  aboutSectionRef: RefObject<HTMLElement>;
  projectsSectionRef: RefObject<HTMLElement>;
  contactSectionRef: RefObject<HTMLElement>;
  activeSectionRef: RefObject<HTMLElement>;
  toSection: (section: RefObject<HTMLElement>) => void;
};

const appContext = createContext<AppContextType>({
  homeSectionRef: {} as RefObject<HTMLElement>,
  aboutSectionRef: {} as RefObject<HTMLElement>,
  projectsSectionRef: {} as RefObject<HTMLElement>,
  contactSectionRef: {} as RefObject<HTMLElement>,
  activeSectionRef: {} as RefObject<HTMLElement>,
  toSection: (section: RefObject<HTMLElement>) => {},
});

export function useAppContext(): AppContextType {
  return useContext(appContext);
}

type Props = {
  children: ReactNode;
};

const Y_SCROLL_OFFSET = -74;

export default function AppContextProvider({ children }: Props) {
  const homeSectionRef = useRef<HTMLElement>(null);
  const aboutSectionRef = useRef<HTMLElement>(null);
  const projectsSectionRef = useRef<HTMLElement>(null);
  const contactSectionRef = useRef<HTMLElement>(null);
  const [activeSectionRef, setActiveSection] =
    useState<RefObject<HTMLElement>>(homeSectionRef);

  useEffect(() => {
    const onScroll = () => {
      updateActive();
    };
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function updateActive() {
    const sections: { ref: RefObject<HTMLElement>; dy: number }[] = [];

    [
      homeSectionRef,
      aboutSectionRef,
      projectsSectionRef,
      contactSectionRef,
    ].forEach((section) => {
      if (section && section.current) {
        sections.push({
          ref: section,
          dy: section.current.getBoundingClientRect().top + Y_SCROLL_OFFSET,
        });
      }
    });

    const closest = sections.sort((a, b) => {
      return Math.abs(a.dy) - Math.abs(b.dy);
    });

    if (closest) {
      setActiveSection(closest[0].ref);
    }
  }

  function toSection(section: RefObject<HTMLElement>): void {
    if (section && section.current) {
      setActiveSection(section);
      const y = section.current.getBoundingClientRect().top + scrollY;
      window.scrollTo({ top: y + Y_SCROLL_OFFSET, behavior: "smooth" });
    }
  }

  homeSectionRef.current;

  return (
    <appContext.Provider
      value={{
        homeSectionRef,
        aboutSectionRef,
        projectsSectionRef,
        contactSectionRef,
        activeSectionRef,
        toSection,
      }}
    >
      {children}
    </appContext.Provider>
  );
}
