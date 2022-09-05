import { NativeBaseProvider } from "native-base";
import React from "react";
import { Home } from "./src/screens/Home";

export function App() {
  return (
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>
  );
}
