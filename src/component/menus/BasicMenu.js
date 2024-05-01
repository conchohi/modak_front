import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";

function BasicMenu(){
    return(
        <nav className="flex w-full">
            <div className="w-1/4 mt-3 ms-3">
                <Link to={"/"}>
                    <img className="w-2/3 min-w-24 max-w-80" src="/img/logo.png" alt="logo image"/>
                </Link>
            </div>

            <div className="hidden sm:flex w-3/4 justify-end p-4 text-sm">
                <ul className="flex">
                    <li className="pr-6">
                        <Link to={"/"}>로그인</Link>
                    </li>

                    {/* /todo/ 위해 추가 부분 */}
                    <li className="pr-6 ">
                        <Link to={"/about"}>회원가입</Link>
                    </li>                    
                    <li className="">
                        <Link to={"/todo/"}>페이지</Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export default BasicMenu;