import { Suspense, lazy } from "react";

const { createBrowserRouter } = require("react-router-dom");

const Loading = <div>Loading....</div>

const TodoIndex = lazy(() => import("../pages/IndexPage"))


const root = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={Loading}><TodoIndex /></Suspense>
    }

]);

export default root;