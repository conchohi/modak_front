import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
import Dropdown from "../dropdown/Dropdown";
import { MdLogin } from "react-icons/md";
import { FaUserPlus, FaUser } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import styled from "styled-components";

function BasicMenu(){
    return(
        <nav className="flex w-full items-center mb-14">
            <div className="mt-3">
                <Link to={"/"}>
                    <img className="w-44 ms-5" src="/img/logo.png" alt="logo image"/>
                </Link>
            </div>
            

                <div class="hidden w-3/4 justify-end p-2 text-base sm:block me-5 font-bold">
                    <ul class="flex flex-row justify-end space-x-8">
                        <li>
                            <Link to="/mypage" class="block rounded p-2 text-gray-700 hover:bg-gray-50 hover:text-blue-700">
                                마이페이지
                            </Link>
                        </li>
                        <li>
                            <Link to="/join" class="block rounded p-2 text-gray-700 hover:bg-gray-50 hover:text-blue-700">
                                회원가입
                            </Link>
                        </li>
                        <li>
                            <Link to="/login" class="block rounded p-2 text-gray-700 hover:bg-gray-50 hover:text-blue-700">
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