import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import usersReducer from "../features/users/usersSlice";

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        // Add any custom middleware here
    ]
})