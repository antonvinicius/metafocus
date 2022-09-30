import { Box, Heading, Button, Icon, FlatList } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import { data } from "../server/metas.json";
import { MetaItem } from "../components/MetaItem";

export function Home() {
  const noMeta = (
    <>
      <Box flex="1" alignItems="center" justifyContent="center">
        <Heading mb="4" fontSize="16px" color="#A3A3A3">
          Você ainda não possui metas...
        </Heading>
        <Button
          endIcon={<Icon as={Ionicons} name="add" size="sm" />}
          bgColor="#38B387"
          marginTop="1"
        >
          Criar meta
        </Button>
      </Box>
    </>
  );

  return (
    <Box flex="1">
      {data.length === 0 && noMeta}
      {data.filter((item) => item.status === 0).length === 0 && noMeta}
      {data.length > 0 && (
        <Box p="2">
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) =>
              item.status === 0 ? (
                <Box marginBottom="2">
                  <MetaItem key={item.id} meta={item} />
                </Box>
              ) : null
            }
          />
        </Box>
      )}
    </Box>
  );
}
