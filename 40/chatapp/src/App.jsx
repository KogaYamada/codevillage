import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Room from "./pages/Room";

// routing (react-router-dom)
// URLのエンドポイント(/xxxx)によって表示するページを変える
//npm i react-router-dom

// http://loaclhost:3000         の時Room
// http://loaclhost:3000/login   の時Login
// http://loaclhost:3000/signup  の時Signup

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