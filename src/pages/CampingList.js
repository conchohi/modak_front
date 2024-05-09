import React, { useState, useEffect } from "react";
import "../style/CampingList.css";
import Footer from "./Footer";

// SearchBar 컴포넌트
const SearchBar = ({ searchTerm, handleSearchChange, handleSearchClick }) => {
  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="캠핑장 검색"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button onClick={handleSearchClick}>검색</button>
    </div>
  );
};

// SideNav 컴포넌트
const SideNav = ({ handleFilterChange }) => {
  return (
    <div className="sideNav">
      {[...Array(10).keys()].map((index) => (
        <div key={index}>
          <input
            type="checkbox"
            id={`filter${index}`}
            name={`filter${index}`}
            onChange={handleFilterChange}
          />
          <label htmlFor={`filter${index}`}>{`필터${index + 1}`}</label>
        </div>
      ))}
    </div>
  );
};

// CampingList 메인 컴포넌트
const CampingList = () => {
  const [campings, setCampings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({});

  useEffect(() => {
    setCampings([]);
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {};

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilters({ ...filters, [name]: checked });
  };

  const filteredCampings = campings.filter((camping) =>
    camping.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <header>
        <div className="loginSection">
          <LoginSection />
        </div>
      </header>
      <body>
        <div className="searchBar">
          <SearchBar
            searchTerm={searchTerm}
            handleSearchChange={handleSearchChange}
            handleSearchClick={handleSearchClick}
          />
        </div>
        <div className="sideNav">
          <SideNav handleFilterChange={handleFilterChange} />
        </div>

        <div className="campingList">
          {filteredCampings.map((camping) => (
            <div className="campingCard" key={camping.id}>
              <img src={camping.image} alt={camping.name} />
              <div>{camping.name}</div>
            </div>
          ))}
        </div>
      </body>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default CampingList;