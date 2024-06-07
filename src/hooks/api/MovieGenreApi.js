import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const MovieGenreApi = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState("1");
  let { id } = useParams();

  const productFetch = () => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        include_adult: "false",
        include_video: "false",
        language: "ko-KR",
        page: `${page}`,
        sort_by: "popularity.desc",
        with_genres: `${id}`,
        "vote_count.gte": "1000",
      },

      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODdiNDJmY2UyM2I5Y2RiYzU3OGNhNjE1YzBhMjA1MyIsInN1YiI6IjY1M2I3NzE3YmMyY2IzMDBlYWZiZWQyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18XMNMM-iQlrVebxTDCjSfa6zAWl_4taI8-3ncfWtpY",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setProducts(response.data.results);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    productFetch();
  }, [id, page]);
};

export default MovieGenreApi;
