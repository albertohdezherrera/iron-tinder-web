import React, { useState, useContext } from 'react'
import LoginService from '../../services/LoginService'
import AuthContext from '../../contexts/AuthContext'
import './users.css'

const Login = () => {

  const [data, setData] = useState({
    email: '',
    password: '',
    error: false,
  });
  
  const { localSetUser } = useContext(AuthContext)
  
  const { email, password, error } = data

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    LoginService.login({ email, password })
      .then(
        user => {
          localSetUser(user)
        },
        error => {
          setData({
            ...data,
            error: true
          })
        }
      )
    
  }

  return ( 
    <div className="Login">
      <div className="Login__logo">
        <i className="fas fa-fire"></i>
        <span><b>tinder</b>hack</span>
      </div>
      
      { error && <span>Ups! Invalid email or password</span>}
      
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="Email" value={email}  onChange={handleChange}/>
        <input type="password" name="password" placeholder="Password" value={password} onChange={handleChange} />
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}

export default Login