import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './components/users/Login'
import Feed from './components/users/Feed'
import AuthenticatedRoute from './components/misc/AuthenticatedRoute'
import NotAuthenticatedRoute from './components/misc/NotAuthenticatedRoute'


function App() {
  return (
    <div className="App">
      <Switch>
        <NotAuthenticatedRoute exact path="/login">
          <Login />
        </NotAuthenticatedRoute>

        <AuthenticatedRoute exact path="/feed">
          <Feed />
        </AuthenticatedRoute>

        <Redirect to="/" />

      </Switch>
    </div>
  );
}

export default App;
