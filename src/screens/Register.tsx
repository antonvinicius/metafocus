import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Input,
  StatusBar,
  Text,
} from "native-base";

import Bg from "../../assets/bg.jpg";
import { ImageBackground } from "react-native";

export function Register({ navigation }: any) {
  const [nickname, setNickname] = useState("");

  return (
    <Box flex="1">
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <ImageBackground resizeMode="cover" source={Bg} style={{ flex: 1 }}>
        <Center mt={21} height="full">
          <Box>
            <Heading
              mt={50}
              fontSize={20}
              color="white"
              justifyContent={"center"}
              flexDirection={"column"}
              alignItems={"center"}
              numberOfLines={3}
              textAlign="center"
            >
              Como você quer ser {"\n"}chamado?
            </Heading>
            <Input
              fontSize={15}
              placeholder="Nickname"
              value={nickname}
              color="white"
              variant="filled"
              w="80%"
              onChangeText={setNickname}
              mt={9}
              mb={9}
            />

            <Button
              borderRadius={10}
              alignSelf={"center"}
              justifyContent={"center"}
              alignItems={"center"}
              height={10}
              width={150}
              mb={10}
              shadow={2}
              fontSize={30}
              onPress={() => {
                if (nickname != "") {
                  navigation.navigate("PickAvatar", { nickname });
                }
              }}
            >
              Continuar
            </Button>
          </Box>
        </Center>
      </ImageBackground>
    </Box>
  );
}
