import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Room from './pages/Room';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/signup'>
          <Signup />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/'>
          <Room />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
