import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  bookings: [],
  booking: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

// Create Booking
export const createBooking = createAsyncThunk(
  "booking/create",
  async (bookingData, thunkApi) => {
    try {
      const res = await fetch("http://localhost:3000/booking/create", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const data = await res.json();

      if (!res.ok) {
        return thunkApi.rejectWithValue(data.message || "Booking failed");
      }

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// Get Bookings
export const getBooking = createAsyncThunk(
  "booking/get",
  async (_, thunkApi) => {
    try {
      const res = await fetch("http://localhost:3000/booking/getbooking", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      
      if (!res.ok) {
        return thunkApi.rejectWithValue(data.message || "Failed to fetch bookings");
      }

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
//delete booking


export const deleteBooking = createAsyncThunk(
  "booking/delete",
  async (id, thunkApi) => {
    try {
      const res = await fetch(`http://localhost:3000/booking/${id}`, {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      return data
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder

      // Create Booking
      .addCase(createBooking.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.booking = action.payload;
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // Get Booking
      .addCase(getBooking.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooking.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.bookings = action.payload;
      })
      .addCase(getBooking.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // delete booking
     .addCase(deleteBooking.pending, (state) => {
    state.isLoading = true;
  })
  .addCase(deleteBooking.fulfilled, (state, action) => {
    state.isLoading = false;
    state.isSuccess = true;

    // Agar bookings array hai
    state.bookings = state.bookings.filter(
      (booking) => booking._id.toString() !== action.payload.id
    );

    state.message = action.payload.message;
  })
  .addCase(deleteBooking.rejected, (state, action) => {
    state.isLoading = false;
    state.isError = true;
    state.message = action.payload;
  })
}
});

export const { reset } = bookingSlice.actions;
export default bookingSlice.reducer;