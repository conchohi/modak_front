import React, { useState, useEffect } from "react";

const SideNav = ({ handleFilterChange }) => {
  const [showRegions, setShowRegions] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  // 지역 데이터를 배열로 관리
  const [regions, setRegions] = useState([
    { id: "seoul", name: "서울" },
    { id: "busan", name: "부산" },
    { id: "daegu", name: "대구" },
    { id: "incheon", name: "인천" },
    { id: "gwangju", name: "광주" },
    { id: "daejeon", name: "대전" },
    { id: "ulsan", name: "울산" },
    { id: "sejong", name: "세종" },
    { id: "gyeonggi", name: "경기" },
    { id: "gangwon", name: "강원" },
    { id: "chungbuk", name: "충북" },
    { id: "chungnam", name: "충남" },
    { id: "jeonbuk", name: "전북" },
    { id: "jeonnam", name: "전남" },
    { id: "gyeongbuk", name: "경북" },
    { id: "gyeongnam", name: "경남" },
    { id: "jeju", name: "제주" },
    //지역 추가
  ]);

  useEffect(() => {
    setRegions((prevRegions) => {
      const sortedRegions = [...prevRegions].sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      return sortedRegions;
    });
  }, []); // 오름차순으로 정렬하기

  return (
    <div className="w-64 bg-white shadow-md p-4">
      <div className="mt-4">
        {/* 지역 섹션 토글 버튼 */}
        <button
          className="text-lg font-semibold mb-2 flex justify-between items-center w-full text-left"
          onClick={() => setShowRegions(!showRegions)}
        >
          지역
          <span>{showRegions ? "-" : "+"}</span>
        </button>
        {/*한 행에 2개씩 나열하기*/}
        {showRegions && (
          <div>
            {regions
              .reduce((acc, region, index) => {
                // 현재 인덱스가 짝수일 경우 새로운 행을 시작
                if (index % 2 === 0) {
                  acc.push([region]);
                } else {
                  // 현재 인덱스가 홀수일 경우 마지막 행에 지역 추가
                  acc[acc.length - 1].push(region);
                }
                return acc;
              }, [])
              .map(
                (
                  regionPair,
                  pairIndex // 각 행마다 2개의 지역을 묶어서 처리
                ) => (
                  <div key={pairIndex} className="flex justify-start mb-2">
                    {regionPair.map((region) => (
                      <div key={region.id} className="flex items-center mr-4">
                        <input
                          type="radio"
                          id={region.id}
                          name="region"
                          value={region.id}
                          onChange={handleFilterChange}
                          className="accent-pink-500 h-4 w-4"
                        />
                        <label htmlFor={region.id} className="ml-2 text-sm">
                          {region.name}
                        </label>
                      </div>
                    ))}
                  </div>
                )
              )}
          </div>
        )}

        {/* 카테고리 섹션 토글 버튼 */}
        <button
          className="text-lg font-semibold mb-4 mt-4 flex justify-between items-center w-full text-left"
          onClick={() => setShowCategories(!showCategories)}
        >
          카테고리
          <span>{showCategories ? "-" : "+"}</span>
        </button>
        {showCategories && (
          <div className="flex flex-col">
            {[...Array(10).keys()].map((index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`filter${index}`}
                  name={`filter${index}`}
                  onChange={handleFilterChange}
                  className="accent-pink-500 h-4 w-4"
                />
                <label htmlFor={`filter${index}`} className="ml-2 text-sm">
                  {`Filter ${index + 1}`}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SideNav;
