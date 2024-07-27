import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./HomeMovieGenre.css";

function HomeMovieGenre({ name, name2, genre }) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(
    window.innerWidth <= 768 ? 3 : 8 // Show 8 items initially
  );
  const [totalProducts, setTotalProducts] = useState(0);

  const productFetch = useCallback(async () => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/discover/${name2}`,
      params: {
        include_adult: "false",
        include_video: "false",
        language: "ko-KR",
        page: `${page + 1}`,
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
      setTotalProducts(response.data.total_results);
    } catch (error) {
      console.error(error);
    }
  }, [name2, genre, page]);

  useEffect(() => {
    productFetch();
  }, [productFetch]);

  const handleResize = useCallback(() => {
    if (window.innerWidth <= 768) {
      setItemsPerPage(3);
    } else {
      setItemsPerPage(8);
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const nextPage = () => {
    if ((page + 1) * itemsPerPage < totalProducts) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
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
      <div>
        <div className="home4-movie">
          <div className="headerMovieGenre">
            {products.slice(0, itemsPerPage).map((a, i) => (
              <div className="movie-trend-img" key={a.id}>
                <Link to={`/${name2}/${a.id}`}>
                  <img
                    src={
                      a.poster_path
                        ? `https://image.tmdb.org/t/p/w200/${a.poster_path}`
                        : "https://via.placeholder.com/200x300?text=No+Image"
                    }
                    alt={a.title || a.name}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="pagination">
          <button onClick={prevPage} disabled={page === 0}>
            Previous
          </button>
          <button
            onClick={nextPage}
            disabled={(page + 1) * itemsPerPage >= totalProducts}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default HomeMovieGenre;
