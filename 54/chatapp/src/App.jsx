import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoggedInRoute from './components/LoggedInRoute';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Room from './pages/Room';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/signup'>
            <Signup />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/'>
            <LoggedInRoute>
              <Room />
            </LoggedInRoute>
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
