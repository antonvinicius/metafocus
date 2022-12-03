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
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({ children }: any) {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <>
      <AuthContext.Provider
        value={{
          authenticated,
          setAuthenticated,
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
