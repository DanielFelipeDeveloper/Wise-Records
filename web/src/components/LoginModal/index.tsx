import React, { useCallback, useRef } from 'react';

import { FiFacebook, FiLock, FiUser } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { AiFillGoogleCircle } from 'react-icons/ai';
import * as Yup from 'yup';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

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
import getValidationErrors from '../../utils/getValidationErrors';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<ModalProps> = ({ isOpen, onClose }: ModalProps) => {
  const overlayRef = useRef(null);
  const formRef = useRef<FormHandles>(null);

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if (e.target === overlayRef.current) {
        onClose();
      }
    },
    [onClose],
  );

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required().email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'Senha precisa ter no mínimo 6 digitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = await getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return isOpen ? (
    <Modal>
      <ModalOverlay ref={overlayRef} onClick={handleOverlayClick}>
        <ModalContainer>
          <CloseButton>
            <MdClose color="#fff" fontSize={17} onClick={onClose} />
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
            <Button smallerWidth>Cadastrar</Button>
          </Form>
        </ModalContainer>
      </ModalOverlay>
    </Modal>
  ) : null;
};

export default LoginModal;
