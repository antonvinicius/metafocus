import { NativeBaseProvider } from "native-base";
import React, { useEffect } from "react";
import { realmContext } from "./src/config/Realm";
import { Routes } from "./src/routes";

const { RealmProvider } = realmContext;

export function App() {
  useEffect(() => {
    console.info("Welcome to metafocus 👨‍💻💚");
  }, []);

  return (
    <RealmProvider>
      <NativeBaseProvider>
        <Routes />
      </NativeBaseProvider>
    </RealmProvider>
  );
}
