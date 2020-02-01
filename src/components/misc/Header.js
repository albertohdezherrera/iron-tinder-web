import React from 'react'
import './Header.css'

const Header = ({ user }) => {
  return (
    <header className="Header">
      <h1>{user.name}</h1>
      <img src="https://fakeimg.pl/180x60/" />
    </header>
  )
}

export default Header