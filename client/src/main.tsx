import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppContextProvider from "./context/AppContext";
import ThemeContextProvider from "./context/ThemeContext";
import "./index.scss";

import lightJSON from "./assets/themes/light.json";
import darkJSON from "./assets/themes/dark.json";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <ThemeContextProvider
        light={lightJSON}
        dark={darkJSON}
        localStorageKey="theme"
      >
        <App />
      </ThemeContextProvider>
    </AppContextProvider>
  </React.StrictMode>
);
