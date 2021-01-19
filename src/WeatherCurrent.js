import React from "react";
import FormattedDate from "./FormattedDate";
import icon from "./asset/02d.svg";

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
          <div className="clearfix">
            <div className="float-left">
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
            </div>
            <div className="float-left">
              <span className="unit">°C | °F</span>
            </div>
          </div>
          <p>{props.data.description}</p>
        </div>
        <div className="col-md-6">
          <img
            id="main-icon"
            alt="weather"
            src={icon}
            className="icon-current"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h4>UV Index</h4>
          <hr />
          <ul className="list-group">
            <li className="list-group-item">
              Value : <span id="uv-index">2</span> (low)
            </li>
            <li className="list-group-item">
              Suggestion :{" "}
              <span id="uv-suggestion">
                Use extra protection when staying outdoor.
              </span>
            </li>
            <li className="list-group-item">
              For more info about Sun Safety,{" "}
              <a
                href="https://www.epa.gov/sunsafety/action-steps-sun-safety"
                target="_blank"
                rel="noreferrer"
              >
                click here
              </a>
              .
            </li>
          </ul>
        </div>
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
      </div>
    </div>
  );
}
