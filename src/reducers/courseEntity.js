import {
    createAsyncThunk,
    createDraftSafeSelector,
    createEntityAdapter,
    createSlice,
} from "@reduxjs/toolkit";

import { getAllCourses } from "../services/mainServices";
import {
    createCourse,
    deleteCourse,
    updateCourse,
} from "../services/teacherServices";
import { apiSlice } from "../api/apiSlice";

const courseAdaptor = createEntityAdapter({
    // selectId: course => course._id,
    sortComparer: (a, b) => b.updatedAt.localeCompare(a.data),
});

const initialState = courseAdaptor.getInitialState({
    // ids: [] , entities: {}
    status: "idle",
    error: null,
});

export const fetchCourses = createAsyncThunk(
    "courses/fetchCourses",
    async () => {
        const { data } = await getAllCourses();
        return data;
    }
);

export const addNewCourse = createAsyncThunk(
    "courses/addNewCourse",
    async (initialCourse) => {
        const { data } = await createCourse(initialCourse);
        return data;
    }
);

export const deleteApiCourse = createAsyncThunk(
    "courses/deleteApiCourse",
    async (initialCourseId) => {
        await deleteCourse(initialCourseId);
        return initialCourseId;
    }
);

export const updateApiCourse = createAsyncThunk(
    "courses/updateApiCourse",
    async (initialCourse) => {
        const response = await updateCourse(initialCourse, initialCourse.id);
        return response.data;
    }
);

const courseSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        courseUpdated: (state, action) => {
            let existingCourse = state.entities[action.payload.id];

            if (existingCourse) {
                existingCourse = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCourses.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCourses.fulfilled, (state, action) => {
                state.status = "completed";
                courseAdaptor.upsertMany(state, action.payload);
            })
            .addCase(fetchCourses.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            /* .addCase(addNewCourse.fulfilled, (state, action) => {
                      courseAdaptor.addOne(action.payload);
                  }) */
            .addCase(addNewCourse.fulfilled, courseAdaptor.addOne)
            /* .addCase(deleteApiCourse.fulfilled, (state, action) => {
                      state.courses = state.courses.filter(
                          (course) => course.id !== action.payload
                      );
                  }) */
            .addCase(deleteApiCourse.fulfilled, courseAdaptor.removeOne)
            /* .addCase(updateApiCourse.fulfilled, (state, action) => {
                      const { id } = action.payload;
                      const updatedCourseIndex = state.courses.findIndex(
                          (course) => course.id === id
                      );
                      state.courses[updatedCourseIndex] = action.payload;
                  }); */
            .addCase(updateApiCourse.fulfilled, courseAdaptor.updateOne);
    },
});

export const {
    selectAll: selectAllCourses,
    selectById: selectCourseById,
    selectIds: selectCourseIds,
} = courseAdaptor.getSelectors((state) => state.courses);

/* export const selectCourseByTitle = createSelector(
    [selectAllCourses, (state, keyword) => keyword],
    (courses, keyword) =>
        courses.filter((course) => course.title.includes(keyword))
); */

export const selectCourseByTitle = createDraftSafeSelector(
    [selectAllCourses, (state, keyword) => keyword],
    (courses, keyword) =>
        courses.filter((course) => course.title.includes(keyword))
);

export const { courseAdded, courseUpdated, courseDeleted } =
    courseSlice.actions;


// --------------------------------------------------------------

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getArticles: builder.query({
            query: () => "/articles",
            /*   transformResponse: responseData => {
                  return articleAdaptor.setAll(initialState, responseData);
              } */
        })
    })
})

export const { useGetArticlesQuery } = extendedApiSlice;

export const selectCoursesResult = apiSlice.endpoints.getCourses.select();

const emptyCourses = [];

export const selectAllCoursesSlice = createDraftSafeSelector(
    selectAllCourses,
    (coursesResult) => coursesResult?.data ?? emptyCourses
);

export default courseSlice.reducer;
