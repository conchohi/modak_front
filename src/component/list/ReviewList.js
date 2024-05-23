import Star from "component/common/Star";
import React from "react";

const ReviewList = ({reviewList}) => {
    return (
        <div className="flex flex-col  m-2 mb-10">
            <p className="text-xl font-semibold">캠핑 로그 ({reviewList.length})</p>
            <div className=" mt-3 rounded-xl">
                {reviewList.map(review=>{
                    return(
                        <div className="m-2 p-3 flex flex-col bg-white border border-black/40 rounded-lg h-24">
                            <div className="flex flex-row ">
                                <img className="w-12 h-12 me-2 rounded-full" alt="유저" src={review.userProfileImage ? `http://localhost:4040/api/user/${review.userProfileImage}`:"https://i.pinimg.com/564x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg"}/>
                                <div>
                                    <Star score={review.score}/>
                                    <p className="font-semibold text-lg">{review.userNickname} | {review.createDate}</p>
                                </div>
                            </div>
                            <p className="overflow-hidden">{review.title} {review.content}</p>
                        </div>
                    )
                })}
            </div>
        </div>
      );
}
 
export default ReviewList;