import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { apiSlice } from "../api/apiSlice";
import courseReducer, { fetchCourses } from "../reducers/courseEntity";
import articleReducer, { fetchArticles } from "../reducers/articleSlice";

export const store = configureStore({
    reducer: {
        courses: courseReducer,
        articles: articleReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})

// store.dispatch(fetchArticles());
// store.dispatch(fetchCourses());

store.dispatch(apiSlice.endpoints.getCourses.initiate());
store.dispatch(apiSlice.endpoints.getBanners.initiate());