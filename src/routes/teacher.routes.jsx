import DashboardLayout from "../layouts/DashboardLayout"
import NotFound from "../pages/NotFound"
import TeacherDashboardLanding from "../pages/dashboard/teacher/TeacherDashboardLanding"
import TeacherCourses from "../pages/dashboard/teacher/TeacherCourses"
import TeacherCourseDetails from "../pages/dashboard/teacher/TeacherCourseDetails"

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
    },
    {
        id: "logout",
        label: "خروج از حساب",
        isActive: false,
        link: "../"
    }
]

export const teacherRoutes = [
    {
        path: "",
        element: <DashboardLayout items={itemsRef} />,
        children: [
            {
                index: true,
                element: <TeacherDashboardLanding />,
            },
            {
                path: "courses",
                element: <TeacherCourses />
            },
            {
                path: "courses/:courseId",
                element: <TeacherCourseDetails />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ],
    },
]

