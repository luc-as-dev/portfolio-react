import { useEffect, useState } from "react";

function isSystemDarkTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function useThemeDetector() {
  const [isDarkTheme, setIsDarkTheme] = useState(isSystemDarkTheme());

  useEffect(() => {
    function listener() {
      setIsDarkTheme(() => isSystemDarkTheme());
    }

    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addEventListener("change", listener);
    return () => darkThemeMq.removeEventListener("change", listener);
  }, []);
  return { isDarkTheme };
}
