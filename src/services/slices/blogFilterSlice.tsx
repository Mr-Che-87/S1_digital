//для фильтрации статей в блоге:

import { createSlice } from "@reduxjs/toolkit";

const blogFilterSlice = createSlice({
  name: "blogFilter",
  initialState: "all-directions",
  reducers: {
    setFilter: (state, action) => action.payload,
  },
});

export const { setFilter } = blogFilterSlice.actions;
export default blogFilterSlice.reducer;
