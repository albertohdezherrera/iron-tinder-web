import axios from 'axios'
import User from '../data/user.json'

const http =  axios.create({
  baseURL: 'https://tweet-hack-api.herokuapp.com',
  withCredentials: true
})

//const getUsers = (currenUser) => http.get('/feed', { user })
const getUsers = (body) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(User)
    }, 500);
  })
)

export default {
  getUsers
}