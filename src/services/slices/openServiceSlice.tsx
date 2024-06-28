import { createSlice } from "@reduxjs/toolkit";
const openServiceSlice = createSlice({
  name: "openServiceSlice",
  initialState: {
    open: false,
  },
  reducers: {
    setOpenServiceSlice: (state, action) => {
      state.open = action.payload;
    },
  },
});
export const { setOpenServiceSlice } = openServiceSlice.actions;
export default openServiceSlice.reducer;