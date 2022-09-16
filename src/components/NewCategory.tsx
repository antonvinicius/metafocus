import {
  Box,
  Button,
  Center,
  Checkbox,
  FormControl,
  Heading,
  HStack,
  Icon,
  Input,
  ScrollView,
  Select,
  Text,
  VStack,
} from "native-base";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

interface NewCategoryProps {
  hideModal: () => void;
}

export function NewCategory({ hideModal }: NewCategoryProps) {
  return (
    <Box
      h="full"
      w="full"
      zIndex="3"
      position="absolute"
      justifyContent="center"
      backgroundColor="rgba(52, 52, 52, 0.4)"
      alignItems={"center"}
    >
      <Box rounded="md" bg="white" w="300px" p="5">
        <VStack>
          <Text textAlign="center" fontSize="lg">
            Nova categoria
          </Text>
          <FormControl isRequired>
            <FormControl.Label>Nome</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label>Atributos</FormControl.Label>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <HStack space="3" my="5" overflow="hidden">
                <Checkbox
                  value="saude"
                  colorScheme="red"
                  size="md"
                  icon={<Icon as={Ionicons} name="medical" />}
                  defaultIsChecked
                >
                  Saúde
                </Checkbox>

                <Checkbox
                  value="saude"
                  colorScheme="red"
                  size="md"
                  icon={<Icon as={Ionicons} name="medical" />}
                  defaultIsChecked
                >
                  Saúde
                </Checkbox>
                <Checkbox
                  value="saude"
                  colorScheme="red"
                  size="md"
                  icon={<Icon as={Ionicons} name="medical" />}
                  defaultIsChecked
                >
                  Saúde
                </Checkbox>
              </HStack>
            </ScrollView>
          </FormControl>
          <HStack justifyContent="center" space="4">
            <Button
              _pressed={{
                bg: "#1b6b4f",
              }}
              bg="#38B387"
            >
              Salvar
            </Button>
            <Button onPress={hideModal} colorScheme="danger" variant="outline">
              Cancelar
            </Button>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
}
