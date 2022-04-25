import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import Aside from '../../components/Aside'
import '../../styles/Gallery.css'
import Colectivo2015N01 from '../../assets/colectivos/colectivo2015/Colectivo_2015_01.jpeg'
import Colectivo2015N02 from '../../assets/colectivos/colectivo2015/Colectivo_2015_02.jpeg'
import Colectivo2015N03 from '../../assets/colectivos/colectivo2015/Colectivo_2015_03.jpeg'
import Colectivo2015N04 from '../../assets/colectivos/colectivo2015/Colectivo_2015_04.jpeg'
import Colectivo2015N05 from '../../assets/colectivos/colectivo2015/Colectivo_2015_05.jpeg'
import Colectivo2015N06 from '../../assets/colectivos/colectivo2015/Colectivo_2015_06.jpeg'
import Colectivo2015N07 from '../../assets/colectivos/colectivo2015/Colectivo_2015_07.jpeg'
import Colectivo2015N08 from '../../assets/colectivos/colectivo2015/Colectivo_2015_08.jpeg'
import Colectivo2015N09 from '../../assets/colectivos/colectivo2015/Colectivo_2015_09.jpeg'
import Colectivo2015N10 from '../../assets/colectivos/colectivo2015/Colectivo_2015_10.jpeg'
import Colectivo2015N11 from '../../assets/colectivos/colectivo2015/Colectivo_2015_11.jpeg'
import Colectivo2015N12 from '../../assets/colectivos/colectivo2015/Colectivo_2015_12.jpeg'
import Colectivo2015N13 from '../../assets/colectivos/colectivo2015/Colectivo_2015_13.jpeg'
import Colectivo2015N14 from '../../assets/colectivos/colectivo2015/Colectivo_2015_14.jpeg'
import Colectivo2015N15 from '../../assets/colectivos/colectivo2015/Colectivo_2015_15.jpeg'
import Colectivo2015N16 from '../../assets/colectivos/colectivo2015/Colectivo_2015_16.jpeg'
import Colectivo2015N17 from '../../assets/colectivos/colectivo2015/Colectivo_2015_17.jpeg'
import Colectivo2015N18 from '../../assets/colectivos/colectivo2015/Colectivo_2015_18.jpeg'
import Colectivo2015N19 from '../../assets/colectivos/colectivo2015/Colectivo_2015_19.jpeg'
import Colectivo2015N20 from '../../assets/colectivos/colectivo2015/Colectivo_2015_20.jpeg'
import Colectivo2015N21 from '../../assets/colectivos/colectivo2015/Colectivo_2015_21.jpeg'
import Colectivo2015N22 from '../../assets/colectivos/colectivo2015/Colectivo_2015_22.jpeg'
import Colectivo2015N23 from '../../assets/colectivos/colectivo2015/Colectivo_2015_23.jpeg'
import Colectivo2015N24 from '../../assets/colectivos/colectivo2015/Colectivo_2015_24.jpeg'
import Colectivo2015N25 from '../../assets/colectivos/colectivo2015/Colectivo_2015_25.jpeg'
import Colectivo2015N26 from '../../assets/colectivos/colectivo2015/Colectivo_2015_26.jpeg'
import Colectivo2015N27 from '../../assets/colectivos/colectivo2015/Colectivo_2015_27.jpeg'
import Colectivo2015N28 from '../../assets/colectivos/colectivo2015/Colectivo_2015_28.jpeg'
import Colectivo2015N29 from '../../assets/colectivos/colectivo2015/Colectivo_2015_29.jpeg'
import Colectivo2015N30 from '../../assets/colectivos/colectivo2015/Colectivo_2015_30.jpeg'
import Colectivo2015N31 from '../../assets/colectivos/colectivo2015/Colectivo_2015_31.jpeg'
import Colectivo2015N32 from '../../assets/colectivos/colectivo2015/Colectivo_2015_32.jpeg'
import Colectivo2015N33 from '../../assets/colectivos/colectivo2015/Colectivo_2015_33.jpeg'
import Colectivo2015N34 from '../../assets/colectivos/colectivo2015/Colectivo_2015_34.jpeg'
import Colectivo2015N35 from '../../assets/colectivos/colectivo2015/Colectivo_2015_35.jpeg'
import Colectivo2015N36 from '../../assets/colectivos/colectivo2015/Colectivo_2015_36.jpeg'
import Colectivo2015N37 from '../../assets/colectivos/colectivo2015/Colectivo_2015_37.jpeg'
import Colectivo2015N38 from '../../assets/colectivos/colectivo2015/Colectivo_2015_38.jpeg'
import Colectivo2015N39 from '../../assets/colectivos/colectivo2015/Colectivo_2015_39.jpeg'
import Colectivo2015N40 from '../../assets/colectivos/colectivo2015/Colectivo_2015_40.jpeg'
import Colectivo2015N41 from '../../assets/colectivos/colectivo2015/Colectivo_2015_41.jpeg'

const LosRollingStones = () => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number
    });
  }

  return (
    <>
      <div className="Gallery">
        <div div className="Gallery__content">
          <main className="Gallery__main">
            <div className='Gallery__title'>
              <h2>Tributo Artes Plásticas</h2>
              <h3>Colectivo Mezclarte 2015</h3>
            </div>
            <div className="Gallery__pictures">
              <div className="Gallery__item">
                <img src={Colectivo2015N01} alt="Colectivo Mezclarte 2015 1" onClick={() => openLightboxOnSlide(1)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N02} alt="Colectivo Mezclarte 2015 2" onClick={() => openLightboxOnSlide(2)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N03} alt="Colectivo Mezclarte 2015 3" onClick={() => openLightboxOnSlide(3)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N04} alt="Colectivo Mezclarte 2015 4" onClick={() => openLightboxOnSlide(4)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N05} alt="Colectivo Mezclarte 2015 5" onClick={() => openLightboxOnSlide(5)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N06} alt="Colectivo Mezclarte 2015 6" onClick={() => openLightboxOnSlide(6)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N07} alt="Colectivo Mezclarte 2015 7" onClick={() => openLightboxOnSlide(7)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N08} alt="Colectivo Mezclarte 2015 8" onClick={() => openLightboxOnSlide(8)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N09} alt="Colectivo Mezclarte 2015 9" onClick={() => openLightboxOnSlide(9)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N10} alt="Colectivo Mezclarte 2015 10" onClick={() => openLightboxOnSlide(10)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N11} alt="Colectivo Mezclarte 2015 11" onClick={() => openLightboxOnSlide(11)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N12} alt="Colectivo Mezclarte 2015 12" onClick={() => openLightboxOnSlide(12)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N13} alt="Colectivo Mezclarte 2015 13" onClick={() => openLightboxOnSlide(13)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N14} alt="Colectivo Mezclarte 2015 14" onClick={() => openLightboxOnSlide(14)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N15} alt="Colectivo Mezclarte 2015 15" onClick={() => openLightboxOnSlide(15)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N16} alt="Colectivo Mezclarte 2015 16" onClick={() => openLightboxOnSlide(16)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N17} alt="Colectivo Mezclarte 2015 17" onClick={() => openLightboxOnSlide(17)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N18} alt="Colectivo Mezclarte 2015 18" onClick={() => openLightboxOnSlide(18)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N19} alt="Colectivo Mezclarte 2015 19" onClick={() => openLightboxOnSlide(19)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N20} alt="Colectivo Mezclarte 2015 20" onClick={() => openLightboxOnSlide(20)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N21} alt="Colectivo Mezclarte 2015 21" onClick={() => openLightboxOnSlide(21)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N22} alt="Colectivo Mezclarte 2015 22" onClick={() => openLightboxOnSlide(22)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N23} alt="Colectivo Mezclarte 2015 23" onClick={() => openLightboxOnSlide(23)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N24} alt="Colectivo Mezclarte 2015 24" onClick={() => openLightboxOnSlide(24)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N25} alt="Colectivo Mezclarte 2015 25" onClick={() => openLightboxOnSlide(25)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N26} alt="Colectivo Mezclarte 2015 26" onClick={() => openLightboxOnSlide(26)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N27} alt="Colectivo Mezclarte 2015 27" onClick={() => openLightboxOnSlide(27)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N28} alt="Colectivo Mezclarte 2015 28" onClick={() => openLightboxOnSlide(28)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N29} alt="Colectivo Mezclarte 2015 29" onClick={() => openLightboxOnSlide(29)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N30} alt="Colectivo Mezclarte 2015 30" onClick={() => openLightboxOnSlide(30)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N31} alt="Colectivo Mezclarte 2015 31" onClick={() => openLightboxOnSlide(31)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N32} alt="Colectivo Mezclarte 2015 32" onClick={() => openLightboxOnSlide(32)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N33} alt="Colectivo Mezclarte 2015 33" onClick={() => openLightboxOnSlide(33)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N34} alt="Colectivo Mezclarte 2015 34" onClick={() => openLightboxOnSlide(34)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N35} alt="Colectivo Mezclarte 2015 35" onClick={() => openLightboxOnSlide(35)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N36} alt="Colectivo Mezclarte 2015 36" onClick={() => openLightboxOnSlide(36)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N37} alt="Colectivo Mezclarte 2015 37" onClick={() => openLightboxOnSlide(37)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N38} alt="Colectivo Mezclarte 2015 38" onClick={() => openLightboxOnSlide(38)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N39} alt="Colectivo Mezclarte 2015 39" onClick={() => openLightboxOnSlide(38)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N40} alt="Colectivo Mezclarte 2015 40" onClick={() => openLightboxOnSlide(40)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2015N41} alt="Colectivo Mezclarte 2015 41" onClick={() => openLightboxOnSlide(41)} />
              </div>
            </div>
          </main>

        <Aside />
      </div>
    </div>

    <FsLightbox
        toggler={lightboxController.toggler}
        sources={[
          Colectivo2015N01,
          Colectivo2015N02,
          Colectivo2015N03,
          Colectivo2015N04,
          Colectivo2015N05,
          Colectivo2015N06,
          Colectivo2015N07,
          Colectivo2015N08,
          Colectivo2015N09,
          Colectivo2015N10,
          Colectivo2015N11,
          Colectivo2015N12,
          Colectivo2015N13,
          Colectivo2015N14,
          Colectivo2015N15,
          Colectivo2015N16,
          Colectivo2015N17,
          Colectivo2015N18,
          Colectivo2015N19,
          Colectivo2015N20,
          Colectivo2015N21,
          Colectivo2015N22,
          Colectivo2015N23,
          Colectivo2015N24,
          Colectivo2015N25,
          Colectivo2015N26,
          Colectivo2015N27,
          Colectivo2015N28,
          Colectivo2015N29,
          Colectivo2015N30,
          Colectivo2015N31,
          Colectivo2015N32,
          Colectivo2015N33,
          Colectivo2015N34,
          Colectivo2015N35,
          Colectivo2015N36,
          Colectivo2015N37,
          Colectivo2015N38,
          Colectivo2015N39,
          Colectivo2015N40,
          Colectivo2015N41
        ]}
        slide={lightboxController.slide}
      />
    </>
  )
}

export default LosRollingStones