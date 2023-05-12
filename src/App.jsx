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
            }
        ]
    }
])

function App() {
    return (
        <div dir={"rtl"}>
            <Toaster position={"bottom-left"}/>
            <ThemeProvider>
                <HelmetProvider>
                    <RouterProvider router={router}/>
                </HelmetProvider>
            </ThemeProvider>
        </div>
    )
}

export default App
