import React from "react";

function MainCard({camp}){
    return(
        <div className="flex w-full items-center justify-center">
            <div className="mx-auto cursor-pointer rounded-lg bg-white p-2 my-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                <img className="w-full h-[20vh] px-1 rounded-lg object-cover object-center" src={camp.imgName||"https://i.pinimg.com/564x/db/e2/00/dbe200652abc87bee7b9cbdee59dedcd.jpg"} />
                <p className="pl-2 my-1 h-6 overflow-hidden font-sm font-semibold text-gray-800">{camp.name}</p>
                <p className="pl-2 text-xs h-5 text-gray-500 overflow-hidden">{camp.address}</p>
            </div>

        </div>

    )
}
export default MainCard;