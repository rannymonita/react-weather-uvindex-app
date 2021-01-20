import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastPreview(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return `${day}`;
  }

  return (
    <div className="col">
      <ul className="list-group daily">
        <li className="list-group-item day">{day()}</li>
        <li className="list-group-item icon">
          <WeatherIcon code={props.data.weather[0].icon} />
        </li>
        <li className="list-group-item max-temp">
          {Math.round(props.data.temp.max)}°
        </li>
        <li className="list-group-item min-temp">
          {Math.round(props.data.temp.min)}°
        </li>
      </ul>
    </div>
  );
}
