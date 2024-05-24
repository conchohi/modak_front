import React from "react";
import { Link } from "react-router-dom";
function TopMenuDrop({onMouseOver, onMouseOut}){
    return(
        <div className="w-11/12 absolute bg-gray-200 opacity-75" onMouseOut={onMouseOut} onMouseOver={onMouseOver}>
                    <ul className="flex justify-start p-3">
                        <li className="text-center px-3 w-1/4 md:w-1/6">
                            <ul className="py-1">
                                <li className="pb-1"><Link to="/find/id">캠핑 준비</Link></li>
                                <li><Link>음식 추천</Link></li>
                            </ul>
                        </li>
                        <li className="text-center px-3 w-1/4 md:w-1/6">
                            <ul className="py-1 ">
                                <li className="pb-1"><Link to="/camp/list">지역별</Link></li>
                                <li><Link to="/camp/listByWeather">날씨별</Link></li>
                            </ul>
                        </li>
                        <li className="text-center px-3 w-1/4 md:w-1/6">
                            <ul className="py-1">
                                <li className="pb-1"><Link to="/campreview">캠핑 후기</Link></li>
                            </ul>
                        </li>
                        <li className="text-center px-3 w-1/4 md:w-1/6">
                            <ul className="py-1">
                                <li  className="pb-1"><Link to="/notice">공지사항</Link></li>
                                <li><Link to="/faq">FAQ</Link></li>
                            </ul>
                        </li>
                        
                    </ul>
                </div>
    )
}

export default TopMenuDrop;