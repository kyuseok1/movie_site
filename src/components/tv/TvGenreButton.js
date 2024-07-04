import React from "react";
import { Link, useLocation } from "react-router-dom";

const genres = [
  { id: "10759", name: "액션" },
  { id: "16", name: "애니메이션" },
  { id: "35", name: "코미디" },
  { id: "80", name: "범죄" },
  { id: "18", name: "드라마" },
  { id: "10765", name: "판타지" },
];

function GenreButtons({ basePath }) {
  const location = useLocation();
  const currentGenreId = location.pathname.split("/").pop();

  return (
    <div className="genre-buttons-container">
      {genres.map((genre) => (
        <Link
          key={genre.id}
          to={`/${basePath === "Tvgenre" ? "Tvgenre" : "TvRatingGenre"}/${
            genre.id
          }`}
          className={`genre-button ${
            genre.id === currentGenreId ? "active" : ""
          }`}
        >
          {genre.name}
        </Link>
      ))}
    </div>
  );
}

export default GenreButtons;
