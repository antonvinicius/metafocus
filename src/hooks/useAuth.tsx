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
import AsyncStorage from "@react-native-async-storage/async-storage";

const userKey = "@metafocus:user_key";

interface AuthContextProps {
  authenticated: boolean;
  authenticate: (user: User) => void;
  user: User;
  logout: () => void;
  updateUser: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState({} as User);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  async function authenticate(user: User) {
    try {
      setLoading(true);
      const userToStore = JSON.stringify(user);
      await AsyncStorage.setItem(userKey, userToStore);
      setUser(user);
      setAuthenticated(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    setLoading(true);
    setAuthenticated(false);
    await AsyncStorage.clear();
    setLoading(false);
  }

  async function updateUser() {
    const realm = await getRealm();
    const modelUser = realm.objectForPrimaryKey(
      "UserSchema",
      user.id
    ) as unknown as User;
    setUser(modelUser);
  }

  async function checkLogin() {
    try {
      setLoading(true);
      const value = await AsyncStorage.getItem(userKey);
      if (value !== null) {
        const user: User = JSON.parse(value);
        await authenticate(user);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    checkLogin();
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
          loading,
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
