import "./App.scss";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AppCard from "./components/UI/AppCard/AppCard";
import AppMessage from "./components/UI/AppMessage/AppMessage";

export default function App() {
  return (
    <div className="app">
      <AppMessage title="I am currently open for hire!">
        <p>I am looking for a job opportunity to work with...</p>
        <p>
          If this sounds like a good idea, please feel free to reach out to me.
          Contact me at ...
        </p>
      </AppMessage>
      <Navbar />
      <AppCard className="app-content">
        <div
          style={{
            background: "lightgray",
            height: "200px",
            marginBottom: "20px",
            borderRadius: "8px",
          }}
        ></div>
        <div
          style={{
            background: "lightgray",
            height: "200px",
            marginBottom: "20px",
            borderRadius: "8px",
          }}
        ></div>
        <div
          style={{
            background: "lightgray",
            height: "200px",
            marginBottom: "20px",
            borderRadius: "8px",
          }}
        ></div>
        <div
          style={{
            background: "lightgray",
            height: "200px",
            marginBottom: "20px",
            borderRadius: "8px",
          }}
        ></div>
        <div
          style={{
            background: "lightgray",
            height: "200px",
            marginBottom: "20px",
            borderRadius: "8px",
          }}
        ></div>
        <div
          style={{
            background: "lightgray",
            height: "200px",
            marginBottom: "20px",
            borderRadius: "8px",
          }}
        ></div>
      </AppCard>
      <Footer />
    </div>
  );
}
