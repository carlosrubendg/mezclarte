import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import Aside from '../../components/Aside'
import '../../styles/Gallery.css'
import Concurso2017N01 from '../../assets/concursos/concurso2017/Mezclarte_2017_01.jpeg'
import Concurso2017N02 from '../../assets/concursos/concurso2017/Mezclarte_2017_02.jpeg'
import Concurso2017N03 from '../../assets/concursos/concurso2017/Mezclarte_2017_03.jpeg'
import Concurso2017N04 from '../../assets/concursos/concurso2017/Mezclarte_2017_04.jpeg'
import Concurso2017N05 from '../../assets/concursos/concurso2017/Mezclarte_2017_05.jpeg'
import Concurso2017N06 from '../../assets/concursos/concurso2017/Mezclarte_2017_06.jpeg'
import Concurso2017N07 from '../../assets/concursos/concurso2017/Mezclarte_2017_07.jpeg'
import Concurso2017N08 from '../../assets/concursos/concurso2017/Mezclarte_2017_08.jpeg'
import Concurso2017N09 from '../../assets/concursos/concurso2017/Mezclarte_2017_09.jpeg'
import Concurso2017N10 from '../../assets/concursos/concurso2017/Mezclarte_2017_10.jpeg'
import Concurso2017N11 from '../../assets/concursos/concurso2017/Mezclarte_2017_11.jpeg'
import Concurso2017N12 from '../../assets/concursos/concurso2017/Mezclarte_2017_12.jpeg'
import Concurso2017N13 from '../../assets/concursos/concurso2017/Mezclarte_2017_13.jpeg'
import Concurso2017N14 from '../../assets/concursos/concurso2017/Mezclarte_2017_14.jpeg'
import Concurso2017N15 from '../../assets/concursos/concurso2017/Mezclarte_2017_15.jpeg'
import Concurso2017N16 from '../../assets/concursos/concurso2017/Mezclarte_2017_16.jpeg'
import Concurso2017N17 from '../../assets/concursos/concurso2017/Mezclarte_2017_17.jpeg'
import Concurso2017N18 from '../../assets/concursos/concurso2017/Mezclarte_2017_18.jpeg'
import Concurso2017N19 from '../../assets/concursos/concurso2017/Mezclarte_2017_19.jpeg'
import Concurso2017N20 from '../../assets/concursos/concurso2017/Mezclarte_2017_20.jpeg'
import Concurso2017N21 from '../../assets/concursos/concurso2017/Mezclarte_2017_21.jpeg'
import Concurso2017N22 from '../../assets/concursos/concurso2017/Mezclarte_2017_22.jpeg'
import Concurso2017N23 from '../../assets/concursos/concurso2017/Mezclarte_2017_23.jpeg'
import Concurso2017N24 from '../../assets/concursos/concurso2017/Mezclarte_2017_24.jpeg'
import Concurso2017N25 from '../../assets/concursos/concurso2017/Mezclarte_2017_25.jpeg'
import Concurso2017N26 from '../../assets/concursos/concurso2017/Mezclarte_2017_26.jpeg'
import Concurso2017N27 from '../../assets/concursos/concurso2017/Mezclarte_2017_27.jpeg'
import Concurso2017N28 from '../../assets/concursos/concurso2017/Mezclarte_2017_28.jpeg'
import Concurso2017N29 from '../../assets/concursos/concurso2017/Mezclarte_2017_29.jpeg'
import Concurso2017N30 from '../../assets/concursos/concurso2017/Mezclarte_2017_30.jpeg'
import Concurso2017N31 from '../../assets/concursos/concurso2017/Mezclarte_2017_31.jpeg'
import Concurso2017N32 from '../../assets/concursos/concurso2017/Mezclarte_2017_32.jpeg'
import Concurso2017N33 from '../../assets/concursos/concurso2017/Mezclarte_2017_33.jpeg'
import Concurso2017N34 from '../../assets/concursos/concurso2017/Mezclarte_2017_34.jpeg'
import Concurso2017N35 from '../../assets/concursos/concurso2017/Mezclarte_2017_35.jpeg'
import Concurso2017N36 from '../../assets/concursos/concurso2017/Mezclarte_2017_36.jpeg'

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
              <h2>Los Rolling Stones</h2>
              <h3>Mezclarte 2017</h3>
            </div>
            <div className="Gallery__pictures">
              <div className="Gallery__item">
                <img src={Concurso2017N01} alt="Rolling Stones Mezclarte 2017 1" onClick={() => openLightboxOnSlide(1)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N02} alt="Rolling Stones Mezclarte 2017 2" onClick={() => openLightboxOnSlide(2)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N03} alt="Rolling Stones Mezclarte 2017 3" onClick={() => openLightboxOnSlide(3)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N04} alt="Rolling Stones Mezclarte 2017 4" onClick={() => openLightboxOnSlide(4)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N05} alt="Rolling Stones Mezclarte 2017 5" onClick={() => openLightboxOnSlide(5)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N06} alt="Rolling Stones Mezclarte 2017 6" onClick={() => openLightboxOnSlide(6)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N07} alt="Rolling Stones Mezclarte 2017 7" onClick={() => openLightboxOnSlide(7)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N08} alt="Rolling Stones Mezclarte 2017 8" onClick={() => openLightboxOnSlide(8)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N09} alt="Rolling Stones Mezclarte 2017 9" onClick={() => openLightboxOnSlide(9)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N10} alt="Rolling Stones Mezclarte 2017 10" onClick={() => openLightboxOnSlide(10)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N11} alt="Rolling Stones Mezclarte 2017 11" onClick={() => openLightboxOnSlide(11)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N12} alt="Rolling Stones Mezclarte 2017 12" onClick={() => openLightboxOnSlide(12)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N13} alt="Rolling Stones Mezclarte 2017 13" onClick={() => openLightboxOnSlide(13)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N14} alt="Rolling Stones Mezclarte 2017 14" onClick={() => openLightboxOnSlide(14)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N15} alt="Rolling Stones Mezclarte 2017 15" onClick={() => openLightboxOnSlide(15)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N16} alt="Rolling Stones Mezclarte 2017 16" onClick={() => openLightboxOnSlide(16)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N17} alt="Rolling Stones Mezclarte 2017 17" onClick={() => openLightboxOnSlide(17)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N18} alt="Rolling Stones Mezclarte 2017 18" onClick={() => openLightboxOnSlide(18)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N19} alt="Rolling Stones Mezclarte 2017 19" onClick={() => openLightboxOnSlide(19)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N20} alt="Rolling Stones Mezclarte 2017 20" onClick={() => openLightboxOnSlide(20)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N21} alt="Rolling Stones Mezclarte 2017 21" onClick={() => openLightboxOnSlide(21)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N22} alt="Rolling Stones Mezclarte 2017 22" onClick={() => openLightboxOnSlide(22)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N23} alt="Rolling Stones Mezclarte 2017 23" onClick={() => openLightboxOnSlide(23)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N24} alt="Rolling Stones Mezclarte 2017 24" onClick={() => openLightboxOnSlide(24)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N25} alt="Rolling Stones Mezclarte 2017 25" onClick={() => openLightboxOnSlide(25)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N26} alt="Rolling Stones Mezclarte 2017 26" onClick={() => openLightboxOnSlide(26)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N27} alt="Rolling Stones Mezclarte 2017 27" onClick={() => openLightboxOnSlide(27)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N28} alt="Rolling Stones Mezclarte 2017 28" onClick={() => openLightboxOnSlide(28)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N29} alt="Rolling Stones Mezclarte 2017 29" onClick={() => openLightboxOnSlide(29)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N30} alt="Rolling Stones Mezclarte 2017 30" onClick={() => openLightboxOnSlide(30)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N31} alt="Rolling Stones Mezclarte 2017 31" onClick={() => openLightboxOnSlide(31)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N32} alt="Rolling Stones Mezclarte 2017 32" onClick={() => openLightboxOnSlide(32)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N33} alt="Rolling Stones Mezclarte 2017 33" onClick={() => openLightboxOnSlide(33)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N34} alt="Rolling Stones Mezclarte 2017 34" onClick={() => openLightboxOnSlide(34)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N35} alt="Rolling Stones Mezclarte 2017 35" onClick={() => openLightboxOnSlide(35)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2017N36} alt="Rolling Stones Mezclarte 2017 36" onClick={() => openLightboxOnSlide(36)} />
              </div>
            </div>
          </main>

        <Aside />
      </div>
    </div>

    <FsLightbox
        toggler={lightboxController.toggler}
        sources={[
          Concurso2017N01,
          Concurso2017N02,
          Concurso2017N03,
          Concurso2017N04,
          Concurso2017N05,
          Concurso2017N06,
          Concurso2017N07,
          Concurso2017N08,
          Concurso2017N09,
          Concurso2017N10,
          Concurso2017N11,
          Concurso2017N12,
          Concurso2017N13,
          Concurso2017N14,
          Concurso2017N15,
          Concurso2017N16,
          Concurso2017N17,
          Concurso2017N18,
          Concurso2017N19,
          Concurso2017N20,
          Concurso2017N21,
          Concurso2017N22,
          Concurso2017N23,
          Concurso2017N24,
          Concurso2017N25,
          Concurso2017N26,
          Concurso2017N27,
          Concurso2017N28,
          Concurso2017N29,
          Concurso2017N30,
          Concurso2017N31,
          Concurso2017N32,
          Concurso2017N33,
          Concurso2017N34,
          Concurso2017N35,
          Concurso2017N36
        ]}
        slide={lightboxController.slide}
      />
    </>
  )
}

export default LosRollingStones