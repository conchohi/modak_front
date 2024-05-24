import axios from "axios";
import React, { useEffect, useState } from "react";
import ReviewList from "./ReviewList";
import Star from "component/common/Star";
const MyReviewList = () => {
    const [reviewList, setReviewList] = useState([]);
    useEffect(()=>{
        const fetchReviews = async () => {
            const token = localStorage.getItem("access");
            try {
                const response = await axios.get("http://localhost:4040/api/review/listByUser", {
                    headers: {
                        access : token
                    }
                });
                setReviewList(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchReviews();
        
    },[])

    
    return ( <div className="w-4/5 mx-5">
           <div className="flex flex-col  m-2 mb-10">
            <p className="text-xl font-semibold">캠핑 로그 ({reviewList?.length})</p>
            <div className=" mt-3 rounded-xl">
                {reviewList?.map(review=>{
                    return(
                        <div className="m-2 p-3 flex flex-col bg-white border border-black/40 rounded-lg h-30">
                            <p className="font-bold text-xl text-stone-700">{review.campDto.name}</p>
                            <div className="flex flex-row my-2">
                                <img className="w-12 h-12 me-4 rounded-full border border-black/50" alt="유저" src={review.userProfileImage ? `http://localhost:4040/api/user/${review.userProfileImage}`:"https://i.pinimg.com/564x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg"}/>
                                <div>
                                    <Star score={review.score}/>
                                    <p className="font-semibold text-lg">{review.userNickname} | {review.createDate}</p>
                                </div>
                            </div>
                            <p className="overflow-hidden"><span className="font-bold text-lg">{review.title}</span> - {review.content}</p>
                        </div>
                    )
                })}
            </div>
        </div>
        </div>
    );
}
 
export default MyReviewList;
