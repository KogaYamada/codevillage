import { createContext } from 'react';

export const AuthContext = createContext();

// コンポーネント
export const AuthProvider = ({ children }) => {
  const a = 'A';
  const b = 'b';
  const state = { state1: a, state2: b };
  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};
