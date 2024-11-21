import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    error: null,
    user: {},
  },
  reducers: {
    setUser: (state, action) => {
      console.log("inside", state, action.payload);
      state.user = action.payload;
    },
  },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.products.value)`
export const selectUser = (state) => state.users.user;

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
