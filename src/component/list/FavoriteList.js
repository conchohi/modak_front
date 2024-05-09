import React, { useEffect, useState } from "react";
import MainCard from "../card/MainCard";

function FavoriteList(){
    const [favorites, setFavorites] = useState([{name:"좋아요1", location:"1"},
        {name:"좋아요2", location:"2"},
        {name:"좋아요3", location:"3"},
        {name:"좋아요4", location:"4"}
    ]);

    useEffect(()=>{
        //get으로 받아와서 setFavorites()
    }, [])

    return(
        <div className="w-full">
            <div className="flex flex-wrap items-center">
                {favorites.map((camp)=>{
                    return (
                        <div className="w-1/4 px-1 box-border">
                            <MainCard camp={camp}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FavoriteList;