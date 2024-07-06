import React, { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../_layout/Header";
import GoToTop from "../../components/common/GoToTop";
import Loading from "../../components/common/Loading";
import { useSelector, useDispatch } from "react-redux";
import {
  addTvBookmark,
  removeTvBookmark,
} from "../../reducers/bookmarkActions";
import { useQuery } from "react-query";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "../pagination.css";
import TvGenreButton from "../../components/tv/TvGenreButton";
import TvList from "../../components/tv/TvList";

const fetchTVShows = async ({ queryKey }) => {
  const [_key, { id, page }] = queryKey;
  const response = await axios.get("https://api.themoviedb.org/3/discover/tv", {
    params: {
      include_adult: "false",
      include_video: "false",
      language: "ko-KR",
      page: page,
      sort_by: "vote_average.desc",
      with_genres: id,
      "vote_count.gte": "1000",
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODdiNDJmY2UyM2I5Y2RiYzU3OGNhNjE1YzBhMjA1MyIsInN1YiI6IjY1M2I3NzE3YmMyY2IzMDBlYWZiZWQyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18XMNMM-iQlrVebxTDCjSfa6zAWl_4taI8-3ncfWtpY",
    },
  });
  return response.data;
};

function TvRatingGenre() {
  const { id } = useParams();
  const [page, setPage] = useState(1);

  const tvBookmarks = useSelector((state) => state.bookmarks.tvBookmarks) || [];
  const dispatch = useDispatch();

  const { data, error, isLoading } = useQuery(
    ["tvShows", { id, page }],
    fetchTVShows,
    {
      keepPreviousData: true,
    }
  );

  const toggleHandler = useCallback(
    (tvid) => {
      if (tvBookmarks.includes(tvid)) {
        dispatch(removeTvBookmark(tvid));
      } else {
        dispatch(addTvBookmark(tvid));
      }
    },
    [dispatch, tvBookmarks]
  );

  const handlePageClick = (data) => {
    setPage(data.selected + 1);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error loading TV shows</div>;
  }

  const pageCount = Math.ceil(data.total_results / 20);

  return (
    <>
      <Header />
      <div className="container1">
        <div className="inner">
          <span>TV {">"} 평점순</span>
          <TvGenreButton setPage={setPage} basePath="TvRatingGenre" />
        </div>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          disabledClassName={"disabled"}
        />
      </div>
      <TvList
        tv={data.results}
        tvBookmarks={tvBookmarks}
        toggleBookmark={toggleHandler}
      />
      <GoToTop />
    </>
  );
}

export default TvRatingGenre;
