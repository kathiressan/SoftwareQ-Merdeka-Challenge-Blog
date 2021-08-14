import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: false,
};

export const darkmodeSlice = createSlice({
  name: "darkmode",
  initialState,
  reducers: {
    // Actions
    setDarkMode: (state) => {
      state.mode = true;
    },
    setLightMode: (state) => {
      state.mode = false;
    },
  },
});

export const { setDarkMode, setLightMode } = darkmodeSlice.actions;

export const selectMode = (state) => state.darkmode.mode;

export default darkmodeSlice.reducer;
