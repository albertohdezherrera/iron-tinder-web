import React, { useContext } from 'react'
import AuthContext from '../../contexts/AuthContext'
import { Route, Redirect } from 'react-router-dom'

const NotAuthenticatedRoute = (props) => {
  const { currentUser } = useContext(AuthContext)

  return !currentUser ? <Route {...props} /> : <Redirect to="/feed" />

}


export default NotAuthenticatedRoute
