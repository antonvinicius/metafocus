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
import { realmContext } from "../config/Realm";
import { User } from "../models/User";

export function Profile({ navigation: { navigate } }: any) {
  const { useQuery } = realmContext;
  const users = useQuery(User);

  return (
    <Box flex="1" mt="5" px="5">
      <Box
        alignSelf="center"
        bg="#38B387"
        justifyContent="center"
        alignItems="center"
        w="200px"
        h="200px"
        rounded="full"
      >
        <Text fontSize="3xl" color="white">
          {users[0].nickname.slice(0, 2).toUpperCase()}
        </Text>
      </Box>
      <Heading mt="3">Perfil</Heading>
      <Divider my="2" />
      <HStack justifyContent="space-between">
        <HStack space="3" alignItems="center">
          <Feather name="user" size={24} />
          <Text fontSize="lg">{users[0].nickname}</Text>
        </HStack>
        {/* <Feather name="edit" size={24} /> */}
      </HStack>
      <Divider my="2" />
      <Button
        onPress={() => navigate("Results")}
        variant="outline"
        _text={{
          color: "#38B387",
          fontSize: 15,
          fontFamily: "Roboto-Bold",
        }}
      >
        Atributos
      </Button>
    </Box>
  );
}
