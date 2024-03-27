import { configureStore } from "@reduxjs/toolkit";
import { dashboardReducer } from "./slices/dashboard.slice";

export const store = configureStore({
    reducer: {
        example: dashboardReducer
    }
})