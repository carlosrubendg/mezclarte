import React from 'react'
import '../styles/Aside.css'
import ConvocatoriaMezclarte2022 from '../assets/_global/Convocatoria_Mezclarte_2022.jpg'
import ExintexBanner from '../assets/_global/Exintex_add_banner.jpeg'

const Aside = () => {
  return (
    <aside className="Aside">
      <div className="Aside__addElement">
        <a href="/convocatoria-mezclarte-2022.pdf" target="_blank">
          <img src={ConvocatoriaMezclarte2022} alt="Convocatoria Mezclarte 2022" />
        </a>
      </div>

      <div className="Aside__addElement">
        <a href="https://saladeprensa.exintex.com" target="_blank">
          <img src={ExintexBanner} Xalt="Exintex add banner" />
        </a>
      </div>
    </aside>
  )
}

export default Aside