import React, { useEffect } from "react";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { realmContext } from "../config/Realm";
import { User } from "../models/User";

interface AuthContextProps {
  authenticated: boolean;
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({ children }: any) {
  const { useQuery } = realmContext;
  const [authenticated, setAuthenticated] = useState(false);
  const users = useQuery("User");

  useEffect(() => {
    const userRegistered = users.length > 0;
    if (!userRegistered)
      console.info("User is not registered, provide nickname 😅");
    setAuthenticated(userRegistered);
  }, []);

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
