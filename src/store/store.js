import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "../features/todo/toDoSlice";

export const store = configureStore({
  reducer: {
    todo: toDoReducer,
  },
});
