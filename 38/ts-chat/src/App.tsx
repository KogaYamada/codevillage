import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthPrvider from './context/AuthContext';
import LoggedInWrapper from './components/LoggedInWrapper';

import Room from './pages/Room';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App: FC = () => {
  return (
    <AuthPrvider>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <LoggedInWrapper>
              <Room />
            </LoggedInWrapper>
          </Route>
          <Route path='/login' exact>
            <Login />
          </Route>
          <Route path='/signup' exact>
            <Signup />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthPrvider>
  );
};

export default App;
