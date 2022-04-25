import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import Aside from '../../components/Aside'
import '../../styles/Gallery.css'
import Diseniador01 from '../../assets/colectivos/colectivo2020/Diseniador_1_Ezequiel.jpeg'
import Diseniador02 from '../../assets/colectivos/colectivo2020/Diseniador_2_Andrea_Olvera.jpeg'
import Diseniador03 from '../../assets/colectivos/colectivo2020/Diseniador_3_Aresia_Botello.jpeg'
import Diseniador04 from '../../assets/colectivos/colectivo2020/Diseniador_4_Nelly_Reza.jpeg'
import Diseniador05 from '../../assets/colectivos/colectivo2020/Diseniador_5_Miranda_Flores.jpeg'
import Colectivo2020N01 from '../../assets/colectivos/colectivo2020/Colectivo_2020_01.jpeg'
import Colectivo2020N02 from '../../assets/colectivos/colectivo2020/Colectivo_2020_02.jpeg'
import Colectivo2020N03 from '../../assets/colectivos/colectivo2020/Colectivo_2020_03.jpeg'
import Colectivo2020N04 from '../../assets/colectivos/colectivo2020/Colectivo_2020_04.jpeg'
import Colectivo2020N05 from '../../assets/colectivos/colectivo2020/Colectivo_2020_05.jpeg'
import Colectivo2020N06 from '../../assets/colectivos/colectivo2020/Colectivo_2020_06.jpeg'
import Colectivo2020N07 from '../../assets/colectivos/colectivo2020/Colectivo_2020_07.jpeg'
import Colectivo2020N08 from '../../assets/colectivos/colectivo2020/Colectivo_2020_08.jpeg'
import Colectivo2020N09 from '../../assets/colectivos/colectivo2020/Colectivo_2020_09.jpeg'
import Colectivo2020N10 from '../../assets/colectivos/colectivo2020/Colectivo_2020_10.jpeg'
import Colectivo2020N11 from '../../assets/colectivos/colectivo2020/Colectivo_2020_11.jpeg'
import Colectivo2020N12 from '../../assets/colectivos/colectivo2020/Colectivo_2020_12.jpeg'

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
              <h2>Errante Ecológico</h2>
              <h3>Colectivo Mezclarte 2020</h3>
            </div>
            <div className="Gallery__pictures">
              <div className="Gallery__item">
                <img src={Diseniador01} alt="Ezequiel" onClick={() => openLightboxOnSlide(1)} />
              </div>
              <div className="Gallery__item">
                <img src={Diseniador02} alt="Andrea Olvera" onClick={() => openLightboxOnSlide(2)} />
              </div>
              <div className="Gallery__item">
                <img src={Diseniador03} alt="Aresia Botello" onClick={() => openLightboxOnSlide(3)} />
              </div>
              <div className="Gallery__item">
                <img src={Diseniador04} alt="Nelly Reza" onClick={() => openLightboxOnSlide(4)} />
              </div>
              <div className="Gallery__item">
                <img src={Diseniador05} alt="Miranda Flores" onClick={() => openLightboxOnSlide(5)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2020N01} alt="Colectivo Mezclarte 2020 1" onClick={() => openLightboxOnSlide(6)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2020N02} alt="Colectivo Mezclarte 2020 2" onClick={() => openLightboxOnSlide(7)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2020N03} alt="Colectivo Mezclarte 2020 3" onClick={() => openLightboxOnSlide(8)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2020N04} alt="Colectivo Mezclarte 2020 4" onClick={() => openLightboxOnSlide(9)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2020N05} alt="Colectivo Mezclarte 2020 5" onClick={() => openLightboxOnSlide(10)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2020N06} alt="Colectivo Mezclarte 2020 6" onClick={() => openLightboxOnSlide(11)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2020N07} alt="Colectivo Mezclarte 2020 7" onClick={() => openLightboxOnSlide(12)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2020N08} alt="Colectivo Mezclarte 2020 8" onClick={() => openLightboxOnSlide(13)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2020N09} alt="Colectivo Mezclarte 2020 9" onClick={() => openLightboxOnSlide(14)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2020N10} alt="Colectivo Mezclarte 2020 10" onClick={() => openLightboxOnSlide(15)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2020N11} alt="Colectivo Mezclarte 2020 11" onClick={() => openLightboxOnSlide(16)} />
              </div>
              <div className="Gallery__item">
                <img src={Colectivo2020N12} alt="Colectivo Mezclarte 2020 12" onClick={() => openLightboxOnSlide(17)} />
              </div>
            </div>
          </main>

        <Aside />
      </div>
    </div>

    <FsLightbox
        toggler={lightboxController.toggler}
        sources={[
          Diseniador01,
          Diseniador02,
          Diseniador03,
          Diseniador04,
          Diseniador05,
          Colectivo2020N01,
          Colectivo2020N02,
          Colectivo2020N03,
          Colectivo2020N04,
          Colectivo2020N05,
          Colectivo2020N06,
          Colectivo2020N07,
          Colectivo2020N08,
          Colectivo2020N09,
          Colectivo2020N10,
          Colectivo2020N11,
          Colectivo2020N12
        ]}
        slide={lightboxController.slide}
      />
    </>
  )
}

export default LosRollingStones