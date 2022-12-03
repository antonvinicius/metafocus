import {
  Avatar,
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Text,
} from "native-base";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import { User } from "../models/User";
import { Results } from "./Results";

export function Profile({ navigation: { navigate } }: any) {
  return (
    <Box flex="1" mt="5" px="5">
      <Box
        alignSelf="center"
        bg="#38B387"
        justifyContent="center"
        alignItems="center"
        w="100px"
        h="100px"
        rounded="full"
      >
        <Text fontSize="xl" color="white">
          Vinicius
        </Text>
      </Box>
      <Heading mt="3">Perfil</Heading>
      <Divider my="2" />
      <HStack justifyContent="space-between">
        <HStack space="3" alignItems="center">
          <Feather name="user" size={24} />
          <Text fontSize="lg">Vini</Text>
        </HStack>
        {/* <Feather name="edit" size={24} /> */}
      </HStack>
      <Divider my="2" />
      <Results />
    </Box>
  );
}
