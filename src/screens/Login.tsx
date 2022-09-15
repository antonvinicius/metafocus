import {
  Box,
  Button,
  Center,
  Column,
  Flex,
  Heading,
  Image,
  Input,
  Spacer,
  Text,
} from "native-base";
import { color, flexbox } from "native-base/lib/typescript/theme/styled-system";
import React from "react";
import MetaFocusLogo from "../../assets/MetaFocus.png";
export function Login() {
  return (
    <Center height={"full"}>
      <Image source={MetaFocusLogo} mt={-5} />
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
