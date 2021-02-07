import React, { useRef } from 'react';

import { FiFacebook, FiLock, FiUser } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { AiFillGoogleCircle } from 'react-icons/ai';

import { Form } from '@unform/web';

import {
  Modal,
  ModalOverlay,
  ModalContainer,
  CheckBoxesDiv,
  Button,
  ContentBreakDiv,
  SocialButtonsDiv,
  CloseButton,
} from './styles';
import Input from '../Input';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<ModalProps> = ({ isOpen, onClose }: ModalProps) => {
  const overlayRef = useRef(null);

  const handleOverlayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  const handleSubmit = (data: object) => {
    console.log(data);
  };

  return isOpen ? (
    <Modal>
      <ModalOverlay ref={overlayRef} onClick={handleOverlayClick}>
        <ModalContainer>
          <CloseButton>
            <MdClose color="#fff" fontSize={17} onClick={onClose} />
          </CloseButton>
          <h1>Login</h1>
          <Form onSubmit={handleSubmit}>
            <Input
              name="name"
              icon={FiUser}
              placeholder="Nome de usuário ou Email"
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <CheckBoxesDiv>
              <div>
                <label htmlFor="check">
                  <input type="checkbox" id="check" />
                </label>
                <span>Lembrar Senha</span>
              </div>
              <a href="/">Esqueceu a senha?</a>
            </CheckBoxesDiv>
            <Button>Login</Button>
            <ContentBreakDiv>
              <h2>Ou faça login com</h2>
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
            <p>Novo por aqui?</p>
            <Button smallerWidth>Cadastrar</Button>
          </Form>
        </ModalContainer>
      </ModalOverlay>
    </Modal>
  ) : null;
};

export default LoginModal;
