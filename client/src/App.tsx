import "./App.scss";
import AppMessage from "./components/UI/AppMessage/AppMessage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppContent from "./components/Sections/AppContent";

export default function App() {
  return (
    <div className="app">
      {/*<AppMessage title="Seeking exciting job opportunities">
        <p>
          Are you on the lookout for a hardworking and ambitious individual who
          is eager to take on new challenges? Look no further! I am currently
          open to exciting job opportunities and ready to bring my passion for
          learning, attention to detail, and dedication to delivering
          high-quality results to your team. Let's connect and explore how we
          can work together to achieve great things!
        </p>
      </AppMessage>*/}

      <div className="app-background"></div>
      <div className="app-eraser"></div>
      <Navbar />
      <AppContent />
      <Footer />
    </div>
  );
}
