import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    user: null, // Default to null when no user is logged in
  },
  reducers: {
    setUser: (state, action) => {
      console.log(action);
      state.user = action.payload; // Set the user data
    },
    clearUser: (state) => {
      state.user = null; // Clear the user on logout
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

// Selector to get the user state
export const selectUser = (state) => state.users?.user; // Ensure it returns null if undefined

export default userSlice.reducer;
