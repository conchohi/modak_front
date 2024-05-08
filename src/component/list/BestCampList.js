import React from "react";
import MainCard from "../card/MainCard";

function BestCampList({camps}){

    return(
        <div className="w-full">
            <span className="text-3xl m-5"><span className="text-red-600">BEST</span> 캠핑장</span>
            <div className="flex flex-wrap">
                {camps.map((camp)=>{
                    return (
                        <div className="w-1/2 h-1/2">
                            <MainCard camp={camp}/>     
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BestCampList;