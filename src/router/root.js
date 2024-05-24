import { Suspense, lazy } from "react";
import Loading from "../component/common/Loading";
const { createBrowserRouter } = require("react-router-dom");

const TodoIndex = lazy(() => import("../pages/IndexPage"));
const FindId = lazy(() => import("../pages/find/FindIdPage"));
const FindPwd = lazy(() => import("../pages/find/FindPwdPage"));
const SignUp = lazy(() => import("../pages/Authentication/SignUp/index.tsx"));
const Login = lazy(() => import("../pages/Login"));
const MyPage = lazy(() => import("../pages/MyPage"));
const List = lazy(() => import("../pages/CampingListPage.js"));
const ListByWeather = lazy(() => import("../pages/CampingListByWeatherPage"));
const Detail = lazy(() => import("../pages/CampingDetailPage.js"));
const CampReview = lazy(() => import("../pages/CampReview"));
const CampReviewDetail = lazy(() => import("../pages/CampReviewDetail"));
const WriteReviewPage = lazy(() => import("../pages/WriteReviewPage")); // 변경
const NoticePage = lazy(() => import("../pages/noticepage/NoticePage"));
const FAQPage = lazy(() => import("../pages/noticepage/FAQPage"));
const CampingFoodPage = lazy(() => import("../pages/CampingFoodPage"));

const CampingInfo = lazy(() =>
  import("../pages/campingInformation/CampingInfo")
);


const AccessToken = lazy(() => import("../pages/social/getAccessPage"));

const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={<Loading />}>
        <TodoIndex />
      </Suspense>
    ),
  },
  {
    path: "/find/id",
    element: (
      <Suspense fallback={<Loading />}>
        <FindId />
      </Suspense>
    ),
  },
  {
    path: "/find/pwd",
    element: (
      <Suspense fallback={<Loading />}>
        <FindPwd />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loading />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/join",
    element: (
      <Suspense fallback={<Loading />}>
        <SignUp />
      </Suspense>
    ),
  },
  {
    path: "/mypage",
    element: (
      <Suspense fallback={<Loading />}>
        <MyPage />
      </Suspense>
    ),
  },
  {
    path: "/camp/list",
    element: (
      <Suspense fallback={<Loading />}>
        <List />
      </Suspense>
    ),
  },
  {
    path: "/camp/listByWeather",
    element: (
      <Suspense fallback={<Loading />}>
        <ListByWeather />
      </Suspense>
    ),
  },
  {
    path: "/notice",
    element: (
      <Suspense fallback={<Loading />}>
        <NoticePage />{" "}
      </Suspense>
    ),
  },
  {
    path: "/camp/:campNo",
    element: (
      <Suspense fallback={<Loading />}>
        <Detail />
      </Suspense>
    ),
  },
  {
    path: "/faq",
    element: (
      <Suspense fallback={<Loading />}>
        <FAQPage />
      </Suspense>
    ),
  },
  {
    path: "/notice",
    element: (
      <Suspense fallback={<Loading />}>
        <NoticePage />
      </Suspense>
    ),
  },
  {
    path: "/campreview/:id",
    element: (
      <Suspense fallback={<Loading />}>
        <CampReviewDetail />
      </Suspense>
    ),
  },
  {
    path: "/write-review",
    element: (
      <Suspense fallback={<Loading />}>
        <WriteReviewPage />
      </Suspense>
    ),
  },
  {
    path: "/campreview",
    element: (
      <Suspense fallback={<Loading />}>
        <CampReview />
      </Suspense>
    ),
  },
  {

    path: "/campFood",
    element: (
      <Suspense fallback={<Loading />}>
        <CampingFoodPage />
      </Suspense>
    ),
  },
  {

    path: "/campinfo",
    element: (
      <Suspense fallback={<Loading />}>
        <CampingInfo />
      </Suspense>
    ),
  },
  {
    path: "/getAccess",
    element: (
      <Suspense fallback={<Loading />}>
        <AccessToken />

      </Suspense>
    ),
  }

]);

export default root;
