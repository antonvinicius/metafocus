import React, { useState, useEffect } from "react";
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
import { Step as StepModel } from "../models/Step";

type StepProps = {
  step: StepModel;
  setSteps: React.Dispatch<React.SetStateAction<StepModel[]>>;
};

export function Step({ step, setSteps }: StepProps) {
  const [goalDate, setGoalDate] = useState<Date | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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

  useEffect(() => {
    setSteps((old) => {
      const currentStep = old.find((s) => s.id === step.id) as StepModel;
      const clone = [...old];
      const index = clone.indexOf(currentStep);

      currentStep.title = title;
      currentStep.description = description;
      currentStep.goalDate = goalDate;

      clone[index] = currentStep;
      return clone;
    });
  }, [title, description, goalDate]);

  return (
    <>
      {/* Nome */}
      <FormControl isInvalid={title === ""} isRequired>
        <FormControl.Label>Nome da etapa</FormControl.Label>
        <Input
          value={title}
          onChangeText={setTitle}
          type="text"
          placeholder="Insira sua etapa aqui"
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Campo obrigatório.
        </FormControl.ErrorMessage>
      </FormControl>

      {/* Descrição */}
      <FormControl isInvalid={description === ""} isRequired>
        <Box>
          <FormControl.Label>Descrição da etapa</FormControl.Label>
          <TextArea
            isInvalid={description === ""}
            value={description}
            onChangeText={setDescription}
            numberOfLines={4}
            placeholder="Insira o que você deseja alcançar com esta etapa"
            autoCompleteType={undefined}
          />
        </Box>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Campo obrigatório.
        </FormControl.ErrorMessage>
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
