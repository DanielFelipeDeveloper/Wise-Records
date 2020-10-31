import React from 'react'

import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { ImPlay3 } from 'react-icons/im'
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
        <MdSkipPrevious fontSize={30}/>
        <ImPlay3 fontSize={60}  className="play"/>
        <MdSkipNext fontSize={30}/>
        <span className="current-time">
          00:00
        </span>
      </div>

      <div className="footer-right">
        <p>Volume controls</p>
      </div>
    </div>
  )
}

