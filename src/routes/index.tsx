import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PublicRoutes } from "./PublicRoutes";
import { useAuth } from "../hooks/useAuth";
import { PrivateRoutes } from "./PrivateRoutes";

export function Routes() {
  const { authenticated } = useAuth();

  return (
    <NavigationContainer>
      {authenticated ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
}
