import React, {useEffect, useState} from "react";
import CampReviewButton from "./CampReviewButton";
import { Link } from "react-router-dom";
import {getReviewList} from "../api/reviewApi";

function CampReviewComponent() {
  const [reviews, setReviews] = useState([

  ]);

  useEffect(() => {
    getReviewList().then(result=>{
      setReviews(result.data.dtoList);
        }
    )
  }, []);

  return (
    <section className="w-full py-6">
      <div className="container px-4 md:px-6 flex flex-col">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">추천 캠프장 리뷰</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            다른 캠퍼들의 최신 리뷰를 확인해보세요.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* 리뷰 카드 렌더링 */}
          {reviews.map((review) => (
            <CampReviewButton key={review.id} review={review} />
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default CampReviewComponent;