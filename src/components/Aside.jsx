import React from 'react'
import '../styles/Aside.css'
import ExintexBanner from '../assets/_global/Exintex_add_banner.jpeg'

const Aside = () => {
  return (
    <aside className="Aside">
      <div className="Aside__addElement">
        <a href>
          <img src={ExintexBanner} alt="Exintex add banner" />
        </a>
      </div>
    </aside>
  )
}

export default Aside