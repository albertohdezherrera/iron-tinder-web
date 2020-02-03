import axios from 'axios'
import Users from '../data/getUsers.json'

const http =  axios.create({
  baseURL: 'https://tweet-hack-api.herokuapp.com',
  withCredentials: true
})

//const getUsers = (currenUser) => http.get('/feed', { user })
const getUsers = (body) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Users)
    }, 500);
  })
)

export default {
  getUsers
}