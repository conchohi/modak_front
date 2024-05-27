import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
import Dropdown from "../dropdown/Dropdown";
import { MdLogin, MdLogout } from "react-icons/md";
import { FaUserPlus, FaUser } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import axios from "axios";

function BasicMenu(){
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('access')){
            setIsLogin(true);
        }   
    })

    const logoutFunction =  async () => {
        try {
          // 서버에 로그아웃 요청을 보냅니다.
          const response = await axios.post('http://localhost:4040/logout', {}, {
            withCredentials: true // 쿠키를 포함하여 요청
          });
      
          if (response.status === 200) {
            // 로그아웃 성공 시, 로컬 스토리지에서 토큰 제거
            localStorage.removeItem('access');
            
            // 홈으로 이동
            window.location.href = '/';
          } else {
            localStorage.removeItem('access');
            
            // 홈으로 이동
            window.location.href = '/';
          }
        } catch (error) {
          console.error('로그아웃 오류', error);
          localStorage.removeItem('access');
            
            // 홈으로 이동
            window.location.href = '/';

        }
      };


    return(
        <nav className="flex w-full items-center mb-10">
            <div className="mt-6  ms-12">
                <Link to={"/"}>
                    <img className="w-44" src="/img/logo.png" alt="logo image"/>
                </Link>
            </div>
            

                <div class="hidden w-3/4 justify-end p-2 text-base sm:block me-5 font-bold">
                    <ul class="flex flex-row justify-end space-x-8">
                        <li>
                            <Link to="/mypage" class="block rounded p-2 text-gray-700 hover:bg-gray-50 hover:text-blue-700">
                                마이페이지
                            </Link>
                        </li>
                        {!isLogin ? <><li>
                            <Link to="/join" class="block rounded p-2 text-gray-700 hover:bg-gray-50 hover:text-blue-700">
                                회원가입
                            </Link>
                        </li>
                        <li>
                            <Link to="/login" class="block rounded p-2 text-gray-700 hover:bg-gray-50 hover:text-blue-700">
                                로그인
                            </Link>
                        </li></> : <li>
                        <button onClick={logoutFunction} class="block rounded p-2 text-gray-700 hover:bg-gray-50 hover:text-blue-700">
                                로그아웃
                            </button>
                            </li>}
                    </ul>
                </div>


            <div className="flex sm:hidden w-3/4 justify-end p-4 text-sm">
                    {!isLogin ? <Dropdown menuIcon={<IoIosMenu size="40"/>} menus={[{icon:<FaUser size="20"/>, link:"/myPage"},
                        {icon:<FaUserPlus size="20"/>, link:"/join"},
                        {icon:<MdLogin size="20"/>, link:"/login"}
                    ]}/> : <Dropdown menuIcon={<IoIosMenu size="40"/>} menus={[{icon:<FaUser size="20"/>, link:"/myPage"}, {
                        icon:<MdLogout size="20"/>, callback:logoutFunction
                    }]}/>}
            </div>
        </nav>
    );
}

export default BasicMenu;