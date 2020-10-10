import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Room from './pages/Room';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/" component={Room} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

// ページ
// react-router-domでページ遷移を作成

// ユーザー登録ページ Signup.jsx  http://localhost:3000/signup
// ログインページ Login.jsx  http://localhost:3000/login
// チャットページ Room.jsx  http://localhost:3000
