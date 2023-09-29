import DashboardLayout from "../layouts/DashboardLayout"
import AdminDashboardLanding from "../pages/dashboard/admin/AdminDashboardLanding"
import EditCourse from "../pages/dashboard/admin/EditCourse"
import CreateCourse from "../pages/dashboard/admin/CreateCoures"
import NotFound from "../pages/NotFound"

const itemsRef = [
    {
        id: "dashboard",
        label: "داشبورد",
        isActive: true,
        link: ""
    }, {
        id: "courses",
        label: "دوره‌ها",
        isActive: false,
        link: "courses"
    }, {
        id: "articles",
        label: "مقاله‌ها",
        isActive: false,
        link: "articles"
    }, {
        id: "teachers",
        label: "اساتید",
        isActive: false,
        link: "teachers"
    },
    {
        id: "students",
        label: "دانشجویان",
        isActive: false,
        link: "students"
    },
    {
        id: "logout",
        label: "خروج از حساب",
        isActive: false,
        link: "../"
    }
]

export const adminRoutes = [
    {
        path: "",
        element: <DashboardLayout items={itemsRef} />,
        children: [
            {
                index: true,
                element: <AdminDashboardLanding />,
            },
            {
                path: 'new-course',
                element: <CreateCourse />
            },
            {
                path: "edit-course/:courseId",
                element: <EditCourse />
            }, {
                path: "*",
                element: <NotFound />
            }
        ],
    },
]

