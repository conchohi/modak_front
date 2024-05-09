import React, { useState } from "react";

const SideNav = ({ handleFilterChange }) => {
  const [showRegions, setShowRegions] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  return (
    <div className="w-64 bg-white shadow-md p-4">
      <div className="mt-4">
        {/* 지역 섹션 토글 버튼 */}
        <button
          className="text-lg font-semibold mb-2 flex justify-between items-center w-full text-left" // 텍스트 크기를 text-lg로 통일
          onClick={() => setShowRegions(!showRegions)}
        >
          지역
          <span>{showRegions ? "-" : "+"}</span>
        </button>
        {showRegions && (
          <div className="flex">
            <div className="flex items-center mr-4">
              <input
                type="radio"
                id="categoryA"
                name="category"
                value="A"
                onChange={handleFilterChange}
                className="accent-pink-500 h-4 w-4"
              />
              <label htmlFor="categoryA" className="ml-2 text-sm">
                서울
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="categoryB"
                name="category"
                value="B"
                onChange={handleFilterChange}
                className="accent-pink-500 h-4 w-4"
              />
              <label htmlFor="categoryB" className="ml-2 text-sm">
                부산
              </label>
            </div>
          </div>
        )}

        {/* 카테고리 섹션 토글 버튼 */}
        <button
          className="text-lg font-semibold mb-4 mt-4 flex justify-between items-center w-full text-left" // 텍스트 크기를 text-lg로 통일 및 mt-4 추가로 간격 조정
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
