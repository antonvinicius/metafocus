import {
  Box,
  Button,
  Heading,
  Icon,
  Image,
  ScrollView,
  VStack,
} from "native-base";
import React from "react";
import { Dimensions } from "react-native";
import { LineChart, ProgressChart } from "react-native-chart-kit";
import Feather from "react-native-vector-icons/Feather";
import {
  chartConfig,
  lineChartData,
  progressRingData,
} from "../data/chartDataExample";
import { useAuth } from "../hooks/useAuth";
import { findByKey } from "../utils/AvatarsUtil";

export function Profile() {
  const { setAuthenticated } = useAuth();
  return (
    <ScrollView flex="1">
      <Box my="5" px="5">
        <Button
          alignSelf={"flex-end"}
          leftIcon={<Icon as={Feather} name="power" w={50} h={50} />}
          onPress={() => setAuthenticated(false)}
        >
          Sair
        </Button>
        <VStack
          space={3}
          alignSelf="center"
          justifyContent="center"
          alignItems="center"
          w="100px"
          h="100px"
          rounded="full"
        >
          <Image
            borderRadius="full"
            backgroundColor="primary.400"
            source={findByKey("man1").source}
            w="90px"
            h="90px"
            alt="avatar"
          />
          <Heading>Vinícius</Heading>
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
          strokeWidth={16}
          radius={32}
          chartConfig={chartConfig}
          hideLegend={false}
        />
      </VStack>
    </ScrollView>
  );
}
