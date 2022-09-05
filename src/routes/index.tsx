import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PublicRoutes } from "./PublicRoutes";

export function Routes() {
  return (
    <NavigationContainer>
      <PublicRoutes />
    </NavigationContainer>
  );
}
