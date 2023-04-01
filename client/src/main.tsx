import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppContextProvider from "./context/AppContext";
import ThemeContextProvider from "./context/ThemeContext";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </AppContextProvider>
  </React.StrictMode>
);
