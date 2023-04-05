import { Moon, Settings, Sun } from "react-feather";
import { useAppContext } from "../../context/AppContext";
import { useThemeContext } from "../../context/ThemeContext";
import SlideSwitch from "../UI/SlideSwitch/SlideSwitch";
import "./Navbar.scss";

type Props = {};

export default function Navbar({}: Props) {
  const { themes, currentTheme, setTheme } = useThemeContext();
  const { activeSectionName, toSection } = useAppContext();

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
              onClick: () => toSection("home"),
              node: (
                <div className="navbar-inner-section-switch-item">Home</div>
              ),
            },
            about: {
              onClick: () => toSection("about"),
              node: (
                <div className="navbar-inner-section-switch-item">About</div>
              ),
            },
            projects: {
              onClick: () => toSection("projects"),
              node: (
                <div className="navbar-inner-section-switch-item">Projects</div>
              ),
            },
            contact: {
              onClick: () => toSection("contact"),
              node: (
                <div className="navbar-inner-section-switch-item">Contact</div>
              ),
            },
          }}
        />
      </div>
    </div>
  );
}
