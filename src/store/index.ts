import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import movieSlice from "./MoviesSlice";
import UserReducer from "./UserSlice";

export const store = configureStore({
  reducer: {
    movie: movieSlice,
    user: UserReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
