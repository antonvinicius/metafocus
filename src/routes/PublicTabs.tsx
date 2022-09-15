import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { Meta } from "../screens/Meta";
import { Profile } from "../screens/Profile";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Box } from "native-base";

const Tab = createBottomTabNavigator();

export function PublicTabs() {
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
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Box p="10px" rounded="full" bg="#38B387">
              <AntDesign size={25} name="home" color="#FFF" />
            </Box>
          ),
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Box p="10px" rounded="full" bg="#38B387">
              <AntDesign size={25} name="plussquareo" color="#FFF" />
            </Box>
          ),
        }}
        name="Meta"
        component={Meta}
      />
      <Tab.Screen
        options={{
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
