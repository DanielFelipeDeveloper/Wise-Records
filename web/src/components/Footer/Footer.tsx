import React from 'react'

import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { ImPlay3 } from 'react-icons/im'
import { AiFillSound } from 'react-icons/ai'
import { TiThMenu } from 'react-icons/ti'
import { FaShoppingCart } from 'react-icons/fa';

import './styles.css'

export default function Footer() {
  return (
    <div className="footer-audio">
      <div className="track-info">
        <div className="footer-img">
          <img
            src="https://cdn.airbit.com/artwork/2f20a1eba7d27ae74f531de136956368@300x.jpg"
            alt="card"
          />
        </div>

        <div className="description">
          <p>Nome do beat</p>
          <p>D.Wise Beats</p>
        </div>
      </div>
  
      <div className="footer-player">
        <MdSkipPrevious className="prev" fontSize={30}/>
        <span className="play">
          <ImPlay3 className="player" fontSize={25}/>
        </span>
        <MdSkipNext className="next" fontSize={30}/>
      </div>

      <div className="progress">
        <span className="current-time">00:00</span>
        <input type="range" name="progressBar" id="prgbar"/>
        <span className="total-time">03:25</span>
      </div>

      <div className="footer-right">
        <button>
          <FaShoppingCart color="#fff"fontSize={15}/>
          <span>Buy</span>
        </button>
        <AiFillSound className="sound" color="#FFF" fontSize={21}/>
        <TiThMenu className="options" color="#FFF" fontSize={21}/>
      </div>
    </div>
  )
}

