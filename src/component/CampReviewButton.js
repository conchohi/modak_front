import React from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating"; // StarRating 컴포넌트 import 경로에 맞게 수정해주세요

function CampReviewButton({ review }) {
  return (
    <article className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
      <Link className="absolute inset-0 z-10" to={`/campreview/${review.id}`}>
        <span className="sr-only">리뷰 읽기</span>
      </Link>
      <img
        alt={review.title}
        className="object-cover w-full h-64"
        src={review.imageUrl}
        style={{
          aspectRatio: "500/500",
          objectFit: "cover",
        }}
      />
      <div className="bg-white p-4 dark:bg-white-950">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-xl">{review.title}</h3>
          <div className="flex items-center gap-1">
            <StarRating rating={review.rating} />
            <span className="font-semibold">{review.rating}</span>
          </div>
        </div>
        <p className="text-sm text-gray-500">{review.description}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm text-gray-500">작성자: {review.reviewer}</span>
        </div>
      </div>
    </article>
  );
}

export default CampReviewButton;
