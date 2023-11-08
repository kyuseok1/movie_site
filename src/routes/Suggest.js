import React from 'react'
import Header from './Header';
import {  useSelector } from "react-redux";
import { Link } from 'react-router-dom';



const Projects = () => {
  let state = useSelector((state) => state)
  
  
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  let a= [...state.movie]
  let b= [shuffle(a)]
  return (

    <>

      <Header></Header>
      <div className='rank'><button id='rank-link'> <Link to='/Ranking' >  일별 박스오피스 보러가기 >></Link></button></div>
      
      <div className='random'>
      
      <button id='ran'> <Link to='/Suggest2' ><img src='/images/랜덤.png' className='randomplay' alt=''></img></Link> </button>
      {     
            a.map((c,i)=>
                  <Link to={`/Movie/${a[i].id}`}> <img src={a[i].src} alt=''></img></Link> 
                          
            )   
          
            }
      </div>
      
      

    </>
  )
  }

  export default Projects