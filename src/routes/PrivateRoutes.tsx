import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { Meta } from "../screens/Meta";
import { Profile } from "../screens/Profile";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Box, Icon, Text } from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Results } from "../screens/Results";
import { theme } from "../global/theme";
import { CreateMeta } from "../components/CreateMeta";
import { useModal } from "../hooks/useModal";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AddComponent() {
  return null;
}

function Tabs() {
  const { setModalVisible } = useModal();

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
          tabBarButton: () => (
            <Box
              shadow="2"
              w="50px"
              h="50px"
              bg="primary.500"
              borderRadius="full"
              justifyContent="center"
              alignItems="center"
              mt="-25px"
              onTouchStart={() => setModalVisible(true)}
            >
              <AntDesign name="pluscircle" size={25} color="white" />
            </Box>
          ),
        }}
        name="AddComponent"
        component={AddComponent}
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
