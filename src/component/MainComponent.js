import React from "react";
import { MainMapCamp} from "./map/MainMapCamp";
import CategoryMenu from "./menus/CategoryMenu";
function MainComponent(){
    return(
        <>
            <CategoryMenu/>
            <MainMapCamp/>
        </>
    )
}

export default MainComponent;