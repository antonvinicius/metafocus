import React, { useEffect, useState } from "react";
import
{
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

import Bg from "../../assets/bg.jpg";
import { ImageBackground } from "react-native";
import { result } from "lodash";

export function Import()
{
    var RNFS = require('react-native-fs');
    const toast = useToast();
    async function importProfile()
    {
        // get a list of files and directories in the main bundle
        RNFS.readDir(RNFS.DownloadDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
            .then((result: { path: any; }[]) =>
            {
                console.log('GOT RESULT', result);

                // stat the first file
                return Promise.all([RNFS.stat(result[0].path), result[0].path]);
            })
            .then((statResult: any[]) =>
            {
                if (statResult[0].isFile())
                {
                    // if we have a file, read it
                    return RNFS.readFile(statResult[1], 'utf8');
                }

                return 'no file';
            })
            .then((contents: any) =>
            {
                // log the file contents
                console.log(contents);
                JSON.parse(contents);
            })
            .catch((err: { message: any; code: any; }) =>
            {
                console.log(err.message, err.code);
            });
    }

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
                            Caso possua algum arquivo JSON exportado do app, o botão ira automaticamente buscar o seu json mais recente
                        </Heading>

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
