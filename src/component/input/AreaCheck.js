//input폴더 - AreaCheck.js

import React, { useState } from 'react';

function AreaCheck() {

    //선택된 지역의 값 설정
    const [selectedValue, setSelectedValue] = useState('');

    //드롭다운 여부값 설정
    const [clickValue, setClickValue] = useState(false);

    //클릭될 경우 selectedValue 값에 클릭된 값 설정
    const handleItemClick = (value) => {
        setSelectedValue(value);
    };

    // 클릭할 때마다 clickValue의 상태를 변경
    const handleDropdownClick = () => {
        setClickValue(!clickValue); 
      };

    return (
        <div className="relative inline-block text-left w-1/12">
            {/* 선택한 값이 보여지는 부분 */}
            <div className="flex items-center justify-between bg-white border border-orange-900 rounded-md shadow-sm px-4 py-2
            cursor-pointer" onClick={handleDropdownClick} >
                <span>{selectedValue || '지역'}</span>
                <svg
                    className="h-3 w-3 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </div>
            {/* 드롭다운 메뉴 */}
            {/* 서울, 인천, 경기, 대전, 세종, 충남, 충북,강원, 광주, 전북, 전남, 부산, 대구, 울산, 경북, 경남, 제주 */}

            {clickValue && (
            <div className="absolute z-10 mt-2 w-28 bg-white border border-gray-300 rounded-md shadow-lg">
                <ul>
                    <li
                        onClick={() => handleItemClick('서울')}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                        서울
                    </li>
                    <li
                        onClick={() => handleItemClick('경기')}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                        경기
                    </li>
                    <li
                        onClick={() => handleItemClick('인천')}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                        인천
                    </li>
                    <li
                        onClick={() => handleItemClick('경남')}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                        경남
                    </li>
                </ul>
            </div>
            )}
        </div>
    );
}

export default AreaCheck;