
import React, { useState,useEffect } from 'react';
import Header from './Header';

const Ranking = () => {
    
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  
  const getMovies = async () => {
    
    const json = await (
      await fetch(
        `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20231030`
      )
    ).json(); // await를 await로 감싸기
    setMovies(json.boxOfficeResult.dailyBoxOfficeList);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      <Header></Header>
      <div class="container1">
          <div class="inner">
              <span > Home > 10월 30일 박스오피스</span>
              
          </div>
      </div>
  {loading ? (
    <h1>Loading...</h1>
  ) : (
    <div className='movie-rank-container'>
      <table>
        <tr>
          <th>순위</th>
          <th>영화명</th>
          <th>개봉일</th>
          <th>관객수</th>

        </tr>
      {movies.map((dailyBoxOfficeList) => (
        <tr className='movie-rank' key={dailyBoxOfficeList.rnum}><th>{dailyBoxOfficeList.rank}</th><th>{dailyBoxOfficeList.movieNm}</th><th>{dailyBoxOfficeList.openDt}</th><th>{dailyBoxOfficeList.audiCnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}명</th></tr>
      ))}
      </table>
    </div>
  )}
</div>

  );
  
}

export default Ranking


