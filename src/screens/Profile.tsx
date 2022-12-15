import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Image,
  ScrollView,
  VStack,
  useToast,
} from "native-base";
import React from "react";
import { Dimensions } from "react-native";
import { LineChart, ProgressChart } from "react-native-chart-kit";
import Feather from "react-native-vector-icons/Feather";
import {
  chartConfig,
  getLineChartData,
  getProgressChartData,
  ringChartConfig,
} from "../data/chartDataExample";
import { useAuth } from "../hooks/useAuth";
import { findByKey } from "../utils/AvatarsUtil";
import RNFS from "react-native-fs";
import { getCurrentTimeFileName } from "../utils/DataFormatter";

export function Profile() {
  const { logout } = useAuth();
  const toast = useToast();
  const { user } = useAuth();

  const lineChartData = getLineChartData(user);
  const progressRingData = getProgressChartData(user);

  async function exportProfile() {
    const json = JSON.stringify(user);
    const saveLocation = `${
      RNFS.DownloadDirectoryPath
    }/${getCurrentTimeFileName(user.nickname)}`;

    try {
      await RNFS.writeFile(saveLocation, json, "utf8");
      console.log(`Profile saved on location: ${saveLocation}`);
      toast.show({ description: "Usuário salvo na pasta downloads!" });
    } catch (error) {
      console.error(`Error occured when trying to export data: ${error}`);
      toast.show({ description: "Erro ao tentar salvar usuário" });
    }
  }

  return (
    <ScrollView flex="1">
      <HStack justifyContent="center" p="2" space="2">
        <Button
          alignSelf={"flex-end"}
          leftIcon={<Icon as={Feather} name="power" w={50} h={50} />}
          onPress={logout}
        >
          Sair
        </Button>
        <Button
          onPress={exportProfile}
          leftIcon={<Icon as={Feather} name="file" w={50} h={50} />}
        >
          Exportar dados
        </Button>
      </HStack>
      <Box my="5" px="5">
        <VStack
          space={3}
          alignSelf="center"
          justifyContent="center"
          alignItems="center"
          w="100%"
          h="100px"
          rounded="full"
        >
          <Image
            borderRadius="full"
            backgroundColor="primary.400"
            source={findByKey(user.avatar).source}
            w="90px"
            h="90px"
            alt="avatar"
          />
          <Heading textAlign="center">{user.nickname}</Heading>
        </VStack>
        {/* <Results /> */}
      </Box>
      <VStack
        space="100px"
        mb="50px"
        justifyContent="center"
        alignItems="center"
      >
        <LineChart
          data={lineChartData}
          width={Dimensions.get("window").width - 20}
          height={220}
          chartConfig={chartConfig}
        />

        <ProgressChart
          data={progressRingData}
          width={Dimensions.get("window").width - 20}
          height={220}
          strokeWidth={12}
          radius={20}
          chartConfig={ringChartConfig}
          hideLegend={false}
        />
      </VStack>
    </ScrollView>
  );
}
