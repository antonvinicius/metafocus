import { NativeBaseProvider } from "native-base";
import React, { useEffect } from "react";
import { Routes } from "./src/routes";
import { AuthProvider } from "./src/hooks/useAuth";

export function App() {
  useEffect(() => {
    console.info("Welcome to metafocus 👨‍💻💚");
  }, []);

  return (
    <NativeBaseProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NativeBaseProvider>
  );
}
