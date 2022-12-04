import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { Meta } from "../screens/Meta";
import { Profile } from "../screens/Profile";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Box } from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Results } from "../screens/Results";
import { theme } from "../global/theme";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: theme.colors.primary,
        },
        tabBarShowLabel: false,
        tabBarLabelStyle: {
          fontSize: 16,
          color: "#000000",
        },
        tabBarIconStyle: {
          padding: 0,
          margin: 0,
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Box p="10px" rounded="full">
              <AntDesign size={25} name="home" color="#FFF" />
            </Box>
          ),
        }}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          tabBarIcon: () => (
            <Box p="10px" rounded="full">
              <AntDesign size={25} name="plussquareo" color="#FFF" />
            </Box>
          ),
          headerTitleStyle: {
            color: "#FFF",
          },
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTitleAlign: "center",
          headerTitle: "Nova Meta",
        }}
        name="Meta"
        component={Meta}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          headerTitleStyle: {
            color: "#FFF",
          },
          headerTitleAlign: "center",
          headerTitle: "Perfil",
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          tabBarIcon: () => (
            <Box p="10px" rounded="full">
              <Ionicons size={25} name="person" color="#FFF" />
            </Box>
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}

export function PrivateRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitleStyle: {
            color: "#FFF",
          },
          headerTitleAlign: "center",
          headerTitle: "Resultados",
          headerTintColor: "#FFFFFF",
        }}
        name="Results"
        component={Results}
      />
    </Stack.Navigator>
  );
}
