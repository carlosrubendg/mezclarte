import React from 'react';
import '../styles/Header.css';
import MezclarteLogo from '../assets/_global/Mezclarte_logo.png'
import SapicaBanner from '../assets/_global/Sapica_add_banner.gif'

const Header = () => {
  return (
    <header className='Header'>
      <div className="HeaderTop">
        <div className="HeaderTop__content">
          <nav className="HeaderTop__menu">
            <ul>
              <li>
                <a href="https://fashionnews.com.mx" target="_blank">FN FASHION NEWS</a>
              </li>
            </ul>
          </nav>
          <nav className="HeaderTop__social">
            <ul>
              <li>
                <a href="https://www.facebook.com/Mezclarte-Oficial-101836825310623/" target="_blank">
                  <i className="fab fa-facebook-square" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/mezclarte_oficial/" target="_blank">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="HeaderMid">
        <div className="HeaderMid__content">
          <div className="HeaderMid__logo">
            <figure>
              <a href="/">
                <img src={MezclarteLogo} alt="Logo Mezclarte" />
              </a>
            </figure>
          </div>
          <div className="HeaderMid__add_banner">
            <figure>
              <a href="https://sapica.com/" target="_blank">
                <img src={SapicaBanner} alt="Sapica add banner" />
              </a>
            </figure>
          </div>
        </div>
      </div>
      <div className="HeaderBot">
        <div className="HeaderBot__content">
          <nav className="HeaderBot__menu">
            <ul>
              <li>
                <a href="/">INICIO</a>
              </li>
              <li>
                <a href="/shop">TIENDA EN LÍNEA</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header