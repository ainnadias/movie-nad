import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  videos: [],
};

export const getMovies = createAsyncThunk("detail/getMovies", async (id) => {
  const dataMovies = await axios.get(`${process.env.REACT_APP_BASE_URL}/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`);

  return dataMovies.data;
});

export const getVideos = createAsyncThunk("detail/getVideos", async (id) => {
  const dataVideos = await axios.get(`${process.env.REACT_APP_BASE_URL}/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}`);

  return dataVideos.data.results[0].key;
});

export const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: {
    [getMovies.fulfilled]: (state, { payload }) => {
      state.movies = payload;
    },
    [getVideos.fulfilled]: (state, { payload }) => {
      state.videos = payload;
    },
  },
});

export default detailSlice.reducer;
