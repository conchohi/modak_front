import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import TopMenuDrop from "./TopMenuDrop";
import useDropdown from "../../hooks/useDropdown";

function TopMenu() {
  const ref = useRef();
  const [isDropdown, setIsDropdown] = useDropdown(ref, false);

  const hoverNav = () => {
    setIsDropdown(true);
  };

  const outsideNav = () => {
    setIsDropdown(false);
  };

  return (
    <div ref={ref} className="w-4/5 mx-auto my-5 border-b border-gray-400">
      <ul
        className="flex justify-start p-3 font-semibold text-lg"
        onMouseOver={hoverNav}
        onMouseOut={outsideNav}
      >
        <li className="text-center px-3 w-1/4 md:w-1/6">
          <Link className="py-1" to="/">
            캠핑정보
          </Link>
        </li>
        <li className="text-center px-3 w-1/4 md:w-1/6">
          <Link className="py-1" to="/">
            캠핑장
          </Link>
        </li>
        <li className="text-center px-3 w-1/4 md:w-1/6">
          <Link className="py-1" to="/">
            커뮤니티
          </Link>
        </li>
        <li className="text-center px-3 w-1/4 md:w-1/6">
          <Link className="py-1" to="/notice">
            고객지원
          </Link>
        </li>
      </ul>
      {isDropdown && (
        <TopMenuDrop onMouseOver={hoverNav} onMouseOut={outsideNav} />
      )}
    </div>
  );
}

export default TopMenu;
