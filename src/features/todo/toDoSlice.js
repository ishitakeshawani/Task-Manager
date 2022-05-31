import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
const initialState = {
  toDoList: [],
};

export const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      state.toDoList = [...state.toDoList, action.payload];
    },
  },
});

export default toDoSlice.reducer;
export const { addToDo } = toDoSlice.actions;
export const useToDo = () => useSelector((state) => state);
