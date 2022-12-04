import React, { useState } from "react";
import { Box, Checkbox, HStack, Icon, Text, VStack } from "native-base";
import Feather from "react-native-vector-icons/Feather";

export function MetaItem() {
  const [expanded, setExpanded] = useState(false);
  const [groupValues, setGroupValues] = useState([]);

  return (
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
  );
}
