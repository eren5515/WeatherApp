import React from "react";
import "./MainCard.css";
import "./MainInfo/MainInfo";
import MainInfo from "./MainInfo/MainInfo";
import WeeklyInfo from "./WeeklyInfo/WeeklyInfo";

function MainCard(props) {
  return (
    <div className="MainCard">
      <MainInfo currentWeatherData={props.currentWeatherData}></MainInfo>
      <WeeklyInfo forecastData={props.forecastData}></WeeklyInfo>
    </div>
  );
}

export default MainCard;
