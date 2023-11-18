
import Header from './Header';
import {  useSelector } from "react-redux";
import { useParams } from "react-router-dom"

function Movie(props) {
    let state = useSelector ((state)=> state)    
    let {id}= useParams();
    let movie= [...state.movie]

    
      
  return (
    <>
    <Header></Header>
    <div className="movie-container"   >
        <div className='movie-container2'>
        <img src={movie[id-1].src} alt=''></img>
        <h4 >제목 : {movie[id-1].name}</h4>
        <h4> 장르 : {movie[id-1].genre}</h4>
        </div>
    </div>
    {/* <Lasted></Lasted> */}
    </>
  )
}

export default Movie