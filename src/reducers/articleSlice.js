import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: nanoid(),
        title: "مقاله 1",
        image: "pic3.jpg",
        description: "توضیحات 1"
    },
    {
        id: nanoid(),
        title: "مقاله 2",
        image: "pic4.png",
        description: "توضیحات 2"
    },
    {
        id: nanoid(),
        title: "مقاله 3",
        image: "pic5.jpg",
        description: "توضیحات 5"
    },
]

const articleSlice = createSlice({
    name: "articles",
    initialState: initialState,
    reducers: {
        articleAdded: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(articleBody) {
                return {
                    payload: {
                        id: nanoid(),
                        ...articleBody
                    }
                }
            }
        }
    }
})

export default articleSlice.reducer;