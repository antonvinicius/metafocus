import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PublicTabs } from "./PublicTabs";

export function Routes() {
  return (
    <NavigationContainer>
      <PublicTabs />
    </NavigationContainer>
  );
}
