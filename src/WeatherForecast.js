import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay"

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false); 
    }, [props.coordinates]);


    
    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);

    }
    
    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                        <WeatherForecastDay data={forecast[0]} />
                    </div>
                    <div className="col">
                        <WeatherForecastDay data={forecast[1]} />
                    </div>
                    <div className="col">
                        <WeatherForecastDay data={forecast[2]} />
                    </div>
                    <div className="col">
                        <WeatherForecastDay data={forecast[3]} />
                    </div>
                    <div className="col">
                        <WeatherForecastDay data={forecast[4]} />
                    </div>
                </div>
            </div>
        );
    
    } else {
        let apiKey = "9fe3a68ab1bf5ae6657beb094etod7d0";
        let longitude = props.coordinates.longitude;
        let latitude = props.coordinates.latitude;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);

        return null;   
    }
}