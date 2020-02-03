import React, { useContext, useState, useEffect } from 'react'
import AuthContext from '../../contexts/AuthContext'
import Header from '../misc/Header'
import FeedService from '../../services/FeedService'

const Feed = () => {
  const { currentUser } = useContext(AuthContext)

  const [nearUsers, setNearUsers] = useState({
    users: '',
    loading: true,
    error: false
  });

  useEffect(() => {
    FeedService.getUsers()
      .then(user => {
        setNearUsers({
          users: user,
          loading: false
        })
      },
      error => {
        setNearUsers({
          ...nearUsers,
          loading: false,
          error: true
        })
      })
  }, []);


  return (
    <div>
      <Header />
      {nearUsers.loading && <h1>se esta cargando</h1>}
      {nearUsers.error && <h1>hay un error</h1>}
    </div>
  )
}

export default Feed