import React, { useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

	// タイミング調整係: useEffectの中のコールバック関数
	// 第二引数の配列の中に入った変数/stateが変更されるとコールバックが起動する
	//       空の場合初回の画面描写後に１度だけ実行される
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