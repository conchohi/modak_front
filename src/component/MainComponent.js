import React from "react";
import { MapCamp } from "./map/MapCamp";
import CategoryMenu from "./menus/CategoryMenu";
function MainComponent(){
    return(
        <>
            <CategoryMenu/>
            <MapCamp/>
        </>
    )
}

export default MainComponent;