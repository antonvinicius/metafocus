import { Box, Button, Icon, Text, VStack } from "native-base";
import React, { useState } from "react";
import Modal from "react-native-modal";
import Feather from "react-native-vector-icons/Feather";
import { useModal } from "../hooks/useModal";

export function CreateMeta() {
  const { setModalVisible, modalVisible } = useModal();

  function handleCloseModal() {
    setModalVisible(false);
  }

  return (
    <Box>
      <Modal isVisible={modalVisible}>
        <Box flex="1">
          <VStack flex="1" bg="white" borderRadius="lg">
            <Button onPress={handleCloseModal}>Fechar</Button>
          </VStack>
        </Box>
      </Modal>
    </Box>
  );
}
