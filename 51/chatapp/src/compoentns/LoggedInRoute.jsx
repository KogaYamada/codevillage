import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const LoggedInRoute = ({ children }) => {
  const authState = useContext(AuthContext);
  console.log(authState);
  // ロード中ならロード画面を表示させる
  if (authState.loading) {
    return <h1>ロード中...</h1>;
  }

  // ログインしていなければLoginページに飛ばす
  if (authState.user === null) {
    return <Redirect to='/login' />;
  }
  // 6分から開始

  // ログインしていればchildrenを返す
  return children;
};

export default LoggedInRoute;
