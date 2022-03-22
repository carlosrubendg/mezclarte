import React from 'react'
import '../styles/Footer.css'
import MezclarteLogo from '../assets/_global/Mezclarte_logo.png'

const Footer = () => {
  return (
    <footer>
      <div className="Footer_content">
        <div className="Footer_content__column">
          <figure>
            <a href>
              <img src={MezclarteLogo} alt="Logo Mezclarte (footer)" />
            </a>
          </figure>
        </div>
        <div className="Footer_content__column Footer_content__column--menu">
          <ul>
            <li>
              <a href>MEZCLARTE</a>
            </li>
            <li>
              <a href>CONCURSOS</a>
            </li>
            <li>
              <a href>COLECTIVOS</a>
            </li>
          </ul>
        </div>
        <div className="Footer_content__column Footer_content__column--social">
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
        </div>
      </div>
      <div className="Footer_line">
        <hr />
      </div>
      <div className="Footer_caption">
        <p>Mezclarte 2022</p>
      </div>
    </footer>

  )
}

export default Footer