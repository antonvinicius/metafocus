import React, { useEffect } from "react";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { User } from "../models/User";

interface AuthContextProps {
  authenticated: boolean;
  authenticate: (user: User) => void;
  user: User;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState({} as User);
  const [authenticated, setAuthenticated] = useState(false);

  function authenticate(user: User) {
    setAuthenticated(true);
    setUser(user);
  }

  function logout() {
    setAuthenticated(false);
  }

  return (
    <>
      <AuthContext.Provider
        value={{
          authenticated,
          authenticate,
          user,
          logout,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}

export function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);
  return context;
}
