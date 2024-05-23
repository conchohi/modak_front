import React, { useState } from "react";
import { Link } from "react-router-dom";

function ListCard({camp}){



    return(
  
        <Link to={`/camp/${camp.campNo}`} className="w-full flex flex-col md:flex-row mb-3">
            <div className="box-border w-full md:w-1/2 p-3">
                <img className="w-full h-[30vh] rounded-lg" src={camp.imgName || "https://i.pinimg.com/564x/db/e2/00/dbe200652abc87bee7b9cbdee59dedcd.jpg"}/>
            </div>
            <div className="box-border w-full md:w-1/2 px-3 py-3 flex flex-col border border-gray-400 border-dotted rounded-xl">
                <div className="relative w-full h-2/3 flex flex-col border-b pb-3 border-gray-200">                
                    <p className="text-sm text-gray-500 mb-1">{camp.types.map(type=>{
                        return <span className="me-3">{type}</span>
                    })}</p>
                    <p className="font-semibold mb-3">{camp.name} </p>
                    <p className="text-sm text-gray-500">캠핑로그 ({camp.reviewCount})</p>

                </div>
                <div className="w-full h-1/3 flex flex-col pt-2 overflow-hidden">
                    <p className="text-sm"><span className="text-gray-400 mr-3">위치</span>{camp.address}</p>
                    <p className="text-sm"><span className="text-gray-400 mr-3">소개</span>{camp.lineIntro || camp.name + " 캠핑장입니다."}</p>
                    <p className="text-sm"><span className="text-gray-400 mr-3">전화번호</span>{camp.phone || "010-1234-5678"}</p>
                </div>

            </div>

        </Link>
    )
}

export default ListCard;