import React from 'react'

import { FaShoppingCart, FaUserAlt } from 'react-icons/fa'

import './styles.css'

export default function Header() {
  return (
    <div className="content-header">
      <header>
        <a className="logo" href="/">D.wise Beats</a>

        <div className="menu">
          <ul>
            <li><a href="/">Beats</a></li>
            <li><a href="/">Mix/Master</a></li>
            <li><a href="/">Sign Up</a></li>
            <li><a className="icon" href="/"><FaShoppingCart fontSize={24} color="#FFF"/></a></li>
            <li><a className="icon-user" href="/"><FaUserAlt fontSize={21} color="#FFF"/></a></li>
          </ul>
        </div>

      </header>
    </div>
  )
}
