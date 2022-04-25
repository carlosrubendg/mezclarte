import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import Aside from '../../components/Aside'
import '../../styles/Gallery.css'
import Colectivo2019N01 from '../../assets/colectivos/colectivo2019/Colectivo_2019_01.jpeg'
import Colectivo2019N02 from '../../assets/colectivos/colectivo2019/Colectivo_2019_02.jpeg'
import Colectivo2019N03 from '../../assets/colectivos/colectivo2019/Colectivo_2019_03.jpeg'
import Colectivo2019N04 from '../../assets/colectivos/colectivo2019/Colectivo_2019_04.jpeg'
import Colectivo2019N05 from '../../assets/colectivos/colectivo2019/Colectivo_2019_05.jpeg'
import Colectivo2019N06 from '../../assets/colectivos/colectivo2019/Colectivo_2019_06.jpeg'
import Colectivo2019N07 from '../../assets/colectivos/colectivo2019/Colectivo_2019_07.jpeg'
import Colectivo2019N08 from '../../assets/colectivos/colectivo2019/Colectivo_2019_08.jpeg'
import Colectivo2019N09 from '../../assets/colectivos/colectivo2019/Colectivo_2019_09.jpeg'
import Colectivo2019N10 from '../../assets/colectivos/colectivo2019/Colectivo_2019_10.jpeg'
import Colectivo2019N11 from '../../assets/colectivos/colectivo2019/Colectivo_2019_11.jpeg'
import Colectivo2019N12 from '../../assets/colectivos/colectivo2019/Colectivo_2019_12.jpeg'
import Colectivo2019N13 from '../../assets/colectivos/colectivo2019/Colectivo_2019_13.jpeg'
import Colectivo2019N14 from '../../assets/colectivos/colectivo2019/Colectivo_2019_14.jpeg'
import Colectivo2019N15 from '../../assets/colectivos/colectivo2019/Colectivo_2019_15.jpeg'
import Colectivo2019N16 from '../../assets/colectivos/colectivo2019/Colectivo_2019_16.jpeg'
import Colectivo2019N17 from '../../assets/colectivos/colectivo2019/Colectivo_2019_17.jpeg'
import Colectivo2019N18 from '../../assets/colectivos/colectivo2019/Colectivo_2019_18.jpeg'
import Colectivo2019N19 from '../../assets/colectivos/colectivo2019/Colectivo_2019_19.jpeg'
import Colectivo2019N20 from '../../assets/colectivos/colectivo2019/Colectivo_2019_20.jpeg'
import Colectivo2019N21 from '../../assets/colectivos/colectivo2019/Colectivo_2019_21.jpeg'
import Colectivo2019N22 from '../../assets/colectivos/colectivo2019/Colectivo_2019_22.jpeg'
import Colectivo2019N23 from '../../assets/colectivos/colectivo2019/Colectivo_2019_23.jpeg'
import Colectivo2019N24 from '../../assets/colectivos/colectivo2019/Colectivo_2019_24.jpeg'
import Colectivo2019N25 from '../../assets/colectivos/colectivo2019/Colectivo_2019_25.jpeg'
import Colectivo2019N26 from '../../assets/colectivos/colectivo2019/Colectivo_2019_26.jpeg'
import Colectivo2019N27 from '../../assets/colectivos/colectivo2019/Colectivo_2019_27.jpeg'
import Colectivo2019N28 from '../../assets/colectivos/colectivo2019/Colectivo_2019_28.jpeg'
import Colectivo2019N29 from '../../assets/colectivos/colectivo2019/Colectivo_2019_29.jpeg'
import Colectivo2019N30 from '../../assets/colectivos/colectivo2019/Colectivo_2019_30.jpeg'
import Colectivo2019N31 from '../../assets/colectivos/colectivo2019/Colectivo_2019_31.jpeg'
import Colectivo2019N32 from '../../assets/colectivos/colectivo2019/Colectivo_2019_32.jpeg'
import Colectivo2019N33 from '../../assets/colectivos/colectivo2019/Colectivo_2019_33.jpeg'
import Colectivo2019N34 from '../../assets/colectivos/colectivo2019/Colectivo_2019_34.jpeg'
import Colectivo2019N35 from '../../assets/colectivos/colectivo2019/Colectivo_2019_35.jpeg'
import Colectivo2019N36 from '../../assets/colectivos/colectivo2019/Colectivo_2019_36.jpeg'
import Colectivo2019N37 from '../../assets/colectivos/colectivo2019/Colectivo_2019_37.jpeg'
import Colectivo2019N38 from '../../assets/colectivos/colectivo2019/Colectivo_2019_38.jpeg'
import Colectivo2019N39 from '../../assets/colectivos/colectivo2019/Colectivo_2019_39.jpeg'
import Colectivo2019N40 from '../../assets/colectivos/colectivo2019/Colectivo_2019_40.jpeg'
import Colectivo2019N41 from '../../assets/colectivos/colectivo2019/Colectivo_2019_41.jpeg'
import Colectivo2019N42 from '../../assets/colectivos/colectivo2019/Colectivo_2019_42.jpeg'
import Colectivo2019N43 from '../../assets/colectivos/colectivo2019/Colectivo_2019_43.jpeg'
import Colectivo2019N44 from '../../assets/colectivos/colectivo2019/Colectivo_2019_44.jpeg'

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
              <h2>Vaqueros del Futuro</h2>
              <h3>Colectivo Mezclarte 2019</h3>
            </div>
            <div className="Gallery__pictures">
              <div className="Gallery__item">
                <img src={Colectivo2019N01} alt="Colectivo Mezclarte 2019 1" onClick={() => openLightboxOnSlide(1)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N02} alt="Colectivo Mezclarte 2019 2" onClick={() => openLightboxOnSlide(2)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N03} alt="Colectivo Mezclarte 2019 3" onClick={() => openLightboxOnSlide(3)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N04} alt="Colectivo Mezclarte 2019 4" onClick={() => openLightboxOnSlide(4)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N05} alt="Colectivo Mezclarte 2019 5" onClick={() => openLightboxOnSlide(5)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N06} alt="Colectivo Mezclarte 2019 6" onClick={() => openLightboxOnSlide(6)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N07} alt="Colectivo Mezclarte 2019 7" onClick={() => openLightboxOnSlide(7)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N08} alt="Colectivo Mezclarte 2019 8" onClick={() => openLightboxOnSlide(8)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N09} alt="Colectivo Mezclarte 2019 9" onClick={() => openLightboxOnSlide(9)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N10} alt="Colectivo Mezclarte 2019 10" onClick={() => openLightboxOnSlide(10)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N11} alt="Colectivo Mezclarte 2019 11" onClick={() => openLightboxOnSlide(11)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N12} alt="Colectivo Mezclarte 2019 12" onClick={() => openLightboxOnSlide(12)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N13} alt="Colectivo Mezclarte 2019 13" onClick={() => openLightboxOnSlide(13)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N14} alt="Colectivo Mezclarte 2019 14" onClick={() => openLightboxOnSlide(14)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N15} alt="Colectivo Mezclarte 2019 15" onClick={() => openLightboxOnSlide(15)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N16} alt="Colectivo Mezclarte 2019 16" onClick={() => openLightboxOnSlide(16)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N17} alt="Colectivo Mezclarte 2019 17" onClick={() => openLightboxOnSlide(17)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N18} alt="Colectivo Mezclarte 2019 18" onClick={() => openLightboxOnSlide(18)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N19} alt="Colectivo Mezclarte 2019 19" onClick={() => openLightboxOnSlide(19)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N20} alt="Colectivo Mezclarte 2019 20" onClick={() => openLightboxOnSlide(20)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N21} alt="Colectivo Mezclarte 2019 21" onClick={() => openLightboxOnSlide(21)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N22} alt="Colectivo Mezclarte 2019 22" onClick={() => openLightboxOnSlide(22)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N23} alt="Colectivo Mezclarte 2019 23" onClick={() => openLightboxOnSlide(23)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N24} alt="Colectivo Mezclarte 2019 24" onClick={() => openLightboxOnSlide(24)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N25} alt="Colectivo Mezclarte 2019 25" onClick={() => openLightboxOnSlide(25)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N26} alt="Colectivo Mezclarte 2019 26" onClick={() => openLightboxOnSlide(26)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N27} alt="Colectivo Mezclarte 2019 27" onClick={() => openLightboxOnSlide(27)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N28} alt="Colectivo Mezclarte 2019 28" onClick={() => openLightboxOnSlide(28)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N29} alt="Colectivo Mezclarte 2019 29" onClick={() => openLightboxOnSlide(29)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N30} alt="Colectivo Mezclarte 2019 30" onClick={() => openLightboxOnSlide(30)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N31} alt="Colectivo Mezclarte 2019 31" onClick={() => openLightboxOnSlide(31)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N32} alt="Colectivo Mezclarte 2019 32" onClick={() => openLightboxOnSlide(32)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N33} alt="Colectivo Mezclarte 2019 33" onClick={() => openLightboxOnSlide(33)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N34} alt="Colectivo Mezclarte 2019 34" onClick={() => openLightboxOnSlide(34)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N35} alt="Colectivo Mezclarte 2019 35" onClick={() => openLightboxOnSlide(35)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N36} alt="Colectivo Mezclarte 2019 36" onClick={() => openLightboxOnSlide(36)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N37} alt="Colectivo Mezclarte 2019 37" onClick={() => openLightboxOnSlide(37)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N38} alt="Colectivo Mezclarte 2019 38" onClick={() => openLightboxOnSlide(38)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N39} alt="Colectivo Mezclarte 2019 39" onClick={() => openLightboxOnSlide(38)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N40} alt="Colectivo Mezclarte 2019 40" onClick={() => openLightboxOnSlide(40)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N41} alt="Colectivo Mezclarte 2019 41" onClick={() => openLightboxOnSlide(41)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N42} alt="Colectivo Mezclarte 2019 42" onClick={() => openLightboxOnSlide(42)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N43} alt="Colectivo Mezclarte 2019 43" onClick={() => openLightboxOnSlide(43)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2019N44} alt="Colectivo Mezclarte 2019 44" onClick={() => openLightboxOnSlide(44)} />
              </div>
            </div>
          </main>

        <Aside />
      </div>
    </div>

    <FsLightbox
        toggler={lightboxController.toggler}
        sources={[
          Colectivo2019N01,
          Colectivo2019N02,
          Colectivo2019N03,
          Colectivo2019N04,
          Colectivo2019N05,
          Colectivo2019N06,
          Colectivo2019N07,
          Colectivo2019N08,
          Colectivo2019N09,
          Colectivo2019N10,
          Colectivo2019N11,
          Colectivo2019N12,
          Colectivo2019N13,
          Colectivo2019N14,
          Colectivo2019N15,
          Colectivo2019N16,
          Colectivo2019N17,
          Colectivo2019N18,
          Colectivo2019N19,
          Colectivo2019N20,
          Colectivo2019N21,
          Colectivo2019N22,
          Colectivo2019N23,
          Colectivo2019N24,
          Colectivo2019N25,
          Colectivo2019N26,
          Colectivo2019N27,
          Colectivo2019N28,
          Colectivo2019N29,
          Colectivo2019N30,
          Colectivo2019N31,
          Colectivo2019N32,
          Colectivo2019N33,
          Colectivo2019N34,
          Colectivo2019N35,
          Colectivo2019N36,
          Colectivo2019N37,
          Colectivo2019N38,
          Colectivo2019N39,
          Colectivo2019N40,
          Colectivo2019N41,
          Colectivo2019N42,
          Colectivo2019N43,
          Colectivo2019N44
        ]}
        slide={lightboxController.slide}
      />
    </>
  )
}

export default LosRollingStones