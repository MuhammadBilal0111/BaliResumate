import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resumeInfo: null,
};
const resumeInfoSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    editResumeInfo: (state, action) => {
      state.resumeInfo = action.payload;
    },
  },
});
export const { editResumeInfo } = resumeInfoSlice.actions;
export default resumeInfoSlice;
