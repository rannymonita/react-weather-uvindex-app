import React from "react";

export default function WeatherTemperature(props) {
  function showFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (props.unit === "celsius") {
    return (
      <div className="clearfix">
        <div className="float-left">
          <span className="temperature">{Math.round(props.celsius)}</span>
        </div>
        <div className="float-left">
          <span className="unit">
            <span className="active">°C</span> |{" "}
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="clearfix">
        <div className="float-left">
          <span className="temperature">{Math.round(fahrenheit())}</span>
        </div>
        <div className="float-left">
          <span className="unit">
            <a href="/" onClick={showCelsius}>
              °C
            </a>{" "}
            | <span className="active">°F</span>
          </span>
        </div>
      </div>
    );
  }
}
