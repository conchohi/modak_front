import { Suspense, lazy } from "react";
import Loading from "../component/Loading";
const { createBrowserRouter } = require("react-router-dom");

const TodoIndex = lazy(() => import("../pages/IndexPage"))


const root = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={<Loading/>}><TodoIndex /></Suspense>
    }

]);

export default root;