import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    
    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);

    }
    
    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                        <div className="WeatherForecast-day">Thu
                        </div>
                        <div className="WeatherForecast-temperatures">
                            <span className="WeatherForecast-temperature-max">
                                {forecast[0].temp.max}°C
                            </span>
                            <span className="WeatherForecast-temperature-min">
                            {forecast[0].temp.min}°C
                            </span>
                        </div>
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