import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './components/users/Login'
import Feed from './components/users/Feed'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/feed">
            <Feed />
        </Route>

        <Redirect to="/" />

      </Switch>
    </div>
  );
}

export default App;
