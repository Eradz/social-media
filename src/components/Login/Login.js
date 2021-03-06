import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    
        <div className='login-container'>
              <div className='login-box'>
                  <h1>Login Form</h1>
                  <div className='button-box'>
                      <Link className='link' to="/">
                                <button className='primary-btn'>
                                  Login
                                </button>
                      </Link >
                      <Link className='link' to="/signup">
                                <button className='secondary-btn'>
                                  Signup
                                </button>
                      </Link>
                  </div>
                  <div className='login-inputs'>
                    <input type="email" name="email" placeholder="Email Address"></input>
                    <input type="password" name="password" placeholder='password'></input>
                    <a href='#home'>Forgot password?</a>
                  <Link className='link1' to='/home'>
                  <button className='primary-btn'>Login</button>
                  </Link>
                  <p>Not a member?  <Link to="/signup">Signup</Link></p>
                  </div>

              </div>
        </div>
  
  )
}
