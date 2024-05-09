import React from "react";

const SearchBar = ({ searchTerm, handleSearchChange, handleSearchClick }) => {
  return (
    <div className="flex justify-center items-center p-4 bg-[#ffffff] shadow rounded-lg">
      <div className="flex border-2 border-pink-100 bg-white rounded overflow-hidden">
        <input
          type="text"
          placeholder="캠핑장 검색" // placeholder 텍스트 수정
          value={searchTerm}
          onChange={handleSearchChange}
          className="px-4 py-2 w-f1 focus:outline-none" // input 필드의 길이 조정은 w-full 유지
        />
        <button
          onClick={handleSearchClick}
          className="flex items-center justify-center px-4 border-l hover:bg-pink-50" // 호버 효과 추가
        >
          <svg
            className="w-6 h-6 text-pink-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
