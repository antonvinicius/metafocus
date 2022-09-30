import { Box, Heading, Button, Icon } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";

export function Home() {
  return (
    <Box flex="1" alignItems="center" justifyContent="center">
      <Heading mb="4" fontSize="16px" color="#A3A3A3">
        Você ainda não possui metas...
      </Heading>
      <Button
        endIcon={<Icon as={Ionicons} name="add" size="sm" />}
        bgColor="#38B387"
        marginTop="1"
      >
        Criar meta
      </Button>
    </Box>
  );
}
