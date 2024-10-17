import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resumeInfo: null,
};
const resumeInfoSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    resumeInfo: (state, action) => {
      state.resumeInfo = action.payload;
    },
  },
});
export const { resumeInfo } = resumeInfoSlice.actions;
export default resumeInfoSlice;
