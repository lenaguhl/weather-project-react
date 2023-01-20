import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
      <div className="WeatherInfo">  
        <h1>{props.data.city}</h1>
        <div className="row">
          <div className="col-3">
            <img
             src={props.data.icon}
             alt={props.data.description} 
            />
          </div>
          <div className="col-3">
          <WeatherTemperature celsius={props.data.temperature} />
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {props.data.humidity} %
              </li>
              <li>Wind: {props.data.wind} km/h
              </li>
            </ul>    
          </div>
          <div className="text-capitalize">{props.data.description}
          </div>
          <div className="date"><FormattedDate date={props.data.date} />
          </div>
          <hr />
        </div>
      </div>  
    );
}