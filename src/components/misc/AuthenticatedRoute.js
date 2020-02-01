import React, { useContext } from 'react'
import AuthContext from '../../contexts/AuthContext'
import { Route, Redirect } from 'react-router-dom'

const AuthenticatedRoute = (props) => {
  const { currentUser } = useContext(AuthContext)

  return currentUser ? <Route {...props} /> : <Redirect to="/login" />

}


export default AuthenticatedRoute
