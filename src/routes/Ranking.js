
import React, { useState,useEffect } from 'react';
import Header from './Header';
import axios from 'axios';


function Ranking ()  {
    
  const [data, setData] = useState([]);
  
  	
  	useEffect(() => {
		const fetchData = async() => {
          const res = await axios.get(`https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20231103`);
          return res.data;
        }	
        
        fetchData().then(res => setData(res));
        
    }, []);
    
  return (
    <div>
        
        {console.log(JSON.stringify(data.boxOfficeResult.dailyBoxOfficeList[0]))}
      <Header></Header>
      
      <div class="container1">
          <div class="inner">
              <span > Home > 11월 03일 박스오피스</span>
              
          </div>
      </div>
  
    <div className='movie-rank-container'>
      <table>
        <tr>
          <th>순위</th>
          <th>영화명</th>
          <th>개봉일</th>
          <th>관객수</th>
        </tr>
        
        
        { (data.boxOfficeResult.dailyBoxOfficeList).map((dailyBoxOfficeList) => (
        <tr className='movie-rank' key={dailyBoxOfficeList.rnum}><th>{dailyBoxOfficeList.rank}</th><th>{dailyBoxOfficeList.movieNm}</th><th>{dailyBoxOfficeList.openDt}</th><th>{dailyBoxOfficeList.audiCnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}명</th></tr>
        ))} 
      </table>
    </div>
</div>

  );
  
}

export default Ranking


