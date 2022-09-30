import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PublicRoutes } from "./PublicRoutes";
import { useAuth } from "../hooks/useAuth";
import { PublicTabs } from "./PublicTabs";

export function Routes() {
  const { authenticated } = useAuth();

  return (
    <NavigationContainer>
      {authenticated ? <PublicTabs /> : <PublicRoutes />}
    </NavigationContainer>
  );
}
