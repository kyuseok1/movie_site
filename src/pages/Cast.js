import React, { useState, useEffect, useCallback } from "react";
import Header from "../_layout/Header";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { BiCalendar, BiCurrentLocation, BiSolidStar } from "react-icons/bi";
import Loading from "../components/common/Loading";
const API_KEY =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODdiNDJmY2UyM2I5Y2RiYzU3OGNhNjE1YzBhMjA1MyIsInN1YiI6IjY1M2I3NzE3YmMyY2IzMDBlYWZiZWQyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18XMNMM-iQlrVebxTDCjSfa6zAWl_4taI8-3ncfWtpY";
const LANGUAGE = "ko-KR";
const BASE_URL = "https://api.themoviedb.org/3/person";

const fetchCastData = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`, {
    params: { language: LANGUAGE },
    headers: { accept: "application/json", Authorization: API_KEY },
  });
  return response.data;
};

const fetchCastMovieData = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}/movie_credits`, {
    params: { language: LANGUAGE },
    headers: { accept: "application/json", Authorization: API_KEY },
  });
  return response.data.cast;
};

const fetchCastImages = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}/images`, {
    headers: { accept: "application/json", Authorization: API_KEY },
  });
  return response.data.profiles;
};

function Cast() {
  const [cast, setCast] = useState(null);
  const [castMovies, setCastMovies] = useState([]);
  const [castImages, setCastImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // 현재 페이지 수
  const [page2, setPage2] = useState(1); // 현재 페이지 수
  const { id } = useParams();

  const totalPost = castMovies.length; // 총 데이터 수
  const totalPost2 = castImages.length; // 총 데이터 수

  const totalSet = Math.ceil(totalPost / 5); // 전체 버튼 세트 수
  const totalSet2 = Math.ceil(totalPost2 / 5); // 전체 버튼 세트 수

  const startPost = (page - 1) * 5; // 시작 게시물 번호
  const endPost = page * 5; // 끝 게시물 번호

  const startPost2 = (page2 - 1) * 5; // 시작 게시물 번호
  const endPost2 = page2 * 5; // 끝 게시물 번호

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const castData = await fetchCastData(id);
        const castMovieData = await fetchCastMovieData(id);
        const castImageData = await fetchCastImages(id);

        setCast(castData);
        setCastMovies(castMovieData);
        setCastImages(castImageData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchAllData();
  }, [id]);

  if (loading) return <Loading />;

  return (
    <>
      <Header />
      <section>
        <div className="cast-container3">
          <div className="movie-container3-inner">
            <div className="movie-poster">
              <img
                src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`}
                alt=""
              ></img>
            </div>
            <div className="movie-detail">
              <div className="movie-detail2">
                <div className="movie-detail3">
                  <div className="movie-title">
                    <h2>{cast.name}</h2>
                    <a>{cast.known_for_department}</a>
                  </div>
                  <div className="aqua2">
                    <BiCalendar /> <a className="aqua">{cast.birthday}</a>
                    <br />
                    <BiCurrentLocation />{" "}
                    <a className="aqua">{cast.place_of_birth}</a>
                    <br />
                    <BiSolidStar /> <a className="aqua">{cast.popularity}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="cast-container4">
          <div className="cast-container4-inner">
            <div>
              <h4>
                <a>출연작</a>
                {
                  <button onClick={() => setPage((prev) => prev - 1)}>
                    &lt;
                  </button>
                }
                {Array.from({ length: 5 }).map((_, i) => {
                  const pageIndex = i + 1;
                  return (
                    pageIndex <= totalSet && (
                      <button
                        className={page === pageIndex ? "btnhover" : ""}
                        key={i}
                        onClick={() => setPage(pageIndex)}
                      >
                        {pageIndex}
                      </button>
                    )
                  );
                })}
                {totalSet > page && (
                  <button onClick={() => setPage((prev) => prev + 1)}>
                    &gt;
                  </button>
                )}
              </h4>
            </div>
            {castMovies.slice(startPost, endPost).map((cast) => (
              <div className="cast-poster" key={cast.id}>
                <Link to={`/Movie/${cast.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${cast.poster_path}`}
                    alt=""
                  ></img>
                </Link>
              </div>
            ))}
          </div>
          <div className="cast-container4-inner">
            <h4>
              <a>사진</a>
              {
                <button onClick={() => setPage2((prev) => prev - 1)}>
                  &lt;
                </button>
              }
              {Array.from({ length: 5 }).map((_, i) => {
                const pageIndex = i + 1;
                return (
                  pageIndex <= totalSet2 && (
                    <button
                      className={page2 === pageIndex ? "btnhover" : ""}
                      key={i}
                      onClick={() => setPage2(pageIndex)}
                    >
                      {pageIndex}
                    </button>
                  )
                );
              })}
              {totalSet2 > page2 && (
                <button onClick={() => setPage2((prev) => prev + 1)}>
                  &gt;
                </button>
              )}
            </h4>
            {castImages.slice(startPost2, endPost2).map((image) => (
              <div className="cast-poster" key={image.file_path}>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${image.file_path}`}
                  alt=""
                ></img>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Cast;
