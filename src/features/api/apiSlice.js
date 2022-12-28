import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api-beta.melobit.com/v1" }),
  endpoints: (builder) => ({
    getNewestSongs: builder.query({
      query: () => "/song/new/0/10",
    }),
    getTrendingArtist: builder.query({
      query: () => "/artist/trending/0/4",
    }),
    getTodayTrendingSongs: builder.query({
      query: () => "/song/top/day/0/100",
    }),
    getWeekTrendingSongs: builder.query({
      query: () => "/song/top/week/0/100",
    }),
    getSearchedSongs: builder.query({
      query: (searchText) => `/search/query/${searchText}/0/50`,
    }),
    getSongDetails: builder.query({
      query: (id) => `/song/${id}`,
    }),
  }),
});

export const {
  useGetNewestSongsQuery,
  useGetTrendingArtistQuery,
  useGetTodayTrendingSongsQuery,
  useGetWeekTrendingSongsQuery,
  useGetSearchedSongsQuery,
  useGetSongDetailsQuery,
} = apiSlice;
