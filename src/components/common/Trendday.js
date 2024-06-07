import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Trendday({ name, name2 }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const totalPost = data.length; // 총 데이터 수

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

  return (
    <>
      {data.slice(page, page + 8).map((a, i) => (
        <React.Fragment key={a.id}>
          <a className="num">{i + 1}</a>
          <div className="movie-trend-img">
            <Link to={`/${name}/${a.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${a.poster_path}`}
                alt={a.title || a.name}
              />
            </Link>
          </div>
        </React.Fragment>
      ))}
    </>
  );
}

export default Trendday;
