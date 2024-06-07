import React from "react";
import { useInView } from "react-intersection-observer";
import Tvitem from "./TVitem";
import Loading from "../common/Loading";

function TvList2({
  data,
  isFetchingNextPage,
  fetchNextPage,
  tvBookmarks,
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
        pageData.results.map((tv) => (
          <Tvitem
            key={tv.id}
            tv={tv}
            isBookmarked={tvBookmarks.includes(tv.id)}
            toggleBookmark={toggleBookmark}
          />
        ))
      )}
      <div ref={ref} className="movie-rank-img"></div>
      {isFetchingNextPage && <Loading />}
    </div>
  );
}

export default TvList2;
