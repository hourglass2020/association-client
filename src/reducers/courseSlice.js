import {
    createAsyncThunk,
    createDraftSafeSelector,
    createSelector,
    createSlice,
    nanoid,
} from "@reduxjs/toolkit";
import { getAllCourses } from "../services/mainServices";
import {
    createCourse,
    deleteCourse,
    updateCourse,
} from "../services/teacherServices";

const initialState = {
    courses: [],
    status: "idle",
    error: null,
};

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
        /* courseAdded: (state, action) => {
                                    state.push(action.payload);
                                } */
        // Complex logic
        courseAdded: {
            reducer(state, action) {
                state.courses.push(action.payload);
            },
            prepare(courseBody) {
                return {
                    payload: {
                        id: nanoid(),
                        ...courseBody,
                    },
                };
            },
        },
        courseUpdated: (state, action) => {
            const { id } = action.payload;
            const existingCourseIndex = state.courses.findIndex(
                (course) => course.id === id
            );

            if (existingCourseIndex !== -1) {
                state.courses[existingCourseIndex] = action.payload;
            }
        },
        courseDeleted: (state, action) => {
            const { id } = action.payload;
            state.courses = state.courses.filter((course) => course.id !== id);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCourses.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchCourses.fulfilled, (state, action) => {
                state.status = "completed";
                state.courses = action.payload;
            })
            .addCase(fetchCourses.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(addNewCourse.fulfilled, (state, action) => {
                state.courses.push(action.payload);
            })
            .addCase(deleteApiCourse.fulfilled, (state, action) => {
                state.courses = state.courses.filter(
                    (course) => course.id !== action.payload
                );
            })
            .addCase(updateApiCourse.fulfilled, (state, action) => {
                const { id } = action.payload;
                const updatedCourseIndex = state.courses.findIndex(
                    (course) => course.id === id
                );
                state.courses[updatedCourseIndex] = action.payload;
            });
    },
});

export const selectAllCourses = (state) => state.courses.courses;

export const selectCourseById = (state, courseId) =>
    state.courses.courses.find((course) => course.id === courseId);

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

export default courseSlice.reducer;
