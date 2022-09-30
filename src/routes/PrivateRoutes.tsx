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

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 100,
        },
        tabBarLabelStyle: {
          fontSize: 16,
          color: "#000000",
          marginBottom: 13,
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
          headerShown: true,
          headerStyle: {
            backgroundColor: "#38B387",
          },
          headerTitleStyle: {
            color: "#FFF",
          },
          headerTitleAlign: "center",
          headerTitle: "Suas Metas",
          tabBarIcon: () => (
            <Box p="10px" rounded="full" bg="#38B387">
              <AntDesign size={25} name="home" color="#FFF" />
            </Box>
          ),
        }}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          tabBarIcon: () => (
            <Box p="10px" rounded="full" bg="#38B387">
              <AntDesign size={25} name="plussquareo" color="#FFF" />
            </Box>
          ),
          headerStyle: {
            backgroundColor: "#38B387",
          },
          headerTitleStyle: {
            color: "#FFF",
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
          headerStyle: {
            backgroundColor: "#38B387",
          },
          headerTitleStyle: {
            color: "#FFF",
          },
          headerTitleAlign: "center",
          headerTitle: "Perfil",
          tabBarIcon: () => (
            <Box p="10px" rounded="full" bg="#38B387">
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
          headerStyle: {
            backgroundColor: "#38B387",
          },
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