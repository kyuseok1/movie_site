import React from 'react'
import Header from './Header';
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";



const Home = () => {
  let state = useSelector ((state)=> state)
  let dispatch = useDispatch()
  return (
       <section>
    <Header></Header>
    <Container>
      <div className='first-container'> 
        <div className='home'>
           
              <div className='home2'>
                  <h1>다양한 영화를 추천받고 즐기세요!</h1>
              </div>
        </div>
        </div>
        <div className='home3'>
          <div className='home3-inner'>
              <h1>Movie Tranding</h1>
              <button id='home3button'> <a href='/'>랭킹보기</a> </button>
              <button id='home3button2'><a href='/'>추천보기</a></button>
          </div>
        </div>
        <div className='home4'>
            <div className='home4-inner'>
            {
            state.ranking.map((a,i)=>
            
                    
                    <img src={state.ranking[i].src}></img>
                    
                    
                   
                    
           
            )
            }
            </div>
        </div>
        
           
      
            
            
    </Container>
    </section>
    
  )
}

export default Home