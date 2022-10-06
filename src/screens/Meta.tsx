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
import { NewCategory } from "../components/NewCategory";
import { useAuth } from "../hooks/useAuth";

import { BackHandler } from "react-native";
import { data } from "../server/categories.json";
import { Category } from "../interfaces/Category";

export function Meta() {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createMeta } = useAuth();
  const categories: Category[] = [];
  data.map((categoria) => {
      categories.push({
      color: categoria.color,
      name: categoria.name,
      attributes: categoria.attributes,
    });
  });
  function closeModal() {
    setShowModal(false);
  }

  return (
    <>
      {showModal && <NewCategory hideModal={closeModal} />}
      <Box flex="1" w="100%" p="5">
        <ScrollView flex="1">
          <FormControl isRequired>
            <FormControl.Label>Título</FormControl.Label>
            <Input value={title} onChangeText={setTitle} placeholder="Título da metas" />
          </FormControl>

          <FormControl isRequired>
            <FormControl.Label>Descrição</FormControl.Label>
            <TextArea value={description} onChangeText={setDescription} placeholder="Insira a descrição da meta"
              autoCompleteType={false}
            />
          </FormControl>

          <FormControl isRequired>
            <FormControl.Label>Categoria</FormControl.Label>
            <Select placeholder="Selecione a categoria">
              { categories.map((item) => (<option key={Math.random().toString()} value={item.name} label={item.name}></option>))}
            </Select>
          </FormControl>

          <Pressable onPress={() => setShowModal(true)}>
            <HStack alignItems="center" my="5">
              <Icon as={Entypo} size="24px" mr="12px" name="plus" />
              <Text fontSize="md">Criar nova categoria</Text>
            </HStack>
          </Pressable>

          <HStack justifyContent="center" space="4" mt="5">
            <Button
              _pressed={{
                bg: "#1b6b4f",
              }}
              bg="#38B387"
            >
              Salvar
            </Button>
            <Button colorScheme="danger" variant="outline" >            
              Cancelar
            </Button>
          </HStack>
        </ScrollView>
      </Box>
    </>
  );
}
