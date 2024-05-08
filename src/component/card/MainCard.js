import React from "react";

function MainCard({camp}){
    return(
        <div className="flex w-full items-center justify-center">
            <div className="mx-auto px-2">
                <div className="cursor-pointer rounded-lg bg-white p-4 my-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                    <img className="w-full rounded-lg object-cover object-center" src="https://gocamping.or.kr/upload/camp/1776/thumb/thumb_720_7922zTbLn3nQp8qLRrnUilVU.jpg" />
                    <p className="pl-4 my-1 font-semibold text-gray-800">{camp.name}</p>
                    <p className="pl-4 text-sm text-gray-500">{camp.location}</p>

                </div>
            </div>
        </div>

    )
}
export default MainCard;