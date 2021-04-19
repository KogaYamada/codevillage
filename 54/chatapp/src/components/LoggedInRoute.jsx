import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Redirect } from 'react-router-dom';

const LoggedInRoute = ({ children }) => {
  const authState = useContext(AuthContext);

  if (authState.loading) {
    return <h1>ロード中...</h1>;
  }

  if (authState.user === null) {
    return <Redirect to='/login' />;
  }

  return children;
};

export default LoggedInRoute;
