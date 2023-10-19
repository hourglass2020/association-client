import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { getAllCourses } from "../services/mainServices";
import { createCourse } from "../services/teacherServices";

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

export const addNewCourse = createAsyncThunk("courses/addNewCourse", async initialCourse => {
    const { data } = await createCourse(initialCourse);
    return data;
})


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
            ;
    },
});

export const selectAllCourses = (state) => state.courses.courses;

export const selectCourseById = (state, courseId) =>
    state.courses.courses.find((course) => course.id === courseId);

export const { courseAdded, courseUpdated, courseDeleted } =
    courseSlice.actions;

export default courseSlice.reducer;
