import React, { useContext } from 'react'
import AuthContext from '../../contexts/AuthContext'
import Header from '../misc/Header'

const Feed = () => {

  const { currentUser } = useContext(AuthContext)

  return (
    <Header user={currentUser} />
  )
}

export default Feed