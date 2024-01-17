import Landing from "../pages/landing/Landing.jsx";
import NotFound from "../pages/NotFound.jsx";
import Course from "../pages/course/Course.jsx";
import Blog from "../pages/blog/Blog.jsx";
import { Webinars } from "../pages/webinars/Webinars.jsx";
import Webinar from "../pages/webinar/Webinar.jsx";
import Talangor from "../pages/talangor/Talangor.jsx";
import Login from "../pages/auth/Login.jsx";
import Register from "../pages/auth/Register.jsx";
import CoursePage from "../pages/course/CoursePage.jsx";
import CoursesSection from "../pages/courses/CoursesSection.jsx";
import BlogSection from "../pages/blog/BlogSection.jsx";

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
        element: <CoursesSection />,
    },
    {
        path: "courses/:courseId",
        element: <CoursePage />,
    },
    {
        path: "blog",
        element: <BlogSection />,
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