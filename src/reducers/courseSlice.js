import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: nanoid(),
        title: "title1",
        price: 120000,
        level: "elementry",
        length: "2h",
        startDate: new Date().toISOString(),
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
        startDate: new Date().toISOString(),
        courseType: "course",
        courseStatus: "stopped",
        image: "pic8.jpg",
        description: "description2"
    }
]

const courseSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {}
});

export default courseSlice.reducer;