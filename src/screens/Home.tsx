import {Box, Button, FlatList, Heading, Icon} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import {MetaItem} from "../components/MetaItem";
import {realmContext} from "../config/Realm";
import {Meta} from "../models/Meta";

export function Home({navigation}: any) {
    const {useQuery} = realmContext;

    const metas = useQuery(Meta);
    console.log(metas);

    const noMeta = (
        <>
            <Box flex="1" alignItems="center" justifyContent="center">
                <Heading mb="4" fontSize="16px" color="#A3A3A3">
                    Você ainda não possui metas...
                </Heading>
                <Button
                    onPress={() => navigation.navigate("Meta")}
                    endIcon={<Icon as={Ionicons} name="add" size="sm"/>}
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
            {metas.length === 0 && noMeta}
            {metas.length > 0 &&
                metas.filter((item) => item.status === 0).length === 0 &&
                noMeta}
            {metas.length > 0 && (
                <Box p="2">
                    <FlatList
                        data={metas}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) =>
                            item.status === 0 ? (
                                <Box marginBottom="2">
                                    <MetaItem key={item.id} meta={item}/>
                                </Box>
                            ) : null
                        }
                    />
                </Box>
            )}
        </Box>
    );
}
