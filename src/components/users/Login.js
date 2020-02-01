import React, { useState } from 'react'
import LoginService from '../../services/LoginService'
import { useHistory } from 'react-router-dom'

const Login = () => {

  console.log(LoginService)
  
  const { push } = useHistory()

  const [data, setData] = useState({
    email: '',
    password: '',
    error: false
  });

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
          push('/feed')
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