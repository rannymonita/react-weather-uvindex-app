import React from "react";
import FormattedDate from "./FormattedDate";
import UvIndex from "./UvIndex";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherCurrent(props) {
  return (
    <div className="WeatherCurrent">
      <div className="row">
        <div className="col-md-6">
          <h3>{props.data.city}</h3>
          <span className="date">
            <FormattedDate date={props.data.date} />
          </span>
          <br />

          <WeatherTemperature celsius={props.data.temperature} />

          <p>{props.data.description}</p>
        </div>
        <div className="col-md-6 icon-current">
          <WeatherIcon code={props.data.iconId} alt={props.data.description} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h4>Weather Details</h4>
          <hr />
          <ul className="list-group">
            <li className="list-group-item">
              Real feel :{" "}
              <span id="real-feel-temp">{Math.round(props.data.realFeel)}</span>
              &deg;
            </li>
            <li className="list-group-item">
              Humidity : <span id="humidity">{props.data.humid}</span>%
            </li>
            <li className="list-group-item">
              Wind : <span id="wind-speed">{Math.round(props.data.wind)}</span>{" "}
              Km/hr
            </li>
          </ul>
        </div>
        <UvIndex />
      </div>
    </div>
  );
}
