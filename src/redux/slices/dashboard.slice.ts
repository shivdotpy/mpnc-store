import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {},
    reducers: {
        exampleAction: (state, action) => {
            state.user = action.payload
        }
    }
})

export const {exampleAction} = dashboardSlice.actions
export const dashboardReducer = dashboardSlice.reducer