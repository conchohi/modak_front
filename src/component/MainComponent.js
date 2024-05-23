import React from "react";
import { MainMapCamp} from "./map/MainMapCamp";
import CategoryMenu from "./menus/CategoryMenu";
import AreaCheck from "./input/AreaCheck";
import SearchBar from "./CampingList/SearchBar";
function MainComponent(){
    return(
        <>
            <div className="w-full flex flex-row justify-center items-center">
                <AreaCheck/>
                <div className="w-2/5">                
                    <SearchBar/>
                </div>
            </div>
            <CategoryMenu/>
            <MainMapCamp/>
        </>
    )
}

export default MainComponent;