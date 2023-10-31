import React from 'react'
import Header from './Header';
const Register = () => {
  return (
    <>
    <Header></Header>
    <div class="container1">
          <div class="inner">
              <span > Home > 회원가입</span>
              
          </div>
      </div>
      <div class="login-container">
    <div class="login-box">
    <form action="/Register" method="POST" style={{  display: 'flex', flexDirection: 'column'}}
            >
                
                <label>ID</label>
                <input name="username" />
                <label>Password</label>
                <input name="password" type='password' />
                <label>Confirm Password</label>
                <input type='password' />
                <br />
                <button type='submit'>
                    회원가입하기
                </button>
            </form>
      </div>
      </div>
      </>
  )
}

export default Register