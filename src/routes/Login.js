import React from 'react'
import Header from './Header';
const Login = () => {
  return (
    <>
    <Header></Header>
    <div class="container1">
          <div class="inner">
              <span > Home > 로그인</span>
               
          </div>
    </div>
    <div class="login-container">
    <div class="login-box">
    <form action="/Login" method= "POST">  
                <label>ID</label>
                <input name="username"  />
                <label>Password</label>
                <input name="password" type='password' />
                <br />
                <button type="submit" className='login-button'>
                    Login
                </button>
            </form>
      </div>
      </div>
      </>
  )
}

export default Login