import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../config/firebase';

const Room = () => {
  const logout = () => {
    auth.signOut();
  };
  return (
    <>
      <h1>チャットルーム</h1>
      <button onClick={logout}>ログアウト</button>
    </>
  );
};

export default Room;
