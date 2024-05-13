import React from "react";
import TopMenu from "../component/menus/TopMenu";
import BasicMenu from "../component/menus/BasicMenu";
import Footer from "../component/footer/Footer";

function BasicLayout({children}){
    return(
        <div>
            <BasicMenu/>
            <TopMenu/>
                <div className="min-h-[960px] w-full md:w-5/6 mx-auto">
                    {children}
                </div>
            <Footer/>
        </div>
    )
}

export default BasicLayout;