import React from "react";
import {
  Box,
  Button,
  Center,
  FlatList,
  Heading,
  Image,
  Pressable,
} from "native-base";
import { Text } from "react-native-svg";
import { avatars } from "../utils/AvatarsUtil";
import { useAuth } from "../hooks/useAuth";
import { useRoute } from "@react-navigation/native";
import { User } from "../models/User";
import { getRealm } from "../realm/MetafocusDatabase";

export function PickAvatar({ route, navigation }: any) {
  const { nickname } = route.params;

  async function handleSaveUser(avatar: string) {
    const user = new User(nickname, avatar);
    console.log(user);

    const realm = await getRealm();

    realm.write(() => {
      realm.create("UserSchema", user);
    });
    realm.close();
    navigation.navigate("Login");
  }

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
            <Pressable onPress={() => handleSaveUser(item.key)}>
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
            </Pressable>
          )}
        />
      </Box>
    </Box>
  );
}
