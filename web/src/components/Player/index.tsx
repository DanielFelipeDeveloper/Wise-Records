import React from 'react';

import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi';
import { FaPlay, FaShoppingCart } from 'react-icons/fa';
import { AiFillSound } from 'react-icons/ai';
import { TiThMenu } from 'react-icons/ti';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import { PlayerContainer, PlayerContent } from './styles';

const Player: React.FC = () => (
  <PlayerContainer>
    <div className="progress-wrapper mobile">
      <span>00:01</span>
      <div className="slider">
        <Slider
          trackStyle={{ backgroundColor: '#6900ff' }}
          railStyle={{ backgroundColor: '#707070' }}
          handleStyle={{ borderColor: '#6900ff', borderWidth: 4 }}
        />
      </div>
      <span>02:40</span>
    </div>
    <PlayerContent>
      <div className="player-bottom">
        <div className="track-info">
          <div className="img-and-description">
            <img
              src="https://cdn.airbit.com/artwork/2f20a1eba7d27ae74f531de136956368@300x.jpg"
              alt="cardImage"
            />
            <div>
              <p>Trap Beat Style Migos</p>
              <span>D.Wise</span>
            </div>
          </div>
        </div>
        <div className="player-controls">
          <div className="players">
            <BiSkipPrevious fontSize={30} />
            <span>
              <FaPlay
                fontSize={18}
              />
            </span>
            <BiSkipNext fontSize={30} />
          </div>
          <p>Trap Beat Style</p>
        </div>
        <div className="progress-wrapper">
          <span>00:01</span>
          <div className="slider">
            <Slider
              trackStyle={{ backgroundColor: '#6900ff' }}
              railStyle={{ backgroundColor: '#707070' }}
              handleStyle={{ borderColor: '#6900ff', borderWidth: 4 }}
            />
          </div>
          <span>02:40</span>
        </div>
        <div className="footer-right">
          <a href="/">
            <FaShoppingCart color="#fff" fontSize={15} />
            <span>Buy</span>
          </a>
          <AiFillSound className="sound" color="#FFF" fontSize={21} />
          <TiThMenu className="options" color="#FFF" fontSize={21} />
        </div>
      </div>
    </PlayerContent>
  </PlayerContainer>
);

export default Player;
