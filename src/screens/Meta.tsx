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

import { realmContext } from "../config/Realm";
import { Meta as MetaModel } from "../models/Meta";
import { Category } from "../models/Category";

export function Meta({ navigation }: any) {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { useRealm, useQuery } = realmContext;
  const { createMeta } = useAuth();

  const realm = useRealm();
  const categories = useQuery(Category);

  if (categories.length === 0) {
    // Seed categories
    realm.write(() => {
      realm.create("Category", Category.generate("#B4EBCA", "Esporte"));
      realm.create("Category", Category.generate("#E86252", "Saúde"));
      realm.create("Category", Category.generate("#EDB458", "Lazer"));
    });
  }

  function closeModal() {
    setShowModal(false);
  }

  function saveMeta() {
    if (!title || !description) return;
    realm.write(() => {
      realm.create("Meta", MetaModel.generate(title, description, 0));
    });
    navigation.navigate("Home");
    setTitle("");
    setDescription("");
  }

  return (
    <>
      {showModal && <NewCategory hideModal={closeModal} />}
      <Box flex="1" w="100%" p="5">
        <ScrollView flex="1">
          <FormControl isRequired>
            <FormControl.Label>Título</FormControl.Label>
            <Input
              value={title}
              onChangeText={setTitle}
              placeholder="Título da metas"
            />
          </FormControl>

          <FormControl isRequired>
            <FormControl.Label>Descrição</FormControl.Label>
            <TextArea
              value={description}
              onChangeText={setDescription}
              placeholder="Insira a descrição da meta"
              autoCompleteType={false}
            />
          </FormControl>

          <FormControl isRequired>
            <FormControl.Label>Categoria</FormControl.Label>
            <Select placeholder="Selecione a categoria">
              {categories.map((item) => (
                <option
                  key={Math.random().toString()}
                  value={item.name}
                  label={item.name}
                ></option>
              ))}
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
              onPress={saveMeta}
              _pressed={{
                bg: "#1b6b4f",
              }}
              bg="#38B387"
            >
              Salvar
            </Button>
            <Button
              colorScheme="danger"
              variant="outline"
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              Cancelar
            </Button>
          </HStack>
        </ScrollView>
      </Box>
    </>
  );
}
