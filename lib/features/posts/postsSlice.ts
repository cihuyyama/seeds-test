import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Post {
    id: number;
    title: string;
    content: string;
    publicationDate: string;
}

const initialState: Post[] = [
    {
        id: 1,
        title: 'First post!',
        content: 'Hello!',
        publicationDate: new Date().toISOString()
    }
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost(state, action) {
            state.push(action.payload);
        },
        deletePost(state, action: PayloadAction<number>) {
            return state.filter((post) => post.id !== action.payload);
        },
        updatePost(state, action: PayloadAction<Post>) {
            const post = state.find((post) => post.id === action.payload.id);
            if (post) {
                post.title = action.payload.title;
                post.content = action.payload.content;
            }
        }
    }
});

export const { addPost, deletePost, updatePost } = postsSlice.actions;
export default postsSlice.reducer;