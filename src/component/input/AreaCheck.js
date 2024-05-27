//input폴더 - AreaCheck.js

import React, { useEffect, useState } from 'react';
import useCustomMove from '../../hooks/useCustomMove';
import { useNavigate } from 'react-router-dom';


const regions = [{
    id : "서울시",
    name : "서울"
},
{
    id : "경기도",
    name : "경기"
},
{
    id : "부산시",
    name : "부산"
},
{
    id : "대구시",
    name : "대구"
},
{
    id : "인천시",
    name : "인천"
},
{
    id : "광주시",
    name : "광주"
},
{
    id : "대전시",
    name : "대전"
},
{
    id : "울산시",
    name : "울산"
},
{
    id : "세종시",
    name : "세종"
},
{
    id : "강원도",
    name : "강원"
},
{
    id : "충청북도",
    name : "충북"
},
{
    id : "충청남도",
    name : "충남"
},
{
    id : "전라북도",
    name : "전북"
},
{
    id : "전라남도",
    name : "전남"
},
{
    id : "경상북도",
    name : "경북"
},
{
    id : "경상남도",
    name : "경남"
},
{
    id : "제주도",
    name : "제주"
},

]
function AreaCheck() {
    //선택된 지역의 값 설정
    const [region, setRegion] = useState("");
    const [viewRegion, setViewRegion] = useState("");

    //드롭다운 여부값 설정
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    //클릭될 경우 selectedValue 값에 클릭된 값 설정
    const handleItemClick = (e) => {
        setViewRegion(e.target.getAttribute('data-name'))
        setRegion(e.target.id);
        setIsOpen(!isOpen); 
    };

    // 클릭할 때마다 clickValue의 상태를 변경
    const handleDropdownClick = () => {
        setIsOpen(!isOpen); 
      };
    useEffect(()=>{
        navigate(`/?region=${region}`)
    }, [region])


    return (
        <div className="relative inline-block text-left">
            {/* 선택한 값이 보여지는 부분 */}
            <div className="flex items-center justify-between bg-white border border-black rounded-md shadow-sm px-4 py-2
            cursor-pointer" onClick={handleDropdownClick} >
                <span>{viewRegion || '전체'}</span>
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

            {isOpen && (
            <div className="absolute z-10 mt-2 w-28 bg-white border border-gray-300 rounded-md shadow-lg">
                <ul className='overflow-y-scroll h-40'>
                    <li
                        onClick={() => handleItemClick('')}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                        전체
                     </li>
                    {regions.map(region=>{
                        return(
                            <li onClick={handleItemClick} id={region.id} data-name={region.name}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                            {region.name}
                            </li>
                        )
                    })}
                </ul>
            </div>
            )}
        </div>
    );
}

export default AreaCheck;