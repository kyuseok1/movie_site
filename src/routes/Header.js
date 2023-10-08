
import React from 'react';
import { Link  } from 'react-router-dom'

function Header() {
  return (
    <>
    <div class="head">
    <div class="top">
    
    <Link to="/">Home</Link>
    <Link to="/Ranking">Ranking</Link>
    <Link to="/Suggest">Suggest</Link>
					
    </div>
    </div>
    </>
  );
  
}

export default Header;