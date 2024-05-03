import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
import Dropdown from "../dropdown/Dropdown";
import { MdLogin } from "react-icons/md";
import { FaUserPlus, FaUser } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import styled from "styled-components";

function BasicMenu(){
    return(
        <nav className="flex w-full items-center">
            <div className="w-1/4 mt-3 ms-3">
                <Link to={"/"}>
                    <img className="w-60 ms-5" src="/img/logo.png" alt="logo image"/>
                </Link>
            </div>

            {/* <div className="hidden sm:flex w-3/4 justify-end p-4 text-sm mt-3 mr-5">
                <ul className="flex w-full justify-end">
                    
                    <li className="mr-3 w-[45px] text-center">
                        <Link to="/join" className="flex flex-col justify-center"><FaUserPlus size="25" className="mx-auto"/>JOIN</Link>
                    </li>
                    
                    <li className="mr-3 w-[45px] text-center">
                        <Link to="/login" className="flex flex-col justify-center"><MdLogin size="25" className="mx-auto"/>LOGIN</Link>
                    </li>
                    <li className="w-[45px] text-center">
                        <Dropdown menuIcon={<FaUser size="25"/>} menuName="MY" 
                        menus={[{title:"마이페이지", link:"/mypage"},
                            {title:"회원정보 수정", link:"/mypage"},
                            {title:"즐겨찾기", link:"/mypage"}
                            ]}
                        />
                    </li>
                </ul>
            </div> */}
            {/* <div className="hidden sm:flex w-3/4 justify-end p-2 text-sm mt-3 mr-5">
                <ul className="flex w-full justify-end">
                    <li className="mr-3 inline-block font-semibold">
                        <Link to="/login" className="px-4 py-1  flex flex-col justify-center">로그인</Link>
                    </li>
                    <li className="mr-3 inline-block font-semibold">
                        <Link to="/join" className="px-4 py-1 flex flex-col justify-center">회원가입</Link>
                    </li>
                    

                    <li className="px-4 py-1 inline-block font-semibold">
                        <Dropdown menuName="마이페이지" 
                        menus={[{title:"마이페이지", link:"/mypage"},
                            {title:"회원정보 수정", link:"/mypage"},
                            {title:"즐겨찾기", link:"/mypage"}
                            ]}
                        />
                    </li>
                </ul>
            </div> */}
            

                <div class="hidden w-3/4 justify-end p-2 text-sm sm:block me-5 font-bold">
                    <ul class="flex flex-row justify-end space-x-8">
                        <li>
                            <Link to="/" class="block rounded p-2 text-gray-700 hover:bg-gray-50 hover:text-blue-700">
                                마이페이지
                            </Link>
                        </li>
                        <li>
                            <Link to="/" class="block rounded p-2 text-gray-700 hover:bg-gray-50 hover:text-blue-700">
                                회원가입
                            </Link>
                        </li>
                        <li>
                            <Link to="/" class="block rounded p-2 text-gray-700 hover:bg-gray-50 hover:text-blue-700">
                                로그인
                            </Link>
                        </li>
                    </ul>
                </div>


            <div className="flex sm:hidden w-3/4 justify-end p-4 text-sm">
                    <Dropdown menuIcon={<IoIosMenu size="40"/>} menus={[{icon:<FaUser size="20"/>, link:"/myPage"},
                        {icon:<FaUserPlus size="20"/>, link:"/join"},
                        {icon:<MdLogin size="20"/>, link:"/login"}
                    ]}/>
            </div>
        </nav>
    );
}

export default BasicMenu;