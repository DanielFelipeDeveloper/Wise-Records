import React from 'react';

import { ImPlay3 } from 'react-icons/im';
import { FaShoppingCart } from 'react-icons/fa';

import { DivCard, CardImage, BtnPlay, Description } from './styles';

const Card: React.FC = () => (
  <>
    <DivCard>
      <CardImage>
        <img
          src="https://cdn.airbit.com/artwork/2f20a1eba7d27ae74f531de136956368@300x.jpg"
          alt="cardImage"
        />

        <BtnPlay>
          <button type="button">
            <ImPlay3 fontSize={25} color="#fff" />
          </button>
        </BtnPlay>
      </CardImage>

      <Description>
        <div>
          <span>Nome do Beat</span>
          <p>Trap</p>
          <p>140 BPM</p>
        </div>
        <div>
          <button type="button">
            <FaShoppingCart color="#fff" fontSize={16} />
            <span>R$ 80.00</span>
          </button>
        </div>
      </Description>
    </DivCard>
  </>
);

export default Card;
