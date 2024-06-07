import React from "react";
import Tvitem from "./TVitem";

function TvList({ tv, tvBookmarks, toggleBookmark }) {
  return (
    <div className="movie-rank-container">
      {tv.map((tv) => (
        <Tvitem
          key={tv.id}
          tv={tv}
          isBookmarked={tvBookmarks.includes(tv.id)}
          toggleBookmark={toggleBookmark}
        />
      ))}
    </div>
  );
}

export default TvList;
