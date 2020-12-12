import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Room from './pages/Room';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Room} />
        <Route path='/login' exact component={Login} />
        <Route path='/signup' exact component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
