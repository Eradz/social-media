import React, {useState} from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';

export const Signup = () => {
  const [route, setRoute] = useState("/signup")
  const[firstname, setFirstname] = useState('')
  const[lastname, setLastname] = useState('')
  const[email,setEmail] = useState('')
  const[password, setPassword] = useState('')

const onFirstname = (e) => {
  setFirstname(e.target.value)
}
const onLastname = (e) => {
  setLastname(e.target.value)
}
const onEmail = (e) => {
  setEmail(e.target.value)
}
const onPassword = (e) => {
  setPassword(e.target.value)
}


  const [signup, setSignup]= useState(false)
  

  const loging = () => {
    setSignup(!signup)
  fetch("http://localhost:3000/signup",{
    method: "post",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      firstname: firstname,
      lastname: lastname,
      password: password,
      email: email,
    })
  })
  .then(response => response.json())
  .then(users => {
    if (users) {
      console.log(users)
      setRoute('/home')
    }
  })
 
}

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
                  <input 
                  type="text" name="firstname" 
                  placeholder='firstname' 
                  id='firstname'
                  value={firstname}
                  onChange={onFirstname}
                  required/>
                  <input
                  type="text" name="lastname" 
                  placeholder='lastname'
                  id='lastname' 
                  value={lastname}
                  onChange={onLastname}
                  required/>
                  <input
                  type="email" name="email" 
                  placeholder="email" 
                  id='email'
                  value={email}
                  onChange={onEmail}
                  required/>
                  <input
                  type="password" name="password" 
                  placeholder='password'
                  id='password' 
                  value={password}
                  onChange={onPassword}
                  required/>
                  <Link className='link2' to={route}>
                  <button 
                  onClick={loging}
                  type='submit' className='primary-btn'>
                  Signup
                  </button>
                  </Link>
                  <a href='#home'>Forgot password?</a>
                <p>Already a member? <Link to="/">Login</Link></p>
            </div>

        </div>
</div>
  )
}