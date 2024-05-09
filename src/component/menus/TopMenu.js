import React,{useEffect, useRef, useState} from "react";
import { Link } from "react-router-dom";
import TopMenuDrop from "./TopMenuDrop";
import useDropdown from "../../hooks/useDropdown";

function TopMenu(){
    const ref = useRef();
    const [isDropdown, setIsDropdown] = useDropdown(ref, false);

    const hoverNav = () => {
        setIsDropdown(true);
    }

    const outsideNav = () => {
        setIsDropdown(false)
    }

    return (
        <div ref={ref} className="w-full my-5  bg-[#DABFBF]">
            <ul className="flex justify-center p-3 font-semibold text-lg"  onMouseOver={hoverNav} onMouseOut={outsideNav}>
                <li className="text-center w-1/5"><Link className="px-5 py-1" to="/">캠핑 정보</Link></li>
                <li className="text-center w-1/5"><Link className="px-5 py-1" to="/">캠핑장 목록</Link></li>
                <li className="text-center w-1/5"><Link className="px-5 py-1" to="/">커뮤니티</Link></li>
                <li className="text-center w-1/5"><Link className="px-5 py-1" to="/">고객지원</Link></li>
            </ul>
            {isDropdown && <TopMenuDrop  onMouseOver={hoverNav} onMouseOut={outsideNav}/>
                }
        </div>
    )
}

export default TopMenu;