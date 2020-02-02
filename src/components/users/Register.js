import React, { useState, useContext } from 'react'
import AuthContext from '../../contexts/AuthContext'
import LoginService from '../../services/LoginService'

const Register = () => {

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    gender: '',
    interest: '',
    minAge: '',
    maxAge: '',
    image: '',
    description: '',
    error: false,
  });

  const { localSetUser } = useContext(AuthContext)
  
  const { name, email, age, gender, interest, minAge, maxAge, image, password, description, error } = data
  
  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = Object.keys(data).reduce((acc, k) => {
      acc.append(k, data[k])
      return acc
    }, new FormData())

    //console.log(formData)

    LoginService.register(formData)
      .then(
        user => {
          localSetUser(user)
        },
        error => {
          console.log(error)
        }
      )
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setData({
      ...data,
      [name]: files ? files[0] : value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={name} onChange={handleChange} />
      <input type="text" name="email" value={email} onChange={handleChange} />
      <input type="number" name="age" min="18" max="99" value={age} onChange={handleChange} />
      <select name="gender" onChange={handleChange}>
        <option value={false}>Male</option>
        <option value={true}>Female</option>
      </select>

      <select name="interest" onChange={handleChange}>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="both">Any</option>
      </select>

      <input type="number" name="minAge" min="18" max="99" value={minAge} onChange={handleChange} />
      <input type="number" name="maxAge" min="19" max="99" value={maxAge} onChange={handleChange} />

      <input type="file" name="image" onChange={handleChange} />

      <textarea name="description" value={description} onChange={handleChange} />

      <button type="submit">Register</button>
    </form>
  )
}

export default Register