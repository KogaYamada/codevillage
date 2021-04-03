import { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase/config';

export const AuthContext = createContext();

// コンポーネント
export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({ loading: true, user: null });

  // 最初の一回(コンポーネントが画面に表示された後)
  // -> コンポーネントが画面にマウントされる
  useEffect(() => {
    // firebaseに問い合わせてユーザーが最後にログイン状態であったかを調べる
    // ユーザーのログイン状態が変わったタイミングでコールバック関数を実行
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
