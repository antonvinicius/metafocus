import { Box, Button, Text } from "native-base";
import React from "react";
import { useAuth } from "../hooks/useAuth";

export function Home() {
  const { setAuthenticated } = useAuth();

  return (
    <Box flex="1">
      <Text>Metas</Text>
      <Button onPress={() => setAuthenticated(false)}>Sair</Button>
    </Box>
  );
}
