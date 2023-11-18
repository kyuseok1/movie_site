import React from 'react'
import Header from './Header';
import { Container } from "react-bootstrap";
import {  useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Home = () => {
  let state = useSelector ((state)=> state)
  
  return (
       <section>
    <Header></Header>
    <Container className='con'>
      <div className='first-container'> 
        <div className='home'>
           
              <div className='home2'>
                  <h1>다양한 영화를 추천받고 즐기세요!</h1>
              </div>
        </div>
        </div>
        <div className='watching'>
          <div className='watching-inner'>
          <h1>어디서나 자유롭게 추천받으세요!</h1>
          </div>
          <div className='watching-inner2'>
          
          </div>
        </div>
        <div className='watching2'>
          <div className='watching2-inner'>
          
          </div>
          <div className='watching2-inner2'>
          <h1>오피스박스 순위를 확인해보세요!</h1>
          </div>
        </div>
        
        <div className='home3'>
          <div className='home3-inner'>
              <h1>Movie Tranding</h1>
              <button id='home3button'> <Link to='/Genre'>장르별보기</Link> </button>
              <button id='home3button2'><Link to='/Suggest'>추천보기</Link> </button>
          </div>
        </div>
       
        <div className='home4'>
            <div className='home4-inner'>
            {
            state.ranking.map((a,i)=>
                  <Link to={`/Movie/${state.ranking[i].id}`}> <img src={state.ranking[i].src} alt=''></img></Link> 
            )
            }
            
            </div>
        </div>
        
           
      
            
            
    </Container>
    </section>
    
  )
}
// <Link to={state.ranking[i].name}> <img src={state.ranking[i].src}></img></Link> 
export default Home