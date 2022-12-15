import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PublicRoutes } from "./PublicRoutes";
import { useAuth } from "../hooks/useAuth";
import { PrivateRoutes } from "./PrivateRoutes";
import { ActivityIndicator } from "react-native";
import { VStack } from "native-base";

export function Routes() {
  const { authenticated, loading } = useAuth();

  if (loading) {
    return (
      <VStack flex="1" justifyContent="center" alignItems="center">
        <ActivityIndicator />
      </VStack>
    );
  }

  return (
    <NavigationContainer>
      {authenticated ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
}
