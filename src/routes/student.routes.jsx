import DashboardLayout from "../layouts/DashboardLayout";

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

export const studentRoutes = [
    {
        path: "",
        element: <DashboardLayout items={itemsRef} />,
    }
]