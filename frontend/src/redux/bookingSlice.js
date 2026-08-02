import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
     booking:null,
     isLoading:false,
     isSuccess:false,
     isError:false,
     message:""
}
export const createBooking = createAsyncThunk("/createRoom",async(bookingData,thukApi)=>{
   try {
   const res = await fetch(`http://localhost:3000/booking/create`,{
                 credentials: "include",
                 headers:{
                    'Content-Type':"application/json"
                 },
                 method:"POST",
                 body:JSON.stringify(bookingData)
            })
            const data = await res.json()
            return data
   } catch (error) {
         return thukApi.rejectWithValue(error)
   }
})
export const getRoom = createAsyncThunk("getRooms",async (userData,thunkApi) => {
     try {
           const res = await fetch('http://localhost:3000/room/allroom',{
               credentials: "include",
                 headers:{
                    'Content-Type':"application/json"
                 },
           })
           const data = await res.json()
           return data
     } catch (error) {
         return thunkApi.rejectWithValue(error)
      
     }
})
export const editRoom = createAsyncThunk('/editRoom',async function(roomData,thunkApi) {
    try {
        const {roomId,...rest} = roomData
         const res = await fetch(`http://localhost:3000/room/${roomId}`,{
              credentials: "include",
                 headers:{
                    'Content-Type':"application/json"
                 },
                method:"PUT",
                body:JSON.stringify(rest)
         })
         const data = await res.json()
          return data;
    } catch (error) {
           return thunkApi.rejectWithValue(error)
    }
})
export const deleteRoom = createAsyncThunk("/delete/room",async (id,thunkApi) => {
    try {
            const res = await fetch(`http://localhost:3000/room/${id}`,{
                method:"DELETE",
                credentials: "include",
                 headers:{
                    'Content-Type':"application/json"
                 },
            })
            const data = await res.json()
            return data
    } catch (error) {
          return thunkApi.rejectWithValue(error)
    }
})
export const bookSlice = createSlice({
    name:"booking",
   initialState,
   reducers:{
     reset:(state) =>{
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = ""
     }
   },
   extraReducers:(builder) =>{
      // add case
     builder.addCase(createBooking.pending,(state)=>{
          state.isSuccess = true
     })
     .addCase(createBooking.fulfilled,(state,action)=>{
         state.isLoading = false;
         state.isSuccess = true;
         state.room = action.payload
     })
     .addCase(createBooking.rejected,(state,actions)=>{
         state.isLoading = false,
         state.isError = true,
         state.message = actions.payload
     })
     // here are getAll room

    //  .addCase(getRoom.pending,(state)=>{
    //      state.isLoading = true
    //  })
    //  .addCase(getRoom.fulfilled,(state,action)=>{
    //      state.isLoading = false,
    //      state.isSuccess = true,
    //      state.room = action.payload
    //  })
    //  .addCase(getRoom.rejected,(state,action)=>{
    //      state.isLoading = false,
    //      state.isError = true,
    //      state.message = action.payload
    //  })
    //  // edit Room 
    //  .addCase(editRoom.pending,(state)=>{
    //      state.isLoading = true
    //  })
    //  .addCase(editRoom.fulfilled,(state,action)=>{
    //       state.isLoading = false,
    //      state.isSuccess = true,
    //      state.room = action.payload
    //  })
    //  .addCase(editRoom.rejected,(state,action)=>{
    //      state.isLoading = false,
    //      state.isError = true,
    //      state.message = action.payload
    //  })
    //  // delete room
    //   .addCase(deleteRoom.pending,(state)=>{
    //      state.isLoading = true
    //  })
    //  .addCase(deleteRoom.fulfilled,(state,action)=>{
    //       state.isLoading = false,
    //      state.isSuccess = true,
    //      state.room = state.room.filter((room)=>room._id !=action.payload._id)
    //  })
    //  .addCase(deleteRoom.rejected,(state,action)=>{
    //      state.isLoading = false,
    //      state.isError = true,
    //      state.message = action.payload
    //  })
   }
})
export const {reset}  = bookSlice.actions
export default bookSlice.reducer