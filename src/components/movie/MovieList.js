import React from "react";
import MovieItem from "./MovieItem";

function MovieList({ movies, movieBookmarks, toggleBookmark }) {
  return (
    <div className="movie-rank-container">
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          isBookmarked={movieBookmarks.includes(movie.id)}
          toggleBookmark={toggleBookmark}
        />
      ))}
    </div>
  );
}

export default MovieList;
