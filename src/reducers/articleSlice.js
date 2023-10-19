import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { getAllArticles } from "../services/articleServices";

const initialState = {
    articles: [],
    status: "idle",
    error: null,
};

export const fetchArticles = createAsyncThunk(
    "articles/fetchArticles",
    async () => {
        const { data } = await getAllArticles();
        return data;
    }
);

const articleSlice = createSlice({
    name: "articles",
    initialState: initialState,
    reducers: {
        articleAdded: {
            reducer(state, action) {
                state.articles.push(action.payload);
            },
            prepare(articleBody) {
                return {
                    payload: {
                        id: nanoid(),
                        ...articleBody,
                    },
                };
            },
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.status = "completed";
                state.articles = action.payload;
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const selectAllArticles = (state) => state.articles.articles;

export const selectArticlById = (state) => (state, articleId) =>
    state.articles.articles.find((article) => article.id === articleId);

export default articleSlice.reducer;
