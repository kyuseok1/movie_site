import React, { useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "react-query";
import axios from "axios";
import MovieGenreButton from "../../components/movie/MovieGenreButton";
import Header from "../../_layout/Header";
import GoToTop from "../../components/common/GoToTop";
import Loading from "../../components/common/Loading";
import Pagination from "../../components/common/Pagination";
import MovieList from "../../components/movie/MovieList";

import {
  addMovieBookmark,
  removeMovieBookmark,
} from "../../reducers/bookmarkActions";
import "../pagination.css";

const fetchMovies = async ({ queryKey }) => {
  const [_key, { id, page }] = queryKey;
  const response = await axios.get(
    "https://api.themoviedb.org/3/discover/movie",
    {
      params: {
        include_adult: "false",
        include_video: "false",
        language: "ko-KR",
        page: page,
        sort_by: "vote_average.desc",
        with_genres: id,
        "vote_count.gte": "1000",
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

function MovieRatingGenre() {
  const { id } = useParams();
  const [page, setPage] = useState(1);

  const movieBookmarks =
    useSelector((state) => state.bookmarks.movieBookmarks) || [];
  const dispatch = useDispatch();

  const { data, error, isLoading } = useQuery(
    ["movies", { id, page }],
    fetchMovies,
    {
      keepPreviousData: true,
    }
  );

  const toggleHandler = useCallback(
    (movieId) => {
      if (movieBookmarks.includes(movieId)) {
        dispatch(removeMovieBookmark(movieId));
      } else {
        dispatch(addMovieBookmark(movieId));
      }
    },
    [movieBookmarks, dispatch]
  );

  const handlePageClick = useCallback((data) => {
    setPage(data.selected + 1);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error loading movies</div>;
  }

  const pageCount = Math.ceil(data.total_results / 20);

  return (
    <>
      <Header />
      <div className="container1">
        <div className="inner">
          <span>
            Home {">"} Movie {">"} 평점순
          </span>
          <MovieGenreButton setPage={setPage} />
        </div>
        <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
      </div>
      <MovieList
        movies={data.results}
        movieBookmarks={movieBookmarks}
        toggleBookmark={toggleHandler}
      />
      <GoToTop />
    </>
  );
}

export default MovieRatingGenre;
