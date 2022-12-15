import React, { useEffect } from "react";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { User } from "../models/User";
import { getRealm } from "../realm/MetafocusDatabase";
import { seed } from "../realm/seed/seedData";

interface AuthContextProps {
  authenticated: boolean;
  authenticate: (user: User) => void;
  user: User;
  logout: () => void;
  updateUser: () => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState({} as User);
  const [authenticated, setAuthenticated] = useState(false);

  function authenticate(user: User) {
    setAuthenticated(true);
    setUser(user);
    console.log(JSON.stringify(user, null, 2));
  }

  function logout() {
    setAuthenticated(false);
  }

  async function updateUser() {
    const realm = await getRealm();
    const modelUser = realm.objectForPrimaryKey(
      "UserSchema",
      user.id
    ) as unknown as User;
    setUser(modelUser);
  }

  useEffect(() => {
    // TODO: Check if already logged in
    seed();
  }, []);

  return (
    <>
      <AuthContext.Provider
        value={{
          authenticated,
          authenticate,
          user,
          logout,
          updateUser,
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
