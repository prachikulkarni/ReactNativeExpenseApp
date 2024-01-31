import { configureStore } from "@reduxjs/toolkit";
import ExpenceSlicer from "./ExpenceSlicer";

export const store = configureStore({
    reducer:{
        expenseManager:ExpenceSlicer
    }
})