import React, { useState, useEffect } from "react";
import useCustomMove from "../../hooks/useCustomMove";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "../../style/Calendar.css"
import CalendarComponent from "component/Calendar";
import useCustomMoveByWeather from "hooks/useCustomMoveByWeather";
  // 타입 데이터를 배열로 관리
  const weathers =[
    { id: "", name: "전체" },
    { id: "맑음", name: "맑음" },
    { id: "흐림", name: "흐림" },
    { id: "구름", name: "구름" },
    { id: "비", name: "비" },
    { id: "박무", name: "안개" },
    { id: "눈", name: "눈" },
  ]
  const types =[
    { id: "", name: "전체" },
    { id: "일반캠핑장", name: "일반캠핑장" },
    { id: "글램핑", name: "글램핑" },
    { id: "카라반", name: "카라반" },
    { id: "오토캠핑", name: "오토캠핑" },
  ];

const SideNavByWeather = () => {
  const {date, weather, searchTerm, type, moveToList} = useCustomMoveByWeather();
  const [selectWeather, setSelectWeather] = useState(weather);
  const [showType, setShowType] = useState(false);
  const [selectType, setSelectType] = useState(type);
  const [selectDate, setSelectDate] = useState(date);

  useEffect(() => {
    moveToList({date:selectDate, weather:selectWeather, searchTerm:searchTerm, type:selectType})
  }, [selectWeather, selectType, selectDate]); 

  return (
    <div className="w-4/5 md:w-full bg-white shadow-md p-5 md:p-3 border border-gray-300 rounded-xl">
      <div className="flex flex-col justify-center">
      <div className="pb-3 border-b mb-5">       {/* 지역 섹션 토글 버튼 */}
          <button
            className="text-lg font-semibold mb-2 flex justify-between items-center w-full text-left"
            onClick={() => setShowType(!showType)}
          >
            캠핑 타입
            <span>{showType ? "-" : "+"}</span>
          </button>
          {/*한 행에 2개씩 나열하기*/}
          {showType && (
              <div className="flex flex-wrap gap-1">
                  {types.map(typeElement=>{
                    return(
                      <div className="flex flex-row w-24" key={typeElement.id}>
                        <input
                            type="radio"
                            id={typeElement.id}
                            name="type"
                            className="accent-stone-500 h-4 w-4"
                            onChange={(e)=>{
                              setSelectType(e.target.id);
                            }}
                            value={typeElement.name} defaultChecked={typeElement.name==="전체"?true:(typeElement.id===type?true:false)}/>
                          <label htmlFor={typeElement.id} className="ml-1 text-sm">
                            {typeElement.name}
                          </label>
                      </div>
                    )
                    
                  })}
              </div>
          )}
          </div>

        <div className="pb-3 mb-5 border-b-2">
        <span className="text-lg font-semibold mb-2 flex justify-between items-center w-full text-left"> 날짜</span>
        <CalendarComponent callbackFunction={setSelectDate}/>
        </div>
        <div className="pb-3 mb-5">    
        <span className="text-lg font-semibold mb-2 flex justify-between items-center w-full text-left"> 날씨</span>
        
              <div className="flex flex-wrap gap-2">
                  {weathers.map(weatherElement=>{
                    return(
                      <div className="flex flex-row me-2" key={weatherElement.id}>
                        <input
                            type="radio"
                            id={weatherElement.id}
                            name="weather"
                            className="accent-stone-500 h-4 w-4"
                            onChange={(e)=>{
                              setSelectWeather(e.target.id);
                            }}
                            value={weatherElement.name} defaultChecked={weatherElement.name==="전체"?true:(weatherElement.id===weather?true:false)}/>
                          <label htmlFor={weatherElement.id} className="ml-1 text-sm">
                            {weatherElement.name}
                          </label>
                      </div>
                    )
                    
                  })}
              </div>
          
          </div>
 

      </div>
    </div>
  );
};

export default  SideNavByWeather;
