
import "./App.css";
import logo from "./img/whatdoyouneed.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="box">
            {/* <div className="row">
              <div className="col">
                
                <h1>What do you need?</h1>
              </div>
            </div> */}
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
      {/* <div className="logo">
          <img src={logo} max-width="100%" />
        </div> */}
    </div>
  );
}

export default App;