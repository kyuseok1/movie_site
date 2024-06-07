import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Loading from "../common/Loading";
import { Link } from "react-router-dom";

function HomeMovieGenre({ name, name2, genre }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [length, setLength] = useState(0);

  const productFetch = useCallback(async () => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/discover/${name2}`,
      params: {
        include_adult: "false",
        include_video: "false",
        language: "ko-KR",
        page: `1`,
        sort_by: "popularity.desc",
        with_genres: `${Number(genre)}`,
        "vote_count.gte": "1000",
      },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODdiNDJmY2UyM2I5Y2RiYzU3OGNhNjE1YzBhMjA1MyIsInN1YiI6IjY1M2I3NzE3YmMyY2IzMDBlYWZiZWQyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18XMNMM-iQlrVebxTDCjSfa6zAWl_4taI8-3ncfWtpY",
      },
    };

    try {
      const response = await axios.request(options);
      setProducts(response.data.results);
      setLength(response.data.total_results);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, [name2, genre]);

  useEffect(() => {
    productFetch();
  }, [productFetch]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="home3-movie">
            <div className="home3-inner-movie">
              <h3>
                <Link to={`/${name2}Genre/${genre}`}>
                  {name2}/{name}
                </Link>
              </h3>
            </div>
          </div>
          <div className="home4-movie">
            <div className="headerMovieGenre">
              <div>
                {products.slice((page - 1) * 12, page * 12).map((a) => (
                  <div className="movie-trend-img" key={a.id}>
                    <Link to={`/${name2}/${a.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/w200/${a.poster_path}`}
                        alt={a.title || a.name}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default HomeMovieGenre;
