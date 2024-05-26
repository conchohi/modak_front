import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";

function CategoryMenu(){
    return (
        <div className="w-full flex justify-center my-5">
            <nav className="w-4/5 justify-center">
                <ul className="flex justify-center">
                    <li className="">
                        <Link to={"/camp/list"} className="flex flex-col text-center">
                            <img src="/img/category/category1.png"/>
                            전체
                        </Link>
                    </li>

                    <li className="">
                        <Link to={"/camp/list?type=글램핑"} className="flex flex-col text-center">
                            <img src="/img/category/category2.png"/>
                            글램핑    
                        </Link>
                    </li>  

                    <li className="">
                        <Link to={"/camp/list?type=카라반"} className="flex flex-col text-center">
                            <img src="/img/category/category3.png"/>
                            카라반    
                        </Link>
                    </li>

                    <li className="">
                        <Link to={"/camp/list?type=일반캠핑장"} className="flex flex-col text-center">
                            <img src="/img/category/category4.png"/>
                            일반캠핑장
                        </Link>
                    </li>

                    <li className="" >
                        <Link to={"/camp/list?type=오토캠핑"} className="flex flex-col text-center">
                            <img src="/img/category/category5.png"/>
                            오토캠핑
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default CategoryMenu;