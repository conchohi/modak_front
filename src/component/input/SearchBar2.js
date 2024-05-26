//검색바

import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

function SearchBar2(props){
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    return( 
        <div className="flex flex-1 justify-center items-center px-6 py-4">
            <div className="flex w-96 rounded border-y-amber-700 bg-white">
                <input type="search" placeholder="search" 
                className="w-4/5 border-orange-900 bg-white px-4 py-2 shadow-xl  text-gray-600"
                value={search}
                onChange={(e) => setSearch(e.target.value)}></input>
                <button className="w-1/5 bg-yellow-600 rounded-md"
                onClick={()=>{
                    navigate({
                        pathname:"/list",
                        search:createSearchParams({search : search}).toString()
                    })
                }}>검색</button>
            </div>
        </div>
    )


};

export default SearchBar2;