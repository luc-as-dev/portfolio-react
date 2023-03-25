import "./Navbar.scss";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="navbar">
      <div className="navbar-inner">
        <a className="navbar-inner-logo" href="https://github.com/luc-as-dev">
          <svg width="16" height="16">
            <rect
              width="16"
              height="16"
              rx="3"
              ry="3"
              className="navbar-inner-logo-symbol one"
            ></rect>
          </svg>
          <svg width="16" height="16">
            <rect
              width="16"
              height="16"
              rx="3"
              ry="3"
              className="navbar-inner-logo-symbol two"
            ></rect>
          </svg>
          <svg width="16" height="16">
            <rect
              width="16"
              height="16"
              rx="3"
              ry="3"
              className="navbar-inner-logo-symbol three"
            ></rect>
          </svg>
          <svg width="16" height="16">
            <rect
              width="16"
              height="16"
              rx="3"
              ry="3"
              className="navbar-inner-logo-symbol four"
            ></rect>
          </svg>
          <h3 className="navbar-inner-logo-text">luc-as-dev</h3>
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
