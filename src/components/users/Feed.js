import React, { useContext, useState, useEffect } from 'react'
import AuthContext from '../../contexts/AuthContext'
import Header from '../misc/Header'

const Feed = () => {

  const [nearUsers, setNearUsers] = useState({});

  useEffect(() => {
    console.log('will unmount');
  }, []);

  const { currentUser } = useContext(AuthContext)

  return (
    <div>
       <Header />
      <h1>Hola {currentUser.name}</h1>
    </div>
   

  )
}

export default Feed