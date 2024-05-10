import React from "react";
import { Link } from "react-router-dom";
function TopMenuDrop({onMouseOver, onMouseOut}){
    return(
        <div className="w-full absolute bg-[#DAC7C7] opacity-75" onMouseOut={onMouseOut} onMouseOver={onMouseOver}>
                    <ul className="flex flex-row justify-center p-3">
                        <li className="text-center  w-1/5">
                            <ul>
                                <li className="pb-1"><Link to="/find/id">캠핑 준비</Link></li>
                                <li><Link>음식 추천</Link></li>
                            </ul>
                        </li>
                        <li className="text-center  w-1/5">
                            <ul>
                                <li  className="pb-1"><Link>지역별 찾기</Link></li>
                                <li><Link>유형별 찾기</Link></li>
                            </ul>
                        </li>
                        <li className="text-center  w-1/5">
                            <ul>
                                <li  className="pb-1"><Link to="/CampReview">캠핑 후기</Link></li>
                                <li><Link>자유 게시판</Link></li>
                            </ul>
                        </li>
                        <li className="text-center  w-1/5">
                            <ul>
                                <li  className="pb-1"><Link>공지사항</Link></li>
                                <li><Link>FAQ</Link></li>
                            </ul>
                        </li>
                        
                    </ul>
                </div>
    )
}

export default TopMenuDrop;