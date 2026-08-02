import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/authSlice"
import roomReducer from '../auth/roomSlice'
export const store = configureStore({
   reducer:{
     auth:authReducer,
     room:roomReducer
   } 
})