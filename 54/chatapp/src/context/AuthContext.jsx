import { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase/config';

const defaultValue = { loading: true, user: null };

export const AuthContext = createContext(defaultValue);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(defaultValue);

  // 関数の実行タイミングを調整するためのhooks
  // - コンポーネントがDOMに表示された時
  // - 依存配列の中の値が変わった時
  useEffect(() => {
    // firebaseのユーザーがログインしているか確認
    // ログイン状態が切り替わった時に最新のユーザー情報を引数に入れてコールバック関数を実行
    auth.onAuthStateChanged((user) => {
      if (user === null) {
        setAuthState({ loading: false, user: null });
      } else {
        setAuthState({ loading: false, user });
      }
    });
  }, []);
  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
};
