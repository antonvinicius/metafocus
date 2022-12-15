import { NativeBaseProvider } from "native-base";
import React, { useEffect } from "react";
import { Routes } from "./src/routes";
import { AuthProvider } from "./src/hooks/useAuth";
import { nativeBaseTheme } from "./src/global/theme";
import { ModalProvider } from "./src/hooks/useModal";

export function App() {
  useEffect(() => {
    console.info("Welcome to metafocus 👨‍💻💚");
  }, []);

  return (
    <ModalProvider>
      <NativeBaseProvider theme={nativeBaseTheme}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NativeBaseProvider>
    </ModalProvider>
  );
}
