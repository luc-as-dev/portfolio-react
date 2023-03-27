import "./App.scss";
import AppMessage from "./components/UI/AppMessage/AppMessage";
import Navbar from "./components/Navbar/Navbar";
import AppCard from "./components/UI/AppCard/AppCard";
import ContentRow from "./components/UI/ContentRow/ContentRow";
import ContentImage from "./components/UI/ContentImage/ContentImage";
import WelcomeCard from "./components/WelcomeCard/WelcomeCard";
import QuizGame from "./components/QuizGame/QuizGame";
import Footer from "./components/Footer/Footer";

import HERO_IMAGE from "./assets/hero.jpg";

export default function App() {
  return (
    <div className="app">
      <AppMessage title="Seeking exciting job opportunities">
        <p>
          Are you on the lookout for a hardworking and ambitious individual who
          is eager to take on new challenges? Look no further! I am currently
          open to exciting job opportunities and ready to bring my passion for
          learning, attention to detail, and dedication to delivering
          high-quality results to your team. Let's connect and explore how we
          can work together to achieve great things!
        </p>
      </AppMessage>
      <Navbar />
      <AppCard className="app-content">
        <ContentRow>
          <WelcomeCard className="app-content-welcome" />
          <ContentImage className="app-content-hero" src={HERO_IMAGE} />
        </ContentRow>
        {false && (
          <ContentRow>
            <QuizGame localStorageKey="quiz-client-1" />
            <QuizGame localStorageKey="quiz-client-2" />
          </ContentRow>
        )}
        <div
          style={{
            background: "lightgray",
            height: "200px",
            borderRadius: "8px",
          }}
        ></div>
        <div
          style={{
            background: "lightgray",
            height: "200px",
            borderRadius: "8px",
          }}
        ></div>
      </AppCard>
      <Footer />
    </div>
  );
}
