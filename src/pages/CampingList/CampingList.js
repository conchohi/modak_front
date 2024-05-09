import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import SideNav from "./SideNav";
import CampingFinder from "./CampingFinder";
import TrendSlider from "./TrendSlider"; // TrendSlider 컴포넌트 임포트

function CampingList() {
  // 상태 및 이벤트 핸들러 정의
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({});
  const [filteredCampings, setFilteredCampings] = useState([]);

  // 예시 데이터
  const trendItems = [
    { img: "trendItem1.jpg", name: "캠핑 아이템 1" },
    { img: "trendItem2.jpg", name: "캠핑 아이템 2" },
    { img: "trendItem3.jpg", name: "캠핑 아이템 3" },
    // 추가 아이템...
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    // 검색 로직
  };

  const handleFilterChange = (event) => {
    const { name, checked } = event.target;
    setFilters({ ...filters, [name]: checked });
    // 필터 로직
  };

  // useEffect를 사용하여 campings 상태 업데이트 로직을 추가 가능

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
        handleSearchClick={handleSearchClick}
      />
      <TrendSlider items={trendItems} /> {/* TrendSlider 컴포넌트 배치 */}
      <SideNav handleFilterChange={handleFilterChange} />
      <CampingFinder campings={filteredCampings} />
      {/* 그 외 필요한 요소들 */}
    </>
  );
}

export default CampingList;
