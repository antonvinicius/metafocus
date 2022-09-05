import { Box, Button, Center, Heading, Input, Spacer } from "native-base";
import React from "react";

export function Login() {
  return (
    <Center height={"full"}>
      <Box px="5">
        <Heading>Como deseja se chamar?</Heading>
        <Input placeholder="Seu nickname" />
        <Button>Salvar</Button>
      </Box>
    </Center>
  );
}
