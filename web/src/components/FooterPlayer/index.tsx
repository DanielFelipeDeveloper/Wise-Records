import React, { AudioHTMLAttributes, useRef } from 'react';

import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi';
import { FaPlay, FaShoppingCart } from 'react-icons/fa';
import { AiFillSound } from 'react-icons/ai';
import { TiThMenu } from 'react-icons/ti';

import { PlayerContainer, Player } from './styles';

const FooterPlayer: React.FC = () => {
  return (
    <PlayerContainer>
      <div className="progress-wrapper mobile">
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
      </div>
      <Player>
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
                <FaPlay fontSize={18} />
                <audio
                  controls
                  src="http://localhost:3333/audio/7e6e3085db278752f94c-16-10 dr.wav"
                />
              </span>
              <BiSkipNext fontSize={30} />
            </div>
          </div>
          <div className="progress-wrapper">
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
      </Player>
    </PlayerContainer>
  );
};

export default FooterPlayer;
