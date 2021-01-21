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

          <WeatherTemperature
            celsius={props.data.temperature}
            unit={props.unit}
            setUnit={props.setUnit}
            realFeel={props.data.realFeel}
          />

          <p>Humidity : {props.data.humid}%</p>
          <p>Wind : {Math.round(props.data.wind)} Km/hr</p>
          <p>{props.data.description}</p>
        </div>
        <div className="col-md-6 icon-current">
          <WeatherIcon code={props.data.iconId} alt={props.data.description} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h4>UV Index Today</h4>
          <hr />

          <UvIndex data={props.data} />
          <ul className="list-group uvFooter">
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
      </div>
    </div>
  );
}
