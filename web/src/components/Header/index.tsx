import React from 'react';

import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { LinkAndMenu, HeaderContent, Items, Logo } from './styles';

const Header: React.FC = () => {
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
                <a href="/">Sign Up</a>
              </li>
              <Items displayHidden={false}>
                <ul>
                  <li>
                    <a href="/">
                      <FaShoppingCart fontSize={21} />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <FaUserAlt fontSize={21} />
                    </a>
                  </li>
                </ul>
              </Items>
            </ul>
          </Items>
        </header>
      </HeaderContent>
    </>
  );
};

export default Header;
