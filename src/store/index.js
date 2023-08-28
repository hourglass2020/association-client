import { configureStore } from "@reduxjs/toolkit";

import courseReducer from "../reducers/courseSlice";

export const store = configureStore({
    reducer: {
        courses: courseReducer
    }
})