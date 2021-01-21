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
        <UvIndex data={props.data} />
      </div>
    </div>
  );
}
