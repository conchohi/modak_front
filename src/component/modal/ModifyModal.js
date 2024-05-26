import { getAccessToken } from "api/reissue";
import { modifyUserData } from "api/userApi";

import React, { useCallback, useRef, useState } from "react";

const ModifyModal = ({close, nickname, imageName}) => {

    const inputRef = useRef(null);
    const [currentProfileImage, setCurrentProfileImage] = useState(imageName);
    const [changeProfileImage, setChangeProfileImage] = useState(null);
    const [changeNickname, setNickname] = useState(nickname);
    const [isDelete, setIsDelete] = useState(false)
    const onNicknameChangeHandler = (e)=>{
        setNickname(e.target.value)
    }

    const onUploadImageButtonClick = useCallback(() => {
        if (!inputRef.current) {
          return;
        }
        inputRef.current.click();
      }, []);

      const handleImageChange = () =>{
        const file = inputRef.current.files[0];
        if(file){
            const reader = new FileReader()
            reader.readAsDataURL(file);
            reader.onloadend = ()=>{
                setChangeProfileImage(reader.result)
                setCurrentProfileImage(reader.result)
                setIsDelete(false)
            }
        }
      }

      const deleteButtonClick= ()=>{
        setCurrentProfileImage(null);
        setChangeProfileImage(null)
        setIsDelete(true)
      }

      const handleModify = () =>{
        const file = inputRef.current.files
        const formData = new FormData()
        if(currentProfileImage != null && file.length > 0){
            formData.append("profileFile",file[0]);
        }
        formData.append('nickname', changeNickname);
        formData.append('profileImage', imageName);
        formData.append('isDelete', String(isDelete))
        
        modifyUserData(formData).then(result=>{
            close()
            window.location.reload();

        }).catch(error=>{
            if(error.response?.data === 'access token expired'){
              try{
                getAccessToken()
              }catch(error){
                
              }
            } 
          })

      }
      
    return ( 
        <div className="w-lvw h-lvh z-10 fixed top-0 left-0 bg-black/40">
            <div className="absolute bg-white top-1/2 left-1/2 w-[400px] h-[400px] z-50 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow">
                <div className="flex flex-col justify-center h-full p-3">
                    <div className="text-center w-full h-3/4 mb-2 flex flex-col justify-center items-center">
                        <div className="flex justify-center flex-col">
                            <img onClick={onUploadImageButtonClick} className="rounded-full m-auto w-40 h-40" alt="profile" src={changeProfileImage ? changeProfileImage : (currentProfileImage ? `http://localhost:4040/api/user/${currentProfileImage}`: "https://i.pinimg.com/564x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg")}/>
                            <input ref={inputRef} className="hidden" type="file" accept="image/*" onChange={handleImageChange}/>
                            <button onClick={deleteButtonClick} className="bg-red-500 w-20 mx-auto rounded-lg mt-3 py-1 text-white">삭제</button>
                        </div>
                        <div className='input-box text-sm'>
                            <div className='input-box-title text-left'>닉네임</div>
                            <div className='input-box-content'>
                                <div className='input-box-body'>
                                    <input className='input-box-input' placeholder='수정할 닉네임을 입력하세요.' type='text' value={changeNickname} onChange={onNicknameChangeHandler}/>
                                 </div>
                            </div>
                        </div>

                    </div>
                    <div className="text-center flex gap-3 justify-center">
                        <button className="border py-2 px-5 rounded-md bg-blue-400" onClick={handleModify}>수정</button>
                        <button className="border py-2 px-5 rounded-md bg-yellow-400" onClick={close} >닫기</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ModifyModal;