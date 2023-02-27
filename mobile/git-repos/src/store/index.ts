import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import repositoriesSagas from "./sagas/repositories";
import repositoriesReducer from "./repositories";

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    repositories: repositoriesReducer,
  },
  middleware: [saga],
});

saga.run(repositoriesSagas);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
