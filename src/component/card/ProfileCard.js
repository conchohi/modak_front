import React, { useState } from "react";
import { Link } from "react-router-dom";
function ProfileCard({nickname,imageName}){
    const [showModal, setShowModal] = useState(false);
    const [newNickname, setNewNickname] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleNicknameChange = (e) => {
        setNewNickname(e.target.value);
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 프로필 정보와 프로필 사진을 서버로 전송하는 코드 작성
        // 서버 요청 후 모달을 닫는 코드 추가
        closeModal();
    };

    
    return(
        <div className="w-full flex flex-col justify-center text-center">
            <img className="w-full p-5 box-border" src={imageName ? `http://localhost:4040/api/user/${imageName}`:"https://i.pinimg.com/564x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg"}/>
            <span className="font-bold">{nickname}</span>
            <button className="text-blue-600 text-xs">프로필 수정</button>
         </div>   
    )
}

export default ProfileCard;