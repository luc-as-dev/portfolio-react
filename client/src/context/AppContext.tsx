import {
  createContext,
  ReactNode,
  Ref,
  RefObject,
  useContext,
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

export default function AppContextProvider({ children }: Props) {
  const homeSectionRef = useRef<HTMLElement>(null);
  const aboutSectionRef = useRef<HTMLElement>(null);
  const projectsSectionRef = useRef<HTMLElement>(null);
  const contactSectionRef = useRef<HTMLElement>(null);
  const [activeSectionRef, setActiveSection] =
    useState<RefObject<HTMLElement>>(homeSectionRef);

  function toSection(section: RefObject<HTMLElement>): void {
    if (section && section.current) {
      setActiveSection(section);
      section.current.scrollIntoView({ behavior: "smooth", block: "start" });
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
