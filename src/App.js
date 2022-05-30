
import "./App.css";
import logo from "./img/whatdoyouneed.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="box">
            <div className="row">
              <div className="col-6">
                <a
                  className="weatherApp"
                  href="https://reverent-bhaskara-6bb4e2.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Weather
                </a>
              </div>
              <div className="col-6">
                <a
                  className="dictionaryApp"
                  href="https://upbeat-nobel-41a5b2.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Dictionary
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <footer>
        This project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/kristamarikatajisto/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Krista-Mari Katajisto
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/kkrista/api-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://kkrista.github.io/api-app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Github Pages
        </a>
      </footer>
    </div>
  );
}

export default App;