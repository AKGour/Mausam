import React, { useState, useEffect } from "react";
import "./weatherStyle.css";
import { FcLike } from "react-icons/fc";
import { FaReact } from "react-icons/fa";
import { RiCelsiusLine } from "react-icons/ri";
import { FiPercent } from "react-icons/fi";
import axios from "axios";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState({});

  const apiKey = "099238949816ac9b3facc64b2dc46abf"
  const getWeatherDetail = (city)=>{
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey+"&units=metric";
    axios.get(url).then((res) => {
      // console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      // console.log("err", err)
      alert("No city found with the provided name, Please try again")
    })
  }
 
 
  const changeHandle = (event) => {
    setSearch(event.target.value);
  };
 
  const btnHandler = () => {
    getWeatherDetail(search)
  
 
  };

  return (
    <>
      <div className="main-box">
        <h3 className="title">MAUSAM</h3>
        <div className="input-box">
          <input
            className="input"
            type="text"
            name="search"
            value={search}
            placeholder="Please enter the city name"
            onChange={changeHandle}
          />
          {/* {search}
          {console.log(search)} */}
          <button className="btn-find" onClick={btnHandler}>
            Search
          </button>
        </div>
        <div className="temp-box">
          <div className="main-temp">
            <h2 className="temp-title">Current Temperature </h2>
        
            <h1 className="temp-data">
              {data?.main?.temp}
              <RiCelsiusLine />
            </h1>
          </div>
          <div className="secondary-temp">
            <div className="max-temp">
              Maximum Temparature {data?.main?.temp_max } <RiCelsiusLine />
            </div>
            <div className="min-temp">
              Minimum Temparature {data?.main?.temp_min} <RiCelsiusLine />
            </div>
            <div className="pressure">Pressure {data?.main?.pressure} hPa</div>
            <div className="humidity">
              Humidity {data?.main?.humidity} <FiPercent />
            </div>
          </div>
        </div>
      </div>
  
    </>
  );
};

export default Weather;
