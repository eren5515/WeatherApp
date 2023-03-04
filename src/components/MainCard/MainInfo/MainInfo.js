import React from "react";
import "./MainInfo.css";
import sunny from "./imgs/sunny.png";
import cloudy from "./imgs/cloudy.png";
import rainy from "./imgs/rainy.png";


function MainInfo(props) {
    const days = ["MON","TUE","WED","THU","FRI","SAT","SUN"]

    const currentWeather = props.currentWeatherData;
    
   

   const temp = parseInt(currentWeather.main.temp);
   const feelsLike = parseInt(currentWeather.main.feels_like);
   var description = (currentWeather.weather[0].description).toString().toUpperCase();

 const date = new Date();
 let currentDay = date.getDate();
 let weekDay = date.getUTCDay();


   

   if (currentWeather.weather.main ==="Rain" || currentWeather.weather[0].main ==="Snow" ){
    var image=rainy;
   }

   else if (currentWeather.weather[0].main ==="Clear"){
    var image=sunny;
   }
   else {
    var image=cloudy;
   }
    

   
  return (
    <div className="MainDiv">
      <div>
        <h2>{days[weekDay]} {currentDay}</h2>
        <h3>{currentWeather.city}</h3>
      </div>
      <div>
        <img src={image}></img>
        <h4>{description}</h4>
      </div>
      <div><h1>{temp}°C</h1>
      <h3>Feels like: {feelsLike}°C</h3></div>
    </div>
  );
}

export default MainInfo;
