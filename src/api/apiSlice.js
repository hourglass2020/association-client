import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const axiosBaseQuery =
    ({ baseUrl } = { baseUrl: "" }) =>
        async ({ url, method, data, params, headers }) => {
            try {
                const result = await axios({
                    url: baseUrl + url,
                    method,
                    data,
                    params,
                    headers,
                });
                return { data: result.data };
            } catch (axiosError) {
                const err = axiosError;
                return {
                    error: {
                        status: err.response?.status,
                        data: err.response?.data || err.message,
                    },
                };
            }
        };

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:7000",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set("authorization", `Beare ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ["COURSE", "BANNER", "TEACHER", "STUDENT", "ARTICLE"],
    endpoints: (builder) => ({
        //? Public endpoints
        getCourses: builder.query({
            query: () => "/courses",
            // providesTags: ["COURSE"],
            providesTags: (result = [], error, arg) => [
                "COURSE",
                ...result.map(({ id }) => ({ type: "COURSE", id })), // special tag for edit a specific course, so that course should be update
            ],
        }),
        getBanners: builder.query({
            query: () => "/banners",
            providesTags: (result = [], error, arg) => [
                "BANNER",
                ...result.map(({ id }) => ({ type: "BANNER", id })),
            ],
        }),
        getCourse: builder.query({
            query: (initialCourseId) => `/courses/${initialCourseId}`,
            providesTags: (result, error, arg) => [{ type: "COURSE", id: arg }],
        }),
        //? Admin endpoints
        getAdminCourses: builder.query({
            query: () => "/admins/courses",
            providesTags: (result = [], error, arg) => [
                "COURSE",
                ...result.map(({ id }) => ({ type: "COURSE", id })),
            ],
        }),
        getAdminCourse: builder.query({
            query: (courseId) => `/admins/courses/${courseId}`,
            providesTags: (result, error, arg) => [{ type: "COURSE", id: arg }],
        }),
        createNewCourse: builder.mutation({
            query: (initialCourse) => ({
                url: "/admins/courses",
                method: "POST",
                body: initialCourse,
            }),
            invalidatesTags: ["COURSE"],
        }),
        editCourse: builder.mutation({
            query: (course) => ({
                url: `/admins/courses/${course.get("id")}`,
                method: "PUT",
                body: course,
            }),
            invalidatesTags: (result, error, arg) => [{ type: "COURSE", id: arg.id }],
        }),
        deleteCourse: builder.mutation({
            query: (courseId) => ({
                url: `/admins/courses/${courseId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["COURSE"],
        }),
        getAdminBanners: builder.query({
            query: () => "/admins/banners",
            providesTags: (result = [], error, arg) => [
                "BANNER",
                ...result.map(({ id }) => ({ type: "BANNER", id })),
            ],
        }),
        getAdminBanner: builder.query({
            query: (bannerId) => `/admins/banners/${bannerId}`,
            providesTags: (result, error, arg) => [{ type: "BANNER", id: arg }],
        }),
        editBanner: builder.mutation({
            query: (banner) => ({
                url: `/admins/banners/${banner.get("id")}`,
                method: "PUT",
                body: banner,
            }),
            invalidatesTags: (result, error, arg) => [{ type: "BANNER", id: arg.id }],
        }),
        getAdminTeachers: builder.query({
            query: () => "/admins/teachers",
            providesTags: (result = [], error, arg) => [
                "TEACHER",
                ...result.map(({ id }) => ({ type: "TEACHER", id })),
            ],
        }),
        getAdminTeacher: builder.query({
            query: (teacherId) => `/admins/teachers/${teacherId}`,
            providesTags: (result, error, arg) => [{ type: "TEACHER", id: arg }],
        }),
        deleteAdminTeacher: builder.mutation({
            query: (teacherId) => ({
                url: `/admins/${teacherId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["TEACHER"],
        }),
        editAdminTeacher: builder.mutation({
            query: (teacher) => ({
                url: `/admins/teachers/${teacher.ProfileId}`,
                method: "PUT",
                body: teacher,
            }),
            invalidatesTags: (result, error, arg) => [
                { type: "TEACHER", id: arg.id },
            ],
        }),
        createAdminTeacher: builder.mutation({
            query: (initialTeacher) => ({
                url: `/admins/teachers`,
                method: "POST",
                body: initialTeacher,
            }),
            invalidatesTags: ["TEACHER"],
        }),
        getAdminStudents: builder.query({
            query: () => "/admins/students",
            providesTags: (result = [], error, arg) => [
                "STUDENT",
                ...result.map(({ id }) => ({ type: "STUDENT", id })),
            ],
        }),
        getAdminStudent: builder.query({
            query: (studentId) => `/admins/students/${studentId}`,
            providesTags: (result, error, arg) => [{ type: "STUDENT", id: arg }],
        }),
        deleteStudent: builder.mutation({
            query: (studentId) => ({
                url: `/admins/${studentId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["STUDENT"],
        }),
        getAdminArticles: builder.query({
            query: () => "/admins/articles",
            providesTags: (result = [], error, arg) => [
                "ARTICLE",
                ...result.map(({ id }) => ({ type: "ARTICLE", id })),
            ],
        }),
        getAdminArticle: builder.query({
            query: (courseId) => `/admins/articles/${courseId}`,
            providesTags: (result, error, arg) => [{ type: "ARTICLE", id: arg }],
        }),
        createNewArticle: builder.mutation({
            query: (initialArticle) => ({
                url: "/admins/articles",
                method: "POST",
                body: initialArticle,
            }),
            invalidatesTags: ["ARTICLE"],
        }),
        editArticle: builder.mutation({
            query: (article) => ({
                url: `/admins/articles/${article.get("id")}`,
                method: "PUT",
                body: article,
            }),
            invalidatesTags: (result, error, arg) => [
                { type: "ARTICLE", id: arg.id },
            ],
        }),
        deleteArticle: builder.mutation({
            query: (articleId) => ({
                url: `/admins/articles/${articleId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["ARTICLE"],
        }),
    }),
});

export const {
    // Public
    useGetBannersQuery,
    useGetCourseQuery,
    useGetCoursesQuery,
    // Dashboard

    // Course
    useGetAdminCourseQuery,
    useGetAdminCoursesQuery,
    useCreateNewCourseMutation,
    useEditCourseMutation,
    useDeleteCourseMutation,
    // Banner
    useEditBannerMutation,
    useGetAdminBannersQuery,
    useGetAdminBannerQuery,
    // Teacher
    useGetAdminTeachersQuery,
    useCreateAdminTeacherMutation,
    useEditAdminTeacherMutation,
    useGetAdminTeacherQuery,
    useDeleteAdminTeacherMutation,
    //Article
    useEditArticleMutation,
    useGetAdminArticleQuery,
    useGetAdminArticlesQuery,
    useDeleteArticleMutation,
    useCreateNewArticleMutation,
    // Student
    useGetAdminStudentQuery,
    useGetAdminStudentsQuery,
    useDeleteStudentMutation,
} = apiSlice;
