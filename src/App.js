import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Weather App</h1>
      <Weather defaultCity="Hamburg" />
      <footer>
        This project was coded by Lena Guhl and is {" "}
        <a 
          href="https://github.com/lenaguhl/weather-project-react" 
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
        {" "} and hosted on Netlify
      </footer>
    </div>
    </div>
  );
}
