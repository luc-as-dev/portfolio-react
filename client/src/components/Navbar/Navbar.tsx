import { Moon, Settings, Sun } from "react-feather";
import { useThemeContext } from "../../context/ThemeContext";
import SlideSwitch from "../UI/SlideSwitch/SlideSwitch";
import "./Navbar.scss";

type Props = { activeSectionName: string; autoScroll: (id: string) => void };

export default function Navbar({ activeSectionName, autoScroll }: Props) {
  const { themes, currentTheme, setTheme } = useThemeContext();

  return (
    <div className="navbar">
      <div className="navbar-inner">
        <a className="navbar-inner-logo" href="https://github.com/luc-as-dev">
          <svg className="navbar-inner-logo-symbol nr2">
            <rect className="navbar-inner-logo-symbol-fill nr2"></rect>
          </svg>
          <svg className="navbar-inner-logo-symbol nr3">
            <rect className="navbar-inner-logo-symbol-fill nr3"></rect>
          </svg>
          <svg className="navbar-inner-logo-symbol nr4">
            <rect className="navbar-inner-logo-symbol-fill nr4"></rect>
          </svg>
          <div className="navbar-inner-logo-text-container">
            <h3 className="navbar-inner-logo-text-container-text">
              github.com/luc-as-dev
            </h3>
          </div>
        </a>

        <SlideSwitch
          className="navbar-inner-theme-switch"
          value={currentTheme.name}
          alternatives={{
            light: {
              onClick: () => setTheme(themes.light),
              node: <Sun height="16px" width="16px" />,
            },
            system: {
              onClick: () => setTheme(themes.system),
              node: <Settings height="16px" width="16px" />,
            },
            dark: {
              onClick: () => setTheme(themes.dark),
              node: <Moon height="16px" width="16px" />,
            },
          }}
        />

        <SlideSwitch
          className="navbar-inner-section-switch"
          value={activeSectionName}
          alternatives={{
            home: {
              onClick: () => autoScroll("home"),
              node: (
                <div className="navbar-inner-section-switch-item">Home</div>
              ),
            },
            projects: {
              onClick: () => autoScroll("projects"),
              node: (
                <div className="navbar-inner-section-switch-item">Projects</div>
              ),
            },
            about: {
              onClick: () => autoScroll("about"),
              node: (
                <div className="navbar-inner-section-switch-item">About</div>
              ),
            },
          }}
        />
      </div>
    </div>
  );
}
