import React, { useState, useContext } from 'react'
import LoginService from '../../services/LoginService'
import AuthContext from '../../contexts/AuthContext'

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
          console.log(error)
        }
      )
    
  }

  return (
    <div className="Login">
      <img src="" />
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" value={email}  onChange={handleChange}/>
        <input type="password" name="password" value={password} onChange={handleChange} />
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}

export default Login