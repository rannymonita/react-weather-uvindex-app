import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Weather App </h1>
        <Weather />

        <footer>
          This project was coded by Ranny Monita and is open-sourced on{" "}
          <a
            href="https://github.com/rannymonita/react-weather-uvindex-app"
            target="_blank"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
