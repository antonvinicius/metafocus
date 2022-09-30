import { NativeBaseProvider } from "native-base";
import React, { useEffect } from "react";
import { realmContext } from "./src/config/Realm";
import { Routes } from "./src/routes";
import { AuthProvider } from "./src/hooks/useAuth";

const { RealmProvider } = realmContext;

export function App() {
  useEffect(() => {
    console.info("Welcome to metafocus 👨‍💻💚");
  }, []);

  return (
    <RealmProvider>
      <NativeBaseProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NativeBaseProvider>
    </RealmProvider>
  );
}
