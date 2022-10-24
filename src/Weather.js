import React, { useState } from "react";
import "./Weather.css";
import { FaSistrix } from "react-icons/fa";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      city: response.data.city,
      country: response.data.country,
      feelsLike: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      pressure: response.data.temperature.pressure,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row mt-3">
          <div className="col-4 mt-3">
            <div className="weather-wraper">
              <form className="search-form">
                <input
                  type="search"
                  placeholder="Search for location"
                  className="search-input"
                />
                <button type="submit">
                  <FaSistrix className="search-icon" />
                </button>
              </form>
              <div className="current-info text-center">
                <h2 className="city"> {weatherData.city}</h2>
                <h3>{weatherData.country}</h3>
                <p className="current-time">Sunday, 07:00</p>
                <div className="temperature">
                  <span className="degree">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="unit">°C</span>
                </div>
                <img src={weatherData.iconUrl} alt={weatherData.description} />
                <p className="description mb-4 text-capitalize">
                  {weatherData.description}
                </p>
                <div className="row">
                  <div className="col-6">
                    <ul>
                      <li class="text-start ms-4">
                        Feels like: {Math.round(weatherData.feelsLike)}°C
                      </li>
                      <li class="text-start ms-4">
                        Pressure: {weatherData.pressure} mb
                      </li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul>
                      <li>Humidity: {weatherData.humidity}%</li>
                      <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4"></div>
          <div className="col-4"></div>
        </div>
      </div>
    );
  } else {
    const apiKey = "d97eeco2aa6b080480fff698dt6ae034";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#e1e3f0"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    );
  }
}
