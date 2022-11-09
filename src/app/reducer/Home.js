import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  test: [1, 2, 3],
};

export const getMovies = createAsyncThunk("home/getMovies", async () => {
  const data = await axios
    .get(`${process.env.REACT_APP_BASE_URL}/movie/popular`, {
      params: {
        api_key: process.env.REACT_APP_TMDB_KEY,
      },
    })
    .then((response) => {
      return response.data.results.splice(0, 4);
    });

  return data;
});

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: {
    [getMovies.fulfilled]: (state, { payload }) => {
      state.movies = payload;
      // state.test = ["asdsa"];
    },
  },
});

export default homeSlice.reducer;
