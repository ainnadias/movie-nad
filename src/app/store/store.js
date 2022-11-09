import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../reducer/Home";
import detailReducer from "../reducer/Detail";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    detail: detailReducer,
  },
});
