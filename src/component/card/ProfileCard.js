import React from "react";
import { Link } from "react-router-dom";
function ProfileCard({nickname,imageName}){
    
    return(
        <div className="w-full flex flex-col justify-center text-center">
            <img className="w-full p-5 box-border" src={imageName ? `http://localhost:4040/api/user/${imageName}`:"https://i.pinimg.com/564x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg"}/>
            <span className="font-bold">{nickname}</span>
            <Link className="text-blue-600 text-xs" to="/mypage/profile-edit">프로필 수정</Link>
         </div>   
    )
}

export default ProfileCard;