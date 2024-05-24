import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CampReviewDetailComponent() {
    const { reviewNo } = useParams();
    const [review, setReview] = useState(null);

    useEffect(() => {
        const fetchReview = async () => {
            try {
                const response = await axios.get(`http://localhost:4040/api/review/${reviewNo}`);
                setReview(response.data.data);
                console.log(review)
            } catch (error) {
                console.error("Error fetching review:", error);
            }
        };

        fetchReview();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!review) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{review.title}</h2>
            <p>{review.content}</p>
            <p>평점: {review.score}</p>
            <p>작성자: {review.userNickname}</p>
            {/* 작성일자가 있다면 작성일자 표시 */}
            {review.createDate && (
                <p>작성일자: {review.createDate}</p>
            )}
            {/* 리뷰에 이미지가 있다면 이미지 표시 */}
            {review.imageUrl && (
                <img src={review.imageUrl} alt="리뷰 이미지" />
            )}
            {/* 기타 필요한 정보 표시 */}
        </div>
    );
}

export default CampReviewDetailComponent;
