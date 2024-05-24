import React, { useEffect, useState } from "react";
import ProfileCard from "./card/ProfileCard";
import BadgeList from "./list/BadgeList";
import { Link } from "react-router-dom";
import FavoriteList from "./list/FavoriteList";
import MySideMenu from "./menus/MySideMenu";
import { getUserData } from "api/userApi";
import { getAccessToken } from "api/reissue";
import ReviewList from "./list/ReviewList";
import MyReviewList from "./list/MyReviewList";


function MyPageComponent(){
    const [userData, setUserDate] = useState({favorites:[]});

    useEffect(()=>{
        getUserData().then(result=>{
            setUserDate(result)
        }).catch(error=>{
            if(error.response.data === 'access token expired'){
              try{
                getAccessToken()
              }catch(error){
                
              }
            } 
          })
    },[])

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
                            <ProfileCard nickname={userData.nickname} imageName={userData.profileImage}/>
                        </div>
                        <div className="w-2/3 ps-10 border-s border-gray-200 border-dotted">
                            <BadgeList/>
                        </div>
                    </div>
                    <div className="w-full flex flex-col border-b-2 py-5 border-gray-200 px-2">
                        <div className="mx-5 flex justify-between items-center pb-5">
                            <span className="font-bold text-2xl">'{userData.nickname}' 캠핑로그</span>
                            <Link className="text-sm text-gray-400">전체 보기</Link>
                        </div>
                        <div>
                            <MyReviewList/>
                        </div>

                    </div>
                    <div className="w-full flex flex-col border-b-2 py-5 border-gray-200 px-2">
                        <div className="mx-5 flex justify-between items-center pb-5">
                            <span className="font-bold text-2xl">즐겨찾기</span>
                            <Link className="text-sm text-gray-400">전체 보기</Link>
                        </div>
                        <FavoriteList favoriteList={userData.favorites}/>

                    </div>
                </div>    

            </div> 
        </>
    )
}

export default MyPageComponent;