import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Input,
  StatusBar,
  Text,
} from "native-base";

import Logo from "../../assets/logo.png";
import Bg from "../../assets/bg.jpg";
import { useAuth } from "../hooks/useAuth";
import { ImageBackground } from "react-native";

export function Login() {
  const [nickname, setNickname] = useState("");
  const { setAuthenticated } = useAuth();

  return (
    <Box flex="1">
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <ImageBackground resizeMode="cover" source={Bg} style={{ flex: 1 }}>
        <Center mt={21}>
          <Image source={Logo} alt="Logo" />
          <Box>
            <Heading
              mt={50}
              fontSize={20}
              justifyContent={"center"}
              flexDirection={"column"}
              alignItems={"center"}
              numberOfLines={3}
              textAlign="center"
            >
              Como você quer ser {"\n"}chamado?
            </Heading>
            <Input
              fontSize={15}
              placeholder="Nickname"
              value={nickname}
              w="80%"
              onChangeText={setNickname}
              mt={9}
              mb={9}
            />

            <Button
              borderRadius={10}
              alignSelf={"center"}
              justifyContent={"center"}
              alignItems={"center"}
              height={10}
              width={150}
              mb={10}
              shadow={2}
              fontSize={30}
              onPress={() => {
                setAuthenticated(true);
              }}
            >
              Registrar-se
            </Button>
          </Box>

          <Text mt={35} justifyContent={"center"} alignItems={"flex-end"}>
            ©MetaFocus
          </Text>
        </Center>
      </ImageBackground>
    </Box>
  );
}
