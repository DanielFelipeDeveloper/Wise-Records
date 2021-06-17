import React, { useState, useEffect } from 'react';

import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { useModal } from '../../context/ModalContext';

import LoginModal from '../LoginModal';
import SignUpModal from '../SignUpModal';

import { LinkAndMenu, HeaderContent, Items } from './styles';

const Header: React.FC = () => {
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showSignUpModal, setShowSignUpModal] = useState<boolean>(false);

  const { goToLoginModal, goToSignUpModal } = useModal();

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const toggleSignUpModal = () => {
    setShowSignUpModal(!showSignUpModal);
  };

  useEffect(() => {
    if (goToLoginModal) {
      setShowLoginModal(true);
    } else if (goToSignUpModal) {
      setShowSignUpModal(true);
    }
  }, [goToLoginModal, goToSignUpModal]);

  return (
    <>
      <HeaderContent>
        <header>
          <LinkAndMenu>
            <HiMenu fontSize={36} />
            <a href="/">
              <img src="/logo.png" alt="logo" />
            </a>
          </LinkAndMenu>

          <Items displayHidden>
            <ul>
              <li>
                <a href="/">Beats</a>
              </li>
              <li>
                <a href="/">Mix/Master</a>
              </li>
              <li>
                <button type="button" onClick={toggleSignUpModal}>
                  Cadastrar
                </button>
              </li>
              <Items displayHidden={false}>
                <ul>
                  <li>
                    <FaShoppingCart />
                  </li>
                  <li>
                    <FaUserAlt onClick={toggleLoginModal} />
                  </li>
                </ul>
              </Items>
            </ul>
          </Items>
        </header>
        <LoginModal isOpen={showLoginModal} onClose={toggleLoginModal} />
        <SignUpModal isOpen={showSignUpModal} onClose={toggleSignUpModal} />
      </HeaderContent>
    </>
  );
};

export default Header;
