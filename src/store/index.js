import { configureStore } from "@reduxjs/toolkit";

import courseReducer, { fetchCourses } from "../reducers/courseSlice";
import articleReducer, { fetchArticles } from "../reducers/articleSlice";

export const store = configureStore({
    reducer: {
        courses: courseReducer,
        articles: articleReducer,
    }
})

store.dispatch(fetchArticles());
store.dispatch(fetchCourses());