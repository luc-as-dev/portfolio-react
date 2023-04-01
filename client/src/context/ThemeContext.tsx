import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import useThemeDetector from "../hooks/useThemeDetector";

import lightJSON from "../assets/themes/light.json";
import darkJSON from "../assets/themes/dark.json";

type ThemeType = {
  name: string;
  vars: { [varName: string]: string };
};

export const THEME_LIGHT: ThemeType = {
  name: "light",
  vars: lightJSON as { [varName: string]: string },
};

export const THEME_DARK: ThemeType = {
  name: "dark",
  vars: darkJSON as { [varName: string]: string },
};

export const THEME_SYSTEM: ThemeType = {
  name: "SYSTEM",
  vars: {} as { [varName: string]: string },
};

export type ThemeContextType = {
  currentTheme: ThemeType;
  setTheme: (theme: ThemeType) => void;
};

const themeContext = createContext<ThemeContextType>({
  currentTheme: {} as ThemeType,
  setTheme: (theme: ThemeType) => {},
});

export function useThemeContext(): ThemeContextType {
  return useContext(themeContext);
}

type Props = {
  children: ReactNode;
};

export default function ThemeContextProvider({ children }: Props) {
  const { isDarkTheme } = useThemeDetector();
  const [themes, setThemes] = useState([THEME_SYSTEM, THEME_LIGHT, THEME_DARK]);
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(THEME_SYSTEM);
  const [applySystemTheme, setApplySystemTheme] = useState<boolean>(true);

  function applyTheme(theme: ThemeType) {
    let varName: keyof ThemeType["vars"];
    for (varName in theme.vars) {
      document.documentElement.style.setProperty(varName, theme.vars[varName]);
    }
  }

  function setTheme(theme: ThemeType) {
    setCurrentTheme(theme);
    if (theme.name === "SYSTEM") {
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
    <themeContext.Provider value={{ setTheme, currentTheme }}>
      {children}
    </themeContext.Provider>
  );
}
