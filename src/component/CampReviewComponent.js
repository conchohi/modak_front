import React, { useState } from "react";
import CampReviewButton from "./CampReviewButton";
import { Link } from "react-router-dom";

function CampReviewComponent() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      title: "캠프장1",
      rating: 4.8,
      description: "아름다운 경치, 잘 관리된 시설, 친절한 직원. 평화로운 휴식을 위해 강력 추천합니다.",
      reviewer: "John Doe",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 2,
      title: "캠프장2",
      rating: 4.6,
      description: "숨막히는 풍경, 잘 갖춰진 캠프장, 친절한 직원. 가족 캠핑 여행에 완벽합니다.",
      reviewer: "Sarah Anderson",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 3,
      title: "캠프장3",
      rating: 4.9,
      description: "믿을 수 없는 자연 경관, 잘 관리된 캠프장, 지식 있는 직원. 자연 애호가들의 필수 방문지.",
      reviewer: "Emily Wilson",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 4,
      title: "캠프장4",
      rating: 4.6,
      description: "숨막히는 풍경, 잘 갖춰진 캠프장, 친절한 직원. 가족 캠핑 여행에 완벽합니다.",
      reviewer: "Sarah Anderson",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 5,
      title: "캠프장5",
      rating: 4.6,
      description: "숨막히는 풍경, 잘 갖춰진 캠프장, 친절한 직원. 가족 캠핑 여행에 완벽합니다.",
      reviewer: "Sarah Anderson",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 6,
      title: "캠프장6",
      rating: 4.6,
      description: "숨막히는 풍경, 잘 갖춰진 캠프장, 친절한 직원. 가족 캠핑 여행에 완벽합니다.",
      reviewer: "Sarah Anderson",
      imageUrl: "/placeholder.svg",
    },
  ]);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
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
        
        {/* 리뷰 쓰기 버튼 */}
        <div className="mt-8 flex justify-end">
          <Link to="/write-review" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
            리뷰 쓰기
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CampReviewComponent;