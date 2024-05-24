import ModifyModal from "component/member/ModifyModal";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function ProfileCard({nickname,imageName}){
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const navigate = useNavigate();
    
    return(
        <div className="w-full flex flex-col justify-center text-center">
            <img className="w-full p-5 box-border" src={imageName ? `http://localhost:4040/api/user/${imageName}`:"https://i.pinimg.com/564x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg"}/>
            <span className="font-bold">{nickname}</span>
            <button className="text-blue-600 text-xs" onClick={openModal}>프로필 수정</button>
            {showModal && <ModifyModal nickname={nickname} imageName={imageName} close={()=>{
                closeModal()
                navigate('/mypage')
            }}/>}
         </div>   
    )
}

export default ProfileCard;