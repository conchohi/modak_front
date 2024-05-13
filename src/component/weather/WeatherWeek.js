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

function WeatherWeek({region}){
    const [allWeatherData, setAllWeatherData] = useState([
        {dow : "수", highTemp : "18", lowTemp: "28", description:"맑음"},
        {dow : "목", highTemp : "15", lowTemp: "24", description:"구름"},
        {dow : "금", highTemp : "14", lowTemp: "22", description:"흐림"},
        {dow : "토", highTemp : "17", lowTemp: "25", description:"맑음"},
        {dow : "일", highTemp : "22", lowTemp: "29", description:"햇빛"},
        {dow : "월", highTemp : "24", lowTemp: "30", description:"햇빛"},
        {dow : "화", highTemp : "19", lowTemp: "27", description:"비"},
    ]);
    useEffect(()=>{
        // setAllWeatherData() axios로 불러오기
    },[region])
    return(
        <div className="w-full h-1/3 flex flex-row flex-nowrap text-center justify-between items-center">
            {allWeatherData.map((day)=>{
                let weatherNum = checkWeather(day.description); //day.description
                let imgSrc = `/img/weather/${weatherNum}.jpg`;
                return(
                    <div className="flex flex-col justify-center items-center w-[14%] text-xs" key={day.dow}>
                        <p className="text-sm font-bold mb-1">{day.dow}</p>
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