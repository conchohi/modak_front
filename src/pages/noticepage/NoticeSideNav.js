// src/components/SideNav.js

import React from "react";

function NoticeSideNav() {
  return (
    <div className="bg-white text-black w-30 h-full shadow-lg border border-gray-300 rounded-lg ">
      <div className="p-6 font-bold text-xl">고객지원</div>
      <ul className="p-5">
        <li className="py-2 hover:bg-gray-200">
          <a href="/notice">공지사항</a>
        </li>
        <li className="py-2 hover:bg-gray-200">
          <a href="/faq">FAQ</a>
        </li>
      </ul>
    </div>
  );
}

export default NoticeSideNav;
