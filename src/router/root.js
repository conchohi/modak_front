import { Suspense, lazy } from "react";
import Loading from "../component/Loading";
const { createBrowserRouter } = require("react-router-dom");

const TodoIndex = lazy(() => import("../pages/IndexPage"));
const FindId = lazy(() => import("../pages/find/FindIdPage"));
const FindPwd = lazy(() => import("../pages/find/FindPwdPage"));
const Join = lazy(() => import("../pages/Join"));
const Login = lazy(() => import("../pages/Login"));
const MyPage = lazy(() => import("../pages/MyPage"));
const List = lazy(() => import("../pages/CampingList/CampingList"));
<<<<<<< HEAD
const NoticePage = lazy(() => import("../pages/noticepage/NoticePage"));
const FAQPage = lazy(() => import("../pages/noticepage/FAQPage"));
=======
const NoticePage = lazy(()=>import("../pages/noice/NoticePage"));
>>>>>>> cbc985e5db2ee438242bc1f39993970986c0b007

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
    path: "/List",
    element: (
      <Suspense fallback={<Loading />}>
        <List />
      </Suspense>
    ),
  },
  {
<<<<<<< HEAD
    path: "/notice",
    element: (
      <Suspense fallback={<Loading />}>
        <NoticePage />
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
=======
    path:"/notice",
    element:(
      <Suspense fallback={<Loading />}>
        <NoticePage />
      </Suspense>
    )
  }
>>>>>>> cbc985e5db2ee438242bc1f39993970986c0b007
]);

export default root;
