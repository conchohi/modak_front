import { Suspense, lazy } from "react";
import Loading from "../component/Loading";
const { createBrowserRouter } = require("react-router-dom");

const TodoIndex = lazy(() => import("../pages/IndexPage"))
const FindId = lazy(() => import("../pages/find/FindIdPage"))
const FindPwd = lazy(() => import("../pages/find/FindPwdPage"))
const Join = lazy(() => import("../pages/Join"))
const Login = lazy(()=> import("../pages/Login"))

const root = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={<Loading/>}><TodoIndex /></Suspense>
    },
    {
        path: "/find/id",
        element: <Suspense fallback={<Loading/>}><FindId /></Suspense>
    },
    {
        path: "/find/pwd",
        element: <Suspense fallback={<Loading/>}><FindPwd/></Suspense>
    },
    {
        path: "/login",
        element: <Suspense fallback={<Loading/>}><Login/></Suspense>
    },
    {
        path: "/join",
        element: <Suspense fallback={<Loading/>}><Join/></Suspense>
    }

]);

export default root;