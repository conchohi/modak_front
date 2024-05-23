import BasicLayout from "../layouts/BasicLayout";
import WriteReviewComponent from "../component/WriteReviewComponent";

function WriteReviewPage() {
  const handlePostReview = (review) => {
    // 리뷰를 올리는 로직을 구현합니다.
    console.log("리뷰가 올라감:", review);
  };

  return (
    <>
      <BasicLayout>
        {/* WriteReviewComponent에 onPostReview 함수를 전달합니다 */}
        <WriteReviewComponent onPostReview={handlePostReview} />
      </BasicLayout>
    </>
  );
}

export default WriteReviewPage;
