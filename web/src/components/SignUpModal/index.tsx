import React, { useCallback, useRef, useEffect } from 'react';

import {
  FiFacebook, FiLock, FiMail, FiUser,
} from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { AiFillGoogleCircle } from 'react-icons/ai';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useModal } from '../../context/ModalContext';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../Input';

import {
  Modal,
  ModalOverlay,
  ModalContainer,
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
  const formRef = useRef<FormHandles>(null);

  const { goToLoginModal, handleGoToLoginModal, handleGoToSignUpModal } = useModal();

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

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required().email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'Senha precisa ter no mínimo 6 digitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  useEffect(() => {
    if (goToLoginModal) {
      onClose();
      handleGoToSignUpModal(false);
    }
  }, [goToLoginModal]);

  return isOpen ? (
    <Modal>
      <ModalOverlay ref={overlayRef} onClick={handleOverlayClick}>
        <ModalContainer>
          <CloseButton>
            <MdClose color="#fff" fontSize={17} onClick={handleClose} />
          </CloseButton>
          <h1>Cadastrar Conta</h1>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="name" icon={FiUser} placeholder="Nome de usuário" />
            <Input name="email" icon={FiMail} placeholder="Email" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
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
            <Button smallerWidth onClick={() => handleGoToLoginModal(true)}>Login</Button>
          </Form>
        </ModalContainer>
      </ModalOverlay>
    </Modal>
  ) : null;
};

export default SignUpModal;
