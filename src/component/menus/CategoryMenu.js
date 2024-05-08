import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";

function CategoryMenu(){
    return (
        <div className="w-full flex justify-center">
            <nav className="w-4/5 justify-center">
                <ul className="flex justify-center">
                    <li className="">
                        <Link to={"/"} className=""><img src="/img/category/category1.png"/></Link>
                    </li>

                    <li className="">
                        <Link to={"/"}><img src="/img/category/category2.png"/></Link>
                    </li>  

                    <li className="">
                        <Link to={"/"}><img src="/img/category/category3.png"/></Link>
                    </li>

                    <li className="">
                        <Link to={"/"}><img src="/img/category/category4.png"/></Link>
                    </li>

                    <li className="">
                        <Link to={"/"}><img src="/img/category/category5.png"/></Link>
                    </li>
                </ul>
                <ul className="flex justify-around">
                    <li className="">
                        <Link to={"/"} className="">전체</Link>
                    </li>

                    <li className="">
                        <Link to={"/"}>글램핑</Link>
                    </li>  

                    <li className="">
                        <Link to={"/"}>카라반</Link>
                    </li>

                    <li className="">
                        <Link to={"/"}>오지/노지</Link>
                    </li>

                    <li className="">
                        <Link to={"/"}>오토캠핑</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default CategoryMenu;