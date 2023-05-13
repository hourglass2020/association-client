import {useState} from 'react'

import {Button, ThemeProvider} from "react-bootstrap";
import {Toaster} from "react-hot-toast";
import {HelmetProvider} from "react-helmet-async";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import MainLayout from "./layouts/MainLayout.jsx";
import Landing from "./pages/landing/Landing.jsx";
import NotFound from "./pages/NotFound.jsx";
import {Courses} from "./pages/courses/Courses.jsx";
import Course from "./pages/course/Course.jsx";
import Blog from "./pages/blog/Blog.jsx";
import {Webinars} from "./pages/webinars/Webinars.jsx";
import Webinar from "./pages/webinar/Webinar.jsx";
import Talangor from "./pages/talangor/Talangor.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "",
                element: <Landing/>
            },
            {
                path: "*",
                element: <NotFound/>
            },
            {
                path: "courses",
                element: <Courses/>
            },
            {
                path: "courses/:courseId",
                element: <Course/>
            },
            {
                path: "blog",
                element: <Blog/>
            },
            {
                path: "webinars",
                element: <Webinars/>
            },
            {
                path: "webinars/:webinarId",
                element: <Webinar/>
            }, {
                path: "talangor",
                element: <Talangor/>
            }
        ]
    }
])

function App() {
    return (
        <div dir={"rtl"}>
            <ThemeProvider>
                <Toaster position={"bottom-left"}/>
                <HelmetProvider>
                    <RouterProvider router={router}/>
                </HelmetProvider>
            </ThemeProvider>
        </div>
    )
}

export default App
