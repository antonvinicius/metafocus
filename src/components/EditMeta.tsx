import {
  Box,
  Button,
  Divider,
  FlatList,
  FormControl,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  ScrollView,
  Stack,
  Text,
  TextArea,
  useToast,
  VStack,
  WarningOutlineIcon,
} from "native-base";
import React, { useState, useEffect } from "react";
import { ToastAndroid } from "react-native";
import Modal from "react-native-modal";
import Feather from "react-native-vector-icons/Feather";
import { useModal } from "../hooks/useModal";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import SelectBox, { Item } from "react-native-multi-selectbox-typescript";
import { xorBy } from "lodash";
import { theme } from "../global/theme";
import { Step } from "./Step";
import { Meta } from "../models/Meta";
import { Category } from "../models/Category";
import { Step as StepModel } from "../models/Step";
import { getRealm } from "../realm/MetafocusDatabase";
import { useAuth } from "../hooks/useAuth";

type EditMetaProps = {
  meta: Meta;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  modalVisible: boolean;
};

export function EditMeta({
  meta,
  modalVisible,
  setModalVisible,
}: EditMetaProps) {
  const { updateUser } = useAuth();
  const [title, setTitle] = useState(meta.title);
  const [description, setDescription] = useState(meta.description);
  const [goalDate, setGoalDate] = useState<Date | null>(meta.goalDate);
  const [selectedCategories, setSelectedCategories] = useState<any>([]);
  const [steps, setSteps] = useState<StepModel[]>(meta.steps);
  const [selectExampleData, setSelectExampleData] = useState<Item[]>([]);

  async function setPreDefinedCategories() {
    const realm = await getRealm();
    const metaModel = realm.objectForPrimaryKey(
      "MetaSchema",
      meta.id
    ) as unknown as Meta;
    const selectedCat = metaModel.categories.map((c) => ({
      id: c.id,
      item: c.title,
    }));
    setSelectedCategories(selectedCat);
  }

  function resetState() {
    setTitle(meta.title);
    setDescription(meta.description);
    setGoalDate(meta.goalDate);
    setPreDefinedCategories();
    setSteps(meta.steps);
  }

  function handleCloseModal() {
    setModalVisible(false);
    resetState();
  }

  async function getSelectData() {
    const realm = await getRealm();
    const categories = realm.objects("CategorySchema") as unknown as Category[];
    console.log(categories);
    setSelectExampleData(
      categories.map((c) => ({
        id: c.id,
        item: c.title,
      }))
    );
  }

  function onChange(_: any, selectedDate: any) {
    const currentDate = selectedDate;
    const dateToSave = new Date(currentDate);
    dateToSave.setHours(0);
    dateToSave.setMinutes(0);
    dateToSave.setSeconds(0);
    dateToSave.setMilliseconds(0);

    const nowDate = new Date();
    nowDate.setHours(0);
    nowDate.setMinutes(0);
    nowDate.setSeconds(0);
    nowDate.setMilliseconds(0);

    if (dateToSave > nowDate) setGoalDate(dateToSave);
  }

  function showMode(currentMode: any) {
    DateTimePickerAndroid.open({
      value: goalDate ?? new Date(),
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  }

  async function handleUpdate() {
    const anyStepInvalid = steps.find(
      (s) => s.title === "" || s.description === ""
    );

    if (
      !title ||
      !description ||
      selectedCategories.length === 0 ||
      anyStepInvalid
    ) {
      ToastAndroid.show("Campos inválidos", ToastAndroid.LONG);
      return;
    }

    const categories: Category[] = [];
    const realm = await getRealm();
    const dataCategories = realm.objects(
      "CategorySchema"
    ) as unknown as Category[];
    dataCategories.forEach((c) => {
      selectedCategories.forEach((s: Item) => {
        if (c.id === s.id) {
          categories.push(c);
        }
      });
    });

    const newMeta = new Meta(title, description, goalDate, steps, categories);

    realm.write(() => {
      const metaModel = realm.objectForPrimaryKey(
        "MetaSchema",
        meta.id
      ) as unknown as Meta;
      metaModel.title = newMeta.title;
      metaModel.description = newMeta.description;
      metaModel.goalDate = newMeta.goalDate;
      metaModel.steps = newMeta.steps;
      metaModel.categories = newMeta.categories;
    });
    updateUser();
    handleCloseModal();
  }

  function showDatePicker() {
    showMode("date");
  }

  function onClose(){
    return (item: any) => {      
      setSelectedCategories(xorBy(selectedCategories, [item], "id"));
    }
  }

  function onMultiChange() {
    return (item: any) => {
      // console.log("item: ", item);
      // const clone = [...selectedCategories, item];
      // return setSelectedCategories(clone);
      setSelectedCategories(xorBy(selectedCategories, [item], "id"));
    };
  }

  function addNewStep() {
    setSteps((old) => [...old, new StepModel("", "", null)]);
  }

  function removeStep() {
    setSteps((old) => {
      const clone = [...old];
      clone.pop();
      return clone;
    });
  }

  useEffect(() => {
    getSelectData();
    setPreDefinedCategories();
  }, []);

  return (
    <Modal isVisible={modalVisible} propagateSwipe>
      <ScrollView bg="white">
        <VStack space="10px" p="4" flex="1" bg="white" borderRadius="lg">
          <HStack justifyContent="space-between">
            <Heading>Editar meta</Heading>
            <Icon
              as={Feather}
              name="x"
              size="24px"
              color="primary.400"
              onPress={handleCloseModal}
            />
          </HStack>
          {/* Nome */}
          <FormControl isRequired>
            <FormControl.Label>Nome da meta</FormControl.Label>
            <Input
              type="text"
              value={title}
              onChangeText={setTitle}
              placeholder="Insira sua meta aqui 😅"
            />
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
                value={description}
                onChangeText={setDescription}
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
              selectedValues={selectedCategories}
              onMultiSelect={onMultiChange()}
              onTapClose={onClose()}
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
            {steps.map((s) => (
              <Step key={s.id} step={s} setSteps={setSteps} />
            ))}
          </FormControl>
        </VStack>
      </ScrollView>
      <Button onPress={handleUpdate} bg="primary.700">
        Atualizar
      </Button>
    </Modal>
  );
}
