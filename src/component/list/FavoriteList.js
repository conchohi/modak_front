import React, { useEffect, useState } from "react";
import MainCard from "../card/MainCard";
import { Link } from "react-router-dom";

function FavoriteList({favoriteList}){

    return(
        <div className="w-full">
            <div className="flex flex-wrap items-center">
                {favoriteList.map((camp)=>{
                    return (
                        <div className="w-1/4 px-1 box-border">
                            <Link to={`/camp/${camp.campNo}`}>
                                <MainCard camp={camp}/>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FavoriteList;