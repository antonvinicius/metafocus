import React from "react";
import { Box, Button, HStack, Icon, Text, VStack } from "native-base";
import { Meta } from "../interfaces/Meta";
import Feather from "react-native-vector-icons/Feather";

interface MetaItemProps {
  meta: Meta;
}

export function MetaItem({ meta }: MetaItemProps) {
  return (
    <Box bg="white" shadow="2">
      <HStack justifyContent="space-between" p="5">
        <VStack>
          <VStack>
            <Text fontSize="md">Título</Text>
            <Text fontFamily="Roboto-Bold" fontSize="sm" maxW="200px">
              {meta.title}
            </Text>
          </VStack>

          <VStack>
            <Text fontSize="md">Descrição</Text>
            <Text fontFamily="Roboto-Bold" fontSize="sm" maxW="200px">
              {meta.description}
            </Text>
          </VStack>
        </VStack>
        <VStack space="2" justifyContent="center">
          <Button
            _text={{
              color: "#38B374",
            }}
            variant="outline"
            leftIcon={<Icon as={Feather} name="edit" />}
          >
            Editar
          </Button>
          <Button bg="#38B374" leftIcon={<Icon as={Feather} name="check" />}>
            Finalizar
          </Button>
        </VStack>
      </HStack>
    </Box>
  );
}
