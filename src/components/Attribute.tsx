import {Box, HStack, Text, VStack} from "native-base";
import React from "react";
import {Attribute as AttributeInterface} from "../interfaces/Attribute";

interface AttributeProps {
    attribute: AttributeInterface;
}

export function Attribute({attribute}: AttributeProps) {
    const currentWidth =
        (100 * attribute.attribute_user[0].current) / attribute.total;

    return (
        <HStack px="10" py="2" space="2">
            <Box
                w="50px"
                rounded="full"
                alignItems="center"
                justifyContent="center"
                h="50px"
                bg={attribute.color}
            >
                <Text fontFamily="Roboto-Bold">
                    {attribute.name.slice(0, 2).toUpperCase()}
                </Text>
            </Box>
            <VStack position="relative" w="100%">
                <Box
                    w="100%"
                    h="100%"
                    bg="#FAFAFA"
                    borderRadius="md"
                    p="6px"
                    flex="1"
                    justifyContent="space-between"
                    alignItems="center"
                    position="absolute"
                />
                <Box
                    bg={attribute.color}
                    borderRadius="md"
                    p="6px"
                    flex="1"
                    w={`${currentWidth}%`}
                    h="100%"
                    justifyContent="space-between"
                    alignItems="center"
                    position="absolute"
                />
                <HStack
                    w="100%"
                    h="100%"
                    borderRadius="md"
                    p="6px"
                    flex="1"
                    justifyContent="space-between"
                    alignItems="center"
                    position="absolute"
                >
                    <Text fontSize="lg" fontFamily="Roboto-Bold">
                        {attribute.name}
                    </Text>
                    <Text fontFamily="Roboto-Bold">
                        {attribute.attribute_user[0].current}/{attribute.total} - LV.
                        {attribute.attribute_user[0].level}
                    </Text>
                </HStack>
            </VStack>
        </HStack>
    );
}
