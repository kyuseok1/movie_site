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
  addTvBookmark,
  removeTvBookmark,
} from "../../reducers/bookmarkActions";

const API_KEY =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODdiNDJmY2UyM2I5Y2RiYzU3OGNhNjE1YzBhMjA1MyIsInN1YiI6IjY1M2I3NzE3YmMyY2IzMDBlYWZiZWQyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18XMNMM-iQlrVebxTDCjSfa6zAWl_4taI8-3ncfWtpY";
const LANGUAGE = "ko-KR";
const BASE_URL = "https://api.themoviedb.org/3/tv";

const fetchData = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`, {
    params: { language: LANGUAGE },
    headers: { accept: "application/json", Authorization: API_KEY },
  });
  return response.data;
};

const fetchCredits = async (id) => {
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

const Tv = () => {
  const [product, setProduct] = useState(null);
  const [credits, setCredits] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [page2, setPage2] = useState(1);

  const tvBookmarks = useSelector((state) => state.bookmarks.tvBookmarks) || [];
  const dispatch = useDispatch();
  const { id } = useParams();

  const toggleHandler = useCallback(
    (tvId) => {
      if (tvBookmarks.includes(tvId)) {
        dispatch(removeTvBookmark(tvId));
      } else {
        dispatch(addTvBookmark(tvId));
      }
    },
    [dispatch, tvBookmarks]
  );

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [productData, creditsData, recommendationsData] =
          await Promise.all([
            fetchData(id),
            fetchCredits(id),
            fetchRecommendations(id),
          ]);

        setProduct(productData);
        setCredits(creditsData.cast);
        setRecommendations(recommendationsData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchAllData();
  }, [id]);

  if (loading) return <Loading />;

  const totalPost = credits.length;
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
            ), url("https://image.tmdb.org/t/p/w500/${product.backdrop_path}" )`,
          }}
        >
          <div className="movie-container3-inner">
            <div className="movie-poster">
              <a
                className={`${
                  tvBookmarks.includes(product.id) ? "nostar" : "star"
                }`}
                onClick={() => toggleHandler(product.id)}
              >
                ★
              </a>
              <img
                src={`https://image.tmdb.org/t/p/w300/${product.poster_path}`}
                alt=""
              ></img>
            </div>
            <div className="movie-detail">
              <div className="movie-detail2">
                <div className="movie-detail3">
                  <div className="movie-title">
                    <h2>{product.name}</h2>
                    <a style={{ fontWeight: 500, fontSize: 17 }}>
                      {product.tagline}
                    </a>
                  </div>
                  <a
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: "white",
                    }}
                  >
                    {product.original_name}
                  </a>
                  <br />
                  <br />
                  <br />
                  {product.genres.map((genre) => (
                    <em className="movie-genre" key={genre.id}>
                      {genre.name}
                    </em>
                  ))}
                  <br />
                  <div className="aqua2">
                    <FaRegThumbsUp /> 평점:{" "}
                    <a className="aqua">{product.vote_average} / 10</a>
                    <br />
                    <BiCameraMovie /> 개봉:{" "}
                    <a className="aqua">{product.first_air_date}</a>
                    <br />
                    <IoIosTimer /> 투표수:{" "}
                    <a className="aqua">{product.vote_count}</a>
                  </div>
                  <div className={"movie-overview"}>
                    <a>{product.overview}</a>
                    <br />
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
              출연진{" "}
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
                {credits
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
              추천티비
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
                {recommendations
                  .slice((page2 - 1) * pageRange, page2 * pageRange)
                  .map((tv) => (
                    <ul className="movie-cast-img" key={tv.id}>
                      <li>
                        <div className="mvimg">
                          <Link to={`/Tv/${tv.id}`}>
                            <img
                              src={`https://image.tmdb.org/t/p/w200/${tv.poster_path}`}
                              alt={tv.name}
                            ></img>
                          </Link>
                        </div>
                        <div className="mv-character">
                          <a>{tv.name}</a>
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

export default Tv;
