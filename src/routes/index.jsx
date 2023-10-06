import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout.jsx";
import { landingRoutes } from "./landing.routes.jsx";
import { adminRoutes } from "./admin.routes.jsx";
import { teacherRoutes } from "./teacher.routes.jsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: landingRoutes
    },
    {
        path: "/admin-panel",
        children: adminRoutes
    },
    {
        path: "/teacher-panel",
        children: teacherRoutes
    },
])