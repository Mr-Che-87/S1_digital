import { configureStore } from "@reduxjs/toolkit";
import blogFilterReducer from "../services/slices/blogFilterSlice";
import openServiceSlice from '../services/slices/openServiceSlice'
export const store = configureStore({
  reducer: {
    openServiceSlice,
    blogFilter: blogFilterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
