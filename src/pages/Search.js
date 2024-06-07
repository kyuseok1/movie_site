import React, { useState, useEffect, useCallback } from "react";
import Header from "../_layout/Header";
import axios from "axios";
import { BiCameraMovie } from "react-icons/bi";
import { FaRegThumbsUp } from "react-icons/fa";
import { AiOutlineCustomerService } from "react-icons/ai";
import GoToTop from "../components/common/GoToTop";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import {
  addMovieBookmark,
  removeMovieBookmark,
  addTvBookmark,
  removeTvBookmark,
} from "../reducers/bookmarkActions";

const Search = () => {
  const [Searchdata, setSearchdata] = useState([]);
  const [inputdata, setinputdata] = useState("");
  const [searchGenre, setsearchGenre] = useState(true);
  const [search, setsearch] = useState("tv");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handlePageClick = (data) => {
    setPage(data.selected + 1);
  };

  const handleinput = (e) => {
    setinputdata(e.target.value);
  };

  const movieBookmarks =
    useSelector((state) => state.bookmarks.movieBookmarks) || [];
  const tvBookmarks = useSelector((state) => state.bookmarks.tvBookmarks) || [];
  const dispatch = useDispatch();

  const toggleHandler = useCallback(
    (id) => {
      //북마크 등록,해제
      if (search === "movie") {
        const index = movieBookmarks.indexOf(id);
        if (index === -1) {
          dispatch(addMovieBookmark(id));
        } else {
          dispatch(removeMovieBookmark(id));
        }
      } else {
        const index = tvBookmarks.indexOf(id);
        if (index === -1) {
          dispatch(addTvBookmark(id));
        } else {
          dispatch(removeTvBookmark(id));
        }
      }
    },
    [dispatch, movieBookmarks, tvBookmarks, search]
  );

  const productFetch = useCallback(() => {
    if (!inputdata) return;
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/search/${search}`, //tv나 movie 검색
      params: {
        query: inputdata,
        include_adult: "false",
        language: "ko-KR",
        page: page,
      },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODdiNDJmY2UyM2I5Y2RiYzU3OGNhNjE1YzBhMjA1MyIsInN1YiI6IjY1M2I3NzE3YmMyY2IzMDBlYWZiZWQyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18XMNMM-iQlrVebxTDCjSfa6zAWl_4taI8-3ncfWtpY",
      },
    };

    axios
      .request(options)
      .then((response) => {
        setSearchdata(response.data.results);
        setTotalPages(response.data.total_pages); // Set total pages for pagination
      })
      .catch((error) => {
        console.error(error);
      });
  }, [inputdata, search, page]);

  useEffect(() => {
    productFetch();
  }, [inputdata, search, page, productFetch]);

  const renderSearchResults = () => {
    return Searchdata.map((a) => (
      <div className="movie-search-img" key={a.id}>
        <div className="movie-poster2">
          <span
            className={`${
              (search === "movie"
                ? movieBookmarks.indexOf(a.id)
                : tvBookmarks.indexOf(a.id)) === -1
                ? "star2"
                : "nostar2"
            }`}
            onClick={() => toggleHandler(a.id)}
          >
            ★
          </span>
          <Link to={search === "movie" ? `/movie/${a.id}` : `/tv/${a.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w300/${a.poster_path}`}
              alt={a.title || a.name}
            />
          </Link>
        </div>
        <div
          className="search-detail"
          style={{
            backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.8)
          ), url("https://image.tmdb.org/t/p/w500/${a.backdrop_path}")`,
          }}
        >
          <div className="search-detail2">
            <div className="movie-detail3">
              <div className="movie-title">
                <h2>{a.title || a.name}</h2>
                <span style={{ fontWeight: 500, fontSize: 17 }}>
                  {a.tagline}
                </span>
              </div>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "white",
                }}
              >
                {a.original_title || a.original_name}
              </span>
              <br />
              <br />
              <br />
              {a.genres &&
                a.genres.map((genre) => (
                  <em className="movie-genre" key={genre.id}>
                    {genre.name}
                  </em>
                ))}
              <br />
              <div className="aqua2">
                <FaRegThumbsUp /> 평점 :{" "}
                <span className="aqua">{a.vote_average} / 10</span>
                <br />
                <BiCameraMovie /> 개봉 :{" "}
                <span className="aqua">
                  {a.release_date || a.first_air_date}
                </span>
                <br />
                <AiOutlineCustomerService /> 인기 :{" "}
                <span className="aqua">{a.popularity}</span>
                <br />
                <br />
                <br />
                <div className="search-overview2">
                  <span>{a.overview}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <Header />
      <div className="container1">
        <div className="inner">{<span>Home {">"} Search</span>}</div>
      </div>

      <div className="movie-search-container">
        <div>
          <b>제목: </b>
          <input
            className="searchinput"
            placeholder="검색어를 입력하세요."
            onChange={handleinput}
          />
          <button
            className={searchGenre ? "active-btn" : "inactive-btn"}
            onClick={() => {
              setsearchGenre(true);
              setsearch("tv");
            }}
          >
            Tv
          </button>
          <button
            className={!searchGenre ? "active-btn" : "inactive-btn"}
            onClick={() => {
              setsearchGenre(false);
              setsearch("movie");
            }}
          >
            Movie
          </button>
        </div>
        {renderSearchResults()}
      </div>

      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />

      <GoToTop />
    </div>
  );
};

export default Search;
