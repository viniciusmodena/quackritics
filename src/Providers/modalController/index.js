import { createContext, useContext, useState } from "react";

const ModalControllerContext = createContext();

export const ModalControllerProvider = ({ children }) => {
  const [closeModal, setCloseModal] = useState(false);

  const handleModal = () => {
    setCloseModal(!closeModal);
  };

  return (
    <ModalControllerContext.Provider value={{closeModal, handleModal}}>
      {children}
    </ModalControllerContext.Provider>
  );
};

export const useModalController = () => useContext(ModalControllerContext);
