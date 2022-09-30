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

export function Profile({ navigation: { navigate } }: any) {
  return (
    <Box flex="1" mt="5" px="5">
      <Avatar
        bg="#38B387"
        alignSelf="center"
        size="2xl"
        source={{
          uri: "https://bit.ly/broken-link",
        }}
      >
        AV
      </Avatar>
      <Heading mt="3">Perfil</Heading>
      <Divider my="2" />
      <HStack justifyContent="space-between">
        <HStack space="3" alignItems="center">
          <Feather name="user" size={24} />
          <Text fontSize="lg">Antônio Vinícius</Text>
        </HStack>
        <Feather name="edit" size={24} />
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
