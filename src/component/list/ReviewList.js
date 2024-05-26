import { existByCampNo } from "api/reviewApi";
import ModalComponent from "component/common/ModalComponent";
import Star from "component/common/Star";
import ReviewWriteModal from "component/modal/ReviewWriteModal";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReviewList = ({reviewList, campNo}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [warnModal, setWarnModal] = useState(false);
    const navigate = useNavigate();
    const handleWriteButton = ()=>{
        if(localStorage.getItem('access')){
            existByCampNo(campNo).then(result=>{
                console.log(result.isExist)
                if(result.isExist){
                    setMessage('이미 작성한 리뷰가 존재합니다.')
                    setWarnModal(true)
                }else{
                    setModalOpen(true);
                }
            })
        } else{
            setMessage('로그인이 필요합니다')
            setWarnModal(true);
        }
    }
    const closeModal = () =>{
        setModalOpen(false)
    }

    const callbackFunction = ()=>{
        if(message == '로그인이 필요합니다'){
            navigate('/login')
        } else{
            setWarnModal(false)
        }
    }
    

    return (
        <div className="flex flex-col  m-2 mb-10">
            {modalOpen && <ReviewWriteModal campNo={campNo} close={closeModal}/>}
            {warnModal && <ModalComponent message={message} callbackFunction={callbackFunction}/>}
            <div className="flex justify-between items-center">
                <p className="text-xl font-semibold">캠핑 로그 ({reviewList?.length})</p>
                <button className="px-3 py-2 bg-green-500 rounded-xl text-white" onClick={handleWriteButton}>작성하기</button>
            </div>
            <div className=" mt-3 rounded-xl">
                {reviewList?.map(review=>{
                    return(
                        <div className="m-2 p-3 flex flex-col bg-white border border-black/40 rounded-lg h-28">
                            <div className="flex flex-row ">
                                <img className="w-12 h-12 me-4 rounded-full border border-black/50" alt="유저" src={review.userProfileImage ? `http://localhost:4040/api/user/${review.userProfileImage}`:"https://i.pinimg.com/564x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg"}/>
                                <div>
                                    <Star score={review.score}/>
                                    <p className="font-semibold text-lg">{review.userNickname} | {review.createDate}</p>
                                </div>
                            </div>
                            <p className="overflow-hidden mt-1"><span className="font-bold text-lg">{review.title}</span> {review.content}</p>
                        </div>
                    )
                })}
            </div>
        </div>
      );
}
 
export default ReviewList;