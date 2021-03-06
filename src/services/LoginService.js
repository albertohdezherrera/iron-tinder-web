import axios from 'axios'
import User from '../data/user.json'


const http =  axios.create({
  baseURL: 'https://tweet-hack-api.herokuapp.com',
  withCredentials: true
})

//const login = ({ email, password }) => http.post('/login', { email, password })
const login = ({ email, password }) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(User)
    }, 500);
  })
)

//const register = (body) => http.post('/register', body)
const register = (body) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(User)
    }, 500);
  })
)

export default {
  login,
  register
}