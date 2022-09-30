import React from "react";
import { Box, Button, Center, Heading, Image, Input, Text } from "native-base";

import Logo from "../../assets/logo.png";
import { useAuth } from "../hooks/useAuth";

export function Login() {
  const { setAuthenticated } = useAuth();

  return (
    <Center height={"full"}>
      <Image source={Logo} width={192} height={111} alt="Logo" mt={-5} />
      <Box>
        <Heading
          mt={15}
          fontSize={20}
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
          numberOfLines={3}
        >
          Como você quer ser chamado?
        </Heading>
        <Input
          fontSize={15}
          placeholder="Nickname"
          placeholderTextColor={"#A3A3A3"}
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
          bgColor={"#38B374"}
          onPress={() => setAuthenticated(true)}
        >
          Registrar-se
        </Button>
      </Box>

      <Text
        color={"#A3A3A3"}
        mt={35}
        justifyContent={"center"}
        alignItems={"flex-end"}
      >
        ©MetaFocus
      </Text>
    </Center>
  );
}
