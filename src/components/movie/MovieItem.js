import React from "react";
import { Link } from "react-router-dom";

function MovieItem({ movie, isBookmarked, toggleBookmark }) {
  return (
    <div className="movie-rank-img" key={movie.id}>
      <a
        className={isBookmarked ? "nostar" : "star"}
        onClick={() => toggleBookmark(movie.id)}
      >
        ★
      </a>
      <Link to={`/Movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>
    </div>
  );
}

export default MovieItem;
