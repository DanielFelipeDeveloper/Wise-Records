import React, { useState } from 'react';

import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import LoginModal from '../LoginModal';
import { LinkAndMenu, HeaderContent, Items, Logo } from './styles';

const Header: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <HeaderContent>
        <header>
          <LinkAndMenu>
            <HiMenu fontSize={36} />
            <Logo href="/">D.Wise Records</Logo>
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
                <a href="/">Cadastrar</a>
              </li>
              <Items displayHidden={false}>
                <ul>
                  <li>
                    <FaShoppingCart />
                  </li>
                  <li>
                    <FaUserAlt onClick={toggleModal} />
                  </li>
                </ul>
              </Items>
            </ul>
          </Items>
        </header>
        <LoginModal isOpen={showModal} onClose={toggleModal} />
      </HeaderContent>
    </>
  );
};

export default Header;
