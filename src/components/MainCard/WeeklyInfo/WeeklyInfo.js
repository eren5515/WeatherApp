import React from "react";
import "./WeeklyInfo.css";
import sunny from "../MainInfo/imgs/sunny.png"
import cloudy from "../MainInfo/imgs/cloudy.png";
import rainy from "../MainInfo/imgs/rainy.png";


const weekDays = ["MON","TUE","WED","THU","FRI","SAT","SUN"];

function WeeklyInfo(props){
    const weekDay = (new Date().getDay());

   const forecastDays = weekDays.slice(weekDay,weekDays.length).concat(weekDays.slice(0,weekDay));
   console.log(forecastDays);


    const forecastList = (props.forecastData.list).slice(0,7);
    console.log(forecastList);

    return <div className="weekly-info">
    <p className="asf">Next 7 days...</p>
        <div className="forecast-div">
        {forecastList.map((item, index) => {
            if (item.weather[0].main ==="Rain" || item.weather[0].main ==="Snow" ){
    var image=rainy;
   }

   else if (item.weather[0].main ==="Clear"){
    var image=sunny;
   }
   else {
    var image=cloudy;
   }


        return (
            <div className="day-card">
               <p className="day-info">{forecastDays[index]}</p>
                <img className="forecast-img" src={image}></img>
                <p className="day-info">{parseInt(item.main.temp)}°C</p>
                
            </div>
        )
    })}
    </div>
    </div>
}

export default WeeklyInfo;


