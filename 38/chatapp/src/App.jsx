import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Signup from './pages/Signup';
import Room from './pages/Room';
import Login from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Room} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
