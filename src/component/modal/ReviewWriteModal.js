

import { registerReview } from "api/reviewApi";
import StarRating from "component/StarRating";
import ModalComponent from "component/common/ModalComponent";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReviewWriteModal = ({close, campNo}) => {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState("");
    const [isOpen, setIsOpen] = useState(false)
    const [message, setMessage] = useState("")

    const navigate = useNavigate();

    const handleTitleChange = (event) => {
      setTitle(event.target.value);
    };
  
    const handleRatingChange = (newRating) => {
      setRating(newRating);
    };
  
    const handleDescriptionChange = (event) => {
      setDescription(event.target.value);
    };
  
    
    const handleWrite = ()=>{
        registerReview({title : title, content : description, score:rating, campNo:campNo}).then(result=>{
            setMessage('리뷰 등록 성공!')
            setIsOpen(true)
        }
        ).catch(error=>{
            setMessage('리뷰 등록 성공!')
            setIsOpen(true)
        })
    };
      
    return ( 
        <div className="w-lvw h-lvh z-10 fixed top-0 left-0 bg-black/40">
            {!isOpen ? (
                <div className="absolute bg-white top-1/2 left-1/2 w-[540px] h-[600px] z-50 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow">
                    <div className="flex flex-col justify-center h-full p-3">
                        <div className="text-center w-full h-3/4 mb-2 flex flex-col justify-center items-center">
                            <h2 className="text-2xl font-bold tracking-tighter text-center">
                                리뷰 쓰기
                            </h2>
                            <div className="mt-8">
                                <label htmlFor="title" className="block mb-2 font-semibold">
                                    제목
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    value={title}
                                    onChange={handleTitleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div className="mt-4">
                                <label className="block mb-2 font-semibold">별 평점</label>
                                <StarRating rating={rating} onRatingChange={handleRatingChange} />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="description" className="block mb-2 font-semibold">
                                    내용
                                </label>
                                <textarea
                                    id="description"
                                    value={description}
                                    onChange={handleDescriptionChange}
                                    className="w-full h-40 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>
                        </div>
                        <div className="text-center flex gap-3 justify-center">
                        <button className="border py-2 px-5 rounded-md bg-blue-400" onClick={handleWrite}>추가</button>
                        <button className="border py-2 px-5 rounded-md bg-yellow-400" onClick={close} >닫기</button>
                    </div>
                    </div>
                </div>
            ) : (
                <div className="absolute bg-white top-1/2 left-1/2 w-[320px] h-[120px] z-100 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow">
                    <div className="flex flex-col justify-center h-full p-3">
                        <div className="text-center w-full h-2/3 mb-2 flex justify-center items-center">
                            {message}
                        </div>
                        <div className="text-center">
                            <button className="border py-2 px-5 rounded-md bg-yellow-400" onClick={()=>{
                                close()
                                window.location.reload()
                            }} >닫기</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
     );
}
 
export default ReviewWriteModal;