import React, { useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // userのログイン状態の変更を監視
    // 初回実行時にuserがログインしているかどうかを確認
    auth.onAuthStateChanged((user) => {
      // 引数のuserがnullならログインしてない
      // オブジェクトが入っているとログインしてる
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={ user }>
      {children }
    </AuthContext.Provider>
  );
};

export {
  AuthContext,
  AuthProvider
};