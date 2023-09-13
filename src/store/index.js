import { configureStore } from "@reduxjs/toolkit";

import courseReducer from "../reducers/courseSlice";
import articleReducer from "../reducers/articleSlice";

export const store = configureStore({
    reducer: {
        courses: courseReducer,
        articles: articleReducer,
    }
})