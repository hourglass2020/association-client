import DashboardLayout from "../layouts/DashboardLayout";
import NotFound from "../pages/NotFound";

import {
    AdminArticle,
    AdminArticles,
    AdminCreateArticle,
    AdminCreateTeacher,
    AdminEditArticle,
    AdminEditTeacher,
    AdminTeacher,
    AdminTeachers,
    AdminStudent,
    AdminStudents,
    AdminBannerDetails,
    AdminBanners,
    EditBannerPage,
    AdminCourseDetails,
    AdminCourses,
    AdminDashboardLanding,
    CreateCoursePage,
    EditCoursePage
} from "../pages/admin";

const itemsRef = [
    {
        id: "dashboard",
        label: "داشبورد",
        isActive: true,
        link: "",
    },
    {
        id: "courses",
        label: "دوره‌ها",
        isActive: false,
        link: "courses",
    },
    {
        id: "articles",
        label: "مقاله‌ها",
        isActive: false,
        link: "articles",
    },
    {
        id: "teachers",
        label: "اساتید",
        isActive: false,
        link: "teachers",
    },
    {
        id: "students",
        label: "دانشجویان",
        isActive: false,
        link: "students",
    },
    {
        id: "banners",
        label: "بنرها",
        isActive: false,
        link: "banners",
    },
    {
        id: "logout",
        label: "خروج از حساب",
        isActive: false,
        link: "../",
    },
];

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
                path: "courses",
                element: <AdminCourses />,
            },
            {
                path: "courses/:courseId",
                element: <AdminCourseDetails />,
            },
            {
                path: "new-course",
                element: <CreateCoursePage />,
            },
            {
                path: "edit-course/:courseId",
                element: <EditCoursePage />,
            },
            {
                path: "banners",
                element: <AdminBanners />,
            },
            {
                path: "banners/:bannerId",
                element: <AdminBannerDetails />,
            },
            {
                path: "edit-banner/:bannerId",
                element: <EditBannerPage />,
            },
            {
                path: "teachers",
                element: <AdminTeachers />,
            },
            {
                path: "teachers/:teacherId",
                element: <AdminTeacher />,
            },
            {
                path: "create-teacher",
                element: <AdminCreateTeacher />,
            },
            {
                path: "edit-teacher/:teacherId",
                element: <AdminEditTeacher />,
            },
            {
                path: "students",
                element: <AdminStudents />,
            },
            {
                path: "students/:studentId",
                element: <AdminStudent />,
            },
            {
                path: "articles",
                element: <AdminArticles />,
            },
            {
                path: "articles/:articleId",
                element: <AdminArticle />,
            },
            {
                path: "create-article",
                element: <AdminCreateArticle />,
            },
            {
                path: "edit-article/:articleId",
                element: <AdminEditArticle />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
];
