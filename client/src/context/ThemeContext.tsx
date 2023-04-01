import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import useThemeDetector from "../hooks/useThemeDetector";

type ThemeType = {
  name: string;
  vars: { [varName: string]: string };
};

export type ThemeContextType = {
  themes: { [name: string]: ThemeType };
  currentTheme: ThemeType;
  setTheme: (theme: ThemeType) => void;
};

const themeContext = createContext<ThemeContextType>({
  themes: {},
  currentTheme: {} as ThemeType,
  setTheme: (theme: ThemeType) => {},
});

export function useThemeContext(): ThemeContextType {
  return useContext(themeContext);
}

function getInitTheme(
  key: string | undefined,
  themes: { [name: string]: ThemeType }
): ThemeType {
  if (key) {
    const themeName = localStorage.getItem(key);
    if (themeName && themes[themeName]) {
      return themes[themeName];
    }
  }
  return themes.system;
}

function setInitTheme(key: string | undefined, theme: ThemeType): void {
  if (key) localStorage.setItem(key, theme.name);
}

type Props = {
  light: { [varName: string]: string };
  dark: { [varName: string]: string };
  children: ReactNode;
  localStorageKey?: string;
};

export default function ThemeContextProvider({
  light,
  dark,
  children,
  localStorageKey,
}: Props) {
  const { isDarkTheme } = useThemeDetector();
  const [themes, setThemes] = useState<{ [name: string]: ThemeType }>({
    system: { name: "system", vars: {} },
    light: { name: "light", vars: light },
    dark: { name: "dark", vars: dark },
  });
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(
    getInitTheme(localStorageKey, themes)
  );
  const [applySystemTheme, setApplySystemTheme] = useState<boolean>(
    currentTheme === themes.system
  );

  function applyTheme(theme: ThemeType) {
    let varName: keyof ThemeType["vars"];
    for (varName in theme.vars) {
      document.documentElement.style.setProperty(varName, theme.vars[varName]);
    }
  }

  function setTheme(theme: ThemeType) {
    setCurrentTheme(theme);
    setInitTheme(localStorageKey, theme);
    if (theme.name === themes.system.name) {
      setApplySystemTheme(true);
      theme = isDarkTheme ? themes.dark : themes.light;
    } else {
      setApplySystemTheme(false);
    }
    applyTheme(theme);
  }
  useEffect(() => {
    setTheme(currentTheme);
  }, []);

  useEffect(() => {
    if (applySystemTheme) {
      applyTheme(isDarkTheme ? themes.dark : themes.light);
    }
  }, [isDarkTheme]);

  return (
    <themeContext.Provider value={{ themes, currentTheme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
}
