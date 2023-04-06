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
  sectionRefs: { [name: string]: RefObject<HTMLElement> };
  toSection: (name: SectionNamesType) => void;
  activeSectionName: string;
};

const appContext = createContext<AppContextType>({
  sectionRefs: {},
  toSection: (name: SectionNamesType) => {},
  activeSectionName: "",
});

export function useAppContext(): AppContextType {
  return useContext(appContext);
}

type Props = {
  children: ReactNode;
};

const Y_SCROLL_OFFSET = -83;
type SectionNamesType = "home" | "about" | "projects" | "contact";

export default function AppContextProvider({ children }: Props) {
  const [activeSectionName, setActiveSectionName] = useState<string>("home");
  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    const onScroll = () => {
      updateActive();
    };
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function updateActive() {
    const sections: { name: string; dy: number }[] = [];

    let key: SectionNamesType;
    for (key in sectionRefs) {
      const section = sectionRefs[key];

      if (section && section.current) {
        sections.push({
          name: key,
          dy: section.current.getBoundingClientRect().top + Y_SCROLL_OFFSET,
        });
      }
    }

    const closest = sections.sort((a, b) => {
      return Math.abs(a.dy) - Math.abs(b.dy);
    });

    if (closest) {
      setActiveSectionName(closest[0].name);
    }
  }

  function toSection(name: SectionNamesType): void {
    const section = sectionRefs[name];
    if (section && section.current) {
      const y = section.current.getBoundingClientRect().top + scrollY;
      window.scrollTo({ top: y + Y_SCROLL_OFFSET, behavior: "smooth" });
    }
  }

  return (
    <appContext.Provider
      value={{
        sectionRefs,
        activeSectionName,
        toSection,
      }}
    >
      {children}
    </appContext.Provider>
  );
}
