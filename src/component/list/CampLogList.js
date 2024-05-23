import React from "react";
import MainCard from "../card/MainCard";

function CampLogList({camps}){

    return(
        <div className="w-full">
            <div className="flex flex-wrap justify-center items-center">
                {camps.map((camp)=>{
                    return (
                        <div className="w-1/2">
                            <MainCard camp={camp}/>
                            <div className="ms-3 text-lg">{"⭐".repeat(camp.score)}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CampLogList;