import { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase/config';

const initalState = { user: null, loading: true };

export const AuthContext = createContext(initalState);

export const AuthProvider = ({ children }) => {
  const [userState, setUserState] = useState(initalState);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // ログインしていればuserにユーザーの情報が、ログインしていなければnull
      setUserState({ user, loading: false });
    });
  }, []);

  return (
    <AuthContext.Provider value={userState}>{children}</AuthContext.Provider>
  );
};
