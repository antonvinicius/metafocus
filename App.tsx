import { NativeBaseProvider } from "native-base";
import React from "react";
import { realmContext } from "./src/config/Realm";
import { Routes } from "./src/routes";

const { RealmProvider } = realmContext;

export function App() {
  return (
    <RealmProvider>
      <NativeBaseProvider>
        <Routes />
      </NativeBaseProvider>
    </RealmProvider>
  );
}
