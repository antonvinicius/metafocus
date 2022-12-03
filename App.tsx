import { NativeBaseProvider } from "native-base";
import React, { useEffect } from "react";
import { Routes } from "./src/routes";
import { AuthProvider } from "./src/hooks/useAuth";
import { nativeBaseTheme } from "./src/global/theme";

export function App() {
  useEffect(() => {
    console.info("Welcome to metafocus 👨‍💻💚");
  }, []);

  return (
    <NativeBaseProvider theme={nativeBaseTheme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NativeBaseProvider>
  );
}
