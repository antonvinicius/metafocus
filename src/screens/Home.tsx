import { Box, Heading, Button, Icon } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from "react";

export function Home() {
  return (
    <Box flex="1" alignItems="center" justifyContent="center" >
      <Heading color="#A3A3A3">Você ainda não possui metas...</Heading>
      <Button  endIcon={<Icon as={Ionicons} name="add" size="xl"/>} bgColor="#38B387" marginTop="1">Criar nova meta</Button>
    </Box>
  );
}
