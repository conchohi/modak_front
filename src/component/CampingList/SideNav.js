import React, { useState, useEffect } from "react";
import useCustomMove from "../../hooks/useCustomMove";
import { useNavigate } from "react-router-dom";

const SideNav = () => {
  const [showType, setShowType] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const {region, type} = useCustomMove();
  const navigate = useNavigate();

  const [selectType, setSelectType] = useState(type);
  // 타입 데이터를 배열로 관리
  const types =[
    { id: "", name: "전체" },
    { id: "글램핑", name: "글램핑" },
    { id: "카라반", name: "카라반" },
    { id: "오지노지", name: "오지/노지" },
    { id: "오토캠핑", name: "오토캠핑" },
  ];

  const facilities =[
    { id: "샤워실", name: "샤워실" },
    { id: "개수대", name: "개수대" },
    { id: "매점", name: "매 점" },
    { id: "애완동물 동반", name: "애완동물 동반" },
    { id: "와이파이", name: "와이파이" },
    { id: "화장실", name: "화장실" },
  ];

  useEffect(() => {
    navigate(`/camp/list?region=${region}&type=${selectType}`)
  }, [selectType]); 

  return (
    <div className="w-4/5 md:w-full bg-white shadow-md p-5 md:p-3 border border-gray-300 rounded-xl">
      <div className="flex flex-col justify-center">
        <div className="pb-3 border-b">       {/* 지역 섹션 토글 버튼 */}
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
                            name="region"
                            className="accent-stone-500 h-4 w-4"
                            onChange={(e)=>{
                              setSelectType(e.target.id);
                            }}
                            value={typeElement.name} defaultChecked={typeElement.name==="전체"?true:(typeElement.name===type?true:false)}/>
                          <label htmlFor={typeElement.id} className="ml-1 text-sm">
                            {typeElement.name}
                          </label>
                      </div>
                    )
                    
                  })}
              </div>
          )}
          </div>
        <div>
        {/* 카테고리 섹션 토글 버튼 */}
          <button
            className="text-lg font-semibold mb-4 mt-4 flex justify-between items-center w-full text-left"
            onClick={() => setShowCategories(!showCategories)}
          >
            시설 고려사항
            <span>{showCategories ? "-" : "+"}</span>
          </button>
          {showCategories && (
            <div className="flex flex-row flex-wrap gap-3">
              {facilities.map(facility=>{
                return(
                  <div className="flex items-center" key={facility.id}>
                    <input
                          type="checkbox"
                          id={facility.id}
                          name={facility.name}
                          className="accent-gray-500 h-4 w-4"
                        />
                        <label htmlFor={facility.id} className="ml-1 text-sm">
                          {facility.name}
                    </label>
                </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
