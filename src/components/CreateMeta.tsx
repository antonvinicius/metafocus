import {
  Box,
  Button,
  Divider,
  FlatList,
  FormControl,
  HStack,
  Icon,
  IconButton,
  Input,
  ScrollView,
  Stack,
  Text,
  TextArea,
  VStack,
  WarningOutlineIcon,
} from "native-base";
import React, { useState } from "react";
import Modal from "react-native-modal";
import Feather from "react-native-vector-icons/Feather";
import { useModal } from "../hooks/useModal";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import SelectBox from "react-native-multi-selectbox-typescript";
import { selectExampleData } from "../data/chartDataExample";
import { xorBy } from "lodash";
import { theme } from "../global/theme";
import { Step } from "./Step";

export function CreateMeta() {
  const [goalDate, setGoalDate] = useState<Date | null>(null);
  const [selectedTeams, setSelectedTeams] = useState<any>([]);
  const { setModalVisible, modalVisible } = useModal();
  const [steps, setSteps] = useState<any[]>([]);

  function handleCloseModal() {
    setModalVisible(false);
  }

  function onChange(event: any, selectedDate: any) {
    const currentDate = selectedDate;
    setGoalDate(currentDate);
  }

  function showMode(currentMode: any) {
    DateTimePickerAndroid.open({
      value: goalDate ?? new Date(),
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  }

  function showDatePicker() {
    showMode("date");
  }

  function onMultiChange() {
    return (item: any) => setSelectedTeams(xorBy(selectedTeams, [item], "id"));
  }

  function addNewStep() {
    setSteps((old) => [...old, 1]);
  }

  function removeStep() {
    setSteps((old) => {
      const clone = [...old];
      clone.pop();
      return clone;
    });
  }

  return (
    <Modal isVisible={modalVisible} propagateSwipe>
      <ScrollView>
        <VStack space="10px" px="4" flex="1" bg="white" borderRadius="lg">
          <Button onPress={handleCloseModal}>Fechar</Button>
          {/* Nome */}
          <FormControl isRequired>
            <FormControl.Label>Nome da meta</FormControl.Label>
            <Input type="text" placeholder="Insira sua meta aqui 😅" />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Pelo menos 3 caracteres são necessários.
            </FormControl.ErrorMessage>
          </FormControl>

          {/* Descrição */}
          <FormControl isRequired>
            <Box>
              <FormControl.Label>Descrição da meta</FormControl.Label>
              <TextArea
                numberOfLines={4}
                placeholder="Insira o que você deseja alcançar com esta meta ☕"
                autoCompleteType={undefined}
              />
            </Box>
          </FormControl>

          {/* Data final */}
          <HStack alignItems="center">
            <Button
              variant="link"
              onPress={showDatePicker}
              leftIcon={
                <Icon
                  as={Feather}
                  name="calendar"
                  size="25px"
                  color="primary.600"
                />
              }
            >
              {goalDate &&
                `Previsão de término em ${new Intl.DateTimeFormat(
                  "pt-BR"
                ).format(goalDate as Date)}`}
              {!goalDate && "Data final (opcional)"}
            </Button>
            {goalDate && (
              <IconButton
                onPress={() => setGoalDate(null)}
                icon={
                  <Icon as={Feather} name="x" size="24px" color="red.300" />
                }
              />
            )}
          </HStack>

          {/* Categorias */}
          <FormControl isRequired>
            <FormControl.Label>Selecione as Categorias</FormControl.Label>
            <SelectBox
              label="Categorias definirão quais áreas você irá subir de nível ao completar a meta"
              inputPlaceholder="Selecione a categoria"
              selectedItemStyle={{
                backgroundColor: theme.colors.primary,
              }}
              searchIconColor={theme.colors.primary}
              toggleIconColor={theme.colors.primary}
              arrowIconColor={theme.colors.primary}
              hideInputFilter
              options={selectExampleData}
              selectedValues={selectedTeams}
              onMultiSelect={onMultiChange()}
              onTapClose={onMultiChange()}
              isMulti
            />
          </FormControl>

          {/* Etapas */}
          <FormControl>
            <HStack justifyContent="space-between" alignItems="center">
              <Box>
                <FormControl.Label>Etapas (opcional)</FormControl.Label>
                <FormControl.HelperText>
                  Defina etapas para concluir sua meta
                </FormControl.HelperText>
              </Box>
              <HStack space="2">
                <Feather
                  onPress={addNewStep}
                  name="plus-circle"
                  color={theme.colors.primary}
                  size={24}
                />
                <Feather
                  onPress={removeStep}
                  name="minus-circle"
                  color={theme.colors.primary}
                  size={24}
                />
              </HStack>
            </HStack>
            {/* Item das etapas */}
            <FlatList data={steps} renderItem={() => <Step />} />
          </FormControl>
        </VStack>
      </ScrollView>
    </Modal>
  );
}
