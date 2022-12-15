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
  useToast,
} from "native-base";
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
  types,
} from "react-native-document-picker";

import Bg from "../../assets/bg.jpg";
import { ImageBackground } from "react-native";
import { User } from "../models/User";
import RNFS from "react-native-fs";

export function Import() {
  const toast = useToast();
  const [result, setResult] = useState<
    Array<DocumentPickerResponse> | DirectoryPickerResponse | undefined | null
  >();

  async function importProfile() {
    try {
      const pickerResult = await DocumentPicker.pickSingle({
        presentationStyle: "fullScreen",
        copyTo: "cachesDirectory",
      });
      setResult([pickerResult]);
    } catch (e) {
      handleError(e);
    }
  }

  function handleError(err: any) {
    if (DocumentPicker.isCancel(err)) {
      console.warn("cancelled");
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn(
        "multiple pickers were opened, only the last will be considered"
      );
    } else {
      throw err;
    }
  }

  async function handleResult(result: any) {
    try {
      if (result) {
        const file = result as DocumentPickerResponse[];
        console.log();
        if (file[0].fileCopyUri) {
          const fileContent = await RNFS.readFile(file[0].fileCopyUri);
          const user: User = JSON.parse(fileContent);
          console.log(JSON.stringify(user, null, 2));
        }
      }
    } catch (error) {
      console.error(error);
      toast.show({ description: "Ocorreu um erro" });
    }
  }

  useEffect(() => {
    console.log(JSON.stringify(result, null, 2));
    if (result) handleResult(result);
  }, [result]);

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
            <Text
              mt={50}
              color="white"
              justifyContent={"center"}
              flexDirection={"column"}
              alignItems={"center"}
              numberOfLines={3}
              textAlign="center"
            >
              Aperte no botão e escolha o arquivo que foi exportado
              anteriormente.
            </Text>

            <Button
              my="5"
              borderRadius={10}
              alignSelf={"center"}
              justifyContent={"center"}
              alignItems={"center"}
              height={10}
              width={150}
              mb={10}
              shadow={2}
              fontSize={30}
              onPress={importProfile}
            >
              Abrir arquivo
            </Button>
          </Box>
        </Center>
      </ImageBackground>
    </Box>
  );
}
