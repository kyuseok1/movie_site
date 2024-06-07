import React from "react";
import { useInView } from "react-intersection-observer";
import MovieItem from "./MovieItem";
import Loading from "../common/Loading";

function MovieList2({
  data,
  isFetchingNextPage,
  fetchNextPage,
  movieBookmarks,
  toggleBookmark,
}) {
  const { ref, inView } = useInView();

  React.useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (!data || !data.pages) {
    return null;
  }

  return (
    <div className="movie-rank-container">
      {data.pages.flatMap((pageData) =>
        pageData.results.map((movie) => (
          <MovieItem
            key={movie.id}
            movie={movie}
            isBookmarked={movieBookmarks.includes(movie.id)}
            toggleBookmark={toggleBookmark}
          />
        ))
      )}
      <div ref={ref} className="movie-rank-img"></div>
      {isFetchingNextPage && <Loading />}
    </div>
  );
}

export default MovieList2;
