import React, {useState, useEffect} from "react";
import WeatherToday from "./WeatherToday";
import WeatherWeek from "./WeatherWeek";
function WeatherInfo({weatherData}){
    /*
        weatherData = {
            region : , today : {highTemp: , lowTemp, description, temp}, 
            week : [{highTemp : , lowTemp : , description : , date :},  {}, {}, ..., {} ]
        }
    */
    return(
        <>
            <WeatherToday region= {weatherData.region} data={weatherData.today}/>
            <hr/>
            <WeatherWeek data={weatherData.week}/>
        </>
    )
}

export default WeatherInfo;