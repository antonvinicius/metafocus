import React from "react";
import {
  Box,
  Button,
  Center,
  FlatList,
  Heading,
  Image,
  Text,
  VStack,
} from "native-base";

import Bg from "../../assets/bg.jpg";
import Logo from "../../assets/logo.png";
import { ImageBackground } from "react-native";
import { avatars } from "../utils/AvatarsUtil";

export function Login({ navigation }: any) {
  const avatarExample = avatars;

  return (
    <Box flex="1">
      <ImageBackground resizeMode="cover" source={Bg} style={{ flex: 1 }}>
        <Box p={5} flex="1" justifyContent={"space-between"}>
          <VStack space={3}>
            <Center mt="10px">
              <Image source={Logo} alt="Logo" />
            </Center>
            <Heading
              fontSize={20}
              color="white"
              justifyContent={"center"}
              flexDirection={"column"}
              alignItems={"center"}
              numberOfLines={3}
              textAlign="center"
            >
              Seja bem vindo ao{"\n"}
              Metafocus
            </Heading>
            <Box>
              <Heading my={5} color="white">
                Contas existentes
              </Heading>
              <FlatList
                horizontal
                data={avatarExample}
                renderItem={({ item }) => (
                  <Box py={2}>
                    <Box p={2} mx="5" bg="white" borderRadius={"full"}>
                      <Image source={item.source} w={50} h={50} alt="avatar" />
                    </Box>
                    <Text textAlign="center" color="white">
                      nickname
                    </Text>
                  </Box>
                )}
              />
            </Box>
            <Button onPress={() => navigation.navigate("Register")}>
              Criar nova conta
            </Button>
            <Button onPress={() => navigation.navigate("Register")}>
              Importar dados de conta existente
            </Button>
          </VStack>
          <Text mt={35} color="white" textAlign="center">
            ©MetaFocus
          </Text>
        </Box>
      </ImageBackground>
    </Box>
  );
}
