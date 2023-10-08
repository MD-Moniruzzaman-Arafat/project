import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../MainRoot/MainRoot";
import Home from "../page/Home/Home";
import About from "../page/About/About";
import Courses from "../page/Courses/Courses";
import Events from "../page/Events/Events";
import Blog from "../page/Blog/Blog";
import Login from "../page/Login/Login";
import Registration from "../page/Registration/Registration";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Details from "../page/Details/Details";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainRoot></MainRoot>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/course.json')
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/event",
                element: <Events></Events>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/:id",
                loader: () => fetch('/course.json'),
                element: <Details></Details>
            }

        ]
    },
]);

export default router;