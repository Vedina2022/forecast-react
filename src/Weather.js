import React from "react";
import "./Weather.css";
import { FaSistrix } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col mt-3">
          <div className="weather-wraper">
            <form>
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
              <h2 className="city">Mykolaiv, UA</h2>
              <p className="current-time">Sunday, 07:00</p>
              <div className="temperature">
                <span className="degree">18</span>
                <span className="unit">°C</span>
              </div>

              <img
                src="https://assets.msn.com/weathermapdata/1/static/svg/72/v2/card_fix_partlysunny/PartlyCloudyDayV3.svg"
                alt="icon-cloud"
                width={80}
              />
              <p className="description mb-5 ">Cloudly</p>
              <div className="row">
                <div className="col-6">
                  <ul>
                    <li>Feels like: 18°C</li>
                    <li>Humidity: 30%</li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li>Humidity: 30%</li>
                    <li>Wind: 5 km/h</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
    </div>
  );
}
