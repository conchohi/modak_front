import { getAccessToken } from "api/reissue";
import { deleteReview, getReview, modifyReview } from "api/reviewApi";
import { modifyUserData } from "api/userApi";
import StarRating from "component/StarRating";

import React, { useEffect, useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

const ReviewModifyModal = ({reviewNo, close}) => {
    const [title, setTitle] = useState();
    const [rating, setRating] = useState();
    const [description, setDescription] = useState();
    const [isOpen, setIsOpen] = useState(false)
    const [deleteOpen, setDeleteOpen] = useState(false)
    const [message, setMessage] = useState("")

    useEffect(()=>{
        getReview(reviewNo).then(result=>{
            const review = result.data;
            setTitle(review.title);
            setRating(review.score)
            setDescription(review.content)
            }
        ).catch(error=>{
            console.log(error)
        })
    },[])
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
  
    
    const handleModify = ()=>{
        modifyReview(reviewNo, {title:title, content: description, score:rating}).then(result=>{
            setMessage('리뷰 수정 완료!')
            setIsOpen(true)
        }).catch(error=>{
            console.log(error)
        })
    };
    const confirmDelete = () =>{
        setDeleteOpen(true)
    }
    const handleDelete = ()=>{
        deleteReview(reviewNo).then(result=>{
            setMessage('리뷰 삭제 완료!')
            setDeleteOpen(false)
           setIsOpen(true)
        }).catch(error=>{
            console.log(error)
        })

        
    };
      
    return ( 
        <div className="w-lvw h-lvh z-10 fixed top-0 left-0 bg-black/40">
            {deleteOpen &&<ConfirmDeleteModal handleDelete={handleDelete} close={()=>{setDeleteOpen(false)}}/>}
            {!isOpen ? (
                <div className="absolute bg-white top-1/2 left-1/2 w-[480px] h-[560px] z-50 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow">
                    <div className="relative flex flex-col justify-center h-full p-3">
                        <button className="absolute right-10 top-5" onClick={close}><FaRegWindowClose size="30"/></button>
                        <div className="text-center w-full h-3/4 mb-2 flex flex-col justify-center items-center">
                            <h2 className="text-2xl font-bold tracking-tighter text-center">
                                리뷰 수정
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
                        <div className="text-center flex gap-3 justify-center mt-3">
                        <button className="border py-2 px-5 rounded-md bg-blue-400" onClick={handleModify}>수정</button>
                        <button className="border py-2 px-5 rounded-md bg-red-500" onClick={confirmDelete} >삭제</button>
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
               
                                window.location.reload()
                            }} >닫기</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
        )
}
 
export default ReviewModifyModal;