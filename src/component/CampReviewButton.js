import React from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

function CampReviewButton({ review }) {
    return (
        <article className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link className="absolute inset-0 z-10" to={`/camp/${review.campDto.campNo}`}>
                <span className="sr-only">리뷰 읽기</span>
            </Link>
                <img
                    alt={review.title}
                    className="object-cover w-full h-64"
                    src={review.campDto.imgName || "https://i.pinimg.com/564x/db/e2/00/dbe200652abc87bee7b9cbdee59dedcd.jpg"}
                    style={{
                        aspectRatio: "500/500",
                        objectFit: "cover",
                    }}
                />

            <div className="bg-white p-4 dark:bg-white-950">
                <div className="flex items-center justify-between">
                    <h3 className="font-bold text-xl">{review.title}</h3>
                    <div className="flex items-center gap-1">
                        <StarRating rating={review.score} /> {/* 평점은 score로 수정 */}
                        <span className="font-semibold">{review.score}</span> {/* 평점은 score로 수정 */}
                    </div>
                </div>
                {review.content && (
                    <p className="text-sm text-gray-500">{review.content}</p> /* 내용은 content로 수정 */
                )}


                {review.userNickname && (
                    <div className="flex items-center gap-2 mt-2">
                        <span className="text-sm text-gray-500">작성자: {review.userNickname}</span> {/* 작성자는 userNickname으로 수정 */}
                    </div>
                )}
            </div>
        </article>
    );
}

export default CampReviewButton;
