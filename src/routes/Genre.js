import React from 'react'
import Header from './Header';
import {  useSelector } from "react-redux";
import { Link  } from 'react-router-dom'
import { Container, Row, Col } from "react-bootstrap";
const Genre = () => {
  let state = useSelector((state) => state)
  
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  let a= [...state.movie]
  let ani= a.filter(it => it.genre.includes(('ani')))
  let b= [...state.movie]
  let action= b.filter(it => it.genre.includes(('action')))
  let c= [...state.movie]
  let romance= c.filter(it => it.genre.includes(('romance')))
  let d= [...state.movie]
  let korea= d.filter(it => it.genre.includes(('korea')))
  let e= [...state.movie]
  let sf= e.filter(it => it.genre.includes(('sf')))
  let f= [...state.movie]
  let comedy= f.filter(it => it.genre.includes(('comedy')))
  
  return (
    <>
    <Header></Header>
    
    <Container>
                <Row md={1} className='genre-container'>
      
    <Col md={2}  className='romances'> <div className='genrename'><a>로맨스</a></div>
            {
                         romance.map((a,i)=>
                         <Link to={`/Movie/${romance[i].id}`} className='genre-link'> <img src={romance[i].src}></img> </Link> 
                         )
            }
    </Col>
    <Col className='action'><div className='genrename'><a>액션</a></div>
            {
                        action.map((a,i)=>
                        <Link to={`/Movie/${action[i].id}`} className='genre-link'> <img src={action[i].src}></img> </Link> 
                )
            
            }
    </Col>
    <Col className='sf'><div className='genrename'><a> 판타지</a></div>
    {
                        sf.map((a,i)=>
                        <Link to={`/Movie/${sf[i].id}`} className='genre-link'> <img src={sf[i].src}></img> </Link> 
                )
            }
    </Col>
    <Col className='korea'><div className='genrename'><a>한국</a></div>
    {                   
                        korea.map((a,i)=>
                        <Link to={`/Movie/${korea[i].id}`} className='genre-link'> <img src={korea[i].src}></img> </Link> 
                )        
            }
    </Col>
    <Col className='ani'><div className='genrename'><a>애니</a></div>
    {
           ani.map((c,i)=>
           <Link to={`/Movie/${ani[i].id}`} className='genre-link'> <img src={ani[i].src}></img> </Link> 
            )
            }
    </Col>
    <Col className='comedy'><div className='genrename'><a>코미디</a></div>
    {
            comedy.map((c,i)=>
            <Link to={`/Movie/${comedy[i].id}`} className='genre-link'> <img src={comedy[i].src}></img> </Link> 
             )
            }
    </Col>
    </Row>
    </Container>
    </>
  )
}

export default Genre