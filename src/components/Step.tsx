import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  HStack,
  Icon,
  IconButton,
  Input,
  TextArea,
  WarningOutlineIcon,
} from "native-base";
import Feather from "react-native-vector-icons/Feather";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

export function Step() {
  const [goalDate, setGoalDate] = useState<Date | null>(null);

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

  return (
    <>
      {/* Nome */}
      <FormControl isRequired>
        <FormControl.Label>Nome da etapa</FormControl.Label>
        <Input type="text" placeholder="Insira sua etapa aqui" />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Pelo menos 3 caracteres são necessários.
        </FormControl.ErrorMessage>
      </FormControl>

      {/* Descrição */}
      <FormControl isRequired>
        <Box>
          <FormControl.Label>Descrição da etapa</FormControl.Label>
          <TextArea
            numberOfLines={4}
            placeholder="Insira o que você deseja alcançar com esta etapa"
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
            `Previsão de término em ${new Intl.DateTimeFormat("pt-BR").format(
              goalDate as Date
            )}`}
          {!goalDate && "Data final (opcional)"}
        </Button>
        {goalDate && (
          <IconButton
            onPress={() => setGoalDate(null)}
            icon={<Icon as={Feather} name="x" size="24px" color="red.300" />}
          />
        )}
      </HStack>
    </>
  );
}
