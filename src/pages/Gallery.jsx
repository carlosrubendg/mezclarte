import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import Concurso2017N35 from '../assets/concursos/concurso2017/Mezclarte_2017_35.jpeg'
import Concurso2017N36 from '../assets/concursos/concurso2017/Mezclarte_2017_36.jpeg'

const Gallery = () => {
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
      <img src={Concurso2017N35} alt="" onClick={() => openLightboxOnSlide(1)} />
      <img src={Concurso2017N36} alt="" onClick={() => openLightboxOnSlide(2)} />
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={[
          Concurso2017N35,
          Concurso2017N36
        ]}
        slide={lightboxController.slide}
      />
    </>
  )
}

export default Gallery