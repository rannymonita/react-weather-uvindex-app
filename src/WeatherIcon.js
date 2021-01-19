import React from "react";
import ClearSkyDay from "./asset/01d.svg";
import ClearSkyNight from "./asset/01n.svg";
import FewCloudsDay from "./asset/02d.svg";
import FewCloudsNight from "./asset/02n.svg";
import ScatteredDay from "./asset/03d.svg";
import ScatteredNight from "./asset/03n.svg";
import CloudyDay from "./asset/04d.svg";
import CloudyNight from "./asset/04n.svg";
import LightRain from "./asset/09d.svg";
import LightRainNight from "./asset/09n.svg";
import RainDay from "./asset/10d.svg";
import RainNight from "./asset/10n.svg";
import ThunderstormDay from "./asset/11d.svg";
import ThunderstormNight from "./asset/11n.svg";
import SnowDay from "./asset/13d.svg";
import SnowNight from "./asset/13n.svg";
import MistyDay from "./asset/50d.svg";
import MistyNight from "./asset/50n.svg";



export default function WeatherIcon(props) {

  
  const codeMapping = {
    "01d" = {ClearSkyDay},
    "01n" = {ClearSkyNight},
    "02d" = {FewCloudsDay},
    "02n" = {FewCloudsNight},
    "03d" = {ScatteredDay},
    "03n" = {ScatteredNight},
    "04d" = {CloudyDay},
    "04n" = {CloudyNight},
    "09d" = {LightRain},
    "09n" = {LightRainNight},
    "10d" = {RainDay},
    "10n" = {RainNight},
    "11d" = {ThunderstormDay},
    "11n" = {ThunderstormNight},
    "13d" = {SnowDay},
    "13n" = {SnowNight},
    "50d" = {MistyDay},
    "50n" = {MistyNight},

}


  return (
   
    <img className="icon-current"
           
            src={codeMapping[props.code]}
            
    />);
  
  
}
