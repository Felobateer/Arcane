"use Client";

import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: boolean;
}

const initialState = {
  value: false,
};

export const booleanSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggle } = booleanSlice.actions;

export default booleanSlice.reducer;
