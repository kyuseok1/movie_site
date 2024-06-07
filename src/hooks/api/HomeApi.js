import React, { useState, useEffect } from "react";
import axios from "axios";

const HomeApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/trending/movie/day`,
      params: { language: "ko-KR" },
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
        setData(response.data.results.splice(0, 8));
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
};

export default HomeApi;
