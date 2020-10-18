import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {AuthProvider} from "./context/AuthService"

import LoggedInRoute from "./components/LoggedInRoute"
import Login from './pages/Login';
import Signup from './pages/Signup';
import Room from './pages/Room';


const App = () => {
  return (
		<AuthProvider>
			<BrowserRouter>
				<Switch>
					<LoggedInRoute exact path="/" component={Room} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={Signup} />
				</Switch>
			</BrowserRouter>
		</AuthProvider>
  );
};

export default App;

// <Route exact path="/hello" component={Some} />
// urlがlocalhost:3000/helloの時にSomeコンポーネントを表示させて