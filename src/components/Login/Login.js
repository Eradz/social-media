import React, {useState} from 'react';
import './login.css';
import { Link } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [login, setLogin] = useState(false)
  const [route, setRoute] = useState('')
  
 
  const onEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const onPasswordChange = (e) => {
    setPassword(e.target.value)
  }
 

  const loging = () => {
    
    fetch('http://localhost:3000/signin', {
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data === 'success'){
          setRoute('/home')
        }
      })
      setLogin(!login)
  }
  
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
                    <input 
                    type="email" name="email" 
                    placeholder="Email Address"
                    value={email}
                    onChange= {onEmailChange}
                    ></input>
                    <input type="password" name="password" 
                    placeholder='password'
                    value={password}
                    onChange= {onPasswordChange}
                    ></input>
                    <a href='#home'>Forgot password?</a>
                  <Link className='link1' to={route}>
                  <button  
                  onClick={loging}
                  className='primary-btn'>
                  Login
                  </button>
                  </Link>
                  <p>Not a member?  <Link to="/signup">Signup</Link></p>
                  </div>

              </div>
        </div>
  
  )
}
