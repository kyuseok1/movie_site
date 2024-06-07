import React from "react";
import { Link } from "react-router-dom";

function MovieItem({ tv, isBookmarked, toggleBookmark }) {
  return (
    <div className="movie-rank-img" key={tv.id}>
      <a
        className={isBookmarked ? "nostar" : "star"}
        onClick={() => toggleBookmark(tv.id)}
      >
        ★
      </a>
      <Link to={`/tv/${tv.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w300/${tv.poster_path}`}
          alt={tv.title}
        />
      </Link>
    </div>
  );
}

export default MovieItem;
