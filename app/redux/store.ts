"use client";

import { configureStore } from "@reduxjs/toolkit";
import booleanReducer from "./booleanSlice";

export const store = configureStore({
  reducer: {
    counter: booleanReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
