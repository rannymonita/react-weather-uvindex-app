import React from "react";
export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "/asset/01d.svg",
    "01n": "/asset/01n.svg",
    "02d": "/asset/02d.svg",
    "02n": "/asset/02n.svg",
    "03d": "/asset/03d.svg",
    "03n": "/asset/03n.svg",
    "04d": "/asset/04d.svg",
    "04n": "/asset/04n.svg",
    "09d": "/asset/09d.svg",
    "09n": "/asset/09n.svg",
    "10d": "/asset/10d.svg",
    "10n": "/asset/10n.svg",
    "11d": "/asset/11d.svg",
    "11n": "/asset/11n.svg",
    "13d": "/asset/13d.svg",
    "13n": "/asset/13n.svg",
    "50d": "/asset/50d.svg",
    "50n": "/asset/50n.svg",
  };
  return <img className="icon-current" src={codeMapping[props.code]} />;
}
