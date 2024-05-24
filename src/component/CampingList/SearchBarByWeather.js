import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCustomMove from "../../hooks/useCustomMove";
import useCustomMoveByWeather from "hooks/useCustomMoveByWeather";

const SearchBarByWeather = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const {weather,date,type, moveToList} = useCustomMoveByWeather();
  const handleSearchChange = (e)=>{
    setSearchTerm(e.target.value);
  }

  const handleSearchClick = () =>{
    moveToList({date:date, weather:weather, type:type,searchTerm:searchTerm})
  }

  return (
    <div className="flex w-full justify-center items-center p-4 bg-[#ffffff] rounded-lg">
      <div className="flex w-full border-2 border-gray-200 bg-white rounded overflow-hidden">
        <input
          type="text"
          placeholder="캠핑장 검색" // placeholder 텍스트 수정
          value={searchTerm}
          onChange={handleSearchChange}
          className="px-4 py-2 w-4/5 focus:outline-none" // input 필드의 길이 조정은 w-full 유지
          onKeyUp={(e)=>{
            if(e.key === "Enter") {
              handleSearchClick()
            }
          }}
        />
        <button
          onClick={handleSearchClick}
          className="flex w-1/5 items-center justify-center text-center border-l text-white bg-stone-700 hover:bg-stone-900" // 호버 효과 추가
        >

          <svg
            className="w-6 h-6 "
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <span className=" text-sm md:text-base font-semibold">검색</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBarByWeather;
