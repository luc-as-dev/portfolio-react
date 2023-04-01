import {
  createContext,
  ReactNode,
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import useThemeDetector from "../hooks/useThemeDetector";

type ThemeType = { [varName: string]: string };

export const THEME_LIGHT: ThemeType = {
  "--bg": "#e5e5e5",
  "--app-bg": "#f5f5f5",
  "--app-navbar-bg": "#d4d4d4",
  "--app-content-bg": "#ccc",

  "--text": "#222",
  "--text-dimmed": "#777",
  "--text-link": "#292929",
  "--text-link-dimmed": "#494949",

  "--footer-bg": "#171717",
  "--footer-text": "#e5e5e5",
  "--footer-text-link": "#e5e5e5",
  "--footer-text-link-dimmed": "#a3a3a3",
};

export const THEME_DARK: ThemeType = {
  "--bg": "#282828",
  "--app-bg": "#404040",
  "--app-navbar-bg": "#171717",
  "--app-content-bg": "#525252",

  "--text": "#e5e5e5",
  "--text-dimmed": "#a1a1aa",
  "--text-link": "#292929",
  "--text-link-dimmed": "#494949",

  "--footer-bg": "#171717",
  "--footer-text": "#a3a3a3",
  "--footer-text-link": "#a3a3a3",
  "--footer-text-link-dimmed": "#737373",
};

export const THEME_SYSTEM: "SYSTEM" = "SYSTEM";

type AppContextType = {
  homeSectionRef: RefObject<HTMLElement>;
  aboutSectionRef: RefObject<HTMLElement>;
  projectsSectionRef: RefObject<HTMLElement>;
  contactSectionRef: RefObject<HTMLElement>;
  activeSectionRef: RefObject<HTMLElement>;
  toSection: (section: RefObject<HTMLElement>) => void;
  currentTheme: ThemeType | "SYSTEM";
  setTheme: (theme: ThemeType | "SYSTEM") => void;
};

const appContext = createContext<AppContextType>({
  homeSectionRef: {} as RefObject<HTMLElement>,
  aboutSectionRef: {} as RefObject<HTMLElement>,
  projectsSectionRef: {} as RefObject<HTMLElement>,
  contactSectionRef: {} as RefObject<HTMLElement>,
  activeSectionRef: {} as RefObject<HTMLElement>,
  toSection: (section: RefObject<HTMLElement>) => {},
  currentTheme: {} as ThemeType,
  setTheme: (theme: ThemeType | "SYSTEM") => {},
});

export function useAppContext(): AppContextType {
  return useContext(appContext);
}

type Props = {
  children: ReactNode;
};

const Y_SCROLL_OFFSET = -78;

export default function AppContextProvider({ children }: Props) {
  const homeSectionRef = useRef<HTMLElement>(null);
  const aboutSectionRef = useRef<HTMLElement>(null);
  const projectsSectionRef = useRef<HTMLElement>(null);
  const contactSectionRef = useRef<HTMLElement>(null);
  const [activeSectionRef, setActiveSection] =
    useState<RefObject<HTMLElement>>(homeSectionRef);
  const { isDarkTheme } = useThemeDetector();
  const [currentTheme, setCurrentTheme] = useState<ThemeType | "SYSTEM">(
    THEME_SYSTEM
  );
  const [applySystemTheme, setApplySystemTheme] = useState<boolean>(true);

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

  function applyTheme(theme: ThemeType) {
    let key: keyof ThemeType;
    for (key in theme) {
      document.documentElement.style.setProperty(key, theme[key]);
    }
  }

  function setTheme(theme: ThemeType | "SYSTEM") {
    setCurrentTheme(theme);
    if (theme === "SYSTEM") {
      setApplySystemTheme(true);
      theme = isDarkTheme ? THEME_DARK : THEME_LIGHT;
    } else {
      setApplySystemTheme(false);
    }
    applyTheme(theme);
  }

  useEffect(() => {
    if (applySystemTheme) {
      applyTheme(isDarkTheme ? THEME_DARK : THEME_LIGHT);
    }
  }, [isDarkTheme]);

  return (
    <appContext.Provider
      value={{
        homeSectionRef,
        aboutSectionRef,
        projectsSectionRef,
        contactSectionRef,
        activeSectionRef,
        toSection,
        setTheme,
        currentTheme,
      }}
    >
      {children}
    </appContext.Provider>
  );
}
