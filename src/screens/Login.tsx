import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Center,
  FlatList,
  Heading,
  Image,
  Pressable,
  Text,
  VStack,
} from "native-base";

import Bg from "../../assets/bg.jpg";
import Logo from "../../assets/logo.png";
import { ImageBackground } from "react-native";
import { avatars, findByKey } from "../utils/AvatarsUtil";
import { User } from "../models/User";
import { getRealm } from "../realm/MetafocusDatabase";
import { useAuth } from "../hooks/useAuth";
import { useFocusEffect } from "@react-navigation/native";

export function Login({ navigation }: any) {
  const { authenticate } = useAuth();
  const [users, setUsers] = useState<User[]>([]);

  async function getData() {
    const realm = await getRealm();
    const data = realm.objects("UserSchema") as unknown as User[];
    setUsers(data);
  }

  useFocusEffect(
    React.useCallback(() => {
      getData();
    }, [])
  );

  return (
    <Box flex="1">
      <ImageBackground resizeMode="cover" source={Bg} style={{ flex: 1 }}>
        <Box p={5} flex="1" justifyContent={"space-between"}>
          <VStack space={3}>
            <Center mt="10px">
              <Image source={Logo} alt="Logo" />
            </Center>
            <Heading
              fontSize={20}
              color="white"
              justifyContent={"center"}
              flexDirection={"column"}
              alignItems={"center"}
              numberOfLines={3}
              textAlign="center"
            >
              Seja bem vindo ao{"\n"}
              Metafocus
            </Heading>
            <Box>
              <Heading my={5} color="white">
                Contas existentes
              </Heading>
              <FlatList
                horizontal
                data={users}
                renderItem={({ item }) => (
                  <Pressable onPress={() => authenticate(item)}>
                    <Box py={2}>
                      <Box p={2} mx="5" bg="white" borderRadius={"full"}>
                        <Image
                          source={findByKey(item.avatar).source}
                          w={50}
                          h={50}
                          alt="avatar"
                        />
                      </Box>
                      <Text textAlign="center" color="white">
                        {item.nickname}
                      </Text>
                    </Box>
                  </Pressable>
                )}
              />
            </Box>
            <Button onPress={() => navigation.navigate("Register")}>
              Criar nova conta
            </Button>
            <Button onPress={() => navigation.navigate("Import")}>
              Conta existente
            </Button>
          </VStack>
          <Text mt={35} color="white" textAlign="center">
            ©MetaFocus
          </Text>
        </Box>
      </ImageBackground>
    </Box>
  );
}
