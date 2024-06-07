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
    <div className="inner2">
      {genres.map((genre) => (
        <button
          key={genre.id}
          style={{
            backgroundColor: genre.id === currentGenreId ? "blue" : "",
            color: genre.id === currentGenreId ? "white" : "",
          }}
        >
          <Link
            to={`/${basePath === "Tvgenre" ? "Tvgenre" : "TvRatingGenre"}/${
              genre.id
            }`}
          >
            {genre.name}
          </Link>
        </button>
      ))}
    </div>
  );
}

export default GenreButtons;
