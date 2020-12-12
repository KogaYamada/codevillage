import React, { FC, createContext, useState, useEffect } from 'react';
import { auth } from '../config/firebase';

type UserState =
  | {
      name: string | null;
      isLogin: true;
      isLoading: false;
    }
  | {
      isLogin: false;
      isLoading: boolean;
    };

// nullならログイン状態ではない、nullでなかったらログイン状態である
export const AuthContext = createContext<UserState>({
  isLogin: false,
  isLoading: true,
});

const AuthPrvider: FC = ({ children }) => {
  const [user, setUser] = useState<UserState>({
    isLogin: false,
    isLoading: true,
  });

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser({
          isLogin: true,
          name: authUser.displayName,
          isLoading: false,
        });
      } else {
        setUser({ isLogin: false, isLoading: false });
      }
    });
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
export default AuthPrvider;
