import { useState, createContext, ReactNode, useContext } from 'react';

interface ModalContextData {
  goToLoginModal: boolean;
  goToSignUpModal: boolean;
  handleGoToLoginModal: (go: boolean) => void;
  handleGoToSignUpModal: (go: boolean) => void;
}

interface ModalContextProviderProps {
  children: ReactNode;
}

const ModalContext = createContext({} as ModalContextData);

const useModal = () => useContext(ModalContext);

const ModalContextProvider = ({ children }: ModalContextProviderProps) => {
  const [goToLoginModal, setGoToLoginModal] = useState(false);
  const [goToSignUpModal, setGoToSignUpModal] = useState(false);

  function handleGoToLoginModal(go: boolean) {
    setGoToLoginModal(go);
  }

  function handleGoToSignUpModal(go: boolean) {
    setGoToSignUpModal(go);
  }

  return (
    <ModalContext.Provider value={{
      goToLoginModal,
      goToSignUpModal,
      handleGoToLoginModal,
      handleGoToSignUpModal,
    }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalContextProvider, useModal };
