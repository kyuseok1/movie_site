import React, { useCallback } from "react";
import { useInfiniteQuery } from "react-query";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Header from "../_layout/Header";
import GoToTop from "../components/common/GoToTop";
import Loading from "../components/common/Loading";
import TvList2 from "../components/tv/TvList2";
import {
  addTvBookmark,
  removeTvBookmark,
  addMovieBookmark,
  removeMovieBookmark,
} from "../reducers/bookmarkActions";
import MovieList2 from "../components/movie/MovieList2";

const API_KEY =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODdiNDJmY2UyM2I5Y2RiYzU3OGNhNjE1YzBhMjA1MyIsInN1YiI6IjY1M2I3NzE3YmMyY2IzMDBlYWZiZWQyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18XMNMM-iQlrVebxTDCjSfa6zAWl_4taI8-3ncfWtpY";
const LANGUAGE = "ko-KR";
const BASE_URL = "https://api.themoviedb.org/3/tv";
const BASE_URL2 = "https://api.themoviedb.org/3/movie";

const fetchTvDetails = async ({ pageParam = 1, queryKey }) => {
  const [_, tvBookmarks] = queryKey;
  const ids = tvBookmarks.slice((pageParam - 1) * 10, pageParam * 10);
  const promises = ids.map((id) =>
    axios.get(`${BASE_URL}/${id}`, {
      params: { language: LANGUAGE },
      headers: { accept: "application/json", Authorization: API_KEY },
    })
  );
  const results = await Promise.all(promises);
  return {
    page: pageParam,
    results: results.map((response) => response.data),
    total_pages: Math.ceil(tvBookmarks.length / 10),
  };
};

const fetchMovieDetails = async ({ pageParam = 1, queryKey }) => {
  const [_, movieBookmarks] = queryKey;
  const ids = movieBookmarks.slice((pageParam - 1) * 10, pageParam * 10);
  const promises = ids.map((id) =>
    axios.get(`${BASE_URL2}/${id}`, {
      params: { language: LANGUAGE },
      headers: { accept: "application/json", Authorization: API_KEY },
    })
  );
  const results = await Promise.all(promises);
  return {
    page: pageParam,
    results: results.map((response) => response.data),
    total_pages: Math.ceil(movieBookmarks.length / 10),
  };
};

const Bookmarks = () => {
  const tvBookmarks = useSelector((state) => state.bookmarks.tvBookmarks) || [];
  const movieBookmarks =
    useSelector((state) => state.bookmarks.movieBookmarks) || [];
  const dispatch = useDispatch();

  const {
    data: tvData,
    error: tvError,
    isLoading: isTvLoading,
    fetchNextPage: fetchNextTvPage,
    isFetchingNextPage: isFetchingNextTvPage,
  } = useInfiniteQuery(["tvDetails", tvBookmarks], fetchTvDetails, {
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
    enabled: tvBookmarks.length > 0,
  });

  const {
    data: movieData,
    error: movieError,
    isLoading: isMovieLoading,
    fetchNextPage: fetchNextMoviePage,
    isFetchingNextPage: isFetchingNextMoviePage,
  } = useInfiniteQuery(["movieDetails", movieBookmarks], fetchMovieDetails, {
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
    enabled: movieBookmarks.length > 0,
  });

  const toggleTvBookmark = useCallback(
    (id) => {
      if (tvBookmarks.includes(id)) {
        dispatch(removeTvBookmark(id));
      } else {
        dispatch(addTvBookmark(id));
      }
    },
    [dispatch, tvBookmarks]
  );

  const toggleMovieBookmark = useCallback(
    (id) => {
      if (movieBookmarks.includes(id)) {
        dispatch(removeMovieBookmark(id));
      } else {
        dispatch(addMovieBookmark(id));
      }
    },
    [dispatch, movieBookmarks]
  );

  if (isTvLoading || isMovieLoading) return <Loading />;
  if (tvError) return <div>An error occurred: {tvError.message}</div>;
  if (movieError) return <div>An error occurred: {movieError.message}</div>;

  return (
    <>
      <Header />
      <div className="container1">
        <div className="inner">
          <span>Home {">"} 북마크</span>
        </div>
      </div>
      {tvData && (
        <TvList2
          data={tvData}
          isFetchingNextPage={isFetchingNextTvPage}
          fetchNextPage={fetchNextTvPage}
          tvBookmarks={tvBookmarks}
          toggleBookmark={toggleTvBookmark}
        />
      )}
      {movieData && (
        <MovieList2
          data={movieData}
          isFetchingNextPage={isFetchingNextMoviePage}
          fetchNextPage={fetchNextMoviePage}
          movieBookmarks={movieBookmarks}
          toggleBookmark={toggleMovieBookmark}
        />
      )}
      <GoToTop />
    </>
  );
};

export default Bookmarks;
