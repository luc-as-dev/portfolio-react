import "./App.scss";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app-content">
        <div
          style={{
            background: "orange",
            height: "200px",
            marginBottom: "20px",
          }}
        ></div>
        <div
          style={{ background: "blue", height: "200px", marginBottom: "20px" }}
        ></div>
        <div
          style={{ background: "red", height: "200px", marginBottom: "20px" }}
        ></div>
        <div
          style={{
            background: "yellow",
            height: "200px",
            marginBottom: "20px",
          }}
        ></div>
        <div
          style={{ background: "green", height: "200px", marginBottom: "20px" }}
        ></div>
        <div
          style={{
            background: "purple",
            height: "200px",
            marginBottom: "20px",
          }}
        ></div>
        <div
          style={{ background: "gray", height: "200px", marginBottom: "20px" }}
        ></div>
        <div
          style={{ background: "cyan", height: "200px", marginBottom: "20px" }}
        ></div>
      </div>
    </div>
  );
}
