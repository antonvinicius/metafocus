import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "native-base";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import { useAuth } from "../hooks/useAuth";
import { findByKey } from "../utils/AvatarsUtil";
import { Results } from "./Results";

export function Profile() {
  const { setAuthenticated } = useAuth();
  return (
    <Box flex="1" mt="5" px="5">
      <Button
        alignSelf={"flex-end"}
        leftIcon={<Icon as={Feather} name="power" w={50} h={50} />}
        onPress={() => setAuthenticated(false)}
      >
        Sair
      </Button>
      <VStack
        space={3}
        alignSelf="center"
        justifyContent="center"
        alignItems="center"
        w="100px"
        h="100px"
        rounded="full"
      >
        <Image
          borderRadius="full"
          backgroundColor="primary.400"
          source={findByKey("man1").source}
          w="90px"
          h="90px"
          alt="avatar"
        />
        <Heading>Vinícius</Heading>
      </VStack>
      {/* <Results /> */}
    </Box>
  );
}
