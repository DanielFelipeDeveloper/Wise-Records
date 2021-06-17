import React, { useCallback, useEffect, useRef } from 'react';

import { FiFacebook, FiLock, FiUser } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { AiFillGoogleCircle } from 'react-icons/ai';
import * as Yup from 'yup';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Input from '../Input';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

import { useModal } from '../../context/ModalContext';

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

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<ModalProps> = ({ isOpen, onClose }: ModalProps) => {
  const overlayRef = useRef(null);
  const formRef = useRef<FormHandles>(null);

  const {
    goToSignUpModal,
    handleGoToSignUpModal,
    handleGoToLoginModal,
  } = useModal();

  const handleClose = () => {
    handleGoToSignUpModal(false);
    handleGoToLoginModal(false);
    onClose();
  };

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if (e.target === overlayRef.current) {
        onClose();
      }
    },
    [onClose],
  );

  const handleSubmit = useCallback(async (data) => {
    try {
      formRef.current?.setErrors({});

      const { email, password } = data;

      const schema = Yup.object().shape({
        email: Yup.string().required().email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'Senha precisa ter no mínimo 6 digitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const response = await api.post('/sessions', {
        email,
        password,
      });
    } catch (err) {
      const errors = await getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  useEffect(() => {
    if (goToSignUpModal) {
      onClose();
      handleGoToLoginModal(false);
    }
  }, [goToSignUpModal]);

  return isOpen ? (
    <Modal>
      <ModalOverlay ref={overlayRef} onClick={handleOverlayClick}>
        <ModalContainer>
          <CloseButton>
            <MdClose color="#fff" fontSize={17} onClick={handleClose} />
          </CloseButton>
          <h1>Login</h1>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="email" icon={FiUser} placeholder="Email" />
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
            <Button smallerWidth onClick={() => handleGoToSignUpModal(true)}>Cadastrar</Button>
          </Form>
        </ModalContainer>
      </ModalOverlay>
    </Modal>
  ) : null;
};

export default LoginModal;
