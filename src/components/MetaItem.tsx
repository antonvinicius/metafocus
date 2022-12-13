import React, { useState, useRef } from "react";
import {
  Box,
  Checkbox,
  FlatList,
  HStack,
  Icon,
  Pressable,
  Text,
  VStack,
} from "native-base";
import Feather from "react-native-vector-icons/Feather";
import Modal from "react-native-modal";
import { Meta } from "../models/Meta";
import { Category } from "../models/Category";
import { Attribute } from "../models/Attribute";
import { Step } from "../models/Step";

export function MetaItem() {
  const metaNoData: Meta = new Meta(
    "Criar hábitos saudáveis",
    "desejo criar hábitos saudáveis e me exercitar",
    null,
    [],
    [new Category("Saudável", "red", [new Attribute("Forte", "award")])]
  );

  const metaWithData: Meta = new Meta(
    "Criar hábitos saudáveis",
    "desejo criar hábitos saudáveis e me exercitar",
    new Date(),
    [
      new Step("Acordar cedo", "Levantar cedo da cama", new Date()),
      new Step("Acordar cedo", "Levantar cedo da cama", new Date()),
      new Step("Acordar cedo", "Levantar cedo da cama", new Date()),
    ],
    [
      new Category("Saudável", "red", [new Attribute("Forte", "award")]),
      new Category("Saudável", "red", [new Attribute("Forte", "award")]),
      new Category("Saudável", "red", [new Attribute("Forte", "award")]),
      new Category("Saudável", "red", [new Attribute("Forte", "award")]),
      new Category("Saudável", "red", [new Attribute("Forte", "award")]),
      new Category("Saudável", "red", [new Attribute("Forte", "award")]),
    ]
  );

  const [meta, setMeta] = useState(metaWithData);

  const [expanded, setExpanded] = useState(false);
  const [groupValues, setGroupValues] = useState([]);
  const [optionsVisible, setOptionsVisible] = useState(false);

  function handleOptions() {
    setOptionsVisible(true);
  }

  function handleCompleteMeta() {
    setOptionsVisible(false);
  }

  const modal = (
    <Modal
      style={{
        justifyContent: "flex-end",
        margin: 0,
      }}
      isVisible={optionsVisible}
      onSwipeComplete={() => setOptionsVisible(false)}
      swipeDirection={["down"]}
    >
      <VStack
        bg="white"
        h="200px"
        borderTopLeftRadius="18px"
        borderTopRightRadius="18px"
      >
        <VStack py="2" px="5" space="5">
          <HStack justifyContent="center">
            <Box bg="primary.400" w="80px" h="5px" borderRadius="full" />
          </HStack>
          <Pressable
            _pressed={{ bg: "primary.200" }}
            bg="primary.100"
            p="2"
            borderRadius="lg"
            onPress={handleCompleteMeta}
          >
            <HStack space="3">
              <Icon as={Feather} name="check" size="24px" color="primary.600" />
              <Text>Completar meta</Text>
            </HStack>
          </Pressable>
        </VStack>
      </VStack>
    </Modal>
  );

  return (
    <Pressable onLongPress={handleOptions}>
      {modal}
      <VStack
        minH="135px"
        bg={meta.finished ? "primary.200" : "white"}
        borderRadius="lg"
        p="10px"
        space="13px"
      >
        {/* Title and icons */}
        <HStack justifyContent="space-between">
          <VStack>
            <Text fontSize="15px">{meta.title}</Text>
            <Text maxW="180px">{meta.description}</Text>
          </VStack>
          <HStack space={2}>
            <Icon as={Feather} color="black" name="edit-2" size="24px" />
            <Icon as={Feather} color="black" name="trash" size="24px" />
          </HStack>
        </HStack>

        {/* Categories */}
        <HStack alignItems="center" space="3">
          <Icon as={Feather} color="black" name="feather" size="24px" />
          <FlatList
            horizontal
            data={meta.categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Text mx="2" p="6px" borderRadius="lg" bg="red.500" color="white">
                {item.title}
              </Text>
            )}
          />
        </HStack>

        {/* Date */}
        {meta.goalDate != null && !meta.finished && (
          <HStack alignItems="center" space="5px">
            <Icon as={Feather} color="black" name="calendar" size="24px" />
            <Text>
              Previsão de conclusão em{" "}
              {new Intl.DateTimeFormat("pt-BR").format(meta.goalDate as Date)}
            </Text>
          </HStack>
        )}
        {meta.finished && (
          <HStack alignItems="center" space="5px">
            <Icon as={Feather} color="black" name="check" size="24px" />
            <Text>
              Concluído em{" "}
              {new Intl.DateTimeFormat("pt-BR").format(meta.finishDate as Date)}
            </Text>
          </HStack>
        )}

        {/* Steps */}
        {meta.steps.length > 0 && (
          <VStack>
            <HStack
              mb="10px"
              justifyContent="space-between"
              alignItems="center"
            >
              <HStack alignItems="center" space="5px">
                <Icon
                  as={Feather}
                  color="black"
                  name="bar-chart-2"
                  size="24px"
                />
                <Text>
                  {meta.steps.filter((s) => s.finished).length} de{" "}
                  {meta.steps.length}{" "}
                  {meta.steps.length === 1
                    ? "etapa concluída"
                    : "etapas concluídas"}
                </Text>
              </HStack>
              <Icon
                onTouchStart={() => setExpanded(!expanded)}
                as={Feather}
                color="black"
                name={expanded ? "arrow-up" : "arrow-down"}
                size="24px"
              />
            </HStack>
            {/* SingleSteps */}
            {expanded && (
              <FlatList
                data={meta.steps}
                renderItem={({ item }) => (
                  <HStack py="15px" justifyContent={"space-between"}>
                    <HStack space="10px">
                      <Checkbox.Group
                        onChange={setGroupValues}
                        value={groupValues}
                      >
                        <Checkbox value={item.id}>{item.title}</Checkbox>
                      </Checkbox.Group>
                    </HStack>
                    <HStack space={2}>
                      <Icon
                        as={Feather}
                        color="black"
                        name="info"
                        size="24px"
                      />
                      <Icon
                        as={Feather}
                        color="black"
                        name="edit-2"
                        size="24px"
                      />
                      <Icon
                        as={Feather}
                        color="black"
                        name="trash"
                        size="24px"
                      />
                    </HStack>
                  </HStack>
                )}
              />
            )}
          </VStack>
        )}
      </VStack>
    </Pressable>
  );
}
