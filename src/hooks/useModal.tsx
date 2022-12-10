import React, { createContext, useState, useContext } from "react";

type ModalProps = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalContext = createContext({} as ModalProps);

export function ModalProvider({ children }: any) {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <ModalContext.Provider
      value={{
        modalVisible,
        setModalVisible,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  return context;
}
