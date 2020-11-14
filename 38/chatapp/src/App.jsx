import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { AuthProvider } from './components/AuthService';
import Signup from './pages/Signup';
import Room from './pages/Room';
import Login from './pages/Login';

import LoggedInRoute from './components/LoggedInRoute';

// ユーザーがログインしていればRoomに、していなければLoginに遷移させる

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <LoggedInRoute exact path='/' component={Room} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
