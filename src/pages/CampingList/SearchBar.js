import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    // 검색 로직
  };

  return (
    <div className="flex justify-center items-center p-4 bg-[#ffffff] shadow rounded-lg">
      <div className="flex border-2 border-pink-100 rounded overflow-hidden">
        <input
          type="text"
          placeholder="캠핑장 검색"
          value={searchTerm}
          onChange={handleSearchChange}
          className="px-4 py-2 w-full focus:outline-none"
        />
        <button
          onClick={handleSearchClick}
          className="flex items-center justify-center px-4 border-l hover:bg-pink-50"
        >
          {/* 아이콘 등 */}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
