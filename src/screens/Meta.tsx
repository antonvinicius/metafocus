import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Heading,
  HStack,
  Icon,
  Input,
  Pressable,
  ScrollView,
  Select,
  Text,
  TextArea,
} from "native-base";
import Entypo from "react-native-vector-icons/Entypo";
import { BackHandler } from "react-native";

export function Meta() {
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal(false);
  }

  return (
    <>
      <Box flex="1" w="100%" p="5">
        <ScrollView flex="1">
          <FormControl isRequired>
            <FormControl.Label>Título</FormControl.Label>
            <Input placeholder="Título da metas" />
          </FormControl>

          <FormControl isRequired>
            <FormControl.Label>Descrição</FormControl.Label>
            <TextArea
              placeholder="Insira a descrição da meta"
              autoCompleteType={false}
            />
          </FormControl>

          <FormControl isRequired>
            <FormControl.Label>Categoria</FormControl.Label>
            <Select placeholder="Selecione a categoria"></Select>
          </FormControl>

          <Pressable onPress={() => setShowModal(true)}>
            <HStack alignItems="center" my="5">
              <Icon as={Entypo} size="24px" mr="12px" name="plus" />
              <Text fontSize="md">Criar nova categoria</Text>
            </HStack>
          </Pressable>

          <HStack justifyContent="center" space="4" mt="5">
            <Button>Salvar</Button>
            <Button colorScheme="danger" variant="outline">
              Cancelar
            </Button>
          </HStack>
        </ScrollView>
      </Box>
    </>
  );
}
