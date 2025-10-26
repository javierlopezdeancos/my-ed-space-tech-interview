import { createContext, useState, type JSX, type ReactNode } from 'react';

export const AuthContext = createContext<
  | {
      isLoggedIn: boolean;
      login: () => void;
      logout: () => void;
    }
  | undefined
>(undefined);

export const Auth_provider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
