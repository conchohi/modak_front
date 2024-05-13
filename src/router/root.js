import { Suspense, lazy } from "react";
import Loading from "../component/common/Loading";
const { createBrowserRouter } = require("react-router-dom");

const TodoIndex = lazy(() => import("../pages/IndexPage"));
const FindId = lazy(() => import("../pages/find/FindIdPage"));
const FindPwd = lazy(() => import("../pages/find/FindPwdPage"));
const Join = lazy(() => import("../pages/Join"));
const Login = lazy(() => import("../pages/Login"));
const MyPage = lazy(() => import("../pages/MyPage"));
const List = lazy(() => import("../pages/CampingListPage.js"));
const Detail = lazy(() => import("../pages/CampingDetailPage.js"));
const CampReview = lazy(() => import("../pages/CampReview"));
const NoticePage = lazy(() => import("../pages/noticepage/NoticePage"));
const FAQPage = lazy(() => import("../pages/noticepage/FAQPage"));

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
    path: "/camp/list",
    element: (
      <Suspense fallback={<Loading />}>
        <List />
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
    path: "/campreview",
    element: (
      <Suspense fallback={<Loading />}>
        <CampReview />
      </Suspense>
    ),
  },
]);

export default root;
