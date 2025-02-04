import { createSlice } from "@reduxjs/toolkit";

interface homepageSlice {
  highlightPageNumber: number;
}

const initialState: homepageSlice = {
  highlightPageNumber: 1,
};

const homepageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    updateHighlightPageNumber(state) {
      state.highlightPageNumber++;
    },
  },
});

export const { updateHighlightPageNumber } = homepageSlice.actions;
export default homepageSlice.reducer;
