import React, { useState } from "react";
import ProfileCard from "./card/ProfileCard";
import BadgeList from "./list/BadgeList";
import {MyMapCamp} from "./map/MyMapCamp";
import { Link } from "react-router-dom";
import FavoriteList from "./list/FavoriteList";
import MySideMenu from "./menus/MySideMenu";
function MyPageComponent(){
    const [nickname, setNickname] = useState("닉네임");

    return(
        <> 
            <div className="w-full flex mt-16">
                <div className="w-1/6">
                    {/* 여기에 사이드 네비 */}
                    <MySideMenu/>
                </div>
                <div className="w-5/6 flex flex-col">
                    <div className="w-full flex border-b-2 pb-10 border-gray-200">
                        <div className="w-1/3 pe-10 border-e border-gray-200 border-dotted">
                            <ProfileCard nickname={nickname}/>
                        </div>
                        <div className="w-2/3 ps-10 border-s border-gray-200 border-dotted">
                            <BadgeList/>
                        </div>
                    </div>
                    <div className="w-full flex flex-col border-b-2 py-5 border-gray-200 px-2">
                        <div className="mx-5 flex justify-between items-center pb-5">
                            <span className="font-bold text-2xl">'{nickname}' 캠핑로그</span>
                            <Link to="/myPage/camp-log" className="text-sm text-gray-400">전체 보기</Link>
                        </div>
                        <MyMapCamp/>

                    </div>
                    <div className="w-full flex flex-col border-b-2 py-5 border-gray-200 px-2">
                        <div className="mx-5 flex justify-between items-center pb-5">
                            <span className="font-bold text-2xl">즐겨찾기</span>
                            <Link to="/myPage/favorites" className="text-sm text-gray-400">전체 보기</Link>
                        </div>
                        <FavoriteList/>

                    </div>
                </div>    

            </div> 
        </>
    )
}

export default MyPageComponent;