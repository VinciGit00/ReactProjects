import logo from "./logo.svg";
import "./App.css";
import Typical from "react-typical";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hi, I'm Marco Vinciguerra</h1>
        <p>
          I'm a
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              " Engeneer 💻",
              1000,
              " Data Scientist 💾",
              1000,
              " Developer 📟",
              1000,
              " Gym Lover 💪🏻",
              1000,
            ]}
          />
        </p>
      </header>
    </div>
  );
}

export default App;
