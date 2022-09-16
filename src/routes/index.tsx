import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PublicTabs } from "./PublicTabs";
import { PublicRoutes } from "./PublicRoutes";

export function Routes() {
  return (
    <NavigationContainer>
      <PublicTabs />
    </NavigationContainer>
  );
}
