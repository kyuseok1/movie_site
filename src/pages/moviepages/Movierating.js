import React, { useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { useSelector, useDispatch } from "react-redux";
import { useInfiniteQuery } from "react-query";
import MovieList2 from "../../components/movie/MovieList2";
import axios from "axios";
import Header from "../../_layout/Header";
import GoToTop from "../../components/common/GoToTop";
import Loading from "../../components/common/Loading";
import GenreButtons from "../../components/movie/MovieGenreButton";
import {
  addMovieBookmark,
  removeMovieBookmark,
} from "../../reducers/bookmarkActions";

const fetchMovies = async ({ pageParam = 1 }) => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/discover/movie",
    {
      params: {
        include_adult: "false",
        include_video: "false",
        language: "ko-KR",
        page: pageParam,
        sort_by: "vote_average.desc",
        "vote_count.gte": "3000",
      },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODdiNDJmY2UyM2I5Y2RiYzU3OGNhNjE1YzBhMjA1MyIsInN1YiI6IjY1M2I3NzE3YmMyY2IzMDBlYWZiZWQyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18XMNMM-iQlrVebxTDCjSfa6zAWl_4taI8-3ncfWtpY",
      },
    }
  );

  return response.data;
};

function Movierating() {
  const movieBookmarks =
    useSelector((state) => state.bookmarks.movieBookmarks) || [];
  const dispatch = useDispatch();
  const [inView] = useInView();

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

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery("movies", fetchMovies, {
      getNextPageParam: (lastPage) =>
        lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
    });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "error") {
    return <div>An error occurred</div>;
  }

  return (
    <>
      <Header />
      <div className="container1">
        <div className="inner">
          <span>Movie {">"} 평점순</span>
          <GenreButtons basePath="MovieRatingGenre" />
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

export default Movierating;
