import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    user: null, // Default to null when no user is logged in
    users: [], // Array to store all users
    pendingSellers: [], // Array to store filtered users (userAccountStatus: "DEACTIVETE")
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload; // Set the logged-in user data
    },
    clearUser: (state) => {
      state.user = null; // Clear the logged-in user on logout
    },
    setUsers: (state, action) => {
      state.users = action.payload; // Set all users
      // Filter users with `userAccountStatus: "DEACTIVETE"` and store them in `pendingSellers`
      state.pendingSellers = action.payload.filter(
        (user) => user.userAccountStatus === "DEACTIVETE"
      );
    },
    clearUsers: (state) => {
      state.users = []; // Clear the users array
      state.pendingSellers = []; // Clear the pending sellers array
    },
  },
});

export const { setUser, clearUser, setUsers, clearUsers } = userSlice.actions;

// Selectors
export const selectUser = (state) => state.users?.user; // Ensure it returns null if undefined
export const selectAllUsers = (state) => state.users?.users; // Selector for all users
export const selectPendingSellers = (state) => state.users?.pendingSellers; // Selector for pending sellers

export default userSlice.reducer;
