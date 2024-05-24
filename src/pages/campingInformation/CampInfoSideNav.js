import React from "react";

function CampInfoSideNav() {
  return (
    <div className="bg-white text-black w-30 h-full shadow-lg border border-gray-300 rounded-lg">
      <div className="px-5 pt-5 pb-3 p font-bold text-xl">캠핑정보</div>
      <ul className="px-5">
        <li className="py-2 hover:bg-gray-200">
          <a href="/campinfo">캠핑 준비</a>
        </li>
        <li className="py-2 hover:bg-gray-200">
          <a href="/campfood">음식 추천</a>
        </li>
      </ul>
    </div>
  );
}

export default CampInfoSideNav;
