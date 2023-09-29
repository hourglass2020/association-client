import Landing from "../pages/landing/Landing.jsx";
import NotFound from "../pages/NotFound.jsx";
import { Courses } from "../pages/courses/Courses.jsx";
import Course from "../pages/course/Course.jsx";
import Blog from "../pages/blog/Blog.jsx";
import { Webinars } from "../pages/webinars/Webinars.jsx";
import Webinar from "../pages/webinar/Webinar.jsx";
import Talangor from "../pages/talangor/Talangor.jsx";
import Login from "../pages/auth/Login.jsx";
import Register from "../pages/auth/Register.jsx";

export const landingRoutes = [

    {
        path: "",
        element: <Landing />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'register',
        element: <Register />
    },
    {
        path: "courses",
        element: <Courses />,
    },
    {
        path: "courses/:courseId",
        element: <Course />,
    },
    {
        path: "blog",
        element: <Blog />,
    },
    {
        path: "webinars",
        element: <Webinars />,
    },
    {
        path: "webinars/:webinarId",
        element: <Webinar />,
    },
    {
        path: "talangor",
        element: <Talangor />,
    }
]