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
      <div>
        <div className="clearfix">
          <div className="float-left">
            <span className="temperature">{Math.round(props.celsius)}</span>
          </div>
          <div className="float-left">
            <span className="unit">
              °C |{" "}
              <a href="/" onClick={showFahrenheit}>
                <span className="deactive">°F</span>
              </a>
            </span>
          </div>
        </div>
        <div className="realFeel">
          <span>Real feel {Math.round(props.realFeel)}°</span>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="clearfix">
          <div className="float-left">
            <span className="temperature">{Math.round(fahrenheit())}</span>
          </div>
          <div className="float-left">
            <span className="unit">
              <a href="/" onClick={showCelsius}>
                <span className="deactive">°C</span>
              </a>{" "}
              | °F
            </span>
          </div>
        </div>
        <div className="realFeel">
          <span>Real feel {Math.round((props.realFeel * 9) / 5 + 32)}°</span>
        </div>
      </div>
    );
  }
}
