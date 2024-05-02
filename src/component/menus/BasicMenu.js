import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
import Dropdown from "../dropdown/Dropdown";
import { FaUserCircle } from "react-icons/fa";
import { BiSolidLogIn } from "react-icons/bi";
import { FaUserPlus } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
function BasicMenu(){
    return(
        <nav className="flex w-full">
            <div className="w-1/4 mt-3 ms-3">
                <Link to={"/"}>
                    <img className="w-2/3 min-w-32 max-w-80" src="/img/logo.png" alt="logo image"/>
                </Link>
            </div>

            <div className="hidden sm:flex w-3/4 justify-end p-4 text-sm mt-3 mr-5">
                <ul className="flex w-full justify-end">
                    <li className="mr-6">
                        <Dropdown menuIcon={<FaUserCircle size="25" className="mr-2"/>} menuName="MY PAGE" 
                        menus={[{title:"마이페이지", link:"/mypage"},
                            {title:"회원정보 수정", link:"/mypage"},
                            {title:"즐겨찾기", link:"/mypage"}
                            ]}
                        />
                    </li>
                    <li className="mr-6">
                        <Link to="/join" className="flex flex-row"><FaUserPlus size="25" className="mr-2"/>JOIN</Link>
                    </li>
                    
                    <li>
                        <Link to="/login" className="flex flex-row"><BiSolidLogIn size="25" className="mr-2"/>LOGIN</Link>
                    </li>

                </ul>
            </div>

            <div className="flex sm:hidden w-3/4 justify-end p-4 text-sm">
                <ul className="flex">
                    <Dropdown menuIcon={<IoIosMenu size="40"/>} menus={[{title:"마이페이지", link:"/myPage"},
                        {title:"회원가입", link:"/join"},
                        {title:"로그인", link:"/login"}
                    ]}/>
                </ul>
            </div>
        </nav>
    );
}

export default BasicMenu;