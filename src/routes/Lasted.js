// import React, { useEffect } from 'react'
// import {  useSelector } from "react-redux";
// import { Link } from 'react-router-dom';


// function Lasted(props){
//     useEffect(()=>{
//       console.log( myArr.slice(1))
//     })
    
//     var myArr = localStorage.getItem('watched');
    
//     myArr = JSON.parse(myArr);
//     if(myArr.length >7){
//       localStorage.removeItem('watched')
//   }
//     let state = useSelector ((state)=> state)
//     let lasted= [...state.movie]
    
//     return(
//       <div className="lasted">
//         <h3>최근 본 영화 목록</h3>
//         {
//         myArr && myArr.map((a,i)=>{ 
          
//             return (
//               <div className="row" >
                    
//                     <Link to={`/Movie/${lasted[a-1].id}`}> <img src={lasted[a-1].src} alt=''></img ></Link>
                    
//               </div>
//              )
//           }) 
//         }
//       </div>
//     );
//   }

// export default Lasted