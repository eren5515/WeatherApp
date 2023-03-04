import React, { useState } from "react";
import MainCard from "./components/MainCard/MainCard";
import "./App.css";
import Search from "./components/Search/Search";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  function handleOnSearchChange(search) {
    console.log(search);

    const [lat, lon] = search.value.split(" ");
    console.log(lat);
    console.log(lon);
    const currentWeatherFetch = fetch(
      WEATHER_API_URL +
        "weather?lat=" +
        lat +
        "&lon=" +
        lon +
        "&appid=" +
        WEATHER_API_KEY +
        "&units=metric"
    );

    const forecastFetch = fetch(
      WEATHER_API_URL +
        "forecast?lat=" +
        lat +
        "&lon=" +
        lon +
        "&appid=" +
        WEATHER_API_KEY +
        "&units=metric"
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWeather({ city: search.label, ...weatherResponse });
        console.log(currentWeather);
        setForecast({ city: search.label, ...forecastResponse });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange}></Search>
      {currentWeather && forecast && (
        <MainCard
          currentWeatherData={currentWeather}
          forecastData={forecast}
        ></MainCard>
      )}
    </div>
  );
}

export default App;
