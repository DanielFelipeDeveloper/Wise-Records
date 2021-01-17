import React from 'react';

import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi';
import { FaPlay, FaShoppingCart } from 'react-icons/fa';
import { AiFillSound } from 'react-icons/ai';
import { TiThMenu } from 'react-icons/ti';

import {
  PlayerContainer,
  PlayerTrack,
  TrackInfo,
  Link,
  PlayerControls,
  ProgressWrapper,
  FooterRight,
} from './styles';

const FooterPlayer: React.FC = () => {
  return (
    <PlayerContainer>
      <PlayerTrack>
        <TrackInfo>
          <img
            src="https://cdn.airbit.com/artwork/2f20a1eba7d27ae74f531de136956368@300x.jpg"
            alt="cardImage"
          />
          <div>
            <Link color="#6900ff" href="/">
              Nome do beat
            </Link>
            <Link color="#c1b9ff" href="/">
              D.Wise
            </Link>
          </div>
        </TrackInfo>
        <PlayerControls>
          <BiSkipPrevious fontSize={30} />
          <span>
            <FaPlay fontSize={18} />
          </span>
          <BiSkipNext fontSize={30} />
        </PlayerControls>
        <ProgressWrapper>
          <span>00:01</span>
          <input
            type="range"
            name="progress_bar"
            min="0"
            max="100"
            step="1"
            value="0"
          />
          <span>02:40</span>
        </ProgressWrapper>
        <FooterRight>
          <a href="/">
            <FaShoppingCart color="#fff" fontSize={15} />
            <span>Buy</span>
          </a>
          <AiFillSound className="sound" color="#FFF" fontSize={21} />
          <TiThMenu className="options" color="#FFF" fontSize={21} />
        </FooterRight>
      </PlayerTrack>
    </PlayerContainer>
  );
};

export default FooterPlayer;
