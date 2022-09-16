import { Box, Button, Center, Heading, Input, Spacer } from "native-base";
import React from "react";

export function Login() {
  return (
    <Center height={"full"}>
      <Box px="5">
        <Heading marginTop="5">Como você quer ser chamado?</Heading>
        <Input marginTop="5" placeholder="Nickname" />
        <Button bgColor="#38B387" marginTop="5">Salvar</Button>
      </Box>
    </Center>
  );
}
