import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useInfiniteQuery } from "react-query";
import axios from "axios";
import Header from "../../_layout/Header";
import GoToTop from "../../components/common/GoToTop";
import Loading from "../../components/common/Loading";
import TvList2 from "../../components/tv/TvList2";
import TvGenreButton from "../../components/tv/TvGenreButton";
import {
  addTvBookmark,
  removeTvBookmark,
} from "../../reducers/bookmarkActions";

const fetchTVShows = async ({ pageParam = 1 }) => {
  const response = await axios.get("https://api.themoviedb.org/3/discover/tv", {
    params: {
      include_adult: "false",
      include_video: "false",
      language: "ko-KR",
      page: pageParam,
      sort_by: "vote_average.desc",
      "vote_count.gte": "3000",
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODdiNDJmY2UyM2I5Y2RiYzU3OGNhNjE1YzBhMjA1MyIsInN1YiI6IjY1M2I3NzE3YmMyY2IzMDBlYWZiZWQyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18XMNMM-iQlrVebxTDCjSfa6zAWl_4taI8-3ncfWtpY",
    },
  });

  return response.data;
};

function Tvrating() {
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery("tv", fetchTVShows, {
      getNextPageParam: (lastPage) =>
        lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
    });

  const tvBookmarks = useSelector((state) => state.bookmarks.tvBookmarks) || [];
  const dispatch = useDispatch();

  const toggleHandler = useCallback(
    (id) => {
      if (tvBookmarks.includes(id)) {
        dispatch(removeTvBookmark(id));
      } else {
        dispatch(addTvBookmark(id));
      }
    },
    [dispatch, tvBookmarks]
  );

  if (isLoading) return <Loading />;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <>
      <Header />
      <div className="container1">
        <div className="inner">
          <span>TV {">"} 평점순</span>
          <TvGenreButton />
        </div>
      </div>

      <TvList2
        data={data}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
        tvBookmarks={tvBookmarks}
        toggleBookmark={toggleHandler}
      />
      <GoToTop />
    </>
  );
}

export default Tvrating;
