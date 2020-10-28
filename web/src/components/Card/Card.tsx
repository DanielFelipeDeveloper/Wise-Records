import React from 'react'

import { ImPlay3 } from 'react-icons/im'
import { FaShoppingCart } from 'react-icons/fa'

import './styles.css'

export default function Card() {
  return (
    <>
      <div className="card">
          <div className="card-img">
            <img
              src="https://cdn.airbit.com/artwork/2f20a1eba7d27ae74f531de136956368@300x.jpg"
              alt="card"
            />
            <div className="btn-player">
              <button><ImPlay3 fontSize={25} color="#fff" /></button>
            </div>
          </div>
          <div className="card-description">
            <div>
              <span>Nome do beat</span>
              <p>Trap</p>
              <p>140 BPM</p>
            </div>
            <div>
              <button>
                <FaShoppingCart color="#fff"fontSize={16}/>
                <span>R$ 80.00</span>
              </button>
            </div>
          </div>
        </div>
    </>  
  )
}
