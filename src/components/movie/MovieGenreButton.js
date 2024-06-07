import React from "react";
import { Link, useLocation } from "react-router-dom";

const genres = [
  { id: "28", name: "액션" },
  { id: "16", name: "애니메이션" },
  { id: "35", name: "코미디" },
  { id: "14", name: "판타지" },
  { id: "27", name: "공포" },
  { id: "10402", name: "음악" },
  { id: "10749", name: "로맨스" },
  { id: "878", name: "SF" },
  { id: "53", name: "호러" },
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
            to={`/${
              basePath === "MovieGenre" ? "MovieGenre" : "MovieRatingGenre"
            }/${genre.id}`}
          >
            {genre.name}
          </Link>
        </button>
      ))}
    </div>
  );
}

export default GenreButtons;
