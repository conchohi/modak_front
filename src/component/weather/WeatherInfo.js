import React, {useState, useEffect} from "react";
import WeatherToday from "./WeatherToday";
import WeatherWeek from "./WeatherWeek";
function WeatherInfo({region}){
    /*
        weatherData = {
            region : , today : {highTemp: , lowTemp, description, temp}, 
            week : [{highTemp : , lowTemp : , description : , date :},  {}, {}, ..., {} ]
        }
    */
    return(
        <>
            <WeatherToday region= {region}/>
            <hr/>
            <WeatherWeek region={region}/>
        </>
    )
}

export default WeatherInfo;