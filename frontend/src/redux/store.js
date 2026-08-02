import { configureStore } from "@reduxjs/toolkit";
import roomReducer from '../redux/roomSlice'
import bookingReducer from '../redux/bookingSlice'

export const store = configureStore({
   reducer:{
     room:roomReducer,
     booking:bookingReducer
   } 
})