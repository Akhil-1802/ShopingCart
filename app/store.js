import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "../features/itemsSlice";
import orderReducer from '../features/orderSlice'
export const store = configureStore({
    reducer:{
        items : itemsReducer,
        orders : orderReducer
    }
})