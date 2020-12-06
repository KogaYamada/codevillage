import { createContext, useState, useEffect } from 'react';
import { auth } from '../config/firebase';

export const AuthContext = createContext(null);

// Reactのコンポーネント
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // タイミングを調整するための関数
  // 第一引数: 調整されタイミングで実行されるcallback関数
  //       -> return内のJSXガDOMに反映された後に一回実行される(最初の一回だけ実行)
  //       -> 依存配列内の変数の値が変わるたびに実行される
  // 第二引数: 依存配列
  useEffect(() => {
    // onAuthStateChanged:ユーザーのログイン状態の変更を監視する関数
    //    -> ログイン状態の変更があったときに実行
    //    -> onAuthStateChanged関数が実行されたとき
    auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
