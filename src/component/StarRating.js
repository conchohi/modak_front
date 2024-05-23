import React, { useState } from "react";
import "../style/StarRating.css"; // 상대 경로를 사용하여 스타일 파일을 import합니다.

const StarRating = ({ rating, onRatingChange }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const onMouseEnter = (index) => {
    setHoverRating(index);
  };

  const onMouseLeave = () => {
    setHoverRating(0);
  };

  const onClick = (index) => {
    onRatingChange(index);
  };

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        const starNumber = index + 1;
        return (
          <span
            key={index}
            className="star cursor-pointer"
            onMouseEnter={() => onMouseEnter(starNumber)}
            onMouseLeave={onMouseLeave}
            onClick={() => onClick(starNumber)}
          >
            {starNumber <= (hoverRating || rating) ? "★" : "☆"}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
