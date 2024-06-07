import React, { useCallback } from "react";
import { useInfiniteQuery } from "react-query";
import Header from "../../_layout/Header";
import GenreButtons from "../../components/movie/MovieGenreButton";
import MovieList2 from "../../components/movie/MovieList2";
import Loading from "../../components/common/Loading";
import GoToTop from "../../components/common/GoToTop";
import { useSelector, useDispatch } from "react-redux";
import {
  addMovieBookmark,
  removeMovieBookmark,
} from "../../reducers/bookmarkActions";
import axios from "axios";

const fetchMovies = async ({ pageParam = 1 }) => {
  const { data } = await axios.get(
    "https://api.themoviedb.org/3/discover/movie",
    {
      params: {
        include_adult: "false",
        include_video: "false",
        language: "ko-KR",
        page: pageParam,
        sort_by: "vote_count.desc",
      },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODdiNDJmY2UyM2I5Y2RiYzU3OGNhNjE1YzBhMjA1MyIsInN1YiI6IjY1M2I3NzE3YmMyY2IzMDBlYWZiZWQyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18XMNMM-iQlrVebxTDCjSfa6zAWl_4taI8-3ncfWtpY",
      },
    }
  );
  return data;
};

function Headermovie() {
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery("movies", fetchMovies, {
      getNextPageParam: (lastPage) =>
        lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
    });

  const movieBookmarks =
    useSelector((state) => state.bookmarks.movieBookmarks) || [];
  const dispatch = useDispatch();

  const toggleHandler = useCallback(
    (id) => {
      if (movieBookmarks.includes(id)) {
        dispatch(removeMovieBookmark(id));
      } else {
        dispatch(addMovieBookmark(id));
      }
    },
    [dispatch, movieBookmarks]
  );

  if (isLoading) return <Loading />;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <>
      <Header />
      <div className="container1">
        <div className="inner">
          <span>
            Home {">"} Movie {">"} 인기순
          </span>
          <GenreButtons basePath="MovieGenre" />
        </div>
      </div>
      <MovieList2
        data={data}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
        movieBookmarks={movieBookmarks}
        toggleBookmark={toggleHandler}
      />
      <GoToTop />
    </>
  );
}

export default Headermovie;
