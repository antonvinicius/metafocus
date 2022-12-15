import {
  Box,
  Button,
  FlatList,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "native-base";
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
  const { user } = useAuth();
  const metas = user.metas;

  const [metaState, setMetaState] = useState(MetaState.progress);

  return (
    <VStack space="5" flex="1" p="25px">
      <CreateMeta />
      {/* Header */}
      <VStack space={2}>
        <HStack alignItems="center" justifyContent="space-between">
          <Heading>Olá, {user.nickname}</Heading>
          <Image
            borderRadius="full"
            backgroundColor="primary.400"
            source={findByKey(user.avatar).source}
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

      <FlatList
        data={
          metaState === MetaState.progress
            ? metas.filter((m) => !m.finished)
            : metas.filter((m) => m.finished)
        }
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Box my="2">
            <MetaItem meta={item} />
          </Box>
        )}
      />
    </VStack>
  );
}
