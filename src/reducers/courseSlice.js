import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: nanoid(),
        title: "title1",
        price: 120000,
        level: "elementry",
        length: "2h",
        startDate: "2023-01-02",
        courseType: "course",
        courseStatus: "stopped",
        image: "pic7.jpg",
        description: "description1"
    },
    {
        id: nanoid(),
        title: "title2",
        price: 140000,
        level: "elementry",
        length: "4h",
        startDate: "2023-06-23",
        courseType: "course",
        courseStatus: "stopped",
        image: "pic8.jpg",
        description: "description2"
    }
]

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
                state.push(action.payload);
            },
            prepare(courseBody) {
                return {
                    payload: {
                        id: nanoid(),
                        ...courseBody
                    }
                }
            }
        }
    }
});

export const { courseAdded } = courseSlice.actions;

export default courseSlice.reducer;