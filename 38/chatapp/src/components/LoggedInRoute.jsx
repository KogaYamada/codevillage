import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './AuthService';

const LoggedInRoute = ({ component: Component, ...otherProps }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <Route
      {...otherProps}
      render={(props) => {
        return user ? <Component {...props} /> : <Redirect to='/login' />;
      }}
    />
  );
};

export default LoggedInRoute;
