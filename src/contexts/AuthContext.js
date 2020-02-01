import React, { createContext, useState } from 'react'

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  const localSetUser = (currentUser) => {
    localStorage.setItem('user', currentUser ? JSON.stringify(currentUser) : null )
    setUser(currentUser)
  }

  const value = {
    currentUser: user,
    localSetUser: localSetUser
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}




export default AuthContext