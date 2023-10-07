import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../MainRoot/MainRoot";
import Home from "../page/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainRoot></MainRoot>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }

        ]
    },
]);

export default router;