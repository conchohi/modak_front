import React from "react";
import MainCard from "../card/MainCard";
import { Link } from "react-router-dom";

function MainCampList({camps, locale}){

    return(
        <div className="w-full ms-3">
            <div className="flex justify-between items-center">
                <span className="text-3xl mx-3"><span className="text-red-600">BEST</span> 캠핑장</span>
                <Link to={"/camp/list" + (locale ? `?region=${locale}` : "")} className="text-sm mx-3 text-blue-500">전체 보기 </Link>
            </div>
            <div className="flex flex-wrap">
                {camps.map((camp)=>{
                    return (
                        <div className="w-1/2">
                            <MainCard camp={camp}/>     
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MainCampList;