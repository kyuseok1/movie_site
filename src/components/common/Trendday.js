import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Trendday.css";

function Trendday({ name, name2 }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(
    window.innerWidth <= 768 ? 3 : 8
  );

  const dataFetch = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/${name}/${name2}`,
        {
          params: { language: "ko-KR" },
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODdiNDJmY2UyM2I5Y2RiYzU3OGNhNjE1YzBhMjA1MyIsInN1YiI6IjY1M2I3NzE3YmMyY2IzMDBlYWZiZWQyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18XMNMM-iQlrVebxTDCjSfa6zAWl_4taI8-3ncfWtpY",
          },
        }
      );
      setData(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }, [name, name2]);

  useEffect(() => {
    dataFetch();
  }, [dataFetch]);

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
    if ((page + 1) * itemsPerPage < data.length) {
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
      <div className="trendday-container">
        <div className="trendday-items">
          {data
            .slice(page * itemsPerPage, (page + 1) * itemsPerPage)
            .map((a, i) => (
              <div className="trendday-item" key={a.id}>
                <a className="num">{i + 1 + page * itemsPerPage}</a>
                <div className="movie-trend-img">
                  <Link to={`/${name}/${a.id}`}>
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
              </div>
            ))}
        </div>
      </div>
      <div className="pagination2">
        <button onClick={prevPage} disabled={page === 0}>
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={(page + 1) * itemsPerPage >= data.length}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Trendday;
