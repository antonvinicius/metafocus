import { Box, Divider, Heading, HStack, Text } from "native-base";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import { Results } from "./Results";

export function Profile() {
  return (
    <Box flex="1" mt="5" px="5">
      <Box
        alignSelf="center"
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
      </HStack>
      <Divider my="2" />
      <Results />
    </Box>
  );
}
