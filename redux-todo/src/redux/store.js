import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer, // Register the todo slice
  },
});

export default store;
