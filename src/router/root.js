import { Suspense, lazy } from "react";
import Loading from "../component/Loading";
import { createBrowserRouter } from "react-router-dom";

const TodoIndex = lazy(() => import("../pages/IndexPage"));
const FindId = lazy(() => import("../pages/find/FindIdPage"));
const FindPwd = lazy(() => import("../pages/find/FindPwdPage"));
const Join = lazy(() => import("../pages/Join"));
const Login = lazy(() => import("../pages/Login"));
const MyPage = lazy(() => import("../pages/MyPage"));
const List = lazy(() => import("../pages/CampingList/CampingList"));
const CampReview = lazy(() => import("../pages/CampReview"));
const CampReviewDetail = lazy(() => import("../pages/CampReviewDetail"));
const WriteReviewPage = lazy(() => import("../pages/WriteReviewPage")); // 변경

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
        <Join />
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
    path: "/list",
    element: (
      <Suspense fallback={<Loading />}>
        <List />
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
]);

export default root;
