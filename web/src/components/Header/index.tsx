import React from 'react';

import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';

import { HeaderContent, Items, Logo } from './styles';

const Header: React.FC = () => (
  <>
    <HeaderContent>
      <header>
        <Logo href="/">D.Wise Beats</Logo>

        <Items>
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
      </header>
    </HeaderContent>
  </>
);

export default Header;
