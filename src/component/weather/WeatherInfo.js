import React, {useState, useEffect} from "react";
import WeatherToday from "./WeatherToday";
function WeatherInfo(regionNum){
    const [weather, setWeather] = useState(null)
    // useEffect(()=>{
    //     //api 넣기
    //     console.log('hi')
    // }, regionNum)

    return(
        <>
            <WeatherToday/>
            <hr/>
            <div>
                오늘(수) 목 금 토 일 월 화
            </div>
        </>
    )
}

export default WeatherInfo;