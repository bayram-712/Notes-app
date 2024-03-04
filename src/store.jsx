import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./features/note/noteSlice";

const store = configureStore({
  reducer: {
    note: noteReducer,
  },
});

export default store;
