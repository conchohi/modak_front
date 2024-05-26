import { getWeeklyWeather } from "api/weatherApi";
import React, { useEffect, useState } from "react";

function checkWeather(weather){
    let weatherNum = 0;
    switch(weather){
        case "햇빛" : weatherNum = 1; break;
        case "맑음" : weatherNum = 2; break;
        case "흐림" : weatherNum = 3; break;
        case "박무" : weatherNum = 4; break;
        case "구름" : weatherNum = 5; break;
        case "비" : weatherNum = 6; break;
        case "눈" : weatherNum = 7; break;
        case "번개" : weatherNum = 8; break;
        default : weatherNum = 1;
    }
     return weatherNum;
}


function WeatherWeek({region}){
    const [allWeatherData, setAllWeatherData] = useState([

    ]);
    useEffect(()=>{
        getWeeklyWeather(region)
        .then(result=>{
            result.data.length = 7;
            setAllWeatherData(result.data);
        }).catch(error=>{
  
        })
    },[region])

    return(
        <div className="w-full h-1/3 flex flex-row flex-nowrap text-center justify-between items-center">
            {allWeatherData.map((day)=>{
                let weatherNum = checkWeather(day.weather); //day.description
                let imgSrc = `/img/weather/${weatherNum}.jpg`;
                return(
                    <div className="flex flex-col justify-center items-center w-[14%] text-xs" key={day.day}>
                        <p className="text-sm font-bold mb-1">{day.day}</p>
                        <img className="w-2/3" src={imgSrc} alt="날씨"/>
                        <div className="mt-1 text-xs">
                            <span className="text-blue-800">{day.lowTemp}</span>/
                            <span className="text-red-800">{day.highTemp}</span>
                        </div>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default WeatherWeek;