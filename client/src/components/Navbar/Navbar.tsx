import "./Navbar.scss";

type Props = {};

export default function Navbar({}: Props) {
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
        <div className="navbar-inner-items">
          <p className="navbar-inner-items-item active">Home</p>
          <p className="navbar-inner-items-item">About</p>
          <p className="navbar-inner-items-item">Projects</p>
          <p className="navbar-inner-items-item">Contact</p>
        </div>
      </div>
      <div className="navbar-eraser"></div>
    </div>
  );
}
