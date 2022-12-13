import React, { useState, useRef } from "react";
import {
  Box,
  Checkbox,
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
    [new Step("Acordar cedo", "Levantar cedo da cama", new Date())],
    [new Category("Saudável", "red", [new Attribute("Forte", "award")])]
  );

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
      <VStack minH="135px" bg="white" borderRadius="lg" p="10px" space="13px">
        {/* Title and icons */}
        <HStack justifyContent="space-between">
          <VStack>
            <Text fontSize="15px">Criar hábitos saudáveis</Text>
            <Text maxW="180px">
              Desejo criar hábitos saudáveis e me exercitar
            </Text>
          </VStack>
          <HStack space={2}>
            <Icon as={Feather} color="black" name="info" size="24px" />
            <Icon as={Feather} color="black" name="edit-2" size="24px" />
            <Icon as={Feather} color="black" name="trash" size="24px" />
          </HStack>
        </HStack>

        {/* Categories */}
        <HStack alignItems="center" space="3">
          <Icon as={Feather} color="black" name="feather" size="24px" />
          <Text p="6px" borderRadius="lg" bg="red.500" color="white">
            Saudável
          </Text>
          <Text p="6px" borderRadius="lg" bg="yellow.400" color="white">
            Inteligente
          </Text>
        </HStack>

        {/* Steps */}
        <VStack>
          <HStack mb="10px" justifyContent="space-between" alignItems="center">
            <HStack alignItems="center" space="5px">
              <Icon as={Feather} color="black" name="bar-chart-2" size="24px" />
              <Text>3 de 10 etapas concluídas</Text>
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
            <HStack py="15px" justifyContent={"space-between"}>
              <HStack space="10px">
                <Checkbox.Group onChange={setGroupValues} value={groupValues}>
                  <Checkbox value="wakeup">Acordar Cedo</Checkbox>
                </Checkbox.Group>
              </HStack>
              <HStack space={2}>
                <Icon as={Feather} color="black" name="info" size="24px" />
                <Icon as={Feather} color="black" name="edit-2" size="24px" />
                <Icon as={Feather} color="black" name="trash" size="24px" />
              </HStack>
            </HStack>
          )}
        </VStack>
      </VStack>
    </Pressable>
  );
}
