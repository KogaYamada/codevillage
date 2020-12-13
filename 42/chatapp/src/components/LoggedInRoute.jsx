import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const LoggedInRoute = ({ component: Component, ...otherProps }) => {
  const user = useContext(AuthContext);

  // userのログイン状態によってページの遷移先を分けている

  // if (isLoading) {
  //   return (
  //     <>
  //       <CircularProgress />
  //       <h1>Loading...</h1>
  //     </>
  //   );
  // }

  if (!user) {
    return <Redirect to='/login' />;
  }

  return <Route {...otherProps} component={Component} />;

  // ---------------------------
  // return (
  //   <Route
  //     {...otherProps}
  //     render={(props) =>
  //       user ? <Component {...props} /> : <Redirect to='login' />
  //     }
  //   />
  // );
  // ---------------------------
};

export default LoggedInRoute;
