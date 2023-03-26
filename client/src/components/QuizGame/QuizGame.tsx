import "./QuizGame.scss";

type Props = {
  localStorageKey: string;
};

export default function QuizGame({ localStorageKey }: Props) {
  return (
    <div className="quiz-game">
      <iframe
        className="quiz-game-frame"
        src={`https://quiz-multiplayer-game.netlify.app/?localStorageKey=${localStorageKey}`}
      ></iframe>
    </div>
  );
}
