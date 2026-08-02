import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/authSlice"
import roomReducer from '../auth/roomSlice'
import bookingReducer from '../auth/bookingSlice'
export const store = configureStore({
   reducer:{
     auth:authReducer,
     room:roomReducer,
     booking:bookingReducer
   } 
})