import AppCard from "../UI/AppCard/AppCard";
import "./Footer.scss";

export default function Footer() {
  return (
    <AppCard className="footer">
      <div className="footer-column">
        <h4 className="footer-column-title">Projects</h4>
        <a href="https://quiz-multiplayer-game.netlify.app/">
          Quiz Multiplayer Game
        </a>
        <a href="https://luc-as-dev-kanban-board.netlify.app/">Kanban Board</a>
      </div>
      <div className="footer-column">
        <h4 className="footer-column-title">Repositories</h4>
        <a href="https://github.com/luc-as-dev/quiz-multiplayer-game">
          Quiz Multiplayer Game
        </a>
        <a href="https://github.com/luc-as-dev/kanban-board">Kanban Board</a>
      </div>
      <div className="footer-column">
        <h4 className="footer-column-title">Contact</h4>
        <p>Email Lucas.Karlsson@post.com</p>
        <p>Call +46 72 226 80 91</p>
        <p>
          Linkedin -{" "}
          <a href="https://www.linkedin.com/in/lucas-karlsson-luc-as-dev/">
            Lucas Karlsson
          </a>
        </p>
      </div>
    </AppCard>
  );
}
