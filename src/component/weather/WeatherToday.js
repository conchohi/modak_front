import { getCurrentWeather } from "api/weatherApi";
import React, { useEffect, useState } from "react";

function checkWeather(weather){
    let weatherNum = 0;
    switch(weather){
        case "햇빛" : weatherNum = 1; break;
        case "맑음" : weatherNum = 2; break;
        case "흐림" : weatherNum = 3; break;
        case "구름" : weatherNum = 5; break;
        case "비" : weatherNum = 6; break;
        case "눈" : weatherNum = 7; break;
        case "번개" : weatherNum = 8; break;
        default : weatherNum = 1;
    }
     return weatherNum;
}

function WeatherToday({region}){
    const [weatherData, setWeatherData] = useState({
        temp : "24",
        highTemp : "28",
        lowTemp : "14",
        description : "맑음"
    })
    useEffect(()=>{
        //날씨별로 setWeatherData(); 불러오기 axious
        getCurrentWeather(region).then(result=>{
            setWeatherData(result.data);
          }).catch(error=>{
  
        })
    },[region])

    const weatherNum = checkWeather(weatherData.weather); 
    const imgSrc = `/img/weather/${weatherNum}.jpg`;
    return(
        <div className="w-full h-2/3 flex flex-col text-center">
            <div className="p-1 flex flex-wrap items-center justify-center">
                <span className="text-lg font-bold me-3">{region}</span> 
                <span className="">{weatherData.date}</span>
            </div>
            <div className="w-full flex mt-1 flex-row flex-wrap items-center justify-center">
                <img className="w-1/3 mx-2" src={imgSrc} alt={weatherData.weather}/>{/*alt={data.description}*/}
                <span className="text-2xl font-bold mx-2">{weatherData.temp + "℃"}</span>
                <span className="mx-1 text-sm text-stone-600 font-semibold">{weatherData.description}</span>
            </div>
            <div>
                <span className="mx-1 text-sm text-blue-800 font-bold">{weatherData.highTemp+ "℃"}</span><span className="text-xs text-stone-400">/</span>
                <span className="mx-1 text-sm text-red-800 font-bold">{weatherData.lowTemp+ "℃"}</span>
            </div>

        </div>
    )
}

export default WeatherToday;