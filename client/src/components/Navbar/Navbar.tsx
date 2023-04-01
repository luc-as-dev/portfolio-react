import { Moon, Settings, Sun } from "react-feather";
import {
  THEME_DARK,
  THEME_LIGHT,
  useAppContext,
} from "../../context/AppContext";
import "./Navbar.scss";

type Props = {};

export default function Navbar({}: Props) {
  const {
    toSection,
    activeSectionRef,
    homeSectionRef,
    aboutSectionRef,
    projectsSectionRef,
    contactSectionRef,
    setTheme,
    currentTheme,
  } = useAppContext();

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

        <div className="navbar-inner-theme">
          <Sun
            className={`navbar-inner-theme-icon${
              currentTheme === THEME_LIGHT ? " active" : ""
            }`}
            onClick={() => setTheme(THEME_LIGHT)}
          />
          <Settings className="navbar-inner-theme-icon" />
          <Moon
            className={`navbar-inner-theme-icon${
              currentTheme === THEME_DARK ? " active" : ""
            }`}
            onClick={() => setTheme(THEME_DARK)}
          />
        </div>

        <div className="navbar-inner-items">
          <p
            className={`navbar-inner-items-item${
              activeSectionRef === homeSectionRef ? " active" : ""
            }`}
            onClick={() => toSection(homeSectionRef)}
          >
            Home
          </p>
          <p
            className={`navbar-inner-items-item${
              activeSectionRef === aboutSectionRef ? " active" : ""
            }`}
            onClick={() => toSection(aboutSectionRef)}
          >
            About
          </p>
          <p
            className={`navbar-inner-items-item${
              activeSectionRef === projectsSectionRef ? " active" : ""
            }`}
            onClick={() => toSection(projectsSectionRef)}
          >
            Projects
          </p>
          <p
            className={`navbar-inner-items-item${
              activeSectionRef === contactSectionRef ? " active" : ""
            }`}
            onClick={() => toSection(contactSectionRef)}
          >
            Contact
          </p>
        </div>
      </div>
      <div className="navbar-eraser"></div>
    </div>
  );
}
