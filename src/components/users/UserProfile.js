import React, { useContext, useState, useEffect } from 'react'
import AuthContext from '../../contexts/AuthContext'
import Header from '../misc/Header'
import FeedService from '../../services/FeedService'

const Feed = () => {

  const [nearUsers, setNearUsers] = useState({
    users: '',
    loading: true,
    error: false
  });

  useEffect(() => {
    FeedService.getUsers()
      .then(
        user =>{
          setNearUsers({
            user: user,
            loading: false,
            ...nearUsers
          })
        },
        error => {
          setNearUsers({
            ...nearUsers,
            error: true
          })
        }
      ),
  }, []);

  const { currentUser } = useContext(AuthContext)

  return (
    <div>
      <Header />
      {nearUsers.loading && <h1>esta cargando</h1>}
      {!nearUsers.loading && <h1>datos</h1>}
      {nearUsers.error && <h1>error</h1>}
    </div>
  )
}

export default Feed