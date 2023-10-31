import React from 'react'
import {  useSelector } from "react-redux";
import { Link } from 'react-router-dom';


function Lasted(props){
    var myArr = localStorage.getItem('watched');
    myArr = JSON.parse(myArr);
    let state = useSelector ((state)=> state)
    let lasted= [...state.movie]
    return(
      <div className="lasted">
        <h3>최근 본 영화 목록</h3>
        {
        myArr && myArr.map((a,i)=>{ 
            return (
              <div className="row" >
                    
                    <Link to={`/Movie/${lasted[a].id}`}> <img src={lasted[a].src}></img></Link>
                    
              </div>
             )
          }) 
        }
      </div>
    );
  }

export default Lasted