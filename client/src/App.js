import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/auth/signin';
import Signup from './components/auth/signup';
import Home from './components/home';
import PrivateRoute from './components/privateRoute';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/home" component={Home} />
      </Switch>
    </Router>
  )
}

const containtStyle = {
  width: "25%",
  marginLeft: "37%"
}
const authUser = {
  marginLeft: "0%"
}

export default App;
