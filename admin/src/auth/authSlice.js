import {createSlice,createAsyncThunk, isAllOf} from "@reduxjs/toolkit"

const user = JSON.parse(localStorage.getItem("user"))
// user Registeration 
export const registerUser  = createAsyncThunk('/register',async (userData,thunkApi)=>{
     try {
           const res = await fetch("http://localhost:3000/user/create",{
                 credentials: "include",
                 headers:{
                    'Content-Type':"application/json"
                 },
                 method:"POST",
                 body:JSON.stringify(userData)
            })
            const data = await res.json()
            return data
     } catch (error) {
          return thunkApi.rejectWithValue(error.message)
     }
})
// user Login 
export const userLogin = createAsyncThunk('/login',async(userData,thunkApi)=>{
        try {
            const res = await fetch("http://localhost:3000/user/login",{
                 credentials: "include",
                 headers:{
                    'Content-Type':"application/json"
                 },
                 method:"POST",
                 body:JSON.stringify(userData)
            })
            const data = await res.json()
             console.log(data)
            localStorage.setItem("user",JSON.stringify(data))
             return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message)
      }
})
// here are logout user
export const logOutUser = createAsyncThunk('/logout',async(_,thunkApi)=>{
     try {
           const res = await fetch('http://localhost:3000/user/logout',{
                credentials: "include",
                 headers:{
                    'Content-Type':"application/json"
                 },
           });
          const data = await res.json()
          // remove user from localstorage
          localStorage.removeItem("user")
          console.log(data)
          return data
     } catch (error) {
        return thunkApi.rejectWithValue(error.message)
      
     }
})
const initialState = {
    user:user ? user : null,
    isLoading:false,
    isSuccess:false,
    isError:false,
    message:""
}
export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        reset:(state)=>{
          state.isLoading =false,
          state.isError= false,
          state.isSuccess = false,
          state.message = ""
        }
    },
    extraReducers:(builder) =>{
        // here add cases
        // here are register user
       builder.addCase(registerUser.pending,(state)=>{
            state.isLoading = true
       })
       .addCase(registerUser.fulfilled,(state,action)=>{
         state.isLoading = false;
         state.isSuccess = true;
         state.user = action.payload
       })
       .addCase(registerUser.rejected,(state,action)=>{
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload
       })
       // here are user Login
       .addCase(userLogin.pending,(state)=>{
          state.isLoading = true
       })
       .addCase(userLogin.fulfilled,(state,actions)=>{
         state.isLoading = false;
         state.isSuccess = true
         state.user = actions.payload
       })
       .addCase(userLogin.rejected,(state,action)=>{
         state.isLoading = false;
         state.isError = true;
        state.message = action.payload
       })
       // here are logout user
       .addCase(logOutUser.pending,(state)=>{
           state.isLoading = true;
       })
       .addCase(logOutUser.fulfilled,(state,action)=>{
         state.isLoading = false;
         state.isSuccess = true
         state.user = null
       })
        .addCase(logOutUser.rejected,(state,action)=>{
         state.isLoading = false;
         state.isError = true;
        state.message = action.payload
       })
    }
})
export const {reset} = authSlice.actions
export default authSlice.reducer