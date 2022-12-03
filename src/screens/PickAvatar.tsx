import React from "react";
import { Box, Button, Center, FlatList, Heading, Image } from "native-base";
import { Text } from "react-native-svg";
import { avatars } from "../utils/AvatarsUtil";
import { useAuth } from "../hooks/useAuth";

export function PickAvatar() {
  const { setAuthenticated } = useAuth();

  return (
    <Box flex="1" justifyContent="center" alignItems="center">
      <Box maxH={400}>
        <Heading textAlign={"center"}>Escolha seu Avatar</Heading>
        <FlatList
          contentContainerStyle={{
            justifyContent: "center",
          }}
          data={avatars}
          numColumns={3}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <Image
              source={item.source}
              mx={2}
              my={5}
              w={100}
              h={100}
              alt={"avatar"}
              borderColor="black"
              borderWidth={2}
              borderRadius="full"
            />
          )}
        />
      </Box>
      <Button mt={5} onPress={() => setAuthenticated(true)}>
        Registrar-se
      </Button>
    </Box>
  );
}
