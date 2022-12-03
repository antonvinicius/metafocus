import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Register } from "../screens/Register";
import { PickAvatar } from "../screens/PickAvatar";
import { Login } from "../screens/Login";

const Stack = createNativeStackNavigator();

export function PublicRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="PickAvatar" component={PickAvatar} />
    </Stack.Navigator>
  );
}
