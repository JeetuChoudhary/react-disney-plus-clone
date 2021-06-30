import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllMoviesListFromDb } from "./MovieService";
import { RootState } from "./";

export type Movie = {
  id: string;
  title: string;
  subTitle: string;
  titleImg: string;
  type: string;
  description: string;
  cardImg: string;
  backgroundImg: string;
};

export interface MovieSlice {
  movies: Movie[];
  status: "idle" | "loading";
  error: string | null;
  movieInfo: Movie;
}

const initialState: MovieSlice = {
  movies: [],
  status: "idle",
  error: null,
  movieInfo: {
    id: "",
    title: "",
    subTitle: "",
    type: "",
    description: "",
    cardImg: "",
    titleImg: "",
    backgroundImg: "",
  },
};

export const getAllMoviesList = createAsyncThunk("fetch/Movies", async () => {
  return await getAllMoviesListFromDb();
});

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getMovieInfo: (state, action: PayloadAction<string>) => {
      const movieData = state.movies.find(
        (movie) => movie.id === action.payload
      );
      if (movieData) {
        state.movieInfo = { ...movieData };
      }
    },
  },
  extraReducers: (builder) => {
    // when requeset is being processed.
    builder.addCase(getAllMoviesList.pending, (state) => {
      state.status = "loading";
      state.error = null; // clear all previous error
    });

    // When server response with data
    builder.addCase(getAllMoviesList.fulfilled, (state, action) => {
      state.status = "idle";
      if (action.payload) state.movies = [...action.payload];
    });
    // when server response with error
    // builder.addCase(getAllMoviesList.rejected, (state, action) => {
    //   state.status = "idle";
    //   if (action.payload) state.error = action.payload?.value!;
    // });
  },
});

export const { getMovieInfo } = movieSlice.actions;

export const moviesList = (state: RootState) => state.movie.movies;
export const movieDetail = (state: RootState) => state.movie.movieInfo;

export default movieSlice.reducer;
