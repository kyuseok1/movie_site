
import React from 'react';
import { Link  } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';

function Header() {
  return (
    <>
    <div class="head">
      
    <div class="top">

    <Link to="/">Home</Link>
    <Link to="/Genre">Genre</Link>
    <Link to="/Suggest">Random</Link>
    <Link to="/Login">Login</Link>
    <Link to="/Register">Register</Link>
    
    <div class="top"></div>
    </div>
    <div className='menu'> 
    
    <button><Link to="/Register">회원가입</Link></button>
      <button><Link to="/Login">로그인</Link></button>
      
    </div>
    
    </div>
    </>
  );
  
}

export default Header;