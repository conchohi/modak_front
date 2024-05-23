import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StarRating from "../component/StarRating"; // StarRating 컴포넌트 import 경로 수정

function CampReviewDetailComponent() {
  const { id } = useParams();
  const [review, setReview] = useState(null);

  // 가정: 리뷰 정보를 가져오는 API 호출
  useEffect(() => {
    // 리뷰 정보를 가져오는 비동기 함수 호출
    const fetchReview = async () => {
      try {
        // 리뷰 정보를 가져오는 API 호출 (예: 서버에서 리뷰 정보 가져오기)
        const response = await fetch(`/api/reviews/${id}`); // 예시: "/api/reviews/1"
        const data = await response.json();
        setReview(data); // 가져온 리뷰 정보를 상태에 저장
      } catch (error) {
        console.error("리뷰 정보를 가져오는 중에 오류가 발생했습니다:", error);
      }
    };

    fetchReview(); // useEffect가 실행될 때 리뷰 정보를 가져오는 함수 호출
  }, [id]);

  // 리뷰가 없는 경우를 처리하는 조건부 렌더링
  if (!review) {
    return <div>리뷰를 찾을 수 없습니다.</div>;
  }

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 flex justify-start items-start">
        <div className="space-y-4 text-left">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            {review.title}
          </h2>
          <div className="flex justify-center">
            <div className="overflow-hidden rounded-lg w-96 h-96">
              <img
                alt={review.title}
                className="object-cover w-full h-full"
                src={review.imageUrl}
              />
            </div>
          </div>
          <div className="text-gray-500 md:text-xl dark:text-gray-400">{review.description}</div>
        </div>
        <div className="flex flex-col justify-start items-start ml-4">
          <div className="flex items-center gap-2">
            <StarRating rating={review.rating} />
            <span className="text-sm text-gray-500">{review.rating}</span> {/* 평점 표시 */}
          </div>
          <div className="text-sm text-gray-500 mt-1">{review.reviewer}</div> {/* 글쓴이(ID) 표시 */}
        </div>
      </div>
    </section>
  );
}

export default CampReviewDetailComponent;
