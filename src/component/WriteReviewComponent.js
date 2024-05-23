import React, { useState } from "react";
import StarRating from "../component/StarRating";

function WriteReviewComponent({ onPostReview }) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePostReview = () => {
    const review = {
      title: title,
      rating: rating,
      description: description,
    };
    // 여기서 onPostReview 함수를 호출합니다.
    onPostReview(review);
  };

  const handleSaveDraft = () => {
    const draftReview = {
      title: title,
      rating: rating,
      description: description,
    };
    // 임시 저장 로직을 구현합니다.
    console.log("임시 저장됨:", draftReview);
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 flex flex-col">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
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
        <div className="flex justify-end mt-8 space-x-4">
          {/* 임시 저장 버튼 */}
          <button
            onClick={handleSaveDraft}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors duration-300"
          >
            임시 저장
          </button>
          {/* 리뷰 올리기 버튼 */}
          <button
            onClick={handlePostReview} // 이 부분에서 클릭 시 handlePostReview 함수를 호출하도록 변경
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300"
          >
            리뷰 올리기
          </button>
        </div>
      </div>
    </section>
  );
}

export default WriteReviewComponent;
