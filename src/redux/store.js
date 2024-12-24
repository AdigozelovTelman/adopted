import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./reducer/basketSlice";
import productSlice from "./reducer/productSlice";

export const store = configureStore({
    reducer:{
        products:productSlice,
        basket:basketSlice
    }
})