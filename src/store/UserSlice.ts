import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

type User = {
  name: string | null;
  email: string | null;
  photo: string | null;
};

const initialState: User = {
  name: "",
  email: "",
  photo: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setUserSignout: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const { setUserLogin, setUserSignout } = userSlice.actions;

export const selectUserName = (state: RootState) => state.user.name;
export const selectUserEmail = (state: RootState) => state.user.email;
export const selectUserPhoto = (state: RootState) => state.user.photo;

export default userSlice.reducer;
