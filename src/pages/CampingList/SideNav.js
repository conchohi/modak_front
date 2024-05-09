import React from "react";

const SideNav = ({ handleFilterChange }) => {
  return (
    <div className="w-64 bg-white shadow-md p-4">
      <h2 className="text-lg font-semibold mb-4">카테고리</h2>
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
              {`필터${index + 1}`}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
