import React, { useState, useRef } from "react";
import {
  Box,
  Checkbox,
  FlatList,
  HStack,
  Icon,
  Pressable,
  Text,
  VStack,
} from "native-base";
import { Alert } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Modal from "react-native-modal";
import { Meta } from "../models/Meta";
import { Category } from "../models/Category";
import { Attribute } from "../models/Attribute";
import { Step } from "../models/Step";
import { EditMeta } from "./EditMeta";
import { getRealm } from "../realm/MetafocusDatabase";
import { useAuth } from "../hooks/useAuth";
import { User } from "../models/User";
import { UserAttribute } from "../models/UserAttribute";
import { ToastAndroid } from "react-native";

type MetaItemProps = {
  meta: Meta;
};

export function MetaItem({ meta }: MetaItemProps) {
  const { updateUser, user } = useAuth();
  const [editMetaModal, setEditMetaModal] = useState(false);

  const [expanded, setExpanded] = useState(false);
  const [groupValues, setGroupValues] = useState([]);
  const [optionsVisible, setOptionsVisible] = useState(false);

  function handleOptions() {
    if (!meta.finished) {
      setOptionsVisible(true);
    }
  }

  async function handleCompleteMeta() {
    setOptionsVisible(false);
    const realm = await getRealm();
    const metaModel = realm.objectForPrimaryKey(
      "MetaSchema",
      meta.id
    ) as unknown as Meta;
    const userModel = realm.objectForPrimaryKey(
      "UserSchema",
      user.id
    ) as unknown as User;
    realm.write(() => {
      const userAttributes: UserAttribute[] = [];
      meta.categories.forEach((mc) => {
        mc.attributes.forEach((ca) => {
          userModel.attributes.forEach((ua) => {
            if (ua.attribute.id === ca.id) {
              userAttributes.push(ua);
            }
          });
        });
      });
      userAttributes.forEach((a) => {
        if (a.current >= Attribute.total) {
          a.current = 0;
          a.level++;
        } else {
          a.current += 5;
        }
      });
      let message = "";
      userAttributes.forEach((u) => {
        message += `${u.attribute.title} `;
      });
      ToastAndroid.show(`Ganhou 5 pontos em ${message}`, ToastAndroid.SHORT);

      metaModel.finished = true;
      metaModel.finishDate = new Date();
      updateUser();
    });
  }

  function handleEdit() {
    if (!meta.finished) {
      setEditMetaModal(true);
    }
  }

  async function updateStepState(step: Step) {
    const realm = await getRealm();
    const stepModel = realm.objectForPrimaryKey(
      "StepSchema",
      step.id
    ) as unknown as Step;
    const userModel = realm.objectForPrimaryKey(
      "UserSchema",
      user.id
    ) as unknown as User;
    realm.write(() => {
      const userAttributes: UserAttribute[] = [];
      meta.categories.forEach((mc) => {
        mc.attributes.forEach((ca) => {
          userModel.attributes.forEach((ua) => {
            if (ua.attribute.id === ca.id) {
              userAttributes.push(ua);
            }
          });
        });
      });
      userAttributes.forEach((a) => {
        if (!step.finished) {
          if (a.current >= Attribute.total) {
            a.current = 0;
            a.level++;
          } else {
            a.current++;
          }
        } else {
          a.current--;
        }
      });

      if (!step.finished) {
        let message = "";
        userAttributes.forEach((u) => {
          message += `${u.attribute.title} `;
        });
        ToastAndroid.show(`Ganhou 1 ponto em ${message}`, ToastAndroid.SHORT);
      }
      stepModel.finished = !step.finished;
      stepModel.finishDate = step.finished ? null : new Date();
      updateUser();
    });
  }

  function handleDelete() {
    if (!meta.finished) {
      Alert.alert("Tem certeza?", "Tem certeza que quer deletar a meta?", [
        {
          text: "Cancelar",
          onPress: () => {
            console.log("Alert cancelled");
          },
        },
        {
          text: "Sim",
          onPress: async () => {
            const realm = await getRealm();
            realm.write(() => {
              const metaToDelete = realm.objectForPrimaryKey(
                "MetaSchema",
                meta.id
              );
              realm.delete(metaToDelete);
              updateUser();
            });
          },
        },
      ]);
    }
  }

  const modal = (
    <Modal
      style={{
        justifyContent: "flex-end",
        margin: 0,
      }}
      isVisible={optionsVisible}
      onSwipeComplete={() => setOptionsVisible(false)}
      swipeDirection={["down"]}
    >
      <VStack
        bg="white"
        h="200px"
        borderTopLeftRadius="18px"
        borderTopRightRadius="18px"
      >
        <VStack py="2" px="5" space="5">
          <HStack justifyContent="center">
            <Box bg="primary.400" w="80px" h="5px" borderRadius="full" />
          </HStack>
          <Pressable
            _pressed={{ bg: "primary.200" }}
            bg="primary.100"
            p="2"
            borderRadius="lg"
            onPress={handleCompleteMeta}
          >
            <HStack space="3">
              <Icon as={Feather} name="check" size="24px" color="primary.600" />
              <Text>Completar meta</Text>
            </HStack>
          </Pressable>
        </VStack>
      </VStack>
    </Modal>
  );

  return (
    <Pressable onLongPress={handleOptions}>
      <EditMeta
        meta={meta}
        modalVisible={editMetaModal}
        setModalVisible={setEditMetaModal}
      />
      {modal}
      <VStack
        minH="135px"
        bg={meta.finished ? "primary.200" : "white"}
        borderRadius="lg"
        p="10px"
        space="13px"
      >
        {/* Title and icons */}
        <HStack justifyContent="space-between">
          <VStack>
            <Text fontSize="15px">{meta.title}</Text>
            <Text maxW="180px">{meta.description}</Text>
          </VStack>
          <HStack space={2}>
            <Icon
              onPress={handleEdit}
              as={Feather}
              color="black"
              name="edit-2"
              size="24px"
            />
            <Icon
              onPress={handleDelete}
              as={Feather}
              color="black"
              name="trash"
              size="24px"
            />
          </HStack>
        </HStack>

        {/* Categories */}
        <HStack alignItems="center" space="3">
          <Icon as={Feather} color="black" name="feather" size="24px" />
          <FlatList
            horizontal
            data={meta.categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Text mx="2" p="6px" borderRadius="lg" bg="red.500" color="white">
                {item.title}
              </Text>
            )}
          />
        </HStack>

        {/* Date */}
        {meta.goalDate != null && !meta.finished && (
          <HStack alignItems="center" space="5px">
            <Icon as={Feather} color="black" name="calendar" size="24px" />
            <Text>
              Previsão de conclusão em{" "}
              {new Intl.DateTimeFormat("pt-BR").format(meta.goalDate as Date)}
            </Text>
          </HStack>
        )}
        {meta.finished && (
          <HStack alignItems="center" space="5px">
            <Icon as={Feather} color="black" name="check" size="24px" />
            <Text>
              Concluído em{" "}
              {new Intl.DateTimeFormat("pt-BR").format(meta.finishDate as Date)}
            </Text>
          </HStack>
        )}

        {/* Steps */}
        {meta.steps.length > 0 && (
          <VStack>
            <HStack
              mb="10px"
              justifyContent="space-between"
              alignItems="center"
            >
              <HStack alignItems="center" space="5px">
                <Icon
                  as={Feather}
                  color="black"
                  name="bar-chart-2"
                  size="24px"
                />
                <Text>
                  {meta.steps.filter((s) => s.finished).length} de{" "}
                  {meta.steps.length}{" "}
                  {meta.steps.length === 1
                    ? "etapa concluída"
                    : "etapas concluídas"}
                </Text>
              </HStack>
              <Icon
                onTouchStart={() => setExpanded(!expanded)}
                as={Feather}
                color="black"
                name={expanded ? "arrow-up" : "arrow-down"}
                size="24px"
              />
            </HStack>
            {/* SingleSteps */}
            {expanded && (
              <FlatList
                data={meta.steps}
                renderItem={({ item }) => (
                  <HStack py="15px" justifyContent={"space-between"}>
                    <HStack space="10px">
                      <Checkbox
                        isDisabled={meta.finished}
                        onTouchEnd={() => {
                          if (!meta.finished) {
                            updateStepState(item);
                          }
                        }}
                        value={item.id}
                        isChecked={item.finished}
                      >
                        {item.title}
                      </Checkbox>
                    </HStack>
                  </HStack>
                )}
              />
            )}
          </VStack>
        )}
      </VStack>
    </Pressable>
  );
}
