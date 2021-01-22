import React, { useRef } from 'react';

import { FiFacebook } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { AiFillGoogleCircle } from 'react-icons/ai';

import {
  Modal,
  ModalOverlay,
  ModalContainer,
  Form,
  Button,
  ContentBreakDiv,
  SocialButtonsDiv,
  CloseButton,
} from './styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignUpModal: React.FC<ModalProps> = ({ isOpen, onClose }: ModalProps) => {
  const overlayRef = useRef(null);

  const handleOverlayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  return isOpen ? (
    <Modal>
      <ModalOverlay ref={overlayRef} onClick={handleOverlayClick}>
        <ModalContainer>
          <CloseButton>
            <MdClose color="#fff" fontSize={17} onClick={onClose} />
          </CloseButton>
          <h1>Cadastrar Conta</h1>
          <Form>
            <input type="text" placeholder="Nome de usuário" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <p className="terms">
              Ao se cadastrar, você concorda automaticamente com nossos
              <a href="/">Termos e Condições e Acordo de Privacidade</a>
              <span>.</span>
            </p>
            <Button>Cadastrar</Button>
            <ContentBreakDiv>
              <h2>Ou faça cadastro com</h2>
            </ContentBreakDiv>
            <SocialButtonsDiv>
              <a href="/">
                <FiFacebook />
                <span>Facebook</span>
              </a>
              <a href="/">
                <AiFillGoogleCircle fontSize={22} />
                <span>Google</span>
              </a>
            </SocialButtonsDiv>
            <p>Ja tem cadastro?</p>
            <Button smallerWidth>Login</Button>
          </Form>
        </ModalContainer>
      </ModalOverlay>
    </Modal>
  ) : null;
};

export default SignUpModal;
