import React, { useContext } from 'react';
import { auth } from "../firebase";
import { AuthContext } from "../components/AuthService"

const Room = () => {
  const user = useContext(AuthContext);
  console.log(user);
  const signOut = () => {
    auth.signOut();
  };
  return (
    <>
      <h1>チャットルーム</h1>
      <button onClick={ signOut }>ログアウト</button>
    </>
  );
};

export default Room;
