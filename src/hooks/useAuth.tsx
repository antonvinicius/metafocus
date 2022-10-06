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
  createUser: (user: any) => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({ children }: any) {
  const { useRealm, useQuery } = realmContext;
  const [authenticated, setAuthenticated] = useState(false);
  const users = useQuery<User>("User");
  const realm = useRealm();

  function createUser(user: any) {
    if (user.nickname) {
      realm.write(() => {
        realm.create("User", user);
      });
    }
  }

  function createMeta(meta: any){
    
  }

  useEffect(() => {
    const userRegistered = users.length > 0;
    if (!userRegistered)
      console.info("User is not registered, provide nickname 😅");

    setAuthenticated(userRegistered);
  }, [users]);

  return (
    <>
      <AuthContext.Provider
        value={{
          authenticated,
          setAuthenticated,
          createUser,
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
