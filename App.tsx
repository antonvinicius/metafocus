import { NativeBaseProvider } from "native-base";
import React from "react";
import { Home } from "./src/screens/Home";
import { realmContext } from "./src/config/Realm";

const { RealmProvider } = realmContext;

export function App() {
  return (
    <RealmProvider>
      <NativeBaseProvider>
        <Home />
      </NativeBaseProvider>
    </RealmProvider>
  );
}
