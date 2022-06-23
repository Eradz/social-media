import React from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';

export const Signup = () => {
  return (
    <div className='signin-container'>
        <div className='signin-box'>
            <h1>Signup Form</h1>
            <div className='button-box'>
                    <Link className='link' to="/">
                        <button className='secondary-btn'>
                        Login
                        </button>
                    </Link>
                    <Link className='link' to="/signup">
                        <button className='primary-btn'>
                          Signup
                        </button>
                    </Link>
                  </div>
            <div className='signin-inputs'>
                  <input type="text" name="Firstname" placeholder='First name'></input>
                  <input type="text" name="Lastname" placeholder='Last name'></input>
                  <input type="email" name="email" placeholder="Email Address"></input>
                  <input type="password" name="password" placeholder='password'></input>
                  <a href='#home'>Forgot password?</a>
                  <Link className='link2' to='/home'>
                  <button className='primary-btn'>Signup</button>
                  </Link>
                <p>Already a member? <Link to="/">Login</Link></p>
            </div>

        </div>
</div>
  )
}