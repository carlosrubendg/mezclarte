import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import Aside from '../../components/Aside'
import '../../styles/Gallery.css'
import Concurso2014N01 from '../../assets/concursos/concurso2014/Mezclarte_2014_01.jpeg'
import Concurso2014N02 from '../../assets/concursos/concurso2014/Mezclarte_2014_02.jpeg'
import Concurso2014N03 from '../../assets/concursos/concurso2014/Mezclarte_2014_03.jpeg'
import Concurso2014N04 from '../../assets/concursos/concurso2014/Mezclarte_2014_04.jpeg'
import Concurso2014N05 from '../../assets/concursos/concurso2014/Mezclarte_2014_05.jpeg'
import Concurso2014N06 from '../../assets/concursos/concurso2014/Mezclarte_2014_06.jpeg'
import Concurso2014N07 from '../../assets/concursos/concurso2014/Mezclarte_2014_07.jpeg'
import Concurso2014N08 from '../../assets/concursos/concurso2014/Mezclarte_2014_08.jpeg'
import Concurso2014N09 from '../../assets/concursos/concurso2014/Mezclarte_2014_09.jpeg'
import Concurso2014N10 from '../../assets/concursos/concurso2014/Mezclarte_2014_10.jpeg'
import Concurso2014N11 from '../../assets/concursos/concurso2014/Mezclarte_2014_11.jpeg'
import Concurso2014N12 from '../../assets/concursos/concurso2014/Mezclarte_2014_12.jpeg'
import Concurso2014N13 from '../../assets/concursos/concurso2014/Mezclarte_2014_13.jpeg'
import Concurso2014N14 from '../../assets/concursos/concurso2014/Mezclarte_2014_14.jpeg'
import Concurso2014N15 from '../../assets/concursos/concurso2014/Mezclarte_2014_15.jpeg'
import Concurso2014N16 from '../../assets/concursos/concurso2014/Mezclarte_2014_16.jpeg'
import Concurso2014N17 from '../../assets/concursos/concurso2014/Mezclarte_2014_17.jpeg'
import Concurso2014N18 from '../../assets/concursos/concurso2014/Mezclarte_2014_18.jpeg'
import Concurso2014N19 from '../../assets/concursos/concurso2014/Mezclarte_2014_19.jpeg'
import Concurso2014N20 from '../../assets/concursos/concurso2014/Mezclarte_2014_20.jpeg'
import Concurso2014N21 from '../../assets/concursos/concurso2014/Mezclarte_2014_21.jpeg'
import Concurso2014N22 from '../../assets/concursos/concurso2014/Mezclarte_2014_22.jpeg'
import Concurso2014N23 from '../../assets/concursos/concurso2014/Mezclarte_2014_23.jpeg'
import Concurso2014N24 from '../../assets/concursos/concurso2014/Mezclarte_2014_24.jpeg'
import Concurso2014N25 from '../../assets/concursos/concurso2014/Mezclarte_2014_25.jpeg'
import Concurso2014N26 from '../../assets/concursos/concurso2014/Mezclarte_2014_26.jpeg'
import Concurso2014N27 from '../../assets/concursos/concurso2014/Mezclarte_2014_27.jpeg'
import Concurso2014N28 from '../../assets/concursos/concurso2014/Mezclarte_2014_28.jpeg'
import Concurso2014N29 from '../../assets/concursos/concurso2014/Mezclarte_2014_29.jpeg'
import Concurso2014N30 from '../../assets/concursos/concurso2014/Mezclarte_2014_30.jpeg'
import Concurso2014N31 from '../../assets/concursos/concurso2014/Mezclarte_2014_31.jpeg'
import Concurso2014N32 from '../../assets/concursos/concurso2014/Mezclarte_2014_32.jpeg'
import Concurso2014N33 from '../../assets/concursos/concurso2014/Mezclarte_2014_33.jpeg'
import Concurso2014N34 from '../../assets/concursos/concurso2014/Mezclarte_2014_34.jpeg'
import Concurso2014N35 from '../../assets/concursos/concurso2014/Mezclarte_2014_35.jpeg'
import Concurso2014N36 from '../../assets/concursos/concurso2014/Mezclarte_2014_36.jpeg'
import Concurso2014N37 from '../../assets/concursos/concurso2014/Mezclarte_2014_37.jpeg'
import Concurso2014N38 from '../../assets/concursos/concurso2014/Mezclarte_2014_38.jpeg'
import Concurso2014N39 from '../../assets/concursos/concurso2014/Mezclarte_2014_39.jpeg'
import Concurso2014N40 from '../../assets/concursos/concurso2014/Mezclarte_2014_40.jpeg'
import Concurso2014N41 from '../../assets/concursos/concurso2014/Mezclarte_2014_41.jpeg'
import Concurso2014N42 from '../../assets/concursos/concurso2014/Mezclarte_2014_42.jpeg'
import Concurso2014N43 from '../../assets/concursos/concurso2014/Mezclarte_2014_43.jpeg'
import Concurso2014N44 from '../../assets/concursos/concurso2014/Mezclarte_2014_44.jpeg'
import Concurso2014N45 from '../../assets/concursos/concurso2014/Mezclarte_2014_45.jpeg'
import Concurso2014N46 from '../../assets/concursos/concurso2014/Mezclarte_2014_46.jpeg'
import Concurso2014N47 from '../../assets/concursos/concurso2014/Mezclarte_2014_47.jpeg'
import Concurso2014N48 from '../../assets/concursos/concurso2014/Mezclarte_2014_48.jpeg'
import Concurso2014N49 from '../../assets/concursos/concurso2014/Mezclarte_2014_49.jpeg'
import Concurso2014N50 from '../../assets/concursos/concurso2014/Mezclarte_2014_50.jpeg'
import Concurso2014N51 from '../../assets/concursos/concurso2014/Mezclarte_2014_51.jpeg'

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
              <h2>Madonna</h2>
              <h3>Mezclarte 2014</h3>
            </div>
            <div className="Gallery__pictures">
              <div className="Gallery__item">
                <img src={Concurso2014N01} alt="Rolling Stones Mezclarte 2014 1" onClick={() => openLightboxOnSlide(1)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N02} alt="Rolling Stones Mezclarte 2014 2" onClick={() => openLightboxOnSlide(2)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N03} alt="Rolling Stones Mezclarte 2014 3" onClick={() => openLightboxOnSlide(3)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N04} alt="Rolling Stones Mezclarte 2014 4" onClick={() => openLightboxOnSlide(4)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N05} alt="Rolling Stones Mezclarte 2014 5" onClick={() => openLightboxOnSlide(5)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N06} alt="Rolling Stones Mezclarte 2014 6" onClick={() => openLightboxOnSlide(6)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N07} alt="Rolling Stones Mezclarte 2014 7" onClick={() => openLightboxOnSlide(7)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N08} alt="Rolling Stones Mezclarte 2014 8" onClick={() => openLightboxOnSlide(8)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N09} alt="Rolling Stones Mezclarte 2014 9" onClick={() => openLightboxOnSlide(9)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N10} alt="Rolling Stones Mezclarte 2014 10" onClick={() => openLightboxOnSlide(10)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N11} alt="Rolling Stones Mezclarte 2014 11" onClick={() => openLightboxOnSlide(11)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N12} alt="Rolling Stones Mezclarte 2014 12" onClick={() => openLightboxOnSlide(12)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N13} alt="Rolling Stones Mezclarte 2014 13" onClick={() => openLightboxOnSlide(13)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N14} alt="Rolling Stones Mezclarte 2014 14" onClick={() => openLightboxOnSlide(14)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N15} alt="Rolling Stones Mezclarte 2014 15" onClick={() => openLightboxOnSlide(15)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N16} alt="Rolling Stones Mezclarte 2014 16" onClick={() => openLightboxOnSlide(16)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N17} alt="Rolling Stones Mezclarte 2014 17" onClick={() => openLightboxOnSlide(17)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N18} alt="Rolling Stones Mezclarte 2014 18" onClick={() => openLightboxOnSlide(18)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N19} alt="Rolling Stones Mezclarte 2014 19" onClick={() => openLightboxOnSlide(19)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N20} alt="Rolling Stones Mezclarte 2014 20" onClick={() => openLightboxOnSlide(20)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N21} alt="Rolling Stones Mezclarte 2014 21" onClick={() => openLightboxOnSlide(21)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N22} alt="Rolling Stones Mezclarte 2014 22" onClick={() => openLightboxOnSlide(22)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N23} alt="Rolling Stones Mezclarte 2014 23" onClick={() => openLightboxOnSlide(23)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N24} alt="Rolling Stones Mezclarte 2014 24" onClick={() => openLightboxOnSlide(24)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N25} alt="Rolling Stones Mezclarte 2014 25" onClick={() => openLightboxOnSlide(25)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N26} alt="Rolling Stones Mezclarte 2014 26" onClick={() => openLightboxOnSlide(26)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N27} alt="Rolling Stones Mezclarte 2014 27" onClick={() => openLightboxOnSlide(27)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N28} alt="Rolling Stones Mezclarte 2014 28" onClick={() => openLightboxOnSlide(28)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N29} alt="Rolling Stones Mezclarte 2014 29" onClick={() => openLightboxOnSlide(29)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N30} alt="Rolling Stones Mezclarte 2014 30" onClick={() => openLightboxOnSlide(30)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N31} alt="Rolling Stones Mezclarte 2014 31" onClick={() => openLightboxOnSlide(31)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N32} alt="Rolling Stones Mezclarte 2014 32" onClick={() => openLightboxOnSlide(32)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N33} alt="Rolling Stones Mezclarte 2014 33" onClick={() => openLightboxOnSlide(33)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N34} alt="Rolling Stones Mezclarte 2014 34" onClick={() => openLightboxOnSlide(34)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N35} alt="Rolling Stones Mezclarte 2014 35" onClick={() => openLightboxOnSlide(35)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N36} alt="Rolling Stones Mezclarte 2014 36" onClick={() => openLightboxOnSlide(36)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N37} alt="Rolling Stones Mezclarte 2014 37" onClick={() => openLightboxOnSlide(37)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N38} alt="Rolling Stones Mezclarte 2014 38" onClick={() => openLightboxOnSlide(38)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N39} alt="Rolling Stones Mezclarte 2014 39" onClick={() => openLightboxOnSlide(39)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N40} alt="Rolling Stones Mezclarte 2014 40" onClick={() => openLightboxOnSlide(40)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N41} alt="Rolling Stones Mezclarte 2014 41" onClick={() => openLightboxOnSlide(41)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N42} alt="Rolling Stones Mezclarte 2014 42" onClick={() => openLightboxOnSlide(42)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N43} alt="Rolling Stones Mezclarte 2014 43" onClick={() => openLightboxOnSlide(43)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N44} alt="Rolling Stones Mezclarte 2014 44" onClick={() => openLightboxOnSlide(44)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N45} alt="Rolling Stones Mezclarte 2014 45" onClick={() => openLightboxOnSlide(45)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N46} alt="Rolling Stones Mezclarte 2014 46" onClick={() => openLightboxOnSlide(46)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N47} alt="Rolling Stones Mezclarte 2014 47" onClick={() => openLightboxOnSlide(47)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N48} alt="Rolling Stones Mezclarte 2014 48" onClick={() => openLightboxOnSlide(48)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N49} alt="Rolling Stones Mezclarte 2014 49" onClick={() => openLightboxOnSlide(49)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N50} alt="Rolling Stones Mezclarte 2014 50" onClick={() => openLightboxOnSlide(50)} />
              </div>
              <div className="Gallery__item">
                <img src={Concurso2014N51} alt="Rolling Stones Mezclarte 2014 51" onClick={() => openLightboxOnSlide(51)} />
              </div>
            </div>
          </main>

        <Aside />
      </div>
    </div>

    <FsLightbox
        toggler={lightboxController.toggler}
        sources={[
          Concurso2014N01,
          Concurso2014N02,
          Concurso2014N03,
          Concurso2014N04,
          Concurso2014N05,
          Concurso2014N06,
          Concurso2014N07,
          Concurso2014N08,
          Concurso2014N09,
          Concurso2014N10,
          Concurso2014N11,
          Concurso2014N12,
          Concurso2014N13,
          Concurso2014N14,
          Concurso2014N15,
          Concurso2014N16,
          Concurso2014N17,
          Concurso2014N18,
          Concurso2014N19,
          Concurso2014N20,
          Concurso2014N21,
          Concurso2014N22,
          Concurso2014N23,
          Concurso2014N24,
          Concurso2014N25,
          Concurso2014N26,
          Concurso2014N27,
          Concurso2014N28,
          Concurso2014N29,
          Concurso2014N30,
          Concurso2014N31,
          Concurso2014N32,
          Concurso2014N33,
          Concurso2014N34,
          Concurso2014N35,
          Concurso2014N36,
          Concurso2014N37,
          Concurso2014N38,
          Concurso2014N39,
          Concurso2014N40,
          Concurso2014N41,
          Concurso2014N42,
          Concurso2014N43,
          Concurso2014N44,
          Concurso2014N45,
          Concurso2014N46,
          Concurso2014N47,
          Concurso2014N48,
          Concurso2014N49,
          Concurso2014N50,
          Concurso2014N51
        ]}
        slide={lightboxController.slide}
      />
    </>
  )
}

export default LosRollingStones