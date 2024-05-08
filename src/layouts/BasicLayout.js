import React from "react";
import TopMenu from "../component/menus/TopMenu";
import BasicMenu from "../component/menus/BasicMenu";

function BasicLayout({children}){
    return(
        <div>
            <BasicMenu/>
            <TopMenu/>
            <div className="min-h-[960px] w-4/5 mx-auto">
                {children}
            </div>
        </div>
    )
}

export default BasicLayout;