import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Room from './pages/Room';
import { AuthProvider } from './context/AuthContext';

// URLによって表示するページを変更したい

// BrowserRouter: 囲われた中でreact-router-domの機能を使用できる
// Switch: 最初に一致したルートを表示
// Route:
//  exact: pathの完全一致
//  path: コンポーネントを表示するURLの指定

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Room />
          </Route>
          <Route exact path='/signup'>
            <Signup />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};
export default App;
