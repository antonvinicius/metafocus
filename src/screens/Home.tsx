import { Box, Button, Heading, HStack, Image, Text, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { Pressable } from "react-native";
import { CreateMeta } from "../components/CreateMeta";
import { MetaItem } from "../components/MetaItem";
import { useAuth } from "../hooks/useAuth";
import { findByKey } from "../utils/AvatarsUtil";

enum MetaState {
  finished,
  progress,
}

export function Home() {
  const [metaState, setMetaState] = useState(MetaState.progress);

  return (
    <VStack space="5" flex="1" p="25px">
      {/* Header */}
      <VStack space={2}>
        <HStack alignItems="center" justifyContent="space-between">
          <Heading>Olá, Vinícius</Heading>
          <Image
            borderRadius="full"
            backgroundColor="primary.400"
            source={findByKey("man1").source}
            w="90px"
            h="90px"
            alt="avatar"
          />
        </HStack>
      </VStack>

      {/* State selector */}
      <VStack>
        <Box w="100%" h="1px" bg="primary.700" />
        <HStack>
          <Box
            onTouchStart={() => setMetaState(MetaState.finished)}
            py="10px"
            flex={1}
            bg={metaState === MetaState.finished ? "primary.300" : null}
          >
            <Text textAlign="center">Concluído</Text>
          </Box>
          <Box
            onTouchStart={() => setMetaState(MetaState.progress)}
            py="10px"
            flex={1}
            bg={metaState === MetaState.progress ? "primary.300" : null}
          >
            <Text textAlign="center">Em andamento</Text>
          </Box>
        </HStack>
      </VStack>

      <CreateMeta />

      <MetaItem />
    </VStack>
  );
}
