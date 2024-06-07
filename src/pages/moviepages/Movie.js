import React, { useState, useEffect, useCallback } from "react";
import Header from "../../_layout/Header";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import { FaRegThumbsUp } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import Loading from "../../components/common/Loading";
import { useSelector, useDispatch } from "react-redux";
import {
  addMovieBookmark,
  removeMovieBookmark,
} from "../../reducers/bookmarkActions";

const API_KEY =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODdiNDJmY2UyM2I5Y2RiYzU3OGNhNjE1YzBhMjA1MyIsInN1YiI6IjY1M2I3NzE3YmMyY2IzMDBlYWZiZWQyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18XMNMM-iQlrVebxTDCjSfa6zAWl_4taI8-3ncfWtpY";
const LANGUAGE = "ko-KR";
const BASE_URL = "https://api.themoviedb.org/3/movie";

const fetchMovieData = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`, {
    params: { language: LANGUAGE },
    headers: { accept: "application/json", Authorization: API_KEY },
  });
  return response.data;
};

const fetchCreditData = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}/credits`, {
    params: { language: LANGUAGE },
    headers: { accept: "application/json", Authorization: API_KEY },
  });
  return response.data;
};

const fetchRecommendations = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}/recommendations`, {
    params: { language: LANGUAGE, page: "1" },
    headers: { accept: "application/json", Authorization: API_KEY },
  });
  return response.data.results;
};

const Movie = () => {
  const [movie, setMovie] = useState(null);
  const [credit, setCredit] = useState([]);
  const [recom, setRecom] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page2, setPage2] = useState(1);

  const movieBookmarks =
    useSelector((state) => state.bookmarks.movieBookmarks) || [];
  const dispatch = useDispatch();
  const { id } = useParams();

  const toggleHandler = useCallback(
    (movieId) => {
      if (movieBookmarks.includes(movieId)) {
        dispatch(removeMovieBookmark(movieId));
      } else {
        dispatch(addMovieBookmark(movieId));
      }
    },
    [dispatch, movieBookmarks]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [movieData, creditData, recommendations] = await Promise.all([
          fetchMovieData(id),
          fetchCreditData(id),
          fetchRecommendations(id),
        ]);
        setMovie(movieData);
        setCredit(creditData.cast);
        setRecom(recommendations);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <Loading />;

  const totalPost = credit.length;
  const pageRange = 5;
  const totalSet = Math.ceil(totalPost / pageRange);
  const totalSet2 = 4;

  return (
    <>
      <Header />
      <section>
        <div
          className="movie-container3"
          style={{
            backgroundImage: `linear-gradient(
              rgba(0, 0, 0, 0.8),
              rgba(0, 0, 0, 0.8)
            ), url("https://image.tmdb.org/t/p/w500/${movie.backdrop_path}" )`,
          }}
        >
          <div className="movie-container3-inner">
            <div className="movie-poster">
              <a
                className={`${
                  movieBookmarks.includes(movie.id) ? "nostar" : "star"
                }`}
                onClick={() => toggleHandler(movie.id)}
              >
                ★
              </a>
              <img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt=""
              ></img>
            </div>
            <div className="movie-detail">
              <div className="movie-detail2">
                <div className="movie-detail3">
                  <div className="movie-title">
                    <h2>{movie.title}</h2>
                    <a style={{ fontWeight: 500, fontSize: 17 }}>
                      {movie.tagline}
                    </a>
                  </div>
                  <a
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: "white",
                    }}
                  >
                    {movie.original_title}
                  </a>
                  <br />
                  <br />
                  <br />
                  {movie.genres.map((genre) => (
                    <em className="movie-genre" key={genre.id}>
                      {genre.name}
                    </em>
                  ))}
                  <br />
                  <div className="aqua2">
                    <FaRegThumbsUp /> 평점:{" "}
                    <a className="aqua">{movie.vote_average} / 10</a>
                    <br />
                    <BiCameraMovie /> 개봉:{" "}
                    <a className="aqua">{movie.release_date}</a>
                    <br />
                    <IoIosTimer /> 시간:{" "}
                    <a className="aqua">{movie.runtime} 분</a>
                  </div>
                  <div className={"movie-overview"}>
                    <a>{movie.overview}</a>
                    <br />
                    <i className="fa-solid fa-caret-down"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="movie-container4">
          <div className="movie-container4-inner">
            <h2>
              출연진
              <div>
                {
                  <button onClick={() => setPage((prev) => prev - 1)}>
                    <AiFillCaretLeft />
                  </button>
                }
                {totalSet > page && (
                  <button onClick={() => setPage((prev) => prev + 1)}>
                    <AiFillCaretRight />
                  </button>
                )}
              </div>
            </h2>

            <div className="movie-castimg">
              <div className="movie-castimg2">
                {credit
                  .slice(page * pageRange, (page + 1) * pageRange)
                  .map((cast) => (
                    <ul className="movie-cast-img" key={cast.id}>
                      <li>
                        <div className="mvimg">
                          <Link to={`/Cast/${cast.id}`}>
                            <img
                              src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`}
                              alt={cast.name}
                            ></img>
                          </Link>
                        </div>
                        <div className="mv-character">
                          <a>{cast.character}</a>
                        </div>
                        <div className="mv-name">
                          <a>{cast.name}</a>
                        </div>
                      </li>
                    </ul>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="movie-container4">
          <div className="movie-container4-inner">
            <h2>
              추천영화
              <div>
                {
                  <button onClick={() => setPage2((prev) => prev - 1)}>
                    <AiFillCaretLeft />
                  </button>
                }
                {totalSet2 > page2 && (
                  <button onClick={() => setPage2((prev) => prev + 1)}>
                    <AiFillCaretRight />
                  </button>
                )}
              </div>
            </h2>

            <div className="movie-castimg">
              <div className="movie-castimg2">
                {recom
                  .slice((page2 - 1) * pageRange, page2 * pageRange)
                  .map((movie) => (
                    <ul className="movie-cast-img" key={movie.id}>
                      <li>
                        <div className="mvimg">
                          <Link to={`/Movie/${movie.id}`}>
                            <img
                              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                              alt={movie.title}
                            ></img>
                          </Link>
                        </div>
                        <div className="mv-character">
                          <a>{movie.title}</a>
                        </div>
                      </li>
                    </ul>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
