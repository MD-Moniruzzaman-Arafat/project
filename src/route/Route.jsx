import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../MainRoot/MainRoot";
import Home from "../page/Home/Home";
import About from "../page/About/About";
import Events from "../page/Events/Events";
import Blog from "../page/Blog/Blog";
import Login from "../page/Login/Login";
import Registration from "../page/Registration/Registration";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Details from "../page/Details/Details";
import PrivateRoute from "../privateRoute/PrivateRoute";

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
                element: <PrivateRoute><Events></Events></PrivateRoute>
            },
            {
                path: "/blog",
                element: <PrivateRoute><Blog></Blog></PrivateRoute>
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
                element: <PrivateRoute><Details></Details></PrivateRoute>
            }

        ]
    },
]);

export default router;